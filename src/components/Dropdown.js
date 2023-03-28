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
      {open && <p>{desc}</p>}
    </div>
  );
};

export default Dropdown;
