import React, { Component } from "react";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      username: "",
      password: "",
      email: ""
    };
  }

  showLogin = e => {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegister = e =>{
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-controller">
          <div
            className={
              "controller" +
              (this.state.isRegisterOpen ? "selected-controller" : "")
            }
            onClick={this.showRegister}
          >
            Sign Up
          </div>
          <div
            className={
              "controller" +
              (this.state.isLoginOpen ? "selected-controller" : "")
            }
            onClick={this.showLogin}
          >
            Log In
          </div>
        </div>
        <div className="box-wrapper">
          {this.state.isRegisterOpen && <Register />}
          {this.state.isLoginOpen && <Login />}
        </div>
      </div>
    );
  }
}

export default Auth;
