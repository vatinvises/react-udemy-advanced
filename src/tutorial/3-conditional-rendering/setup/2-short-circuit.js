import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setError] = useState(false);
  const firstValue = text || "hello world"; // AND  " " -> 0 || "h" = "h"
  const secondValue = text && "hello world"; // OR  "k" -> 1 && "h" = "h"
  // OR if text is empty, return john doe
  // AND if it is true, return the element
  // AND if it is false, return the element

  //how to toggle
  //ternary operator ? T:F
  return (
    <>
      {/*    <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || "display if there is no text"}</h1>
      <button className="btn" onClick={() => setError(!isError)}>
        toggle error
      </button>
      {isError ? <h2>no error</h2> : <h2>error</h2>}
    </>
  );
};

export default ShortCircuit;
