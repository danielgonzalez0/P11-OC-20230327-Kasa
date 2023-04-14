import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SideBarContext } from '../AppContext/AppContext';

/**
 * React component given a link to a specific flat page
 * @param {PropTypes} flat the flat id and the flat image cover are used on the card
 * @returns {React.ReactElement} Card with a link to specific flat page
 */
const Card = ({ flat }) => {
  const { sideBarIsVisible } = useContext(SideBarContext);

  return (
    <NavLink
      to={'/flat/' + flat.id}
      state={{ from: flat }}
      className="card"
      tabIndex={sideBarIsVisible === true ? '-1' : '0'}
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
};

export default Card;
