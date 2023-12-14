"use client";
import { useRef } from "react";
const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const eneteredText = todoTextInputRef.current!.value;

  if (eneteredText.trim().length === 0) {
    // throw an error
    return;
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text"></label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
