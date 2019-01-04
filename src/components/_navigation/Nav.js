import React from 'react';
import {NavLink} from 'react-router-dom'
import ToggleButton from './ToggleButton';


const Nav = props => (
  <header className="toolbar">
  <nav className="toolbar__navigation">
      <div className="toolbar__logo"><NavLink to="/" exact>
      {/* leave Space for Image */}
      </NavLink></div>
      <div className="toolbar_navigation-items">
          <ul>
              <li><NavLink to="/adopt">Adopt</NavLink></li>
              <li><NavLink to="/adopt">Donate</NavLink></li>
              <li><NavLink to="/adopt">Volunteer/Employment</NavLink></li>
              <li><NavLink to="/adopt">About Us</NavLink></li>
              {/* <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li> */}
              
                              
          </ul>
      </div>
      <div className="toolbar__toggle-button">
          <ToggleButton click={props.navClickHandler} />
      </div>
  </nav>
   </header>

);

export default Nav;