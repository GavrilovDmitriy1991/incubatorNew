import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todolist } from "./Todolist";
import { v1 } from "uuid";

export type FilterType = "all" | "active" | "completed";

function App() {
  let [tasks, setTasks] = useState([
    { id: v1(), title: "react", isDone: true },
    { id: v1(), title: "react", isDone: false },
    { id: v1(), title: "react", isDone: true },
    { id: v1(), title: "react", isDone: false },
  ]);

  let [filter, setFilter] = useState<FilterType>("all");

  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    setTasks([newTask, ...tasks]);
  }

  function filterTasks(filterType: FilterType) {
    setFilter(filterType);
  }

  function removeTask(id: string) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  let filteredTasks = tasks;
  if (filter === "active") {
    filteredTasks = tasks.filter((t) => t.isDone === false);
  }
  if (filter === "completed") {
    filteredTasks = tasks.filter((t) => t.isDone === true);
  }
  return (
    <>
      <Todolist
        title="Todolist"
        tasks={filteredTasks}
        removeTask={removeTask}
        filterTasks={filterTasks}
        addTask={addTask}
      />
    </>
  );
}

export default App;
