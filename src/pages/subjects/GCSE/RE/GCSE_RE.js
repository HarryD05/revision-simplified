import React, {useContext} from 'react';

//Context
import {LocationContext} from '../../../../context/LocationContext';

//Topics
import Islam1 from './topics/islam1';

//Styling
import '../../subject.scss';

const GCSE_RE = props => {
  const locContext = useContext(LocationContext);
  locContext.setCurrSubject('GCSE_RE');

  return (
    <div className="subject">
      <h1>GCSE RE</h1>
      <h3>Edexcel B 2016 (1RB0 - ZB)</h3>

      <div id="spec">
        <h2>Specification at a glance</h2>
        <h3>Paper 1 - 1hr 45mins [102 marks]</h3>
        <em>Islam (1C)</em>
        <ul>
          <li><a href="#islam1">1a</a> - Belief in Allah</li>
          <li>1b - Marriage & the Family</li>
          <li>1c - Living the Muslim Life</li>
          <li>1d - Matters of Life & Death</li>
        </ul>
        <br />
        <h3>Paper 2 - 1hr 45mins [102 marks]</h3>
        <em>Christianity (2B)</em>
        <ul>
          <li>2a - Belief in God</li>
          <li>2b - Crime & Punishment</li>
          <li>2c - Living the Christian Life</li>
          <li>2d - Peace & Conflict</li>
        </ul>
      </div>

      <div id="res">
        <h2>Resources</h2>
        <p>I mainly used my exercise book, just summarised my notes but...</p>
        <p>Books I used:</p> 
        <ul>
          <li>
            <a href="https://www.pearsonschoolsandfecolleges.co.uk/secondary/ReligiousEducationandCitizenship/14-16forEdexcel/EdexcelGCSE91ReligiousStudiesSpecB/ISBN/Revision/ReviseEdexcelGCSE91ReligiousStudiesChristianityIslamRevisionGuide.aspx" target="__blank" el="noopener noreferrer">Pearson revision guide </a> (contains all possible topics so can igure around half!)
          </li>
        </ul>

        <p>Websites I used:</p>
        <ul>
          <li>
            <a href="https://www.bbc.co.uk/bitesize/examspecs/zm9pd6f" target="__blank" el="noopener noreferrer">BBC Bitesize</a> (of some use)
          </li>
        </ul>
      </div>

      <div id="notes">
      <h2>My Revision Notes</h2>
        <Islam1 />
        <h4>Islam - Marriage & the Family</h4>
        <h4>Islam - Living the Muslim Life</h4>
        <h4>Islam - Matters of Life & Death</h4>

        <h4>Christianity - Belief in God</h4>
        <h4>Christianity - Crime & Punishment</h4>
        <h4>Christianity - Living the Christian Life</h4>
        <h4>Christianity - Peace & Conflict</h4>
      </div>
    </div>
  )
}

export default GCSE_RE;