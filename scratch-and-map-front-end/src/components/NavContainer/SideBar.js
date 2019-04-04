import React, { Component } from "react";
import axios from "axios";
import {
  Sidebar,
  Button,
  Segment,
  Menu,
  Icon,
  Image,
  Dropdown
} from "semantic-ui-react";
import ParentNav from "./ParentNav";
import {logo} from '../../img/logo.png'

class SideBar extends Component {
  constructor(onToggle) {
    super();
    this.state = {
      //friends: [],
      options: [],
      visible: false
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
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShow}>
            Hi
          </Button>
          <Button disabled={!visible} onClick={this.handleHide}>
            Bye
          </Button>
        </Button.Group>

        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            className = "sidebar"
            inverted
            onHide={this.handleHideSidebar}
            vertical
            visible={visible}
            width="wide"
          >
            <Menu.Item as="a">
              <h1>I Don't Think This Is Being Used</h1>
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
          {/* <ParentNav /> */}

          <Sidebar.Pusher dimmed={visible}>
          {/* This is where the landing page component would go */}
            <Segment basic>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
              {/* placeholder img */}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default SideBar;
