import React, { useState } from 'react';

const Dropdown = ({ title, desc }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown-about">
      <button className="btn" onClick={() => setOpen(!open)}>
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

export default Dropdown;
