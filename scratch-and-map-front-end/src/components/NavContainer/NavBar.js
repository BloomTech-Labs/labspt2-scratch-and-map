import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Sidebar, Button, Segment, Icon } from "semantic-ui-react";
import logo from '../../img/logowhite.png'
import Auth from "../AuthContainer/Auth";
import SidebarDrop from "./SidebarDrop";
import Landing from '../Landing'
import MapContainer from '../MapContainer/MapContainer'
import { getUserData } from "../../actions/mapActions";



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
      <Menu.Item as="a" as={Link} to='/'>
        <img src={logo} />
      </Menu.Item>

<<<<<<< HEAD
      <Menu.Item as="a">
        <Icon name='map' inverted />
=======
      <Menu.Item as="a" as={Link} to='/map'>
        <Icon name='inverted map' />
>>>>>>> d175e9b73f6482aeb45dd4fa805445ed8b58bc92
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
    </Segment>
            </Sidebar.Pusher>
    </Sidebar.Pushable>

  
);

// export default NavBar;
const mapStateToProps = state => {
  return {
    userData: state.getUserDataReducer.userData,
    userCountryData: state.getUserDataReducer.userCountryData,
    loading: state.getUserDataReducer.loading
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { getUserData }
  )(NavBar)
);
