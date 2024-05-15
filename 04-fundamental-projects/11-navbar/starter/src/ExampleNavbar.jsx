import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { social, links } from "./data";
import logo from "./logo.svg";

const ExampleNavbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkRef = useRef(null);

  const toggleLinks = () => {
    console.log(linkRef.current.getBoundingClientRect().height);
    setShowLinks(!showLinks);
  };

  const linkContainerStyle = {
    height: showLinks
      ? `${linkRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        {/* This won't work as we are setting the heignt of links to zero and the  getBoundingClientRect will always pick heignt as 0. In previous way, we never set the height of the links class as 0, we were setting the height of links-container class to 0, the links class always had the height*/}
        <ul className="links" ref={linkRef} style={linkContainerStyle}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href="url">{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default ExampleNavbar;
