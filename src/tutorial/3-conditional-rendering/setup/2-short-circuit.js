import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world"; // AND  " " -> 0 || "h" = "h"
  const secondValue = text && "hello world"; // OR  "k" -> 1 && "h" = "h"

  return (
    <>
      <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1>
    </>
  );
};

export default ShortCircuit;
