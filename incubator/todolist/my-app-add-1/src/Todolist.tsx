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
  changeChecked: (id: string, isDone: boolean) => void;
};

export function Todolist(props: PropsType) {
  let [newTaskTitle, setNewTaskTitle] = useState("");

  let onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };

  let addTaskHanler = () => {
    props.addTask(newTaskTitle);
    setNewTaskTitle("");
  };

  let onClickAddTaskHandler = (e: MouseEvent<HTMLButtonElement>) => {
    addTaskHanler();
  };

  let onKeyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTaskHanler();
    }
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
        onChange={onChangeValueHandler}
        onKeyDown={onKeyDownAddTaskHandler}
      />
      <button onClick={onClickAddTaskHandler}>+</button>
      <ul>
        {props.tasks.map((t) => {
          let removeFunction = () => {
            props.removeTask(t.id);
          };

          return (
            <li key={t.id}>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
              <button onClick={removeFunction}>x</button>
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
