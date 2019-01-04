import React from 'react';
import { NavLink } from 'react-router-dom';



const MobileNav = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
     <nav className={drawerClasses} onClick={props.click}>
     <div className='close' onClick={props.click}>
     {/* <div className="x"></div>
     <div className="x-"></div> */}
     </div>
      <ul>
        <li>
          <NavLink to="/" exact>Home</NavLink>
        </li>
        {/* <li>
        <NavLink to="/about">About</NavLink>
        </li> */}
        <li>
        <NavLink to="/adopt">Adopt</NavLink>
        </li>
        {/* <li>
        <NavLink to="/more">More</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default MobileNav;