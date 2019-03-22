import React, { Component } from "react";
// import { Button } from "semantic-ui-react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
require('dotenv').config()
// import axios from "axios";
// const db = axios.get("https://postgres://vnzildumwqrpid:6fdde8b213b1ab8726e894a6d2d227c624689e14b83dfaa9ce66d672df0e579b@ec2-54-221-243-211.compute-1.amazonaws.com:5432/d467ho756fb8j")

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
        this.setState({
          data: res.data
        })
      })
   
  }



  render() {
    return (
      <div className="login-register-wrapper">
        <FacebookLogin
          appId={process.env.REACT_APP_FB_APP_ID}
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.handleInputChange}
          callback={response => {
            if(response){}
          }}
        />
      </div>
    );
  }
}

export default FbLogin;
