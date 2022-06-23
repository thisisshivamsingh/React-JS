import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message />
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clerk" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clerk" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />
        <Hello /> */}
      </div>
    );
  }
}

export default App;
