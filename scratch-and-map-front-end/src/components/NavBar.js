import React from "react";
import Auth from "../Auth/Auth";

import { Menu, Sidebar, Button, Icon, Dropdown } from "semantic-ui-react";
import SidebarDrop from "./SidebarDrop";
import SelectLanguage from "./SelectLanguage";

const NavBar = ({ onToggle, visible, onPusherClick }) => (
  // {onPusherClick, onToggle, visible }
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible={visible}
      width="wide"
    >
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <SidebarDrop />
    </Sidebar>

    <Menu>
      <Menu.Menu>
        {/* We can do a burger, menu button or both! */}
        <Button onClick={onToggle}>Menu</Button>
      </Menu.Menu>

      <Menu.Menu position="right">
        <Auth />
      </Menu.Menu>
      <SelectLanguage />
    </Menu>
    <Sidebar.Pusher
      // dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    />
  </Sidebar.Pushable>
);

export default NavBar;
