import React, { useState } from "react";

import "./Expenses.css";
import "../UI/card.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
function Expenses(props) {
  const [filterValue, setFilterValue] = useState("");

  const filterExpenseHandler = (event) => {
    setFilterValue(event.target.value);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter onFilterExpense={filterExpenseHandler} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          filterValue={filterValue}
        />
      ))}
    </Card>
  );
}

export default Expenses;
