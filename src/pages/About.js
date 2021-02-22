import React, { useContext } from 'react';

//Context
import { LocationContext } from '../context/LocationContext';

const About = props => {
  const locContext = useContext(LocationContext);
  locContext.setCurrentSubject(null);

  return (
    <div className="about">
      <h1>About me</h1>
      <p>I am Harry, a year 11 student currently studying for my GCSEs. I have aspirations to go to the university to study Computer Science.</p>

      <h2>GCSEs</h2>
      <ul>
        <li><b>2020</b> - I took 2 GCSEs: RE & Computer Science, achieving 2 9s</li>
        <li><b>2021</b> - I will taking the other 9: English Literature & Language, Maths, Triple Science, Geography, History & Spanish</li>
      </ul>

      <h2>A-Levels</h2>
      <p>I will be taking...</p>
      <ul>
        <li>Computer Science</li>
        <li>Maths</li>
        <li>Further Maths</li>
        <li>Physics</li>
      </ul>
    </div>
  )
}

export default About;