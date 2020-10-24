import React, { useState } from "react";
import { Fragment } from "react";

const UseStateObject = () => {
  //person as object
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  //set up 3 seperate state values, and use handler method
  const [name, setName] = useState("peter");
  const [age, setAge] = useState("24");
  const [message, setMessage] = useState("random message");
  const changeMessage = () => {
    //  setPerson({ ...person, message: "hello world" }); //set up as msg and pass as prop of mes, use SPREAD operator to prevent a wipeout (leave things as they are and overwrite just message)
    setMessage("hello world");
  };
  //delete person because we re not dealing with obj
  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{message}</h2>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
