import Todos from "@/components/Todos";
import Todo from "@/models/todo";

export default function Home() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}
