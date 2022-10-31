import React, { useReducer } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassCounterOne from "./components/ClassCounterOne";
import ClassMouse from "./components/ClassMouse";
import ClassTimer from "./components/ClassTimer";
import ComponentA2 from "./components/ComponentA2";
import ComponentB2 from "./components/ComponentB2";
import ComponentC from "./components/ComponentC";
import ComponentC2 from "./components/ComponentC2";
import Counter from "./components/Counter";
import CounterOne from "./components/CounterOne";
import CounterOneA from "./components/CounterOneA";
import CounterThree from "./components/CounterThree";
import CounterTwo from "./components/CounterTwo";
import CounterTwoA from "./components/CounterTwoA";
import DataFetching from "./components/DataFetching";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import FocusInput from "./components/FocusInput";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookMouse from "./components/HookMouse";
import HooksCounter from "./components/HooksCounter";
import HookTimer from "./components/HookTimer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";
import ParentComponent from "./components/ParentComponent";
import UserForm from "./components/UserForm";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        {/* <UserForm /> */}
        {/* <CounterOneA /> */}
        {/* <CounterTwoA /> */}
        {/* <DocTitleOne /> */}
        {/* <DocTitleTwo /> */}
        {/* <FocusInput /> */}
        {/* <ClassTimer /> */}
        {/* <HookTimer /> */}
        {/* <Counter /> */}
        {/* <ParentComponent /> */}
        {/* <DataFetchingOne /> */}
        {/* <DataFetchingTwo /> */}
        {/* Count-{count}
        <ComponentA2 />
        <ComponentB2 />
        <ComponentC2 /> */}
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}
        {/* <UserContext.Provider value={"Shivam"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
        {/* <DataFetching /> */}
        {/* <IntervalClassCounter /> */}
        {/* <IntervalHookCounter /> */}
        {/* <ClassMouse /> */}
        {/* <HookMouse /> */}
        {/* <MouseContainer /> */}
        {/* <ClassCounterOne /> */}
        {/* <HookCounterOne /> */}
        {/* <HookCounterFour /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterTwo /> */}
        {/* <ClassCounter /> */}
        {/* <HooksCounter /> */}
      </div>
    </CountContext.Provider>
  );
}

export default App;
