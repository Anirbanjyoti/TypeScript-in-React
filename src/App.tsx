import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let name: string = "Anirban";
  let age: number = 17;
  let isSmart: boolean = true;

  let fruits: string[] = ["55", "66", "56"];

  interface Car{
    color: string;
    // optional ? 
    CC?: number;
    Milage: number;
    // Union 
    location? : string | number
  }

  const car:Car = {
    color: "white",
    Milage: 18,
    location: 55
  };

  return <div className="App"></div>;
}

export default App;
