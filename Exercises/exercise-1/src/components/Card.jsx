import React from "react";

function Card(props) {
  return (
    <li className="concept">
      <img src={props.style.image} alt="TODO: TITLE" />
      <h2>{props.style.title}</h2>
      <p>{props.style.description}</p>
    </li>
  );
}

export default Card;
