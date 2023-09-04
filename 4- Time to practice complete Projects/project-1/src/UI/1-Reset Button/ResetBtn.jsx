import React from "react";
import Styles from "./ResetBtn.module.css";
const ResetBtn = (props) => {
  return (
    <button type="reset" className={Styles.buttonAlt}>
      {props.children}
    </button>
  );
};

export default ResetBtn;
