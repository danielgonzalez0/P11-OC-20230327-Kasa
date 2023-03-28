import React from 'react';
import logoImg from '../assets/img/logo-white.png';

const Footer = () => {
  return (
    <footer>
      <img src={logoImg} alt="logo kasa" />
      <span> &#9400; 2020 Kasa. All rights reserved</span>
    </footer>
  );
};

export default Footer;
