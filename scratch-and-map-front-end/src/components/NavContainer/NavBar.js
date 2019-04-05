import React from "react";
import Auth from "../AuthContainer/Auth";
import { Route } from "react-router-dom";
import { Menu, Sidebar, Button, Segment } from "semantic-ui-react";
import SidebarDrop from "./SidebarDrop";
import logo from '../../img/logowhite.png'
import Landing from '../Landing'
import MapContainer from '../MapContainer/MapContainer'
import Legend from '../MapContainer/Legend'

const NavBar = ({ onToggle, visible, onPusherClick }) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      className="sidebar"
      inverted
      vertical
      visible={visible}
      width="wide"
    >
    <Button.Group className="closebutton">
    <Button onClick={onToggle} icon="close" inverted/>
    </Button.Group>
      <Menu.Item as="a">
        <img src={logo} />
      </Menu.Item>
      <SidebarDrop />
    </Sidebar>
    <div className="Menu">
      <div className="MenuButton">
        <Button className="navbutton" inverted onClick={onToggle}>Menu</Button>
      </div>

      <div className="AuthButtons">
        <Auth />
      </div>
      </div>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
    <Segment basic>
      <Route path="/" exact render={props => <Landing />} />
      <Route path="/map" exact render={props => <MapContainer />} />
      <Route path="/legend" exact render={props => <Legend />} />
    </Segment>
            </Sidebar.Pusher>
    </Sidebar.Pushable>

  
);

export default NavBar;
