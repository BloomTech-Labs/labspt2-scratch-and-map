import React, { Component } from "react";
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
