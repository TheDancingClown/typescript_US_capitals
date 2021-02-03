import React from 'react';
import { render, screen } from '@testing-library/react';
import Map from '../src/components/Map';

test('renders the map', () => {
  render(<Map />);
  const linkElement = screen.getByText(/US States/i);
  expect(linkElement).toBeInTheDocument();
});