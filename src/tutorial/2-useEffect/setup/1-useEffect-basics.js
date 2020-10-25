import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter =  array(list) of dependency

// useEffect = work outside the component
// pass in callback function
// when render component -> useEffect is called
// render twice because of strict mode

// condition has to be used inside useEffect callback function
const UseEffectBasics = () => {
  // runs after every render
  const [value, setValue] = useState(0); //preserve the value between renders
  useEffect(() => {
    if (value >= 1) {
      document.title = `new message(${value})`; //tab with number(x)
    }
    //  }, []); // array(list) of dependency, blank [] = run only on the initial run
  }, [value]); // also run once we increase (dependency)value
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
