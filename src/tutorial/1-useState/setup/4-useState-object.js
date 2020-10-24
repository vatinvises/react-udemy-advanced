import React, { useState } from "react";
import { Fragment } from "react";

const UseStateObject = () => {
  //person as object
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "hello world" }); //set up as msg and pass as prop of mes, use SPREAD operator to prevent a wipeout (leave things as they are and overwrite just message)
  };
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
