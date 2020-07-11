import React, {createContext, useState} from 'react';

export const LocationContext = createContext();

export default (props) => {
  const {children} = props;

  const [currSubject, setCurrSubject] = useState(null);

  return (
    <div>
      <LocationContext.Provider value={{currSubject, setCurrSubject}}>
        { children }
      </LocationContext.Provider>
    </div>
  )
}