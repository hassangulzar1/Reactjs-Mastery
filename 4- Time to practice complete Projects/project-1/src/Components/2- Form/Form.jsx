import React, { useState } from "react";
import Styles from "./Form.module.css";
import ResetBtn from "../../UI/1-Reset Button/ResetBtn";
import Calculate from "../../UI/2-CalculateBtn/Calculate";

const Form = (props) => {
  const [currSaving, setCurrSaving] = useState("");
  const [yrSaving, setYrSaving] = useState("");
  const [expIntYr, setExpIntYr] = useState("");
  const [duration, setDuration] = useState("");

  const currSavingHandler = (event) => {
    setCurrSaving(event.target.value);
  };
  const yearSavingHandler = (event) => {
    setYrSaving(event.target.value);
  };
  const expectedInerestHandler = (event) => {
    setExpIntYr(event.target.value);
  };
  const durationHandler = (event) => {
    setDuration(event.target.value);
  };

  //! OnSubmitHandler Code
  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.data({
      saving: currSaving,
      yearlySaving: yrSaving,
      expectedInt: expIntYr,
      duration: duration,
    });

    setCurrSaving("");
    setYrSaving("");
    setExpIntYr("");
    setDuration("");
  };

  return (
    <form className={Styles.form} onSubmit={onSubmitHandler}>
      <div className={Styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={currSaving}
            type="number"
            id="current-savings"
            onChange={currSavingHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={yrSaving}
            type="number"
            id="yearly-contribution"
            onChange={yearSavingHandler}
          />
        </p>
      </div>
      <div className={Styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={expIntYr}
            type="number"
            id="expected-return"
            onChange={expectedInerestHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={duration}
            type="number"
            id="duration"
            onChange={durationHandler}
          />
        </p>
      </div>
      <p className={Styles.actions}>
        <ResetBtn>Reset</ResetBtn>
        <Calculate>Calculate</Calculate>
      </p>
    </form>
  );
};

export default Form;
