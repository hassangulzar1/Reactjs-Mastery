"use client";
import Todos from "@/components/Todos";
import NewTodo from "@/components/NewTodo";

export default function Home() {
  return (
    <div>
      <NewTodo />
      <Todos />
    </div>
  );
}
