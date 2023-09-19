import React, { useState } from "react";

const useBasic = (validateValue) => {
  const [inputValue, setInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const isValid = validateValue(inputValue);
  const hasError = !isValid && inputTouched;

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const inputBlurHandler = () => {
    setInputTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setInputTouched(false);
  };

  return {
    value: inputValue,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useBasic;
