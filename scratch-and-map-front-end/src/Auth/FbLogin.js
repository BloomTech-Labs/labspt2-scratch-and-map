import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import FacebookLogin from "react-facebook-login";

class FbLogin extends Component {
  constructor() {
    super();
    this.state = {
      axiospath: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
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
        if (response.status == "connected") {
          // axios login call
        }
      });
    };

    console.log("Loading fb api");
    // Load the SDK asynchronously
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
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
            // axios check if user exists >> setstate axiospath
            // if user exists, axios >> login
            // else axios signup
          }}
        />
      </div>
    );
  }
}

export default FbLogin;
