import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SideBarContext } from '../AppContext/AppContext';

/**
 * React component given the HTML structure of the application navigation
 * @returns {React.ReactElement} Navigation
 */
const Navigation = () => {
  const [isActive, setActive] = useState(false);
  const {toggleSideBar } = useContext(SideBarContext);

  const handleToggle = (e) => {
    e.preventDefault();
    setActive(!isActive);
    toggleSideBar();
  };

  const handleToggleKeyboard = (e) => {
    if (e.keyCode === 13) {
      setActive(!isActive);
      toggleSideBar();
    }
  };

  return (
    <div className="navigation">
      <div
        className={`toggle-btn ${isActive ? 'show-cross' : ''}`}
        tabIndex={0}
        role="button"
        onClick={handleToggle}
        onKeyDown={handleToggleKeyboard}
      >
        <span id="firstcrossbar"></span>
        <span id="middlecrossbar"></span>
        <span id="lastcrossbar"></span>
      </div>
      <div
        id="side-bar"
        className={`side-bar ${isActive ? 'show-side-bar' : ''}`}
      >
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
