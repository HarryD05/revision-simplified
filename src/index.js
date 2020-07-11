import React from 'react';
import ReactDOM from 'react-dom';

//Styling
import './index.scss';

//Components
import App from './App';

//Context
import LocationProvider from './context/LocationContext';

ReactDOM.render(
  <LocationProvider><App /></LocationProvider>,
  document.getElementById('root')
);
