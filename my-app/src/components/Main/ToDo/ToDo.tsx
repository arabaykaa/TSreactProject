import React, { useState, useEffect } from "react";
import { ITodo } from "../../interfaces";
import c from "./ToDo.module.css";
import ToDoList from "./ToDoDir/ToDoList";
import ToDoReturn from "./ToDoDir/ToDoReturn";

const ToDo: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    //localStorage.getItem("todos") || [];
    //setTodos(JSON.parse(saved));
    setTodos(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const AddHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    if (title !== "") {
      setTodos((prev) => [newTodo, ...todos]);
    }
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shure = window.confirm("Are you shure?");
    if (shure) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div className={c.mainContainer}>
      <div className={c.container}>
        <ToDoList onAdd={AddHandler} />
        <ToDoReturn
          todos={todos}
          onRemove={removeHandler}
          onToggle={toggleHandler}
        />
      </div>
    </div>
  );
};

export default ToDo;
