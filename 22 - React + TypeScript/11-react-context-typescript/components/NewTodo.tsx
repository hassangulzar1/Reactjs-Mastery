"use client";
import { TodosContext } from "@/store/todos-context";
import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const eneteredText = todoTextInputRef.current!.value;

    if (eneteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(eneteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text"></label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
