import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//Components
import Navbar from './components/navigation/Navbar';

//Pages
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import About from './pages/About';
import Unknown from './pages/Unknown';

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
          <Route component={Unknown} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App;

