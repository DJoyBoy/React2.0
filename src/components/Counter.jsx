import React, { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);

  function plass() {
    setCount(count + 1);
  }

  function delate() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={plass}>+</button>
      <button onClick={delate}>-</button>
    </div>
  );
};

export default Counter;
