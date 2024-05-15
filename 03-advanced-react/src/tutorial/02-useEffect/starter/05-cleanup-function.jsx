import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");
  return (
    <>
      <h2>cleanup function</h2>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <ExampleComponent />}
    </>
  );
};

const ExampleComponent = () => {
  useEffect(() => {
    /* console.log("Thats interesting");
    const intervalID = setInterval(() => {
      console.log("Hello from interval");
    }, 1000);

    return () => {
      clearInterval(intervalID);
    }; */

    const someFunc = () => {
      // some logic
    };

    window.addEventListener("scroll", someFunc);

    return () => {
      window.removeEventListener("scroll", someFunc);
    };
  }, []);
  return <h3>This is Example Component</h3>;
};
export default CleanupFunction;
