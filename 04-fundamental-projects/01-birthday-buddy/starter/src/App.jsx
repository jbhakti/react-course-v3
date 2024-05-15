import { useState } from "react";
import data from "./data";
import List from "./List";
const App = () => {
  const [birthdayList, setBirthdayList] = useState(data);

  const clearList = () => setBirthdayList([]);
  return (
    <>
      <main>
        <section className="container">
          <h3>{birthdayList.length} Birthdays Today!</h3>
          <List birthdayList={birthdayList}></List>
          <button type="button" className="btn btn-block" onClick={clearList}>
            Clear List
          </button>
        </section>
      </main>
    </>
  );
};
export default App;
