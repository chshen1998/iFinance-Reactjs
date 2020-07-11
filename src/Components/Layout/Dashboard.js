import React, { Component } from "react";
import Expenses from "./Expenses";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m5">
            <Expenses />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
