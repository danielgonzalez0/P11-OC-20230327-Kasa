import React, { useContext, useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Header/Logo';
import Navigation from '../../components/Header/Navigation';
import logement from '../../data/logements.json';
import { SideBarContext } from '../../components/AppContext/AppContext';

/**
 * react component given the html structure of the home page
 * @returns {React.ReactElement} Home
 */
const Home = () => {
  const [data, setData] = useState([]);
  const { sideBarIsVisible, setSideBarIsVisible } = useContext(SideBarContext);

  useEffect(() => {
    setData(logement);
    setSideBarIsVisible(false);
  }, []);

  return (
    <>
      <div className="wrapper" id="home">
        <header>
          <Logo />
          <Navigation />
        </header>
        <div className="banner" role="banner">
          <h1>
            <span>Chez vous,</span> <span>partout et ailleurs</span>
          </h1>
        </div>
        <main aria-hidden={sideBarIsVisible === false ? false : true}>
          {data.map((flat) => (
            <Card key={flat.id} flat={flat} />
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
