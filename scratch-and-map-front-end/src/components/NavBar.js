import React from "react";
import { Menu } from "semantic-ui-react";

const NavBar = () => (
  <Menu>
    <Menu.Menu>
      <Menu>Scratch & Map</Menu>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item>Sign Up</Menu.Item>
      <Menu.Item>Log In</Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default NavBar;
