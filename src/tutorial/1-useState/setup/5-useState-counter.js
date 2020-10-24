import React, { useState } from "react";
//2 options of updating form
//1 value update form***
//2 functional update form
const UseStateCounter = () => {
  const [value, setValue] = useState(0);
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
    </>
  );
};
export default UseStateCounter;
