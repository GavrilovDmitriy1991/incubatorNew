import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TasksType, Todolist } from "./Todolist";

export type FilterValuesType = "All" | "Completed" | "Active";

function App() {
  let [tasks, setTasks] = useState<Array<TasksType>>([
    { id: 1, title: "HTML", isDone: true },
    { id: 2, title: "CSS", isDone: false },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "HTML", isDone: true },
  ]);

  function removeTask(id: number) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  let [filter, setFilter] = useState<FilterValuesType>("All");
  let tasksForTodolist = tasks;
  if (filter === "Completed") {
    tasksForTodolist = tasks.filter((t) => t.isDone === true);
  }
  if (filter === "Active") {
    tasksForTodolist = tasks.filter((t) => t.isDone === false);
  }

  return (
    <Todolist
      title="What to learn"
      tasks={tasksForTodolist}
      removeTask={removeTask}
      changeFilter={changeFilter}
    />
  );
}

export default App;
