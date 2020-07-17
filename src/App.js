import React, {useContext} from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//Components
import Navbar from './components/navigation/Navbar';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Unknown from './pages/Unknown';

//Subject pages
import GCSE_RE from './pages/subjects/GCSE/RE/GCSE_RE';
import GCSE_CS from './pages/subjects/GCSE/CS/GCSE_CS';

//Context
import {LocationContext} from './context/LocationContext';

const App = () => {
  const locContext = useContext(LocationContext);

  const useSetSubject = subject => {
    locContext.setCurrentSubject(subject);
  }

  return (
    <Router>
      <Navbar />

      <main className="full">
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/subjects/GCSE_RE" component={() => <GCSE_RE setSubject={useSetSubject} />} />
          <Route exact path="/subjects/GCSE_CS" component={() => <GCSE_CS setSubject={useSetSubject} />} />
          <Route component={Unknown} />
        </Switch>
      </main>
    </Router>
  )
}

export default App;

