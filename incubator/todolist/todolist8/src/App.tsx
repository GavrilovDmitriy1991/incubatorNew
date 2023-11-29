import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todolist } from "./Todolist";
import { v1 } from "uuid";

function App() {
  type FilterValueType = "All" | "Active" | "Completed";

  let [tasks, setTasks] = useState([
    { id: v1(), title: "Css", isDone: false },
    { id: v1(), title: "Css", isDone: true },
    { id: v1(), title: "Css", isDone: false },
  ]);

  let [filter, setFilter] = useState<FilterValueType>("All");

  function removeTask(id: string) {
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
