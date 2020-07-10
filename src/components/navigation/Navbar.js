import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = props => {
  return (
    <nav>
      <div className="title">
        <h1>Revision Simplified</h1>
      </div>

      <div className="links">
        <ul>
          <Link to="/home"><li>Home</li></Link>
          <Link to="/subjects"><li>Subjects</li></Link>
          <Link to="/about"><li>About me</li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;