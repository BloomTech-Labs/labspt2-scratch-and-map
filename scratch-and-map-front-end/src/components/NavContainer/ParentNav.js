import React, { Component } from "react";
import NavBar from "./NavBar";

class ParentNav extends Component {
  state = {
    visible: false,
    show: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });
  handleShow = () => this.setState({ show: !this.state.show });



  render() {
    const { visible } = this.state;
    const { show } = this.state;

    return (
        <NavBar
          onPusherClick={this.handlePusher}
          onToggle={this.handleToggle}
          visible={visible}
          show={show}
          handleShow={this.handleShow}
        />
    );
  }
}

export default ParentNav;
