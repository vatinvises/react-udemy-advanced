import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter

// useEffect = work outside the component
// pass in callback function
// when render component -> useEffect is called
// render twice because of strict mode
const UseEffectBasics = () => {
  const [value, setValue] = useState(0); //preserve the value between renders
  useEffect(() => {
    document.title = `new message(${value})`; //tab with number(x)
  }); // runs after every render
  return (
    <>
      <h2>{value}</h2>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        increase
      </button>
    </>
  );
};

export default UseEffectBasics;
