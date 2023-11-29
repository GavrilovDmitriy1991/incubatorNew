type TasksType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TasksType>;
  removeTask: (id: string) => void;
  filterTasks: (filter: any) => void;
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
            <li key={t.id}>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
              <button onClick={() => props.removeTask(t.id)}>X</button>
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
          props.filterTasks("Comleted");
        }}
      >
        Completed
      </button>
    </div>
  );
}
