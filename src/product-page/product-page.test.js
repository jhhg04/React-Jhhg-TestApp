import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import { ProductPage } from './';

beforeEach(() => render(<ProductPage />));
describe('ProductPage', () => {
  it('must display a title', () => {
    expect(screen.queryByText(/product page/i)).toBeInTheDocument();
  });

  it('must display the prducct name CARRITO', () => {
    expect(screen.queryByText(/carrito/i)).toBeInTheDocument();
  });
});
