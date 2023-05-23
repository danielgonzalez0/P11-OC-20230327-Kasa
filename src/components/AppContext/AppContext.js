import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

//Use context for sidebar menu
export const SideBarContext = createContext(false);

export const SideBarProvider = ({ children }) => {
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);

  const toggleSideBar = () => {
    setSideBarIsVisible(!sideBarIsVisible);
  };

  return (
    <SideBarContext.Provider
      value={{ sideBarIsVisible, setSideBarIsVisible, toggleSideBar }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

//PropTypes declaration
SideBarProvider.propTypes = {
  children: PropTypes.any,
};
