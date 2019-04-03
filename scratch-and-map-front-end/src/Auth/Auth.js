import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import FbLogin from "./FbLogin";
import axios from "axios";
import { Button, Modal } from 'semantic-ui-react'
import Sidebar from '../components/SideBar'

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      username: "",
      password: "",
      email: "",
      isHidden: true,
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

  handleShow = () => this.setState({ isHidden: !this.state.isHidden })


  render() {
    return (
      <div className="Nav">
        <div className="logo">
        <Button inverted>Menu</Button>
        </div>
        <div className="buttons">
          <Modal size='mini' trigger={<Button inverted>Sign Up</Button>}>
            <Modal.Content>
              <div className="box-wrapper">
              {this.state.isLoginOpen && (
              <FbLogin
              inputChange={this.handleInputChange}
              submit={this.onSubmitHandler}
              />
              )}
              </div>
            </Modal.Content>
          </Modal>

          <Modal size='mini' trigger={<Button inverted>Log In</Button>}>
            <Modal.Content image>
              <div className="box-wrapper">
              {this.state.isLoginOpen && (
              <FbLogin
              inputChange={this.handleInputChange}
              submit={this.onSubmitHandler}
              />
              )}
              </div>
            </Modal.Content>
          </Modal>
      </div>
    </div>
    );
  }
}

export default Auth;
