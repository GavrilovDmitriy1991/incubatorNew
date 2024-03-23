import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  let tasks1 = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ];
  let tasks2 = [
    { id: 1, title: "asdf", isDone: false },
    { id: 2, title: "aasdS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ];

  return (
    <div>
      <Todolist title="What to learn" tasks={tasks1} />
      <Todolist title="What do you do" tasks={tasks2} />
    </div>
  );
}

export default App;
