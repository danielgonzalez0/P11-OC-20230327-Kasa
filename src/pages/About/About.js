import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Header/Logo';
import Navigation from '../../components/Header/Navigation';
import { aboutData } from '../../data/dataAbout';

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
