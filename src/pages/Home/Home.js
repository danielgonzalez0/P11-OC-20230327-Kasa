import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Header/Logo';
import Navigation from '../../components/Header/Navigation';
import logement from '../../data/logements.json';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(logement);
  }, []);

  return (
    <>
      <div className="wrapper" id="home">
        <header>
          <Logo />
          <Navigation />
        </header>
        <div className="banner" role="banner">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <main>
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
