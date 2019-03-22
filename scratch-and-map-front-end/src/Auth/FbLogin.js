import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
require('dotenv').config()

class FbLogin extends Component {
  constructor() {
    super();
    this.state = {
      axiospath: "",
    };
  }

  handleInputChange = e => {
     this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    console.log(process.env)
    console.log("window.fbAsyncInit called")

    window.fbAsyncInit = function() {
      window.FB.init({
        appId: process.env.REACT_APP_FB_APP_ID,
        cookie: true, // enable cookies to allow the server to access
        // the session
        xfbml: true, // parse social plugins on this page
        version: "v2.5" // use version 2.1
      });
    window.FB.getLoginStatus(response => {
        console.log(response);
        if (response.status === "connected") {
          // axios login call
          console.log("init", response)
        }
      });
    };

    axios.get("http://localhost:5000/api/users")
      .then(res => {
        console.log("axios get", res)
        this.setState({
          data: res.data
        }
      })
     
   
  }


  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name} </h2>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId={process.env.REACT_APP_FB_APP_ID}
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.handleInputChange}
          callback={response => {
            if(response){}
          }}

        />
      );
    }
    return <div>{fbContent}</div>;
  }
}

export default FbLogin;
