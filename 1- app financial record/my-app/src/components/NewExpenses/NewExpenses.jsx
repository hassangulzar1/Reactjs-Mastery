import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpenses(props) {
  const ExpenseFormData = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };

    props.newEpenseToApp(newExpense);
  };
  const [addNewExpense, setAddNewExpense] = useState(false);

  const ClickonAddExpense = () => {
    setAddNewExpense(true);
  };
  const onCancleButton = (value) => {
    setAddNewExpense(value);
  };

  if (!addNewExpense) {
    return (
      <div className="new-expense">
        <button onClick={ClickonAddExpense}>Add New Expense</button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm onCancle={onCancleButton} onUpExpense={ExpenseFormData} />
    </div>
  );
}

export default NewExpenses;
