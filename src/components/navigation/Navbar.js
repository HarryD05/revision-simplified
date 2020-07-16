//Dependencies
import React, {useState, useContext} from 'react';
import {NavLink} from 'react-router-dom';

//Context
import {LocationContext} from '../../context/LocationContext';

//Components
import HashLink from '../HashLink';

//Styling
import './navbar.scss';

const Navbar = props => {
  const locContext = useContext(LocationContext);
  const hashes = (locContext.getCurrentSubject() === null) ? false : true;

  const [isSubjects, setIsSubjects] = useState(false);

  const toggleSubjects = () => {
    setIsSubjects(!isSubjects);

    let caretClasses = document.querySelector('nav ul li a span').classList;
    if (isSubjects) {
      caretClasses.remove('rotated');
    } else {
      caretClasses.add('rotated');
    }
  }

  const renderSubjectsDropdown = () => {
    return (
      <ul className="subject-dropdown">
        <li><NavLink to="/subjects/GCSE_RE" onClick={toggleSubjects}>RE</NavLink></li>
        <li><NavLink to="/subjects/GCSE_CS" onClick={toggleSubjects}>Computing</NavLink></li>
      </ul>
    )
  }

  return (
    <nav>
      <div className="title">
        <h1>Revision Simplified</h1>
      </div>

      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li>
          {/* eslint-disable-next-line */}
          <a className="subjects" onClick={toggleSubjects}>Subjects
            <span className="fas fa-caret-down"></span>
          </a> 
          { isSubjects ? renderSubjectsDropdown() : null }
        </li>
        <li><NavLink to="/about">About me</NavLink></li>

        { hashes ? <span className="barrier"></span> : null }
        { hashes ? <li><HashLink id="spec"  name="Spec." /></li> : null }
        { hashes ? <li><HashLink id="res"   name="Resources" /> </li>: null }
        { hashes ?  <li><HashLink id="notes" name="Notes" /></li>: null }
      </ul>
    </nav>
  )
}

export default Navbar;