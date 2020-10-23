import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase}`;

  const Dropdown = () => (
    <label htmlFor="">
      {label}
      <select
        value={state}
        id={id}
        onChange={(event) => event.target.value}
        onBlur={(event) => event.target.value}
        disable={options.length === 0}
      >
        <option value="all">All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
