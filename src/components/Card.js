import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ flat }) => {

  return (
    <NavLink to={'/flat/' + flat.id} state={{ from: flat }}>
      <div
        className="card-container"
        style={{ backgroundImage: `url(${flat.cover})` }}
      >
        <div className="card-filter"></div>
        <p>{flat.title}</p>
      </div>
    </NavLink>
  );
};

export default Card;
