import React, { useRef } from "react";
import c from "./ToDoStyle.module.css";

interface TodoFormProps {
  onAdd(title: string): void;
}

const ToDoList: React.FC<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className={c.mainContainer}>
      <div className={c.formcontainer}>
        <label htmlFor="title" className={c.labelT}>
          Write ToDo
        </label>
        <input
          ref={ref}
          type="text"
          id="title"
          placeholder="to-do"
          className={c.todoInput}
          onKeyPress={keyPress}
        ></input>
      </div>
    </div>
  );
};

export default ToDoList;
