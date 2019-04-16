import React, { Component } from "react";
import { Menu, Button, Segment, Image, Search } from "semantic-ui-react";
import axios from "axios";
import _ from "lodash";

class FriendListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentWillMount() {
    this.resetComponent();
  }

  async componentDidMount() {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/users`)
      .then(res => {
        console.log("Side Bar Users", res);
        this.setState({
          friends: res.data.users
        });
      });
  }

  resetComponent = () =>
    this.setState({ isLoading: false, friends: [], value: "" });

  handleResultSelect = (e, { friend }) =>
    this.setState({ value: friend.username });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = friend => re.test(friend.first_name);

      this.setState({
        isLoading: false,

        friends: _.filter(this.state.friends, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, friends } = this.state;
    return (
      <div className="friend-view-wrapper">
        <Search
          placeholder="Search Friends"
          style={{ marginTop: "30px" }}
          aligned="right"
          // loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, {
            loading: true
          })}
          friends={friends}
          value={value}
          {...this.props}
        />

        <Segment
          inverted
          style={{ overflow: "auto", maxHeight: 500 }}
          className="friend-card-list"
        >
          {this.state.friends.map(friend => {
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
