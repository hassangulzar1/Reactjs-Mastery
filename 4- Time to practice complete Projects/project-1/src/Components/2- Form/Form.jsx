import React, { useState } from "react";
import Styles from "./Form.module.css";
import ResetBtn from "../../UI/1-Reset Button/ResetBtn";
import Calculate from "../../UI/2-CalculateBtn/Calculate";

const Form = (props) => {
  const [currValues, setCurrValues] = useState({
    currSaving: "",
    yrSaving: "",
    expIntYr: "",
    duration: "",
  });

  //! Inputs Handler
  const inputChangeHandler = (e) => {
    setCurrValues((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  //! OnSubmitHandler Code
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.data(currValues);
    for (const i in currValues) {
      currValues[i] = "";
    }
  };

  //! On Reseting Everything
  const reseting = () => {
    setCurrValues({ currSaving: "", yrSaving: "", expIntYr: "", duration: "" });
    props.reset();
  };

  return (
    <form className={Styles.form} onSubmit={onSubmitHandler}>
      <div className={Styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={currValues.currSaving}
            name="currSaving"
            type="number"
            onChange={inputChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={currValues.yrSaving}
            type="number"
            name="yrSaving"
            onChange={inputChangeHandler}
          />
        </p>
      </div>
      <div className={Styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={currValues.expIntYr}
            name="expIntYr"
            type="number"
            onChange={inputChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={currValues.duration}
            name="duration"
            type="number"
            onChange={inputChangeHandler}
          />
        </p>
      </div>
      <p className={Styles.actions}>
        <ResetBtn onReset={reseting}>Reset</ResetBtn>
        <Calculate>Calculate</Calculate>
      </p>
    </form>
  );
};

export default Form;
