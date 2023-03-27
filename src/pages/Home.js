import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
  //   const [data, setData] = useState([]);

  useEffect(() => {}, []);
  return (
    <>
      <div className="wrapper">
        <header>
          <Logo />
          <Navigation />
        </header>
        <h1>home</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;
