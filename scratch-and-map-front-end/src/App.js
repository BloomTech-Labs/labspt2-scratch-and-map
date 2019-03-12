import React, { Component } from "react";
import { Route } from 'react-router-dom';

import Auth from "./Auth/Auth";
import ForgotPassword from './Auth/ForgotPassword'
import "./index.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Auth component using '/' path for now, not intended to be permanent */}
        <Route path='/' exact render={(props) => <Auth /> } /> 
        <Route path='/forgotpassword' exact render={(props) => <ForgotPassword />} />
      </div>
    );
  }
}

export default App;
