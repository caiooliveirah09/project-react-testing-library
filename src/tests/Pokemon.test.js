import React from 'react';
import userEvent from '@testing-library/user-event';
import { Pokemon } from '../components';
import renderWithRouter from './renderWithRouter';
import pokemons from '../data';

const { screen } = require('@testing-library/react');

describe('Pokemon tests', () => {
  test('1-test if a card with the information of a certain pokémon is rendered', () => {
    const { history } = renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite />);
    const pokemonName = screen.getByTestId('pokemon-name');
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonName).toBeInTheDocument();
    expect(pokemonName).toContainHTML(pokemons[0].name);
    expect(pokemonWeight).toBeInTheDocument();
    expect(pokemonWeight).toContainHTML('Average weight: 6.0 kg');
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType).toContainHTML(pokemons[0].type);
    const img = screen.getByAltText(`${pokemons[0].name} sprite`);
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    const link = screen.getByRole('link', { name: 'More details' });
    expect(link).toBeInTheDocument();
    expect(link.href).toBe(`http://localhost/pokemons/${pokemons[0].id}`);
    userEvent.click(link);
    expect(history.location.pathname).toBe('/pokemons/25');
  });
  test('2-test if there is a star icon in favorite pokemons', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite />);
    const link = screen.getByAltText('Pikachu is marked as favorite');
    expect(link).toBeInTheDocument();
    expect(link.src).toBe('http://localhost/star-icon.svg');
    expect(link.alt).toBe('Pikachu is marked as favorite');
  });
});
