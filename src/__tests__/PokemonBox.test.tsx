import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PokemonBox from '@/components/pokemon/PokemonBox';

describe('PokemonBox', () => {
  test('renders pokemon box', () => {
    render(
      <PokemonBox name="bulbasaur" url="https://pokeapi.co/api/v2/pokemon/1/" />
    );

    const pokemonBox = screen.getByTestId('pokemonBox');
    expect(pokemonBox).toHaveTextContent('bulbasaur');
  });
});
