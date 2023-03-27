import React, { useState } from 'react';
import DropdownAbout from '../components/DropdownAbout';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { aboutData } from '../data/dataAbout';

const About = () => {
  const [data] = useState(aboutData);
  return (
    <>
      <div className="wrapper">
        <header>
          <Logo />
          <Navigation />
        </header>
        <div className="about-content">
          {data.map((quality, index) => {
            return (
              <DropdownAbout
                key={index}
                title={quality.title}
                desc={quality.description}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
