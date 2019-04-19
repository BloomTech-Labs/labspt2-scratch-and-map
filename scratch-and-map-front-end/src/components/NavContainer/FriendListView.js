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

  // componentWillMount() {
  //   this.resetComponent();
  // }

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

  // resetComponent = () =>
  //   this.setState({ isLoading: false, friends: [], value: "" });
  //
  // handleResultSelect = (e, { friend }) =>
  //   this.setState({ value: friend.username });
  //
  // handleSearchChange = (e, { value }) => {
  //   this.setState({ isLoading: true, value });
  //
  //   setTimeout(() => {
  //     if (this.state.value.length < 1) return this.resetComponent();
  //
  //     const re = new RegExp(_.escapeRegExp(this.state.value), "i");
  //     const isMatch = friend => re.test(friend.first_name);
  //
  //     this.setState({
  //       isLoading: false,
  //
  //       friends: _.filter(this.state.friends, isMatch)
  //     });
  //   }, 300);
  // };

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
    const { isLoading, value, friends } = this.state;
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
              <Menu.Item as="a" className="friend-card">
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
