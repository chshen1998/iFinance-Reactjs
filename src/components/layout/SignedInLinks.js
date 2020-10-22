import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import './layout.css'

const SignedInLinks = (props) => {
  return (
    <div className='navbar-in'>
      <ul className="right">
        <li>
          <NavLink to="/home" className='label'>HOME</NavLink>{" "}
        </li>
        <li>
          <NavLink to='/calendar' className='label'> CALENDAR</NavLink>{" "}
        </li>
        <li>
          <NavLink to='/settings' className='label'> SETTINGS</NavLink>{" "}
        </li>
        <li>
          <NavLink to='/' className='label'><a onClick={props.signOut}>LOG OUT</a></NavLink>{" "}
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
