type TaskType = {
  id: number;
  isDone: boolean;
  title: string;
};

type PropsType = {
  title: string;
  task: Array<TaskType>;
};

export function Todolist(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        <li>
          <input type="checkbox" checked={props.task[0].isDone} />
          <span>{props.task[0].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.task[1].isDone} />
          <span>{props.task[1].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.task[2].isDone} />
          <span>{props.task[2].title}</span>
        </li>
      </ul>
    </div>
  );
}
