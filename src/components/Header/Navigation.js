import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * React component given the HTML structure of the application navigation
 * @param {PropTypes} menuVisible props used for accessibility behavior when mavigation sidebar is active
 * @returns {React.ReactElement} Navigation
 */
const Navigation = ({ menuVisible }) => {
  const [isActive, setActive] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    console.log(e);
    setActive(!isActive);
    menuVisible(!isActive);
  };

  const handleToggleKeyboard = (e) => {
 
    console.log(e.keyCode);
    console.log(isActive);
    if (e.keyCode === 13) {
      setActive(!isActive);
      menuVisible(!isActive);
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

Navigation.propTypes = {
  menuVisible: PropTypes.func,
};

export default Navigation;
