import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserData } from "../../actions/mapActions";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { refreshMap } from "../../actions/mapActions";

class ParentNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    console.log("MAP ICON USERDATA", this.props);
    this.props.getUserData(1);
  }

  // goTo = () => {
  //   this.history.push("/map");
  // };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;

    return (
      <NavBar
<<<<<<< HEAD
        onPusherClick={this.handlePusher}
        onToggle={this.handleToggle}
        visible={visible}
        refreshMap={this.props.refreshMap}
=======
        onClick={this.props.userCountryData}
        // onClick={this.goTo}
        onPusherClick={this.handlePusher}
        onToggle={this.handleToggle}
        visible={visible}
>>>>>>> 15f0217422981dda0f9d79eee2a95ca2e56d3f19
      />
    );
  }
}

<<<<<<< HEAD
export default withRouter(
  connect(
    () => {},
    { refreshMap }
=======
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
>>>>>>> 15f0217422981dda0f9d79eee2a95ca2e56d3f19
  )(ParentNav)
);
