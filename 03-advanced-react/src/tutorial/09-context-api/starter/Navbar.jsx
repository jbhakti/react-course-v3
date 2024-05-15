import React, { useState, createContext, useContext } from "react";
import NavLinksComponent from "./NavLinksComponent";

export const NavBarContext = createContext();

// Custome Hook

export const useNavBarContextHook = () => useContext(NavBarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: "Bhakti" });
  const logout = () => {
    setUser("");
  };
  return (
    <NavBarContext.Provider value={{ loggedInUser: user, logoutFunc: logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinksComponent />
      </nav>
    </NavBarContext.Provider>
  );
};

export default Navbar;
