import React from 'react';
import { render } from '@testing-library/react';
import {HomeComponent} from './components/home';

test('renders HOME link', () => {
  const { getByText } = render(<HomeComponent />);
  const linkElement = getByText(/Let's See Our Product/i);
  expect(linkElement).toBeInTheDocument();
});