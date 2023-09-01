import React, { useState } from "react";
import Button from "../../Component/Button";
import styles from "./CourseInput.module.css";

// !Componet Styling Library and how to use dynamic styles on particular elements
// import "./CourseInput.css";
// import Styled from "styled-components";

// const FormControl = Styled.div`
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
// }
//
// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${(props) => (props.invalid ? "red" : "ccc")};
//   background: ${(props) =>
//     props.invalid ? "rgb(248, 198, 198)" : "transparent"};
//
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }
//
// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
//
// `;

const CourseInput = (props) => {
  const [initialInput, setInitialInput] = useState("");
  const [initialStyle, setInitialStyle] = useState(true);

  const onChangingHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setInitialStyle(true);
    }
    setInitialInput(event.target.value);
  };

  const formSubmitHandle = (event) => {
    event.preventDefault();
    if (initialInput.trim().length === 0) {
      setInitialStyle(false);
      return;
    } else {
      props.onSubmitValue(initialInput);
    }
  };

  // !Componet Styling Library and how to use dynamic styles on particular elements
  // return (
  //   <form onSubmit={formSubmitHandle}>
  //     <FormControl invalid={!initialStyle}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={onChangingHandler} />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  // !Module Css to use dynamically change style
  return (
    <form onSubmit={formSubmitHandle}>
      <div
        className={`${styles["form-control"]} ${
          !initialStyle && styles.invalid
        }`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={onChangingHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
