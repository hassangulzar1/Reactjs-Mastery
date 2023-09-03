import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  // !This is alternative way to handle single state handler for multiple states
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  let titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // !This is good approch but if you depends on previous state it is not good enough
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // !This is good approch
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  let amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  let dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  //! Alterntive way if we having multiple events
  // const changeHandler = (identifier, value) => {
  //   if (identifier === "title") {
  //     setTitle(value);
  //   } else if (identifier === "Amount") {
  //     setAmount(value);
  //   } else {
  //     setDate(value);
  //   }
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onUpExpense(expenseDate);

    setTitle("");
    setAmount("");
    setDate("");
  };

  const cancleBtn = () => {
    props.onCancle(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={enteredAmount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancleBtn}>Cancle</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
