import React, {createContext, useEffect, useState} from 'react';

export const ViewContext = createContext();

export default (props) => {
  const {children} = props;

  const [isDark, setIsDark] = useState(false);
  const [isMini, setIsMini] = useState((window.visualViewport.width <= 768) ? true : false);

  useEffect(() => {
    if (isDark) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [isDark])

  useEffect(() => {
    let main = document.querySelector('main');

    if (main) {
      if (isMini) {
        main.classList.add('full');
      } else {
        main.classList.remove('full');
      }
    }
  }, [isMini])

  const toggleIsDark = () => {
    setIsDark(!isDark);
  }

  window.onresize = () => setIsMini((window.visualViewport.width <= 768) ? true : false);

  return (
    <div>
      <ViewContext.Provider value={{toggleIsDark, isDark, isMini}}>
        { children }
      </ViewContext.Provider>
    </div>
  )
}