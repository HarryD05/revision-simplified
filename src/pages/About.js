import React, { useContext } from 'react';

//Context
import { LocationContext } from '../context/LocationContext';

const About = props => {
  const locContext = useContext(LocationContext);
  locContext.setCurrentSubject(null);

  return (
    <div className="about">
      <h1>About me</h1>
      <p>I am Harry, a year 10 student currently studying for my GCSEs. I have aspirations to go to the University of Oxford to study computer science.</p>

      <h2>GCSEs</h2>
      <ul>
        <li><b>2020</b> - I took 2 GCSEs: RE & Computer Science, I achieved 2 9s!</li>
        <li><b>2021</b> - I will taking the other 9: English Literature & Language, Maths, Triple Science, Geography, History & Spanish</li>
      </ul>

      <h2>A-Levels</h2>
      <p>I am currently thinking of taking...</p>
      <ul>
        <li>Computer Science</li>
        <li>Maths</li>
        <li>Further Maths</li>
        <li>(maybe) an EPQ or Physics</li>
      </ul>
    </div>
  )
}

export default About;