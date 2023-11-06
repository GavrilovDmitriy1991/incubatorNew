import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";
import { v1 } from "uuid";

function App() {
  const todoListTitle_1: string = "What to learn";
  const todoListTitle_2: string = "What to buy";

  const tasks_1: Array<TaskType> = [
    { id: 1, title: "Html", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ];
  const tasks_2: Array<TaskType> = [
    { id: 4, title: "Bear", isDone: true },
    { id: 5, title: "Fish", isDone: true },
    { id: 6, title: "Cheaps", isDone: false },
  ];
  return (
    <div className="App">
      <Todolist title={todoListTitle_1} tasks={tasks_1} />
      {/* {Todolist(title: "What to learn", tasks: tasks_1)} */}
      <Todolist title={todoListTitle_2} tasks={tasks_2} />
      {/* {Todolist(title: "What to buy", tasks: tasks_2)} */}
    </div>
  );
}

export default App;
