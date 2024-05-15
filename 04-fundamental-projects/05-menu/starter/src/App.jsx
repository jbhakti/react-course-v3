import Title from "./Title";
import menu from "./data";
import { useState } from "react";
import MenuList from "./MenuList";
import Categories from "./Categories";

const allCategories = [
  "all",
  ...new Set(menu.map((menuData) => menuData.category)),
];

const App = () => {
  const [menuData, setMenuData] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  /* const tempCategories = new Set();
  menuData.map((menu) => tempCategories.add(menu.category));
  console.log(tempCategories);
  const categories = ["all", ...tempCategories];
  console.log(categories); */

  const filteredMenu = (categoryType) => {
    if (categoryType === "all") {
      setMenuData(menu);
    } else {
      const updatedMenu = menuData.filter(
        (menuItem) => menuItem.category === categoryType
      );
      setMenuData(updatedMenu);
    }
  };

  return (
    <main>
      <section className="menu">
        <Title title="Our Menu" />
        <Categories categories={categories} filteredMenu={filteredMenu} />
        <MenuList items={menuData} />
      </section>
    </main>
  );
};
export default App;
