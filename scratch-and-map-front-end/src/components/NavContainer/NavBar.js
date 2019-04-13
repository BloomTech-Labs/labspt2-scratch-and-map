import React from "react";
<<<<<<< HEAD
import { Route, Link } from "react-router-dom";
import { Menu, Sidebar, Button, Segment, Icon } from "semantic-ui-react";
import logo from "../../img/logowhite.png";
import Auth from "../AuthContainer/Auth";
import SidebarDrop from "./SidebarDrop";
import Landing from "../Landing";
import MapContainer from "../MapContainer/MapContainer";

const NavBar = ({ onToggle, visible, onPusherClick, refreshMap }) => (
=======
import { Route, Link, withRouter } from "react-router-dom";
import { Menu, Sidebar, Button, Segment, Icon } from "semantic-ui-react";
import logo from "../../img/logowhite.png";
import Auth from "../AuthContainer/Auth";
import FriendListView from "../NavContainer/FriendListView";
import Landing from "../Landing";
import MapContainer from "../MapContainer/MapContainer";

const NavBar = ({ onToggle, visible, onPusherClick, onClick }) => (
>>>>>>> 15f0217422981dda0f9d79eee2a95ca2e56d3f19
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
        <Button onClick={onToggle} icon="close" inverted />
      </Button.Group>
<<<<<<< HEAD
      <Menu.Item as="a" as={Link} to="/" onClick={() => refreshMap()}>
=======
      <Menu.Item as="a" as={Link} to="/">
>>>>>>> 15f0217422981dda0f9d79eee2a95ca2e56d3f19
        <img src={logo} />
      </Menu.Item>
      <Menu.Item as="a" as={Link} to="/map">
        {/* onClick={onClick} */}
        <Icon name="map" inverted />
        My Map
      </Menu.Item>
      <Menu.Item as="a">
        {/* onClick={onClick} */}
        <Icon name="users" inverted /> View Friend Maps
      </Menu.Item>

<<<<<<< HEAD
      <Menu.Item as="a" as={Link} to="/map">
        <Icon name="map" inverted />
      </Menu.Item>

      <SidebarDrop />
=======
      <FriendListView visible={visible} />
>>>>>>> 15f0217422981dda0f9d79eee2a95ca2e56d3f19
    </Sidebar>
    <div className="Menu">
      <div className="MenuButton">
        <Button className="navbutton" inverted onClick={onToggle}>
          Menu
        </Button>
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
<<<<<<< HEAD
=======
        <Route path="/friends" exact render={props => <FriendListView />} />
>>>>>>> 15f0217422981dda0f9d79eee2a95ca2e56d3f19
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

<<<<<<< HEAD
export default NavBar;
=======
export default withRouter(NavBar);
>>>>>>> 15f0217422981dda0f9d79eee2a95ca2e56d3f19
