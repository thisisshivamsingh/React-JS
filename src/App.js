import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HooksCounter from "./components/HooksCounter";

function App() {
  return (
    <div className="App">
      <HookCounterFour />
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <ClassCounter /> */}
      {/* <HooksCounter /> */}
    </div>
  );
}

export default App;
