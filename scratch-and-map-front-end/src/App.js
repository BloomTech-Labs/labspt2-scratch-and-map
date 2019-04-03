import React, { Component } from "react";
import Auth from "./Auth/Auth";
import Sidebar from "./components/SideBar"

import "./index.scss";
require("dotenv").config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
        <Sidebar />
      </div>
    );
  }
}

export default App;
