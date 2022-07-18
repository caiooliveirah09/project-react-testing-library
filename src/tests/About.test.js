import React from 'react';
import { About } from '../pages';
import renderWithRouter from './renderWithRouter';

const { screen } = require('@testing-library/react');

describe('About tests', () => {
  test('1-test if the page contains an h2 heading with the text About pokédex', () => {
    renderWithRouter(<About />);
    const heading = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(heading).toBeInTheDocument();
  });
  test('2-test if the page contains two paragraphs of text about the Pokédex', () => {
    renderWithRouter(<About />);
    const AboutText1 = screen.getByText(/This application simulates a Pokédex/);
    const AboutText2 = screen.getByText(/One can filter Pokémons by type/i);
    expect(AboutText1).toBeInTheDocument();
    expect(AboutText2).toBeInTheDocument();
  });
  test('3-', () => {
    renderWithRouter(<About />);
    const img = screen.getByAltText('Pokédex');
    expect(img.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
