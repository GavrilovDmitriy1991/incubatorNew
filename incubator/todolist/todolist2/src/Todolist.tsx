import { FilterValuesType } from "./App";

export type TasksType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TasksType>;
  removeTask: (value: number) => void;
  changeFilter: (value: FilterValuesType) => void;
};

export function Todolist(props: PropsType) {
  return (
    <div className="App">
      <h3>{props.title}</h3>
      <input type="text" />
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
          props.changeFilter("All");
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          props.changeFilter("Active");
        }}
      >
        Active
      </button>
      <button
        onClick={() => {
          props.changeFilter("Completed");
        }}
      >
        Completed
      </button>
    </div>
  );
}
