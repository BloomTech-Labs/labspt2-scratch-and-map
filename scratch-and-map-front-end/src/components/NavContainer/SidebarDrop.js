import React, {Component} from "react";
import axios from 'axios'
import { Dropdown } from "semantic-ui-react";

class SidebarDrop extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/users`
    );
    console.log(data);
    this.setState({ options: data });
    
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Dropdown
          // onChange={this.handleInputChange} needs to pull in props instead
          placeholder="Select Friend"
          clearable
          fluid
          multiple
          search
          selection
          // options={this.state.options.map((item, index) => <option key={index} value={item.id}>{item.username}</option>)} This will have to pull in props instead
        />
      </div>
    );
  }
}
export default SidebarDrop;
