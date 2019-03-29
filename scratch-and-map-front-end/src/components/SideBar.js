import React, { Component } from "react";
import {
  Sidebar,
  Button,
  Segment,
  Menu,
  Header,
  Icon,
  Image
} from "semantic-ui-react";

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }

  handleHide = () => this.setState({ visible: false });
  handleShow = () => this.setState({ visible: true });
  handleHideSidebar = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
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
            animation="overlay"
            icon="labeled"
            inverted
            onHide={this.handleHideSidebar}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a" />
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default SideBar;
