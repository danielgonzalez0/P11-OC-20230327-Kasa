import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './pages/Router/Router';
import './style/index.scss';
import {
  SideBarNavIsVisible,
  SideBarProvider,
} from './components/AppContext/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SideBarProvider>
      <Router />
    </SideBarProvider>
  </React.StrictMode>
);
