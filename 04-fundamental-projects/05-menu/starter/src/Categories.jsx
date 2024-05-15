import React from "react";

const Categories = ({ categories, filteredMenu }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            className="btn"
            key={category}
            onClick={() => filteredMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
