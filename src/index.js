import React from 'react';
import ReactDOM from 'react-dom';

//Styling
import './index.scss';

//Components
import App from './App';

//Context
import LocationProvider from './context/LocationContext';
import ViewProvider from './context/ViewContext';

ReactDOM.render(
  <ViewProvider><LocationProvider><App /></LocationProvider></ViewProvider>,
  document.getElementById('root')
);
