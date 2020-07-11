import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//Components
import Navbar from './components/navigation/Navbar';

//Pages
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import About from './pages/About';
import Unknown from './pages/Unknown';

//Subject pages
import GCSE_RE from './pages/subjects/GCSE/RE/GCSE_RE';
import GCSE_CS from './pages/subjects/GCSE/CS/GCSE_CS';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />

      <main>
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route exact path="/home" component={Home} />
          <Route exact path="/subjects" component={Subjects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/subjects/GCSE_RE" component={GCSE_RE} />
          <Route exact path="/subjects/GCSE_CS" component={GCSE_CS} />
          <Route component={Unknown} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App;

