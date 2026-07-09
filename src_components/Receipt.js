import React from 'react';
import './Receipt.css';

function Receipt({ expenses }) {
  const totalCost = expenses.reduce((accum, item) => accum + item.amount, 0);

  return (
    <div className="receipt-box">
      <div className="receipt-title">
        <h4>Statement Review</h4>
        <p style={{ fontSize: '11px' }}>SunPass Audit Breakdown</p>
      </div>
      {expenses.map((item) => (
        <div key={item.id} className="receipt-row">
          <span>* {item.description.substring(0, 18)}</span>
          <span>${item.amount.toFixed(2)}</span>
        </div>
      ))}
      <div className="receipt-row total-row">
        <span>AGGREGATE DUE:</span>
        <span>${totalCost.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Receipt;
