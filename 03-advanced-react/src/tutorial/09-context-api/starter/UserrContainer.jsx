import React from "react";
import { useNavBarContextHook } from "./Navbar";
// import { NavBarContext } from "./Navbar";

const UserrContainer = () => {
  const { loggedInUser, logoutFunc } = useNavBarContextHook();
  return (
    <div className="user-container">
      <p>
        {loggedInUser.name ? `Welcome Back, ${loggedInUser.name}` : `Click to`}
      </p>
      <button className="btn" onClick={logoutFunc}>
        {loggedInUser?.name ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default UserrContainer;
