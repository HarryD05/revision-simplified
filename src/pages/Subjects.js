import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';

//Context
import {LocationContext} from '../context/LocationContext';

//Styling
import './styling/subjects.scss';

const Subjects = props => {
  const locContext = useContext(LocationContext);
  locContext.setCurrSubject(null);

  return (
    <div className="subjects">
      <h1>Subjects</h1>
      <p>Currently only 2 GCSE subjects are available, this number will increase as I sit the exams for other subjects.</p>

      <h2>Layout</h2>
      <p>Each subject page will have the specification at a glance, a list of useful resources/links I used for the subject & then my revision notes.</p>

      <br />
      <h2>GCSE</h2>
      <ul className="links">
        <li><NavLink to="/subjects/GCSE_RE">RE</NavLink></li>
        <li><NavLink to="/subjects/GCSE_CS">Computer Science</NavLink></li>
        <p>More coming soon...</p>
      </ul>
      

      <h2>A-level</h2>
      <p>Yet to be completed...</p>
    </div>
  )
}

export default Subjects;