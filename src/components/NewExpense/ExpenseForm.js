import "./ExpenseForm.css";
import React from "react";
import { useState } from "react";
const ExpenseForm = () => {
  const [title, newTitle] = useState("Title");
  const titleChangeHandler = (event) => {
   newTitle(event.target.value);
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>{title}</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amout</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2023-01-01" max="2030-01-01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
