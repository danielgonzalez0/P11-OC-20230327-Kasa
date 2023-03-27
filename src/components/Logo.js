import React from 'react';
import logoImg from '../assets/img/logo.png';

const Logo = () => {
  return (
    <span className="logo">
      <img src={logoImg} alt="kasa logo" />
    </span>
  );
};

export default Logo;
