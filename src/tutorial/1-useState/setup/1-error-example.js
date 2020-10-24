import React from "react";
// change the name when pressing the button
const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "hello people"; // change the value --> then it must be rerendered!!! -> useState
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
