import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserData } from "../../actions/mapActions";
import axios from "axios";

class FriendListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      filteredFriends: [],
      query: "",
      clickedFriend: ""
    };
  }

  async componentDidMount() {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/users`)
      .then(res => {
        console.log("Side Bar Users", res);
        this.setState({
          friends: res.data.users,
          filteredFriends: res.data.users,
          clickedFriend: window.localStorage.getItem("SAMUserID")
        });
        this.props.getUserData(window.localStorage.getItem("SAMUserID"));
      });
  }

  onChangeHandler = ({ target }) => {
    const res = this.state.friends.filter(friend => {
      const name = friend.first_name + " " + friend.last_name;
      return name.includes(target.value);
    });
    this.setState({
      filteredFriends: res,
      query: target.value
    });
  };

  friendHandler = id => {
    this.props.getUserData(id);
  };

  render() {
    return (
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
                <div style={{ marginLeft: 75 }}>
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
  )(FriendListView)
);

