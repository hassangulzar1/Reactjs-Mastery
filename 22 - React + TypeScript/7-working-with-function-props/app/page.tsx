"use client";

import Todos from "@/components/Todos";
import Todo from "@/models/todo";
import NewTodo from "@/components/NewTodo";
export default function Home() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  const addTodoHandler = (todoText: string) => {};
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}
