import React, { Component } from "react";
import { Route } from "react-router-dom";
import Auth from "./Auth/Auth";
import MapContainer from "./components/MapContainer/MapContainer";
import ForgotPassword from "./Auth/ForgotPassword";
import SideBar from "./components/SideBar";
import Card from "./components/MapContainer/Card";
import "./index.scss";
require("dotenv").config();

class App extends Component {
  render() {
    const sampleData = [
      {
        country: "United States",
        status: 4
      },
      {
        country: "Germany",
        status: 1
      },
      {
        country: "Russia",
        status: 3
      }
    ];

    const friends = [
      {
        first_name: "Abi",
        last_name: "French"
      },
      {
        first_name: "Javier",
        last_name: "English"
      },
      {
        first_name: "Ryan",
        last_name: "Adams"
      },
      {
        first_name: "Bull",
        last_name: "Moll"
      },
      {
        first_name: "Courtney",
        last_name: "B Vance"
      }
    ];

    return (
      <div className="App">
        {/* Auth component using '/' path for now, not intended to be permanent */}
        <Route path="/sidebar" exact render={props => <SideBar />} />
        <Route path="/" exact render={props => <Auth />} />
        <Route
          path="/forgotpassword"
          exact
          render={props => <ForgotPassword />}
        />
        <Route
          path="/map"
          exact
          render={props => <MapContainer sampleData={sampleData} />}
        />
        <Route
          path="/card"
          exact
          render={props => <Card friends={friends} />}
        />
      </div>
    );
  }
}

export default App;
