import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import CalendarPage from './screens/CalendarPage.js';
import HomePage from './screens/HomePage.js'
import SettingsPage from './screens/SettingsPage.js'
import ContextProvider from './Store.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
            <Route path='/home' component={HomePage} />
            <Route path='/calendar' component={CalendarPage} />
            <Route path="/settings" component={SettingsPage} />
          </Switch>
        </ContextProvider>
      </BrowserRouter>
    );
  }
}

export default App;
