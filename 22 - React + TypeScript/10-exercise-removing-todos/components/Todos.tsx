import Todo from "@/models/todo";
import List from "./List";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; deleteTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <List
          key={item.id}
          text={item.text}
          onRemoveTodo={props.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
