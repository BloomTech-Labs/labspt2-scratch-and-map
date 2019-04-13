import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserData } from "../../actions/mapActions";
import NavBar from "./NavBar";
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
        onPusherClick={this.handlePusher}
        onToggle={this.handleToggle}
        visible={visible}
        refreshMap={this.props.refreshMap}
        onClick={this.props.userCountryData}
      />
    );
  }
}

export default withRouter(
  connect(
    () => {},
    { refreshMap }
  )(ParentNav)
);
