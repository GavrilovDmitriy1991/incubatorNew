import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  let task1 = [
    { id: 1, isDone: true, title: "HTML" },
    { id: 2, isDone: true, title: "CSS" },
    { id: 3, isDone: false, title: "REACT" },
  ];
  let task2 = [
    { id: 1, isDone: true, title: "Rembo" },
    { id: 2, isDone: true, title: "Juracik world" },
    { id: 3, isDone: false, title: "Star Wars" },
  ];

  return (
    <div>
      <Todolist title="What to learn" task={task1} />
      <Todolist title="Movies" task={task2} />
    </div>
  );
}

export default App;
