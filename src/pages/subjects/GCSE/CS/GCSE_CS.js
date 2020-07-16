import React from 'react';

//Topics
import Component11 from './components/component11';

//Components 
import HashLink from '../../../../components/HashLink';

//Styling
import '../../subject.scss';

const GCSE_CS = props => {
  props.setSubject('GCSE_CS');

  return (
    <div className="subject">
      <h1>GCSE Computer Science</h1>
      <h3>OCR (J726)</h3>

      <div id="spec">
        <h2>Specification at a glance</h2>
        <h3>Paper 1 - 1hr 30mins [80 marks]</h3>
        <em>Computer Systems (Component 1)</em>
        <ul>
          <li><HashLink id="comp1_1" name="1.1" /> - System architecture (CPU)</li>
          <li>1.2 - Memory</li>
          <li>1.3 - Storage</li>
          <li>1.4 - Wired & wireless networks</li>
          <li>1.5 - Network topologies, protocols & layers</li>
          <li>1.6 - System security</li>
          <li>1.7 - System software</li>
          <li>1.8 - Ethical, legal, cultural & environmental concerns</li>
        </ul>
        <br />
        <h3>Paper 2 - 1hr 30mins [80 marks]</h3>
        <em>Computational thinking, algorithms and programming (Component 2)</em>
        <ul>
          <li>2.1 - Algorithms</li>
          <li>2.2 - Programming techniques</li>
          <li>2.3 - Building robust programs</li>
          <li>2.4 - Computational logic</li>
          <li>2.5 - Translators & facilites</li>
          <li>2.6 - Data representation</li>
        </ul>
      </div>

      <div id="res">
        <h2>Resources</h2>
        <p>Books I used:</p> 
        <ul>
          <li>
            <a href="https://www.cgpbooks.co.uk/secondary-books/gcse/computer-science/cor41-gcse-computer-science-ocr-revision-guide" target="__blank" el="noopener noreferrer">CGP revision guide</a>
          </li>
          <li>
            <a href="https://www.cgpbooks.co.uk/secondary-books/gcse/computer-science/coq41-gcse-computer-science-ocr-exam-practice-wo" target="__blank" el="noopener noreferrer">CGP practice exam questions</a>
          </li>
        </ul>

        <p>Websites I used:</p>
        <ul>
          <li>
            <a href="http://www.teach-ict.co.uk/2016/GCSE_Computing/OCR_J276/OCR_J276_home.html" target="__blank" el="noopener noreferrer">Teach-ICT</a>
          </li>
          <li>
            <a href="https://www.bbc.co.uk/bitesize/examspecs/zmtchbk" target="__blank" el="noopener noreferrer">BBC Bitesize</a>
          </li>
        </ul>
      </div>

      <div id="notes">
        <h2>My Revision Notes</h2>
        <Component11 />
        <h4>Component 1.2 - Memory</h4>
        <h4>Component 1.3 - Storage</h4>
        <h4>Component 1.4 - Wired & wireless networks</h4>
        <h4>Component 1.5 - Network topologies, protocols & layers</h4>
        <h4>Component 1.6 - System security</h4>
        <h4>Component 1.7 - System software</h4>
        <h4>Component 1.8 - Ethical, legal, cultural & environmental concerns</h4>
      
        <h4>Component 2.1 - Algorithms</h4>
        <h4>Component 2.2 - Programming techniques</h4>
        <h4>Component 2.3 - Building robust programs</h4>
        <h4>Component 2.4 - Computational logic</h4>
        <h4>Component 2.5 - Translators & facilites</h4>
        <h4>Component 2.6 - Data representation</h4>
      </div>
    </div>
  )
}

export default GCSE_CS;