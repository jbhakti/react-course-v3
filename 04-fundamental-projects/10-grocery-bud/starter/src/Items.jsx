import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ itemsList, removeItem, editItem }) => {
  return (
    <div className="items">
      {itemsList.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
