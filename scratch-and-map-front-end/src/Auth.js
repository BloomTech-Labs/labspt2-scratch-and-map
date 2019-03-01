import React, { Component } from "react";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div>Username</div>
          <input
            name="username"
            value={this.state.username}
            placeholder=""
            onChange={this.handleInputChange}
            type="text"
          />
        </div>

        <div>
          <div>Email</div>
          <input
            name="email"
            value={this.state.email}
            placeholder=""
            onChange={this.handleInputChange}
            type="email"
          />
        </div>

        <div>
          <div>Password</div>
          <input
            name="password"
            value={this.state.password}
            placeholder=""
            onChange={this.handleInputChange}
            type="password"
          />
        </div>
        <div>
          <button type="submit">Start scratching now!</button>
        </div>
      </form>
    );
  }
}

export default Auth;
