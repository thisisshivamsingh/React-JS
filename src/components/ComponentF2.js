import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentF2() {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentF2 - {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}
export default ComponentF2;
