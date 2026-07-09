import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="list-card">
      <h3>Active Transaction Stream</h3>
      {expenses.length === 0 ? (
        <p style={{ color: '#64748b' }}>No toll data registered for current session.</p>
      ) : (
        expenses.map((item) => (
          <div key={item.id} className="expense-item">
            <div>
              <strong>{item.description}</strong>
              <div style={{ fontSize: '12px', color: '#64748b' }}>{item.category}</div>
            </div>
            <div>
              <span style={{ marginRight: '15px', fontWeight: 'bold' }}>${item.amount.toFixed(2)}</span>
              <button className="delete-btn" onClick={() => onDeleteExpense(item.id)}>Drop</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;
