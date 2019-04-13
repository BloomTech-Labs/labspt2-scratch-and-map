import React, { Component } from "react";
import { Menu, Button, Card, Segment, Image, Search } from "semantic-ui-react";
import axios from "axios";
import _ from "lodash";

// const source = _.times(5, () => ({
//     name: faker.name.firstName(),
//     description: faker.company.catchPhrase(),
//     image: faker.internet.avatar(),
//   }))

class FriendListView extends Component {
  constructor() {
    super();
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

  handleResultSelect = (e, { friend }) => this.setState({ value: friend.username });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

        setTimeout(() => {
          if (this.state.value.length < 1) return this.resetComponent();

          const re = new RegExp(_.escapeRegExp(this.state.value), "i");
          const isMatch = friend => re.test(friend.username);

          this.setState({
            isLoading: false,
            // results: _.filter(source, isMatch)
            friends: _.filter(isMatch)
          });
        }, 300);
  };

  render() {
    const { isLoading, value, friends } = this.state;
    return (
      <div className="friend-view-wrapper" >
      <Button.Group className="closebutton">
        <Button onClick={this.props.onPusherClick} icon="close" inverted />
      </Button.Group>
        <div>
          <Search
          placeholder= 'Search Friends'
            style={{ marginTop: "30px" }}
            aligned="right"
            // loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
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
                <Menu.Item
                  as="a"
                  className="friend-card"
                //   style={{ background: "#2B2B2B", color: "white" }}
                >
                  {/* <Card style={{background: 'black', color: 'white' }} as="a" className="friend-card"> */}
                  <Image src="https://unsplash.com/photos/N-F31aQdAHQ" avatar />
                  <span>
                    {friend.first_name} {friend.last_name}
                    {/* {friend.username} */}
                  </span>
                </Menu.Item>
                // </Card>
              );
            })}
          </Segment>
        </div>
      </div>
    );
  }
}

export default FriendListView;
