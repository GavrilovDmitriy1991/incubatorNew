import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todolist } from "./Todolist";
import { v1 } from "uuid";

export type FilterValueType = "All" | "Active" | "Completed";

function App() {
  let [tasks, setTasks] = useState([
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "CSS", isDone: false },
    { id: v1(), title: "CSS", isDone: true },
  ]);

  let [filter, setFilter] = useState("All");

  function removeTask(id: string) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function filterTasks(filter: FilterValueType) {
    setFilter(filter);
  }

  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  let filteredTasks = tasks;
  if (filter === "Active") {
    filteredTasks = tasks.filter((t) => t.isDone === false);
  }
  if (filter === "Completed") {
    filteredTasks = tasks.filter((t) => t.isDone === true);
  }

  return (
    <Todolist
      title="What to learn"
      tasks={filteredTasks}
      removeTask={removeTask}
      filterTasks={filterTasks}
    />
  );
}

export default App;
