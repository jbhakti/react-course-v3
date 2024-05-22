import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { StrapiContext } from "./context";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, setPageID } = useContext(StrapiContext);
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageID(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
