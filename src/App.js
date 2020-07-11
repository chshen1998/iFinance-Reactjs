import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Layout/NavBar";
import Dashboard from "./Components/Layout/Dashboard";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
