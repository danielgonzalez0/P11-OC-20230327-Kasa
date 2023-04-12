import React from 'react';
import logoImg from '../Header/logo.png';


/**
 * React component given the HTML strcture of the application logo used in the header
 * @returns {React.ReactElement} Logo
 */
const Logo = () => {
  return (
    <span className="logo">
      <img src={logoImg} alt="kasa logo" />
    </span>
  );
};

export default Logo;
