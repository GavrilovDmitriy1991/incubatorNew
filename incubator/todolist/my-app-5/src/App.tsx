import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  let task_1 = [
    { id: 1, isDone: true, title: "HTML" },
    { id: 2, isDone: false, title: "HTML" },
    { id: 3, isDone: true, title: "HTML" },
  ];
  let task_2 = [
    { id: 1, isDone: true, title: "TERMINATOR" },
    { id: 2, isDone: false, title: "TERMINATOR" },
    { id: 3, isDone: true, title: "TERMINATOR" },
  ];

  return (
    <div>
      <Todolist title="What to learn" task={task_1} />
      <Todolist title="Movies" task={task_2} />
    </div>
  );
}

export default App;
