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
  let tasksForTodolist = tasks;
  if (filter === "Active") {
    tasksForTodolist = tasks.filter((t) => t.isDone === false);
  }
  if (filter === "Completed") {
    tasksForTodolist = tasks.filter((t) => t.isDone === true);
  }

  function removeTask(id: number) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function filterTasks(filter: FilterValueType) {
    setFilter(filter);
  }

  return (
    <Todolist
      title="What to learn"
      tasks={tasksForTodolist}
      removeTask={removeTask}
      filterTasks={filterTasks}
    />
  );
}

export default App;
