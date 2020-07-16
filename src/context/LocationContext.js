import React, {createContext, useState} from 'react';

export const LocationContext = createContext();

export default (props) => {
  const {children} = props;

  const [currSubject, setCurrSubject] = useState(null);

  const setCurrentSubject = subject => {
    setCurrSubject(subject);
  }

  const getCurrentSubject = () => {
    return currSubject;
  }

  return (
    <div>
      <LocationContext.Provider value={{getCurrentSubject, setCurrentSubject}}>
        { children }
      </LocationContext.Provider>
    </div>
  )
}