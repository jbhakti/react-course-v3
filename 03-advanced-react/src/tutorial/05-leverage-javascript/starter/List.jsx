import React from "react";
import Person from "./Person";

const List = ({ peopleList }) => {
  return (
    <div>
      {peopleList.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};

export default List;
