import React, { useState } from 'react';
import './App.css';
import Header from '../src_components/Header';
import ExpenseForm from '../src_components/ExpenseForm';
import ExpenseList from '../src_components/ExpenseList';
import Receipt from '../src_components/Receipt';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(item => item.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <div>
          <ExpenseForm onAddExpense={addExpense} />
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        </div>
        <div>
          <Receipt expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
