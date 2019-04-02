import React from "react";
import { Link } from "react-router-dom";

import { Menu } from "semantic-ui-react";

const NavBar = () => (
  <Menu>
    <Menu.Menu> 
      <Menu.Item as={Link} to='/sidebar'>Menu</Menu.Item>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item>Sign Up</Menu.Item>
      <Menu.Item>Log In</Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default NavBar;
