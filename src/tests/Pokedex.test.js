import React from 'react';
import userEvent from '@testing-library/user-event';
import { Pokedex } from '../pages';
import renderWithRouter from './renderWithRouter';
import pokemons from '../data';

const { screen } = require('@testing-library/react');

const proximoPokemon = 'Próximo pokémon';

const forEachPokemons = () => {
  const PokedexButton = screen.getByRole('button', { name: proximoPokemon });
  pokemons.forEach((pokemon) => {
    const pokemonName = screen.getByText(pokemon.name);
    expect(pokemonName).toBeInTheDocument();
    userEvent.click(PokedexButton);
  });
};

describe('Pokedex tests', () => {
  test('1-test if the page contains an h2 with the text Encountered pokemons;', () => {
    renderWithRouter(<Pokedex isPokemonFavoriteById={ 0 } pokemons={ pokemons } />);
    const PokedexText = screen.getByRole('heading', {
      name: 'Encountered pokémons', level: 2,
    });
    expect(PokedexText).toBeInTheDocument();
  });
  test('2-Test if the next pokemon in the list is displayed', () => {
    renderWithRouter(<Pokedex isPokemonFavoriteById={ 0 } pokemons={ pokemons } />);
    const PokedexButton = screen.getByRole('button', { name: proximoPokemon });
    expect(PokedexButton).toBeInTheDocument();
    forEachPokemons();
  });
  test('3-test if the Pokédex has the filter buttons', () => {
    renderWithRouter(<Pokedex isPokemonFavoriteById={ 0 } pokemons={ pokemons } />);
    const AllButon = screen.getByRole('button', { name: 'All' });
    expect(AllButon).toBeInTheDocument();
    const EletricButton = screen.getByRole('button', { name: 'Electric' });
    expect(EletricButton).toBeInTheDocument();
    const FireButton = screen.getByRole('button', { name: 'Fire' });
    expect(FireButton).toBeInTheDocument();
    const BugButton = screen.getByRole('button', { name: 'Bug' });
    expect(BugButton).toBeInTheDocument();
    const PoisonButton = screen.getByRole('button', { name: 'Poison' });
    expect(PoisonButton).toBeInTheDocument();
    const PsychicButton = screen.getByRole('button', { name: 'Psychic' });
    expect(PsychicButton).toBeInTheDocument();
    const NormalButton = screen.getByRole('button', { name: 'Normal' });
    expect(NormalButton).toBeInTheDocument();
    const DragonButton = screen.getByRole('button', { name: 'Dragon' });
    expect(DragonButton).toBeInTheDocument();

    const buttons = screen.getAllByTestId('pokemon-type-button');
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });

    userEvent.click(EletricButton);
    const electric = screen.getByTestId('pokemon-type');
    expect(electric).toBeInTheDocument();
    expect(electric).toContainHTML('Electric');
    const PokedexButton = screen.getByRole('button', { name: proximoPokemon });
    userEvent.click(PokedexButton);
    expect(electric).toBeInTheDocument();
    expect(electric).toContainHTML('Electric');
    userEvent.click(AllButon);
    forEachPokemons();
  });
  test('4-test if the Pokédex contains a button to reset the filter:', () => {
    renderWithRouter(<Pokedex isPokemonFavoriteById={ 0 } pokemons={ pokemons } />);
    const AllButon = screen.getByRole('button', { name: 'All' });
    expect(AllButon).toBeInTheDocument();
  });
});
