import React, { useEffect } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
//   const [data, setData] = useState([]);

  useEffect(() => {}, []);
  return (
    <div>
      <header>
        <Logo />
        <Navigation />
      </header>
      <h1>home</h1>
    </div>
  );
};

export default Home;
