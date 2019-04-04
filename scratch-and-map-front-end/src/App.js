import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Auth from "./components/AuthContainer/Auth";
import MapContainer from "./components/MapContainer/MapContainer";
import ForgotPassword from "./components/AuthContainer/ForgotPassword";
import ParentNav from "./components/NavContainer/ParentNav";
import Card from "./components/MapContainer/Card";
import CardSlider from "./components/MapContainer/CardSlider";
import "./index.scss";
require("dotenv").config();

class App extends Component {
  componentDidMount() {
    //grab FbAcessToken from local storage
    // axios.post(`http://${process.env.REACT_APP_BACKEND_URL}/api/users/fb`);
  }
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
        <Route path="/" exact render={props => <ParentNav />} />
        <Route path="/auth" exact render={props => <Auth />} />
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

<Route
          path="/slider"
          exact
          render={props => <CardSlider friends={friends} />}
        />
      </div>
    );
  }
}

export default App;
