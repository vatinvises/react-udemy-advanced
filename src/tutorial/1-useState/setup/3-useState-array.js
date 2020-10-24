import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); // <- for use it just once OR either import React, { useState } from "react";
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id != id); // filter unwanted it
    setPeople(newPeople);
  };
  return (
    // list, need key prop
    // clear all button
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              delete me
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear item
      </button>
    </>
  );
};

export default UseStateArray;
