import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserData } from "../../actions/mapActions";
require("dotenv").config();

class FbLogin extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      filteredFriends: "",
      query: ""
      // clickedFriend: ""
    };
  }

  responseFacebook = response => {
    this.setState(
      {
        username: response.email,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      },

      () => {
        const name = response.name.split(" ");
        const first = name[0];
        const last = name[1];
        const user = {
          username: response.email,
          password: response.accessToken,
          email: response.email,
          first_name: first,
          last_name: last,
          age: 24,
          nationality: "Russian",
          role: "user",
          auto_scratch: "true",
          home_country: "RUS",
          fb_user_id: response.userID,
          fb_access_token: response.accessToken,
          picture_url: "http://placekitten.com/200/200",
          premium: "false"
        };

        //Checks DB If FB User Exist
        axios
          .get(
            `${process.env.REACT_APP_BACKEND_URL}/api/users/fb/${
              response.userID
            }`
          )
          .then(
            res => {
              if (!res.data.fb_user_id) {
                //signup second phase component here
                const url = `${process.env.REACT_APP_BACKEND_URL}/api/signup`;
                const proxyurl = "https://cors-anywhere.herokuapp.com/";
                axios
                  .post(url, user)

                  .then(res => {
                    window.localStorage.setItem(
                      "FbAccessToken",
                      response.accessToken
                    );
                    window.localStorage.setItem("SAMUserID", response.userID);
                    // this.props.getUserData(
                    //   window.localStorage.getItem("SAMUserID") ***Will add back in later - BM
                    // );
                  }); //need a message when user already exist.
              } else {
                let new_user = res.data;
                new_user.fb_access_token = response.accessToken;
                axios
                  .put(
                    `${process.env.REACT_APP_BACKEND_URL}/api/login/fb/${
                      response.id
                    }`,
                    new_user
                  )
                  .then(res => {
                    window.localStorage.setItem(
                      "FbAccessToken",
                      response.accessToken
                    );
                    window.localStorage.setItem("SAMUserID", response.userID);
                    // this.props.getUserData(
                    //   window.localStorage.getItem("SAMUserID")***Will add back in later - BM
                    // );
                  });
              }
            },
            () => {
              document.location.reload(true);
            }
          );
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
        if (response.status === "connected") {
          // axios login call
          console.log("init", response);
        }
      }); //end getLoginStatus
    }; //end fbAsyncInit
  } //end component did update

  handleClose = () => {
    document.getElementById("fbContent").style.display = "none";
  };

  render() {
    return (
      <div>
        {window.localStorage.getItem("SAMUserID") &&
        this.state.filteredFriends ? (
          <div className="friend-view-wrapper">
            <input
              className="search-bar"
              placeholder="Search Friends        &#x1f50d; &nbsp;"
              onChange={this.onChangeHandler}
              value={this.state.query}
            />
            <Menu
              inverted
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "auto",
                height: 425
              }}
              className="friend-card-list"
            >
              {this.state.filteredFriends.map(friend => {
                return (
                  <Menu.Item
                    as="a"
                    className="friendCard"
                    key={friend.id}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start"
                    }}
                  >
                    <div
                      style={{ marginLeft: 75 }}
                      onClick={() =>
                        this.props.updateDisplayedUser(friend.fb_user_id)
                      }
                    >
                      <Image
                        style={{ fontSize: 27 }}
                        src="http://placekitten.com/200/200"
                        avatar
                      />
                      <span style={{ fontSize: 16, marginLeft: 10 }}>
                        {friend.first_name} {friend.last_name}
                      </span>
                    </div>
                  </Menu.Item>
                );
              })}
            </Menu>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.getUserDataReducer.userData,
    userCountryData: state.getUserDataReducer.userCountryData,
    loading: state.getUserDataReducer.loading,
    DBUserID: state.getUserDataReducer.id
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { getUserData }
  )(FbLogin)
);
