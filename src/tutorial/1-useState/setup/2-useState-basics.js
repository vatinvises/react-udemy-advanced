import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello world")); //function, return array (state), first is undefined, default value has to be passed
  // const value = useState(1)[0]; // look for 1st function [0]
  // const handler = useState(1)[1]; // function that control the value we have in the state
  // console.log(value, handler);

  // array destructuring instead of the above

  // HOOK RULES!
  // hook = UseXxx (Effect/Callback/State)
  // component where we invoke hook has to be in upper case: UseStateBasics
  // hook has to be in the function or component body
  // hook canNOT be called conditionally ex. if(hook)
  const [text, setText] = useState("default title"); //this is the HOOK (state value and func)

  const handleClick = () => {
    if (text === "sawasdee") {
      setText("default title");
    } else {
      setText("sawasdee");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
