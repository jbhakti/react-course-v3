import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increament} className="btn">
        Increment
      </button>
    </>
  );
};

export default UseStateBasics;
