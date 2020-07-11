import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';

//Context
import {LocationContext} from '../../context/LocationContext';

//Styling
import './navbar.scss';

const Navbar = props => {
  const locContext = useContext(LocationContext);

  const renderSubjectLinks = () => {
    return (
      <div className="subject-links">
        <ul>
          <li><a href="#spec">Spec.</a></li>
          <li><a href="#res">Resources</a></li>
          <li><a href="#notes">Notes</a></li>
        </ul>
      </div>
    )
  }

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

      { locContext.currSubject === null ? null : renderSubjectLinks() }
      
    </nav>
  )
}

export default Navbar;