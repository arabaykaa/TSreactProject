import React from "react";
import { ITodo } from "../../../interfaces";
import c from "./ToDoStyle.module.css";

interface ToDoTitleProps {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
}

const ToDoReturn: React.FC<ToDoTitleProps> = ({
  todos,
  onRemove,
  onToggle,
}) => {
  const remove = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <ul className={c.returnUL}>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }

        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label className={c.outputtodo}>
              <div className={c.check}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={onToggle.bind(null, todo.id)}
                />
              </div>
              <div className={c.outputtxt}>
                <span>{todo.title}</span>
              </div>
              <div className={c.deletebtn}>
                <p onClick={(event) => remove(event, todo.id)}>Delete</p>
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoReturn;
