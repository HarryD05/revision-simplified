import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

//Components
import Navbar from './components/navigation/Navbar';

//Pages
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Redirect from="/" to="/home" />
        <Route exact path="/home" component={Home} />
        <Route exact path="/subjects" component={Subjects} />
        <Route exact path="/about" component={About} />
      </main>
    </BrowserRouter>
  )
}

export default App;

