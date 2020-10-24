import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  //2 options of updating form
  //1 value update form
  //2 functional update form***
  const complexIncrease = () => {
    //pass in 2 argument 1. callback function which is going to run in ...ms  (2sec) 2. pass in value
    //prob->setfunc is asynchronous: click3times in 2sec-> 1 increase
    // setTimeout(() => {
    //   setValue(value + 1);
    // }, 2000);

    //use prev to not missing any value
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>useState counter example</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complexer counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};
export default UseStateCounter;
