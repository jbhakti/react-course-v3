import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [dataIs, setDataIs] = useState(data);

  const removeItem = (id) => {
    setDataIs(() => {
      return dataIs.filter((dataI) => dataI.id !== id);
    });
    // Simplified version of above
    /* const filteredData = dataIs.filter((dataI) => dataI.id !== id);
    setDataIs(filteredData); */
  };

  const removeAll = () => {
    setDataIs([]);
  };

  return (
    <>
      <h2>useState array example</h2>
      {dataIs.map((datum) => {
        return (
          <>
            <h4 id={datum.id}>{datum.name}</h4>
            <button onClick={() => removeItem(datum.id)} className="btn">
              Remove
            </button>
          </>
        );
      })}
      <div>
        {dataIs.length > 0 && <button onClick={removeAll}>Remove All</button>}
      </div>
    </>
  );
};

export default UseStateArray;
