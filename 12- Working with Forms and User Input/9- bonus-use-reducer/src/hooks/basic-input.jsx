import React, { useState, useReducer } from "react";
const initialState = {
  value: "",
  isTouched: false,
};
const dispatchValue = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return initialState;
  }
};
const useBasic = (validateValue) => {
  const [value, dispatch] = useReducer(dispatchValue, initialState);

  const isValid = validateValue(value.value);
  const hasError = !isValid && value.isTouched;

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };
  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: value.value,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useBasic;
