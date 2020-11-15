import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {" "}
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show ? <Item /> : <h1></h1>}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  //add the following lines for autochange/ doesnt need onClick
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize); // add <--> remove
    };
  }, []); // empty dependency
  return (
    <div style={{ marginTop: "2erem" }}>
      <h1>window</h1>
      <h2>size: {size} pixel</h2>
    </div>
  );
};
export default ShowHide;
