import { useState } from "react";
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
};

export function Todolist(props: PropsType) {
  let [newTaskValue, setNewTaskValue] = useState("");

  return (
    <div>
      <h3>{props.title}</h3>
      <input
        type="text"
        value={newTaskValue}
        onChange={(e) => {
          setNewTaskValue(e.currentTarget.value);
        }}
      />
      <button>+</button>
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
      <button
        onClick={() => {
          props.filterTasks("All");
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          props.filterTasks("Active");
        }}
      >
        Active
      </button>
      <button
        onClick={() => {
          props.filterTasks("Completed");
        }}
      >
        Completed
      </button>
    </div>
  );
}
