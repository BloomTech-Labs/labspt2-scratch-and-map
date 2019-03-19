import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import FacebookLogin from "react-facebook-login";

class FbLogin extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };



  render() {
    return (
      
      <div className="login-register-wrapper">
        <FacebookLogin
          appId="323743065161483"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.handleInputChange}
          callback={response => {
            localStorage.setItem("accessToken", response.accessToken);
          }}
        />
      </div>
    );
  }
}

export default FbLogin;
