import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("clicked!!");
  };
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Click Me</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
