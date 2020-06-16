import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/ZorasDomain">Zoras Domain</NavLink></li>
        <li><NavLink to="/HyruleCastle">Hyrule Castle</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;