import React from "react";
import Auth from "../AuthContainer/Auth";
import { Menu, Sidebar, Button, Icon } from "semantic-ui-react";
import SidebarDrop from "./SidebarDrop";
import SelectLanguage from "./SelectLanguage";
import logo from '../../img/logowhite.png'

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
        {/* We can do a burger, menu button or both! */}
        <Button inverted onClick={onToggle}>Menu</Button>
      </div>

      <div className="AuthButtons">
        <Auth />
        <SelectLanguage />
      </div>
      </div>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    />
  </Sidebar.Pushable>
);

export default NavBar;
