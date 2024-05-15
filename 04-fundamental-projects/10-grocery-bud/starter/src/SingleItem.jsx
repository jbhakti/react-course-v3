import React, { useState } from "react";

const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        className="single-item"
        // onChange={() => setChecked(!checked)}
        onChange={() => editItem(item.id)}
        checked={item.compled}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: `${item.compled ? "line-through" : "none"}`,
        }}
      >
        {item.name}
      </p>
      <button
        onClick={() => removeItem(item.id)}
        className="btn remove-btn"
        type="button"
      >
        Remove
      </button>
    </div>
  );
};

export default SingleItem;
