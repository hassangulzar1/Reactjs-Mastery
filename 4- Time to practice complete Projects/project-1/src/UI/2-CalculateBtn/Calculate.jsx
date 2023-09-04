import React from "react";
import Styles from "./Calculate.module.css";
const Calculate = (props) => {
  return (
    <button type="submit" className={Styles.button}>
      {props.children}
    </button>
  );
};

export default Calculate;
