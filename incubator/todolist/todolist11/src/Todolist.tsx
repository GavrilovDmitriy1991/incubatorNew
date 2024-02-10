import { KeyboardEvent, ChangeEvent, useState } from "react";
import { FilterValueType } from "./App";

type TasksType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TasksType>;
  removeTask: (id: string) => void;
  filterTasks: (filter: FilterValueType) => void;
  addTask: (title: string) => void;
};

export function Todolist(props: PropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.addTask(newTaskTitle);
      setNewTaskTitle("");
    }
  };

  const addTask = () => {
    props.addTask(newTaskTitle);
    setNewTaskTitle("");
  };

  const onAllCleakHandler = () => {
    props.filterTasks("All");
  };
  const onActiveCleakHandler = () => {
    props.filterTasks("Active");
  };
  const onCompletedCleakHandler = () => {
    props.filterTasks("Completed");
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <input
        type="text"
        value={newTaskTitle}
        onChange={onNewTitleChangeHandler}
        onKeyDown={onKeyPressHandler}
      />
      <button onClick={addTask}>+</button>
      <ul>
        {props.tasks.map((t) => {
          const onRemoveHandler = () => {
            props.removeTask(t.id);
          };

          return (
            <li key={t.id}>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
              <button onClick={onRemoveHandler}>x</button>
            </li>
          );
        })}
      </ul>

      <button onClick={onAllCleakHandler}>All</button>
      <button onClick={onCompletedCleakHandler}>Completed</button>
      <button onClick={onActiveCleakHandler}>Active</button>
    </div>
  );
}
