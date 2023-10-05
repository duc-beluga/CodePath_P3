import React from "react";

const DropDownButton = ({ setLocation }) => {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        Locations
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a onClick={() => setLocation("NewYork")}>New York, USA</a>
        </li>
        <li>
          <a onClick={() => setLocation("London")}>London, UK</a>
        </li>
        <li>
          <a onClick={() => setLocation("Tokyo")}>Tokyo, JP</a>
        </li>
      </ul>
    </div>
  );
};

export default DropDownButton;
