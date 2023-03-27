import React from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <>
      <div className="wrapper">
        <header>
          <Logo />
          <Navigation />
        </header>
        <h1>about</h1>
      </div>
      <Footer />
    </>
  );
};

export default About;
