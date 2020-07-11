import React from "react";
import { NavLink } from "react-router-dom";

const SignInLink = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          +
        </NavLink>
      </li>
      <li>
        <NavLink to="/calendar">Calendar View</NavLink>
      </li>
      <li>
        <NavLink to="/analytical">Analytical View</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
    </ul>
  );
};

export default SignInLink;
