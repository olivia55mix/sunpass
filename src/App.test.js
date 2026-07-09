import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders SunPass Portal Header text', () => {
  render(<App />);
  const headerElement = screen.getByText(/SunPass Expense Control Portal/i);
  expect(headerElement).toBeInTheDocument();
});
