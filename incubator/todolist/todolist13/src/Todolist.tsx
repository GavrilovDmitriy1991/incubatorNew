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
  const [newTitleValue, setNewTitleValue] = useState("");

  const addTask = (e: MouseEvent<HTMLButtonElement>) => {
    props.addTask(newTitleValue);
    setNewTitleValue("");
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.addTask(newTitleValue);
      setNewTitleValue("");
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitleValue(e.currentTarget.value);
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
      <h3>{props.title}</h3>
      <input
        type="text"
        value={newTitleValue}
        onChange={onChangeHandler}
        onKeyDown={onKeyPress}
      />
      <button onClick={addTask}>+</button>
      <ul>
        {props.tasks.map((t) => (
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
        ))}
      </ul>
      <button onClick={filterAllHandler}>All</button>
      <button onClick={filterActiveHandler}>Active</button>
      <button onClick={filterCompletedHandler}>Completed</button>
    </div>
  );
}
