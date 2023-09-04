import React from "react";
import Styles from "./ResetBtn.module.css";
const ResetBtn = (props) => {
  //! reseting Handler

  const resetHandler = () => {
    props.onReset();
  };

  return (
    <button type="reset" onClick={resetHandler} className={Styles.buttonAlt}>
      {props.children}
    </button>
  );
};

export default ResetBtn;
