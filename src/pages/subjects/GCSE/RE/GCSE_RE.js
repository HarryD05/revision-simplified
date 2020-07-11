import React, {useContext} from 'react';

//Context
import {LocationContext} from '../../../../context/LocationContext';

//Styling
import '../../subject.scss';

const GCSE_RE = props => {
  const locContext = useContext(LocationContext);
  locContext.setCurrSubject('GCSE_RE');

  return (
    <div className="subject">
      <h1>GCSE RE</h1>
      <h3>Edexcel B 2016 (1C & 2B)</h3>

      <div id="spec">
        <h2>Specification</h2>
      </div>

      <div id="res">
        <h2>Resources</h2>
      </div>

      <div id="notes">
        <h2>My Revision Notes</h2>
      </div>
    </div>
  )
}

export default GCSE_RE;