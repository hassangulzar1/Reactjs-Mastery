"use client";
import { useState } from "react";
import Todos from "@/components/Todos";
import Todo from "@/models/todo";
import NewTodo from "@/components/NewTodo";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}
