//Dependencies
import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';

//Context
import {LocationContext} from '../../context/LocationContext';

//Components
import HashLink from '../HashLink';

//Styling
import './navbar.scss';

const Navbar = props => {
  const locContext = useContext(LocationContext);

  const renderSubjectLinks = () => {
    return (
      <div className="subject-links">
        <ul>
          <li><HashLink id="spec"  name="Spec." /></li>
          <li><HashLink id="res"   name="Resources" /> </li>
          <li><HashLink id="notes" name="Notes" /></li>
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

      { locContext.getCurrentSubject() === null ? null : renderSubjectLinks() }
      
    </nav>
  )
}

export default Navbar;