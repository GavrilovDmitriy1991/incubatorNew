import { KeyboardEvent, MouseEvent, ChangeEvent, useState } from "react";
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
  let [newTaskValue, setNewTaskValue] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskValue(e.currentTarget.value);
  };

  const addTaskHandler = (e: MouseEvent<HTMLButtonElement>) => {
    props.addTask(newTaskValue);
    setNewTaskValue("");
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.addTask(newTaskValue);
      setNewTaskValue("");
    }
  };

  const filterAllHandler = () => {
    props.filterTasks("All");
  };
  const filterActiveHandler = () => {
    props.filterTasks("Active");
  };
  const filterCompletedHandler = () => {
    props.filterTasks("Completed");
  };

  return (
    <div>
      <h3></h3>
      <input
        type="text"
        value={newTaskValue}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
      <button onClick={addTaskHandler}>+</button>
      <ul>
        {props.tasks.map((t) => {
          return (
            <li key={t.id}>
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
      <button onClick={filterAllHandler}>All</button>
      <button onClick={filterActiveHandler}>Active</button>
      <button onClick={filterCompletedHandler}>Completed</button>
    </div>
  );
}
