import React, {useContext} from 'react';

//Context
import {LocationContext} from '../context/LocationContext';

const About = props => {
  const locContext = useContext(LocationContext);
  locContext.setCurrentSubject(null);

  return (
    <div className="about">
      <h1>About me</h1>
      <p>I am Harry, a year 10 student currently studying for my GCSEs. I have aspirations to go to the University of Oxford to study computer science.</p>

      <h2>GCSEs</h2>
      <ul>
        <li>2020 - I took 2 GCSEs: RE and computer science (due to Covid-19 these results will be based on predicted grades)</li>  
        <li>2021 - I will taking the other 9: English Literature & Language, Maths, Triple Science, Geography, History & Spanish</li>
      </ul>
      
      <h2>A-Levels</h2>
      <p>I am currently thinking of taking</p>
      <ul>
        <li>Computer Science</li>
        <li>Maths</li>
        <li>Further Maths</li>
        <li>An EPQ or Physics</li>
      </ul>
    </div>
  )
}

export default About;