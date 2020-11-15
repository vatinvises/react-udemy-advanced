import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world"; // AND  " " -> 0 || "h" = "h"
  const secondValue = text && "hello world"; // OR  "k" -> 1 && "h" = "h"
  // OR if text is empty, return john doe
  // AND if it is true, return the element
  // AND if it is false, return the element

  return (
    <>
      {/*    <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || "display if there is no text"}</h1>
      {text && <h1>text is {text}</h1>}
      {!text && <h1>text is empty</h1>}
    </>
  );
};

export default ShortCircuit;
