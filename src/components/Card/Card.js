import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * React component given a link to a specific flat page
 * @param {PropTypes} flat the flat id and the flat image cover are used on the card
 * @param {PropTypes} menuVisible props used for accessibility behavior when mavigation sidebar is active
 * @returns {React.ReactElement} Card with a link to specific flat page
 */
const Card = ({ flat, menuVisible }) => {
  return (
    <NavLink
      to={'/flat/' + flat.id}
      state={{ from: flat }}
      className="card"
      tabIndex={menuVisible === true ? '-1' : '0'}
    >
      <div
        className="card-container"
        style={{ backgroundImage: `url(${flat.cover})` }}
      >
        <p>{flat.title}</p>
      </div>
    </NavLink>
  );
};

Card.propTypes = {
  flat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
    pictures: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    host: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
    rating: PropTypes.string,
    location: PropTypes.string,
    equipments: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  menuVisible: PropTypes.bool,
};

export default Card;
