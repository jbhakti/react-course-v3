import React from "react";
import Person from "./Person";

const List = ({ birthdayList }) => {
  return (
    <section>
      {birthdayList.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};

export default List;
