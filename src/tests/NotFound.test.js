import React from 'react';
import { NotFound } from '../pages';
import renderWithRouter from './renderWithRouter';

const { screen } = require('@testing-library/react');

describe('NotFound tests', () => {
  test('1-Test if the page contains h2 with the text Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const notFoundText = screen.getByRole('heading', {
      name: /Page requested not found/i, level: 2,
    });
    expect(notFoundText).toBeInTheDocument();
  });
  test('2-test if the page shows an image', () => {
    renderWithRouter(<NotFound />);
    const img = screen.getByAltText(/Pikachu crying/i);
    expect(img.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
