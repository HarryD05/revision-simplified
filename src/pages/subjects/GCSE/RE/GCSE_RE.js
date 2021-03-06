//Dependencies
import React from 'react';

//Topics
import Islam1 from './topics/islam1';
import Islam2 from './topics/islam2';
import Islam3 from './topics/islam3';
import Islam4 from './topics/islam4';

//Components
import HashLink from '../../../../components/HashLink';

//Styling
import '../../subject.scss';

const GCSE_RE = props => {
  props.setSubject('GCSE_RE');

  return (
    <div className="subject">
      <h1>GCSE RE</h1>
      <h3>Edexcel B 2016 (ZB - 1C & 2B)</h3>

      <div id="spec">
        <h2>SPECIFICATION AT A GLANCE</h2>
        <h3>Paper 1 - 1hr 45mins [102 marks]</h3>
        <b>Islam (1C)</b>
        <ul>
          <li><HashLink id="islam1" name="1a" /> - Belief in Allah</li>
          <li><HashLink id="islam2" name="1b" /> - Marriage & the Family</li>
          <li><HashLink id="islam3" name="1c" /> - Living the Muslim Life</li>
          <li><HashLink id="islam4" name="1d" /> - Matters of Life & Death</li>
        </ul>
        <br />
        <h3>Paper 2 - 1hr 45mins [102 marks]</h3>
        <b>Christianity (2B)</b>
        <ul>
          <li>2a - Belief in God</li>
          <li>2b - Crime & Punishment</li>
          <li>2c - Living the Christian Life</li>
          <li>2d - Peace & Conflict</li>
        </ul>
      </div>

      <div id="res">
        <h2>RESOURCES</h2>
        <p>I mainly used my exercise book, just summarised my notes but...</p>
        <b>Books I used:</b>
        <ul>
          <li>
            <a href="https://www.pearsonschoolsandfecolleges.co.uk/secondary/ReligiousEducationandCitizenship/14-16forEdexcel/EdexcelGCSE91ReligiousStudiesSpecB/ISBN/Revision/ReviseEdexcelGCSE91ReligiousStudiesChristianityIslamRevisionGuide.aspx" target="__blank" el="noopener noreferrer">Pearson revision guide </a> (contains all possible topics for both religions so can ignore around half!)
          </li>
        </ul>

        <b>Websites I used:</b>
        <ul>
          <li>
            <a href="https://www.bbc.co.uk/bitesize/examspecs/zm9pd6f" target="__blank" el="noopener noreferrer">BBC Bitesize</a> (of some use)
          </li>
          <li>
            <a href="https://quizlet.com/" target="__blank" el="noopener noreferrer">Quizlet</a> (made flash cards that summarised subtopics)
          </li>
        </ul>
      </div>

      <div id="notes">
        <h2>MY REVISION NOTES</h2>
        <Islam1 />
        <Islam2 />
        <Islam3 />
        <Islam4 />

        <h4>Christianity - Belief in God</h4>
        <h4>Christianity - Crime & Punishment</h4>
        <h4>Christianity - Living the Christian Life</h4>
        <h4>Christianity - Peace & Conflict</h4>
      </div>
    </div>
  )
}

export default GCSE_RE;