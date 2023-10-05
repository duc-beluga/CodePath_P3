import React from "react";

const Navbar = ({ setLocation }) => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">World Tour</a>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-outline btn-primary"
          onClick={() => setLocation("")}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Navbar;
