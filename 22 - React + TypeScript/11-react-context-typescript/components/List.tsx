import classes from "./List.module.css";
const List: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default List;
