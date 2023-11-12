import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todolist } from "./Todolist";

export type FilterValueType = "All" | "Active" | "Completed";

function App() {
  let [tasks, setTasks] = useState([
    { id: 1, title: "HTML", isDone: true },
    { id: 2, title: "HTML", isDone: false },
    { id: 3, title: "HTML", isDone: true },
  ]);

  let [filter, setFilter] = useState("All");

  function removeTask(id: number) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function filterTasks(filter: FilterValueType) {
    setFilter(filter);
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
