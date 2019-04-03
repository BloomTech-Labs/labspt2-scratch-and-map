import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
require("dotenv").config();

class FbLogin extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: ""
    };
  }

  responseFacebook = response => {
    console.log(response);
    this.setState(
      {
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      },
      () => {
        const name = response.name.split(" ");
        const first = name[0];
        const last = name[1];
        const user = {
          username: response.userID,
          password: response.email,
          first_name: first,
          last_name: last,
          age: 24,
          nationality: "Russian",
          role: "user",
          auto_scratch: "true",
          home_country: "RUS",
          fb_user_id: response.userID,
          fb_access_token: response.accessToken
        };
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/api/signup`, user)
          .then(res => {
            return console.log(res);
          });
      }
    );
  };
  componentClicked = () => console.log("clicked");

  componentDidUpdate() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: process.env.REACT_APP_FB_APP_ID,
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true, // parse social plugins on this page
        version: "v2.5" // use version 2.1
      });

      window.FB.getLoginStatus(response => {
        console.log(response);
        if (response.status === "connected") {
          // axios login call
          console.log("init", response);
        }
      }); //end getLoginStatus
    }; //end fbAsyncInit
  } //end component did update

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "100%",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
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
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}

export default FbLogin;
