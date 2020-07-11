import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders HOME link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/HOME/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders PRODUCTS link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/PRODUCTS/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders ABOUT link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ABOUT/i);
  expect(linkElement).toBeInTheDocument();
});
