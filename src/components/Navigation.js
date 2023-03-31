import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  // btnSidebar.addEventListener('click', () => {
  //   sidebar.classList.toggle('hidden');
  // });

  return (
    <div className="navigation">
      <div
        className={`toggle-btn ${!isActive ? 'show-cross' : ''}`}
        onClick={handleToggle}
      >
        <span id="firstcrossbar"></span>
        <span id="middlecrossbar"></span>
        <span id="lastcrossbar"></span>
      </div>
      <div
        id="side-bar"
        className={`side-bar ${!isActive ? 'show-side-bar' : ''}`}
      >
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <li>Accueil</li>
          </NavLink>

          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
