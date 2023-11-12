import { FilterValueType } from "./App";

type TasksType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TasksType>;
  removeTask: (value: number) => void;
  filterTasks: (value: FilterValueType) => void;
};

export function Todolist(props: PropsType) {
  return (
    <div>
      <h3></h3>
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
