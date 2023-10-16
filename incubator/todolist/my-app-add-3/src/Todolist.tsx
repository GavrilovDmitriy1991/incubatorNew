import { MouseEvent, KeyboardEvent, ChangeEvent, useState } from "react";
import { FilterType } from "./App";

type TasksType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TasksType>;
  removeTask: (id: string) => void;
  filterTasks: (filterType: FilterType) => void;
  addTask: (title: string) => void;
};

export function Todolist(props: PropsType) {
  let [newTaskTitle, setNewTaskTitle] = useState("");

  let onChangeValueFunction = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };

  let addFunctionHandler = () => {
    props.addTask(newTaskTitle);
    setNewTaskTitle("");
  };

  let onKeyAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addFunctionHandler();
    }
  };

  let onClickAddTask = (e: MouseEvent<HTMLButtonElement>) => {
    addFunctionHandler();
  };

  let filterAllFunction = () => {
    props.filterTasks("all");
  };
  let filterActiveFunction = () => {
    props.filterTasks("active");
  };
  let filterCompletedFunction = () => {
    props.filterTasks("completed");
  };

  return (
    <>
      <h3>{props.title}</h3>
      <input
        type="text"
        value={newTaskTitle}
        onChange={onChangeValueFunction}
        onKeyDown={onKeyAddTask}
      />
      <button onClick={onClickAddTask}>+</button>
      <ul>
        {props.tasks.map((t) => {
          let removeTaskHandler = () => {
            props.removeTask(t.id);
          };
          return (
            <li>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
              <button onClick={removeTaskHandler}>x</button>
            </li>
          );
        })}
      </ul>
      <button onClick={filterAllFunction}>All</button>
      <button onClick={filterActiveFunction}>Active</button>
      <button onClick={filterCompletedFunction}>Completed</button>
    </>
  );
}
