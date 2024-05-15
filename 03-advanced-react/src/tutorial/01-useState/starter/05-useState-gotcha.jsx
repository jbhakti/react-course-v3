import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setValue(value + 1);
    /* setValue((prevState) => {
      return prevState + 1;
    }); */
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        Increase By 1
      </button>
    </>
  );
};

export default UseStateGotcha;
