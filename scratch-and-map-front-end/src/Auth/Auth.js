import React, { Component } from "react";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import axios from "axios";

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

  clearState = () => {
    this.setState({ username: "", password: "", email: "" });
  };

  showLogin = e => {
    this.clearState();
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  };

  showRegister = e => {
    this.clearState();
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    const action = this.state.isLoginOpen ? "login" : "signup";
    axios
      .post(`http://localhost:5000/${action}`, {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
      .then(response => console.log(response));
  };

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
              "login-controller" +
              (this.state.isLoginOpen ? "selected-controller" : "")
            }
            onClick={this.showLogin}
          >
            Log In
          </div>
        </div>
        <div className="box-wrapper">
          {this.state.isRegisterOpen && (
            <Register
              inputChange={this.handleInputChange}
              submit={this.onSubmitHandler}
            />
          )}
          {this.state.isLoginOpen && (
            <Login
              inputChange={this.handleInputChange}
              submit={this.onSubmitHandler}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Auth;
