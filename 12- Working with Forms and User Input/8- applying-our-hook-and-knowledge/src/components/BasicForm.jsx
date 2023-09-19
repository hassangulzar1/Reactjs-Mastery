import { useState } from "react";
import useBasic from "../hooks/basic-input";

const BasicForm = (props) => {
  const {
    value: nameInputValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useBasic((value) => value.trim() !== "");
  const {
    value: lastInputValue,
    isValid: lastIsValid,
    hasError: lastHasError,
    inputChangeHandler: lastInputChangeHandler,
    inputBlurHandler: lastInputBlurHandler,
    reset: lastReset,
  } = useBasic((value) => value.trim() !== "");
  const {
    value: emailInputValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useBasic((value) => value.includes("@"));

  let formIsValid = false;
  if (nameIsValid && emailIsValid && lastIsValid) {
    formIsValid = true;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (!nameInputValue && !emailInputValue && !lastInputValue) {
      return;
    }
    resetName();
    emailReset();
    lastReset();
  };
  const invalidNameClasses = nameHasError
    ? "form-control invalid"
    : "form-control";
  const invalidLastClasses = lastHasError
    ? "form-control invalid"
    : "form-control";
  const invalidEmailClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmit}>
      <div className="control-group">
        <div className={invalidNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameInputValue}
          />
          {nameHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={invalidLastClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastInputValue}
            onChange={lastInputChangeHandler}
            onBlur={lastInputBlurHandler}
          />
          {lastHasError && (
            <p className="error-text">Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={invalidEmailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="name"
          id="email"
          value={emailInputValue}
          onChange={emailInputChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Invalid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
