import React, { useContext } from "react";
import sublinks from "./data";
import { StrapiContext } from "./context";

const NavLinks = () => {
  const { setPageID } = useContext(StrapiContext);
  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageID(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
