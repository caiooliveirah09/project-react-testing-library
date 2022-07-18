import React from 'react';
import { FavoritePokemons } from '../pages';
import renderWithRouter from './renderWithRouter';

const { screen } = require('@testing-library/react');

const pokemons = [
  {
    id: 25,
    name: 'Pikachu',
    type: 'Electric',
    averageWeight: {
      value: '6.0',
      measurementUnit: 'kg',
    },
    image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Kanto Viridian Forest',
        map: 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
      },
      {
        location: 'Kanto Power Plant',
        map: 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
      },
    ],
    summary: 'test',
  },
];

describe('FavoritePokemons tests', () => {
  test('1-test if the msg "No favorite pokemon found is displayed on the screen"', () => {
    renderWithRouter(<FavoritePokemons />);
    const FavoritePokemonsText = screen.getByText('No favorite pokemon found');
    expect(FavoritePokemonsText).toBeInTheDocument();
  });

  test('2-test if all favorite Pokemon cards are displayed', () => {
    renderWithRouter(<FavoritePokemons pokemons={ pokemons } />);
    const test = screen.getByText('Pikachu');
    expect(test).toBeInTheDocument();
  });
});
