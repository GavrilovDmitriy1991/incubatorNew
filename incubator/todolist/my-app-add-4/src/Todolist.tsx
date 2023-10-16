import { KeyboardEvent, MouseEvent, ChangeEvent, useState } from "react";
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

  let onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTaskTitle(e.currentTarget.value);

  let addTask = () => {
    props.addTask(newTaskTitle);
    setNewTaskTitle("");
  };

  let onClickAddTaskHandler = (e: MouseEvent<HTMLButtonElement>) => {
    addTask();
  };

  let onKeyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  let filterAllFucntionHanlder = () => {
    props.filterTasks("all");
  };
  let filterActiveFucntionHanlder = () => {
    props.filterTasks("active");
  };
  let filterCompletedFucntionHanlder = () => {
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
          return (
            <li>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
              <button
                onClick={() => {
                  props.removeTask(t.id);
                }}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={filterAllFucntionHanlder}>All</button>
      <button onClick={filterActiveFucntionHanlder}>Active</button>
      <button onClick={filterCompletedFucntionHanlder}>Completed</button>
    </>
  );
}
