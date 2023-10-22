import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  let task1 = [
    { id: 1, isDone: true, title: "CSS" },
    { id: 2, isDone: false, title: "Javascript" },
    { id: 3, isDone: true, title: "React" },
  ];
  let task2 = [
    { id: 1, isDone: true, title: "Terminator" },
    { id: 2, isDone: false, title: "JRembo" },
    { id: 3, isDone: true, title: "Harry Potter" },
  ];
  return (
    <div>
      <Todolist title="What to learn" task={task1} />
      <Todolist title="Movies" task={task2} />
    </div>
  );
}

export default App;
