import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  let tasks_1 = [
    { id: 1, title: "HTML", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ];
  return (
    <div>
      <Todolist title="What to learn" tasks={tasks_1} />;
      <Todolist title="What to learn" tasks={tasks_1} />;
    </div>
  );
}

export default App;
