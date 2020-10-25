import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";

// cleanup function
// second argument

// windows size
// eventListener
// prob -> many eventListeners
// must be clean up
const UseEffectCleanup = () => {
  const [value, setValue] = useState(window.innerWidth);
  const setSize = () => {
    //triggering rerender because size change, state preserves the value
    setValue(window.innerWidth);
  };
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      // invoke when exit
      window.removeEventListener("resize", checkSize); // the same callback function has to be written
    };
  }); //[] wont workt with conditional render
  return (
    <>
      <h2>useEffect cleanup</h2>
      <h3>windows size </h3>
      <h1> {value} Px</h1>
    </>
  );
};

export default UseEffectCleanup;
