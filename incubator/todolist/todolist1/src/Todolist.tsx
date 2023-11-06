import { Button } from "./Button";

type TasksType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TasksType>;
};

export function Todolist(props: PropsType) {
  return (
    <div className="App">
      <h3>{props.title}</h3>
      <input type="text" />
      <Button name="+" />
      <ul>
        <li>
          <input type="checkbox" checked={props.tasks[0].isDone} />
          <span>{props.tasks[0].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.tasks[1].isDone} />
          <span>{props.tasks[1].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.tasks[2].isDone} />
          <span>{props.tasks[2].title}</span>
        </li>
      </ul>
      <Button name="All" />
      <Button name="Active" />
      <Button name="Completed" />
    </div>
  );
}
