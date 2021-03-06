import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DisplayProject from "./displayProjects";
import Navbar from "./navbar";
import Login from "./login";
import Signup from "./signup";

import Profile from "./userProfile";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <DisplayProject />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Main;
