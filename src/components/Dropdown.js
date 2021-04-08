import React from 'react';

const Dropdown = ({ label, options, set }) => {
  return (
    <div>
      <label htmlFor={label}>
        <h3>{label}</h3>
      </label>
      <select id={label} onChange={(e) => set(e.target.selectedIndex + 9)}>
        {options.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
