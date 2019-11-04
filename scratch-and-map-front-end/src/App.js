import React, { Component } from "react";
import ParentNav from "./components/NavContainer/ParentNav";
import "./index.scss";
import axios from "axios";
import { Elements, StripeProvider } from "react-stripe-elements";
require("dotenv").config();

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }
  componentDidMount() {
    //grab FbAcessToken from local storage
    if(localStorage.getItem("SAMUserID"))   {
        this.setState({
            ...state,
            isLoggedIn: true
        })
    }
  }
  render() {
    return (
      <div className="App">
              <StripeProvider apiKey="pk_test_krA4dF6Zbe7WEYEqao5EeKmv00SpwNokud">
                      <Elements>
                         <ParentNav/>
                      </Elements>
              </StripeProvider>
      </div>
    );
  }
}

export default App;
