import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Header/Logo';
import Navigation from '../../components/Header/Navigation';

const NotFound = () => {
  return (
    <>
      <div className="wrapper">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main className="notFound-main">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <NavLink to="/">
            <p>Retourner sur la page d'accueil</p>
          </NavLink>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
