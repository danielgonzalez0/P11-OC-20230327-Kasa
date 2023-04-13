import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Header/Logo';
import Navigation from '../../components/Header/Navigation';
import { aboutData } from '../../data/dataAbout';

/**
 * react component given the html structure of the About page
 * @returns {React.ReactElement} About
 */
const About = () => {
  const [data] = useState(aboutData);
  const [sideBarVisible, setSideBarVisible] = useState(false);
  return (
    <>
      <div className="wrapper" id="about">
        <header>
          <Logo />
          <Navigation menuVisible={setSideBarVisible} />
        </header>
        <div className="banner" role="banner"></div>
        <div
          className="about-content"
          aria-hidden={!sideBarVisible ? false : true}
        >
          {data.map((quality, index) => {
            return (
              <Dropdown
                key={index}
                title={quality.title}
                desc={quality.description}
                tabIndex={sideBarVisible}
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
