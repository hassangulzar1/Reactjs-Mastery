import Todo from "@/models/todo";
import List from "./List";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <List key={item.id} text={item.text} />
      ))}
    </ul>
  );
};
export default Todos;
