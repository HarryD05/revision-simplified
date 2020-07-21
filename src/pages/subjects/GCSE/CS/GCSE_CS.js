import React from 'react';

//Topics
import Component11 from './components/component11';
import Component12 from './components/component12';
import Component13 from './components/component13';
import Component14 from './components/component14';
import Component15 from './components/component15';
import Component16 from './components/component16';
import Component17 from './components/component17';


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
        <h2>SPECIFICATION AT A GLANCE</h2>
        <h3>Paper 1 - 1hr 30mins [80 marks]</h3>
        <b>Computer Systems (Component 1)</b>
        <ul>
          <li><HashLink id="comp1_1" name="1.1" /> - System architecture (CPU)</li>
          <li><HashLink id="comp1_2" name="1.2" /> - Memory</li>
          <li><HashLink id="comp1_3" name="1.3" /> - Storage</li>
          <li><HashLink id="comp1_4" name="1.4" /> - Wired & wireless networks</li>
          <li><HashLink id="comp1_5" name="1.5" /> - Network topologies, protocols & layers</li>
          <li><HashLink id="comp1_6" name="1.6" /> - System security</li>
          <li><HashLink id="comp1_7" name="1.7" /> - System software</li>
          <li>1.8 - Ethical, legal, cultural & environmental concerns</li>
        </ul>
        <br />
        <h3>Paper 2 - 1hr 30mins [80 marks]</h3>
        <b>Computational thinking, algorithms & programming (Component 2)</b>
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
        <h2>RESOURCES</h2>
        <b>Books I used:</b> 
        <ul>
          <li>
            <a href="https://www.cgpbooks.co.uk/secondary-books/gcse/computer-science/cor41-gcse-computer-science-ocr-revision-guide" target="__blank" el="noopener noreferrer">CGP revision guide</a>
          </li>
          <li>
            <a href="https://www.cgpbooks.co.uk/secondary-books/gcse/computer-science/coq41-gcse-computer-science-ocr-exam-practice-wo" target="__blank" el="noopener noreferrer">CGP practice exam questions</a>
          </li>
        </ul>

        <b>Websites I used:</b>
        <ul>
          <li>
            <a href="http://www.teach-ict.co.uk/2016/GCSE_Computing/OCR_J276/OCR_J276_home.html" target="__blank" el="noopener noreferrer">Teach-ICT</a>
          </li>
          <li>
            <a href="https://www.bbc.co.uk/bitesize/examspecs/zmtchbk" target="__blank" el="noopener noreferrer">BBC Bitesize</a> (has lots of uneeded content for OCR & in a very odd order!)
          </li>
          <li>
            <a href="https://www.senecalearning.com/" target="__blank" el="noopener noreferrer">Seneca Learning</a> (really useful to test your knowledge)
          </li>
          <li>
            <a href="https://www.gcsepod.com/" target="__blank" el="noopener noreferrer">GCSE Pod</a> (I would watch pods the night before & morning of a test to refresh my memory)
          </li>
        </ul>
      </div>

      <div id="notes">
        <h2>MY REVISION NOTES</h2>
        <Component11 />
        <Component12 />
        <Component13 />
        <Component14 />
        <Component15 />
        <Component16 />
        <Component17 />
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