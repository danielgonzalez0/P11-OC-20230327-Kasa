import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { aboutData } from '../data/dataAbout';

const About = () => {
  const [data] = useState(aboutData);
  return (
    <>
      <div className="wrapper" id="about">
        <header>
          <Logo />
          <Navigation />
        </header>
        <div className="banner" role="banner"></div>
        <div className="about-content">
          {data.map((quality, index) => {
            return (
              <Dropdown
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
