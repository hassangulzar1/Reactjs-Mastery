import React, { useEffect, useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;
  //! Check overall form validity
  if (enteredNameIsValid) {
    formIsValid = true;
  }
  //! INput change Handler
  const namInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  //! Name input blur handler
  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };
  //! Submit Handler
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    // nameInputRef.current.value = "";   //! ==> NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClsses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClsses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={namInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be Empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
