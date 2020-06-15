import React, { useState, useEffect, useRef } from "react";

export default () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();
  const prevName = useRef('');


  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    prevName.current = name;
  },[name]);

  const focus = () => inputRef.current.focus();

  return (
    <>
      <input
        value={name}
        ref={inputRef}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>My name is {name} and it is used to be {prevName.current}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </>
  );
};
