import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

// {filteredExpenses.length === 0 ? (
//   <p>No expense found</p>
// ) : (
//   filteredExpenses.map((expense) => (
//     <ExpenseItem
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//       key={expense.id}
//     />
//   ))
// )}

// {filteredExpenses.length === 0 && <p>No expense found</p>}

//  {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
//     <ExpenseItem
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//       key={expense.id}
//     />
//   ))}
