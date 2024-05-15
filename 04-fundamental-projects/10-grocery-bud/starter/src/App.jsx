import { useEffect, useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

// Alternative 1 for the initially getting the values from localstorage. Call below function in groceryList useSate
const getLocalStrorage = () => {
  let list = localStorage.getItem("list");
  const retrievedItems = list ? JSON.parse(list) : [];
  return retrievedItems;
};

// Alternative 2 for the initially getting the values from localstorage. Assign this default value to groceryList useSate
const defaultList = JSON.parse(localStorage.getItem("list") || []);

const App = () => {
  // const [groceryList, setGroceryList] = useState([]);
  // const [groceryList, setGroceryList] = useState(getLocalStrorage());
  const [groceryList, setGroceryList] = useState(defaultList);

  /* useEffect(() => {
    let list = localStorage.getItem("list");
    const retrievedItems = list ? JSON.parse(list) : [];
    setGroceryList(retrievedItems);
  }, []); */

  const addListItem = (item) => {
    const newItem = {
      name: item,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...groceryList, newItem];
    setGroceryList(newItems);
    setLocalStorage(newItems);
    toast.success("Item added");
  };

  const removeItem = (itemId) => {
    const updatedList = groceryList.filter(
      (listItem) => listItem.id !== itemId
    );
    setGroceryList(updatedList);
    setLocalStorage(updatedList);
    toast.error("Item deleted!");
  };

  const editItem = (itemID) => {
    const newItems = groceryList.map((listItem) => {
      if (itemID === listItem.id) {
        const editedNewItem = { ...listItem, completed: !listItem.completed };
        return editedNewItem;
      }
      return listItem;
    });
    setGroceryList(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addFunc={addListItem} />
      <Items
        itemsList={groceryList}
        removeItem={removeItem}
        editItem={editItem}
      />
    </section>
  );
};

export default App;
