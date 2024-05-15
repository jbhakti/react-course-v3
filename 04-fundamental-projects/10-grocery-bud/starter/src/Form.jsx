import React, { useState } from "react";

const Form = ({ addFunc }) => {
  const [groceryItem, setGroceryItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!groceryItem) return;
    addFunc(groceryItem);
    setGroceryItem("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Buddy</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={groceryItem}
          onChange={(e) => setGroceryItem(e.target.value)}
        />
        <button
          type="submit"
          className="btn"
          //   onClick={() => console.log(groceryItem)}
        >
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
