import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();
    this.state = {};
  }

  //   handleInputChange = e => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  render() {
    return (
      <div className="login-register-wrapper">
        <div className="header">Register</div>
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="input-wrapper">
              <label className="login-label">Username</label>
              <input
                className="login-input"
                name="username"
                value={this.props.username}
                placeholder=""
                onChange={this.handleInputChange}
                type="text"
              />
            </div>

            <div className="input-wrapper">
              <label className="login-label">Email</label>
              <input
                className="login-input"
                name="email"
                value={this.props.email}
                placeholder=""
                onChange={this.handleInputChange}
                type="email"
              />
            </div>

            <div>
              <label className="login-label">Password</label>
              <input
                className="login-input"
                name="password"
                value={this.props.password}
                placeholder=""
                onChange={this.handleInputChange}
                type="password"
              />
            </div>
            <div>
              <button
                className="login-btn"
                type="submit"
                onClick={this.submitRegister}
              >
                Start scratching now
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
