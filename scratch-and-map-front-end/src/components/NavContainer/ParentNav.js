import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserData } from "../../actions/mapActions";
import NavBar from "./NavBar";

class ParentNav extends Component {
  state = {
    visible: false,
    show: false
  };

  componentDidMount() {
    console.log("MAP ICON USERDATA", this.props);
    this.props.getUserData(1);
  }
  // goTo = () => {
  //   this.history.push("/map");
  // };
  handlePusher = () => {
    const { visible } = this.state;
    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });
  handleShow = () => this.setState({ show: !this.state.show });



  render() {
    const { visible } = this.state;
    const { show } = this.state;

    return (

        <NavBar
          onPusherClick={this.handlePusher}
          onToggle={this.handleToggle}
          visible={visible}
          show={show}
          handleShow={this.handleShow}
        />);
  }
}
const mapStateToProps = state => {
  return {
    userData: state.getUserDataReducer.userData,
    userCountryData: state.getUserDataReducer.userCountryData,
    loading: state.getUserDataReducer.loading
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { getUserData }
  )(ParentNav)
);