import React from "react";
import { Button } from "./Button";

export type TodoListPropsType = {
  title: string;
  tasks: Array<TaskType>;
};

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

export const Todolist: React.FC<TodoListPropsType> = (props) => {

const listItems: Array<JSX.Element> = []
for (let i = 0; i < props.tasks.length; i++){
  const listItem: JSX.Element = (
    <li>
      <input type="checkbox" checked={props.tasks[i].isDone} />
      <span>{props.tasks[i].title}</span>
    </li>
    listItems.push(listItem)
  );
}

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input type="text" />
        <Button name="+" />
      </div>
      <ul>
        <li>
          <input type="checkbox" checked={true} />
          <span>Html</span>
        </li>
        <li>
          <input type="checkbox" checked={true} />
          <span>Javascript</span>
        </li>
        <li>
          <input type="checkbox" checked={true} />
          <span>React</span>
        </li>
      </ul>
      <div>
        <Button name="All" />
        <Button name="Active" />
        <Button name="Completed" />
      </div>
    </div>
  );
};
