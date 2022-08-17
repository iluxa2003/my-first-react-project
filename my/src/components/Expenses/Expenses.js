import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  // let expensesContentNotFound = <p>No expenses found</p>;

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length === 0 ? (<p>No expenses found</p>) :(
        filteredExpenses.map((item) => (
          <ExpenseItem
            key = {item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        )))}
      </Card>
    </div>
  );
}

export default Expenses;
