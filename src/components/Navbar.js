import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navtext">
        <NavLink to="/Home">Home</NavLink>
        <br></br>
        <NavLink to="/Form/nav">Add a Quest</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
