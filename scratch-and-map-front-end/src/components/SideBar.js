import React, { Component } from "react";
import axios from "axios";
import { Sidebar, Menu, Icon, Dropdown, Button } from "semantic-ui-react";
import Landing from './Landing'
import MapContainer from "./MapContainer/MapContainer";
import ForgotPassword from "../Auth/ForgotPassword";
import Card from "./MapContainer/Card";
import { Route } from "react-router-dom";
import "../index.scss"


class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //friends: [],
      options: [],
      visible: false,
    };
  }

  async componentDidMount() {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/users`
    );
    console.log(data);
    this.setState({ options: data });
    
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleHide = () => this.setState({ visible: false });
  handleShow = () => this.setState({ visible: true });
  handleHideSidebar = () => this.setState({ visible: false });

  render() {
    const { visible, options } = this.state;
    return (
      <div>
         <div>
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShow}>
            >
          </Button>
          {/* <Button disabled={!visible} onClick={this.handleHide}>
            Bye
          </Button> */}
        </Button.Group>
        </div>

           <Sidebar.Pushable className="sidebar">
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={this.handleHideSidebar}
              vertical
              visible={visible}
              width="wide"
              >
              <Menu.Item as="a">
              <Icon name="home" />
              Home
              </Menu.Item>

              <Dropdown
              onChange={this.handleInputChange}
              placeholder="Select Friend"
              clearable
              fluid
              multiple
              search
              selection
              options={this.state.options.map((item, index) => <option key={index} value={item.id}>{item.username}</option>)}
              />
              <Menu.Item as="a" />
              </Sidebar>

              <Sidebar.Pusher dimmed={visible} className="segment">
              <div>
                <Route path="/" exact render={props => <Landing handleShow={this.handleShow}/>} />
                <Route path="/forgotpassword" exact render={props => <ForgotPassword />} />
                <Route path="/map" exact render={props => <MapContainer />}/>
                <Route path="/card" exact render={props => <Card />} />
              </div>
              </Sidebar.Pusher>
          </Sidebar.Pushable>
       </div>
    )
  }
}

export default SideBar;
