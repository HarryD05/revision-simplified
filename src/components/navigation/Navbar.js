//Dependencies
import React, {useState, useContext} from 'react';
import {NavLink} from 'react-router-dom';

//Context
import {LocationContext} from '../../context/LocationContext';
import {ViewContext} from '../../context/ViewContext';

//Components
import HashLink from '../HashLink';
import Backdrop from '../backdrop/Backdrop';

//Styling
import './navbar.scss';

const Navbar = props => {
  const locContext = useContext(LocationContext);
  const hashes = (locContext.getCurrentSubject() === null) ? false : true;

  const viewContext = useContext(ViewContext);

  const [isSubjects, setIsSubjects] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const updateComponents = () => {
    if (viewContext.isMini) {
      let toggle = document.querySelector('.toggle-btn');
      let nav = document.querySelector('nav');
      let main = document.querySelector('main');
      let bodyClasses = document.querySelector('body').classList;

      if (isOpen) {
        if (toggle) {
          let toggleClasses = toggle.classList;
          toggleClasses.remove('clicked');
        }
        if (nav) {
          let navClasses = nav.classList;
          navClasses.remove('show');
        }
        if (main) {
          let mainClasses = main.classList;
          mainClasses.add('full');
        }

        bodyClasses.remove('locked');
        document.body.setAttribute('scroll', 'yes');
      } else {
        if (toggle) {
          let toggleClasses = toggle.classList;
          toggleClasses.add('clicked');
        }
        if (nav) {
          let navClasses = nav.classList;
          navClasses.add('show');
        }
        if (main) {
          let mainClasses = main.classList;
          mainClasses.remove('full');
        }

        bodyClasses.add('locked');
        document.body.setAttribute('scroll', 'no');
      }
    }
  }

  const toggleSubjects = scroll => {
    if (scroll === null) scroll = true; 

    setIsSubjects(!isSubjects);

    let caretClasses = document.querySelector('nav ul li a span').classList;
    if (isSubjects) {
      caretClasses.remove('rotated');
    } else {
      caretClasses.add('rotated');
    }

    if (scroll) {
      onClick();
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

  const onClick = () => {
    window.scrollTo(0, 0);

    setIsOpen(false);
    updateComponents();
  }

  const clickToggle = () => {
    setIsOpen(!isOpen);

    updateComponents();
  }

  const renderReturnBtn = () => {
    return (
      <div className="return-btn" onClick={() => window.scrollTo(0, 0)}>
        <span className="fas fa-arrow-up"></span>
      </div>
    )
  }

  const renderDarkToggleBtn = () => {
    let base = "fas fa-";
    if (viewContext.isDark) { 
      base += "sun";
    } else {
      base += "moon";
    }

    return (
      <div className="dark-btn" onClick={() => viewContext.toggleIsDark()}>
        <span className={base}></span>
      </div>
    )
  }

  return (
    <div className="nav-container">
      {isOpen ? <Backdrop /> : null}

      <div className="toggle-btn" onClick={clickToggle}>
        <span className="fas fa-bars"></span>
      </div>
 
      {(!isOpen & viewContext.isMini) ? renderReturnBtn() : null}

      {renderDarkToggleBtn()}

      <nav className="navbar">
        <div className="title">
          <h1>Revision Simplified</h1>
        </div>

        <ul>
          <li><NavLink to="/home" onClick={onClick}>Home</NavLink></li>
          <li>
            {/* eslint-disable-next-line */}
            <a className="subjects" onClick={() => toggleSubjects(false)}>Subjects
              <span className="fas fa-caret-down"></span>
            </a> 
            { isSubjects ? renderSubjectsDropdown() : null }
          </li>
          <li><NavLink to="/about" onClick={onClick}>About me</NavLink></li>

          { hashes ? <span className="barrier"></span> : null }
          { hashes ? <li><HashLink id="spec"  name="Spec." /></li> : null }
          { hashes ? <li><HashLink id="res"   name="Resources" /> </li>: null }
          { hashes ?  <li><HashLink id="notes" name="Notes" /></li>: null }
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;