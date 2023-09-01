import React from "react";
import "./List.css";
import CourseGoalItem from "../CourseItems/CourseGoalItem";
const List = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((item) => {
        return (
          <CourseGoalItem
            key={item.id}
            id={item.id}
            onDelete={props.deletingItem}
          >
            {item.text}
          </CourseGoalItem>
        );
      })}
    </ul>
  );
};

export default List;
