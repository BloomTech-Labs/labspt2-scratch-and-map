import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class SideBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return <div />;
  }
}

export default SideBar;
