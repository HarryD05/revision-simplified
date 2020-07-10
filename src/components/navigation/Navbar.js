import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

//Styling
import './navbar.scss';

const Navbar = props => {
  return (
    <nav>
      <div className="title">
        <h1>Revision Simplified</h1>
      </div>

      <div className="links">
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/subjects">Subjects</NavLink></li>
          <li><NavLink to="/about">About me</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;