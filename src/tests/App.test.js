import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const { screen } = require('@testing-library/react');

describe('App tests', () => {
  test('1-test if nav links appear on screen', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: 'Home' });
    const about = screen.getByRole('link', { name: 'About' });
    const favoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favoritePokemons).toBeInTheDocument();
  });
  test('2-test if the app is redirected to the home page', () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: 'Home' });
    userEvent.click(home);
    expect(history.location.pathname).toBe('/');
  });
  test('3-test if the app is redirected to the favorite pokemons page', () => {
    const { history } = renderWithRouter(<App />);
    const favoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favoritePokemons);
    expect(history.location.pathname).toBe('/favorites');
  });
  test('4-test if the app using an unknown url is redirected to not found page', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/unknown-url');
    const notFoundText = screen.getByRole('heading', {
      name: /Page requested not found/i, level: 2,
    });
    expect(notFoundText).toBeInTheDocument();
  });
});
