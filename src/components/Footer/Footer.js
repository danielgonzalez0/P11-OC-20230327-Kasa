import React from 'react';
import logoImg from '../Footer/logo-white.png';

/**
 * React component given the structure HTML of the footer
 * @returns {React.ReactElement} Footer
 */
const Footer = () => {
  return (
    <footer>
      <img src={logoImg} alt="logo kasa" />
      <span> &#9400; 2020 Kasa. All rights reserved</span>
    </footer>
  );
};

export default Footer;
