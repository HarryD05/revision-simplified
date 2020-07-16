import React, {useContext} from 'react';

//Context
import {LocationContext} from '../context/LocationContext';

const About = props => {
  const locContext = useContext(LocationContext);
  locContext.setCurrentSubject(null);

  return (
    <div className="about">
      <h1>About me</h1>
      <p>Hi! I am Harry Davis, a year 10 student currently studying for my GCSEs. I have aspirations to go to the University of Oxford to study computer science.</p>

      <h2>GCSEs</h2>
      <p>I took 2 GCSEs early - RE and computer science - due to Covid-19 these results will be based on predicted grades.</p>

      <h2>A-Levels</h2>
      <p>I currently am thinkings of taking: Maths, Further maths & Computer science.</p>
    </div>
  )
}

export default About;