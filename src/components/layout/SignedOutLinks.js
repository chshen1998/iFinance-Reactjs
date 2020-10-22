import React from "react";
import { NavLink } from "react-router-dom";
import './layout.css'

const SignedOutLinks = () => {
  return (
    <div className='navbar-out'>
      <ul className="right">
        <li>
          <NavLink to="/signup" className='label'>SIGN UP</NavLink>
        </li>
        <li>
          <NavLink to="/signin" className='label'>SIGN IN</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
