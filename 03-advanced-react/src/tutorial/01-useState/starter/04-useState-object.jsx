import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Bhakti",
    age: 27,
    hobby: "Reading books",
  });

  const showNext = () => {
    /* setPerson({
      name: "Peter",
      age: 19,
      hobby: "Playing Copmputer Games",
    }); */
    setPerson({ ...person, name: "Peter" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys : {person.hobby}</h3>
      <button className="btn" onClick={showNext}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
