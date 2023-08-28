import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [currentYear, setYear] = useState("2020");

  const myFunc = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredItem = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === currentYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={currentYear} onchange={myFunc} />
      <ExpensesChart expenses={filteredItem} />
      <ExpensesList items={filteredItem} />
    </Card>
  );
}

export default Expenses;
