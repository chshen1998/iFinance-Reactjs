import React from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";

const NavBar = () => {
  return (
    <nav className="nav-nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          iFinance
        </Link>
        <SignInLink />
        <SignOutLink />
      </div>
    </nav>
  );
};

export default NavBar;