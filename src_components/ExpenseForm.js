import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Toll Plaza Fee');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    
    onAddExpense({
      description,
      amount: parseFloat(amount),
      category
    });

    setDescription('');
    setAmount('');
  };

  return (
    <div className="form-card">
      <h3>Log SunPass Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item / Route Description</label>
          <input 
            type="text" 
            placeholder="e.g., Turnpike Exit 24 X-Over" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Cost ($)</label>
          <input 
            type="number" 
            step="0.01" 
            placeholder="0.00" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Expense Type</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Toll Plaza Fee">Toll Plaza Fee</option>
            <option value="Transponder Reload">Transponder Reload</option>
            <option value="Account Maintenance">Account Maintenance</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Add to Ledger</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
