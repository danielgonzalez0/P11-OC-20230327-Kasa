import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const FlatSheet = () => {
  const [flatData, setFlatData] = useState({});
  const location = useLocation();

  useEffect(() => {
    const { state } = location;
    setFlatData(state.from);
  }, [location]);

  return (
    <>
      <div className="wrapper" id="flat-page">
        <header>
          <Logo />
          <Navigation />
        </header>
        <Gallery gallery={flatData.pictures} />
        <h1>{flatData.title}</h1>
      </div>
      <Footer />
    </>
  );
};

export default FlatSheet;
