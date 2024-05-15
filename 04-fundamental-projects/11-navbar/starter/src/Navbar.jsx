import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { social, links } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linkRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkContainerStyle = {
    height: showLinks
      ? `${linkRef.current.getBoundingClientRect().height}px`
      : 0,
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
        {/* {showLinks && ( */}
        {/* <div
          className={`links-container ${showLinks && "show-links-container"}`}
        > */}
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkContainerStyle}
        >
          <ul className="links" ref={linkRef}>
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
        {/* )} */}

        {/* Social links */}
        <ul className="social-icons">
          {social.map((iconInfo) => {
            const { id, url, icon } = iconInfo;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
