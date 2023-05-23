import React, { useContext, useEffect, useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Header/Logo';
import Navigation from '../../components/Header/Navigation';
import { aboutData } from '../../data/dataAbout';
import { SideBarContext } from '../../components/AppContext/AppContext';

/**
 * react component given the html structure of the About page
 * @returns {React.ReactElement} About
 */
const About = () => {
  const [data] = useState(aboutData);
  const { sideBarIsVisible, setSideBarIsVisible } = useContext(SideBarContext);

  useEffect(() => {
    setSideBarIsVisible(false);
  }, []);
  return (
    <>
      <div className="wrapper" id="about">
        <header>
          <Logo />
          <Navigation />
        </header>
        <div className="banner" role="banner"></div>
        <div
          className="about-content"
          aria-hidden={!sideBarIsVisible ? false : true}
        >
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
