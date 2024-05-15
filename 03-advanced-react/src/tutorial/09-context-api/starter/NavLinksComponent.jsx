import React from "react";
import UserrContainer from "./UserrContainer";

const NavLinksComponent = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserrContainer />
    </div>
  );
};

export default NavLinksComponent;
