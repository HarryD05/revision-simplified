import React, {useContext} from 'react';

//Context
import {LocationContext} from '../context/LocationContext';

const Unknown = props => {
  const locContext = useContext(LocationContext);
  locContext.setCurrSubject(null);

  return (
    <div className="unknown">
      <h1>Error 404: Page not found</h1>
    </div>
  )
}

export default Unknown;