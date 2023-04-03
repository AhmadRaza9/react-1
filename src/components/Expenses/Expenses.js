import React, { useState } from 'react';
import './Expenses.css';

// import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from "../NewExpense/ExpensesFilter";



const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
  return (
   <Card className="expenses">
       <ExpensesFilter
           selected={filteredYear}
           onChangeFilter={filterChangeHandler}
       />

       {props.items.map((expense) =>
          <ExpenseItem
           title={expense.title}
           amount={expense.amount}
           date={expense.date}
          />
       )}
    </Card>
  );
};

export default Expenses;