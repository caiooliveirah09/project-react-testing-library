import React from 'react';
// import userEvent from '@testing-library/user-event';
import { PokemonDetails } from '../pages';
import renderWithRouter from './renderWithRouter';
// import pokemons from '../data';

// const { screen } = require('@testing-library/react');

describe('PokemonDetails tests', () => {
  test('test if detailed info for the selected pokemon is shown on the screen:', () => {
    renderWithRouter(<PokemonDetails
      onUpdateFavoritePokemons
      isPokemonFavoriteById={ {} }
      match={ { params: { id: '25' } } }
    />);
    // const pokemonName = screen.getAllByText('Pikachu');
  });
});
