import React, { Component } from "react";
import returnCode from "../helper"
import { Button, Header, Image, Modal, Form, TextArea } from 'semantic-ui-react';
import CardSlider from "./CardSlider";

class Card extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      imageUrl: ''
    };
  }
  
  componentDidMount() {
    let code = this.props.country_code
    fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
    .then(response => 
      response.json().then(data => ({
          data: data,
          status: response.status
      })
  ).then(res => {
    let cardCode = ''
      cardCode = res.data.flag
      this.setState( {imageUrl:cardCode });
  }));
  
  }
 
  render()
 {  
 

  const friends = [
    {id:9,
      first_name: "Abi",
      last_name: "French"
    },
    {id:1,
      first_name: "Javier",
      last_name: "English"
    },
    {id:2,
      first_name: "Ryan",
      last_name: "Adams"
    },
    {id:3,
      first_name: "Bull",
      last_name: "Moll"
    },
    {id:4,
      first_name: "Courtney",
      last_name: "B Vance"
    }
  ];

  const cardStyle = {  
    zIndex: 11,
    border: '1px solid steelblue',
  }

    let friendList =  friends.map(friend  => <div key={friend.id}> <p>{friend.first_name} {friend.last_name}</p></div>)
    return ( 
      <div style={cardStyle}>
      <Modal trigger={<Button>Show Modal</Button>} open={this.props.open}>
      <Modal.Content image>
      <Header>Haiti</Header>
        <img style={{"height" : "10%", "width" : "10%"}} src={this.state.imageUrl} />
        <CardSlider />
        <Modal.Description>
          <p>Notes:</p> 
          {<Form>
            <TextArea placeholder='Travel Notes' />
          </Form>}
          <strong>FRIENDS</strong>
          <div> {friendList}</div>
          <Button onClick={() => this.props.onClose()} >Close</Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    </div>
    );
  }
}

export default Card;

