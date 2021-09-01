import React, { useState } from "react";

import "./Expenses.css";
import "../UI/card.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [filterValue, setFilterValue] = useState("2020");

  const filterExpenseHandler = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterValue;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterValue}
        onFilterExpense={filterExpenseHandler}
      />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
