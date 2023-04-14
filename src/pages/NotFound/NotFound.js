import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Header/Logo';
import Navigation from '../../components/Header/Navigation';
import { SideBarContext } from '../../components/AppContext/AppContext';

/**
 * React component given the HTML structure of the error page
 * @returns {React.ReactElement} NotFound
 */
const NotFound = () => {
  const { sideBarIsVisible } = useContext(SideBarContext);
  return (
    <>
      <div className="wrapper">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main
          className="notFound-main"
          aria-hidden={sideBarIsVisible === false ? false : true}
        >
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
          <NavLink to="/" tabIndex={sideBarIsVisible === false ? '0' : '-1'}>
            <p>Retourner sur la page d&apos;accueil</p>
          </NavLink>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
