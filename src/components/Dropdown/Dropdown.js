import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * React component given the structure of a Dropdown element
 * @param {PropTypes} title dropdown title
 * @param {PropTypes} desc dropdown contain
 * @param {PropTypes} tabIndex props used for accessibility behavior when mavigation sidebar is active
 * @returns {React.ReactElement} Dropdown
 */
const Dropdown = ({ title, desc, tabIndex }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown-about">
      <button
        className="btn"
        onClick={() => setOpen(!open)}
        tabIndex={tabIndex ? '-1' : '0'}
      >
        {title}
        <i
          className={open ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'}
        ></i>
      </button>
      {open &&
        (!Array.isArray(desc) ? (
          <p>{desc}</p>
        ) : (
          <ul>
            {desc.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ))}
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  tabIndex: PropTypes.bool,
};

export default Dropdown;
