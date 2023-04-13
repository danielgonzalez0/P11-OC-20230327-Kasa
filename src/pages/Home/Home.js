import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Header/Logo';
import Navigation from '../../components/Header/Navigation';
import logement from '../../data/logements.json';

/**
 * react component given the html structure of the home page
 * @returns {React.ReactElement} Home
 */
const Home = () => {
  const [data, setData] = useState([]);
  const [sideBarVisible, setSideBarVisible] = useState(false);

  useEffect(() => {
    setData(logement);
  }, []);

  return (
    <>
      <div className="wrapper" id="home">
        <header>
          <Logo />
          <Navigation menuVisible={setSideBarVisible} />
        </header>
        <div className="banner" role="banner">
          <h1>
            <span>Chez vous,</span> <span>partout et ailleurs</span>
          </h1>
        </div>
        <main aria-hidden={!sideBarVisible ? false : true}>
          {data.map((flat) => (
            <Card key={flat.id} flat={flat} menuVisible={sideBarVisible} />
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
