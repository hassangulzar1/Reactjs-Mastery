import Todo from "@/models/todo";
import List from "./List";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <List key={item.id} text={item.text} />
      ))}
    </ul>
  );
};
export default Todos;
