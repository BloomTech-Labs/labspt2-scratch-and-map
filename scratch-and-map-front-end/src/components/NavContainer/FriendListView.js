import React, { Component } from "react";
import { Menu, Button, Segment, Image, Search } from "semantic-ui-react";
import axios from "axios";
import _ from "lodash";

class FriendListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      filteredFriends: [],
      query: ""
    };
  }

  async componentDidMount() {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/users`)
      .then(res => {
        console.log("Side Bar Users", res);
        this.setState({
          friends: res.data.users,
          filteredFriends: res.data.users
        });
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

  render() {
    return (
      <div className="friend-view-wrapper">
        <input
          placeholder="search for friends"
          onChange={this.onChangeHandler}
          value={this.state.query}
        />
        <Segment
          inverted
          style={{ overflow: "auto", maxHeight: 600 }}
          className="friend-card-list"
        >
          {this.state.filteredFriends.map(friend => {
            return (
              <Menu.Item as="a" className="friend-card" key={friend.id}>
                <Image src="https://www.fillmurray.com/640/360" avatar />

                <span>
                  {friend.first_name} {friend.last_name}
                </span>
              </Menu.Item>
            );
          })}
        </Segment>
      </div>
    );
  }
}

export default FriendListView;
