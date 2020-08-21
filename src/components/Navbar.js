import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navtext">
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/Form/nav">Add a Quest</NavLink>
      </div>
    </div>
  );
};

export default NavBar;