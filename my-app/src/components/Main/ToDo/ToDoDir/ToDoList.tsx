import React, { useRef, useState } from "react";
import c from "./ToDoStyle.module.css";

interface TodoFormProps {
  onAdd(title: string): void;
}

const ToDoList: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      props.onAdd(event.currentTarget!.value);
      setTitle("");
    }
  };

  return (
    <div className={c.mainContainer}>
      <div className={c.formcontainer}>
        <label htmlFor="title" className={c.labelT}>
          Write ToDo
        </label>
        <input
          type="text"
          id="title"
          placeholder="to-do"
          className={c.todoInput}
          onKeyPress={(event) => keyPress(event)}
          onChange={changeHandler}
          value={title}
        />
      </div>
    </div>
  );
};

export default ToDoList;
