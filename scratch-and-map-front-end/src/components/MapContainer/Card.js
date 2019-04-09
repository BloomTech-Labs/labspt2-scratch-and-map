import React, { Component } from "react";
import { returnCode, returnId } from "../helper";
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  TextArea
} from "semantic-ui-react";
import CardSlider from "./CardSlider";
import { codeToCountry, restCountryConversion } from "../helper";
import "../../styles/card.scss";
import axios from "axios";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: "",
      countryName: "",
      status: 1,
      notes: ""
    };
  }

  componentDidMount() {
    let code = this.props.country_code;
    fetch(`https://restcountries.eu/rest/v2/alpha/${code}`).then(response =>
      response
        .json()
        .then(data => ({
          data: data,
          status: response.status
        }))
        .then(res => {
          let cardCode = "";
          cardCode = res.data.flag;
          let countrySelect = codeToCountry(code);
          this.setState({ imageUrl: cardCode, countryName: countrySelect });
        })
    );
  }

  onSave() {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/${localStorage.getItem(
          "SAMUserID"
        )}`
      )
      .then(res => {
        const countryData = {
          user_id: res.id,
          country_id: returnId(this.props.country_code),
          status: this.state.status,
          notes: "None"
        };
        let country = res.data.filter(item => {
          return (
            item.user_countries.country_id === returnId(this.props.country_code)
          );
        });
        if (country === []) {
          axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/api/mapview`,
            countryData
          );
        } else {
          axios.put(
            `${process.env.REACT_APP_BACKEND_URL}/api/mapview`,
            countryData
          );
        }
      });
  }

  onChange = status => {
    this.setState(
      state => ({
        status: status
      }),
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    const friends = [
      { id: 9, first_name: "Abi", last_name: "French" },
      { id: 1, first_name: "Javier", last_name: "English" },
      { id: 2, first_name: "Ryan", last_name: "Adams" },
      { id: 3, first_name: "Bull", last_name: "Moll" },
      { id: 4, first_name: "Courtney", last_name: "B Vance" }
    ];

    const cardStyle = {
      zIndex: 11,
      border: "1px solid steelblue"
    };

    let friendList = friends.map(friend => (
      <div key={friend.id}>
        {" "}
        <p>
          {friend.first_name} {friend.last_name}
        </p>
      </div>
    ));
    return (
      <div style={cardStyle}>
        <Modal trigger={<Button>Show Modal</Button>} open={this.props.open}>
          <Modal.Content image>
            <Header>{this.state.countryName}</Header>
            <img
              style={{ height: "10%", width: "10%" }}
              src={this.state.imageUrl}
            />
            <CardSlider status={this.state.status} onChange={this.onChange} />
            <Modal.Description>
              <p>Notes:</p>
              {
                <Form>
                  <TextArea placeholder="Travel Notes" />
                </Form>
              }
              <strong>FRIENDS</strong>
              <div> {friendList}</div>
              <Button onClick={() => this.onSave()}>Save</Button>
              <Button onClick={() => this.props.onClose()}>Close</Button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default Card;
