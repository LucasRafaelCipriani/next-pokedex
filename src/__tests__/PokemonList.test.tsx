import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { itemsPerPage } from '@/constants/constants';
import PokemonList from '@/components/pokemon/PokemonList';
import StoreProvider from '@/components/StoreProvider';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
  useSearchParams: () => ({}),
}));

async function getPokemonData(page: number) {
  const offset = itemsPerPage * (page - 1);
  const listRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=10000&offset=${offset}`
  );
  const allRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=10000&offset=0`
  );
  return {
    data: await listRes.json(),
    allData: await allRes.json(),
  };
}

describe('PokemonList', () => {
  test('renders and filters pokemon list', async () => {
    const page = 1;
    const keywordBefore = '';
    const keywordAfter = 'bulb';

    const { data, allData } = await getPokemonData(page);

    const { rerender } = render(
      <StoreProvider>
        <PokemonList
          data={data}
          allData={allData}
          page={page}
          keyword={keywordBefore}
        />
      </StoreProvider>
    );

    const heading = screen.getByTestId('pokemonListHeading');
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent('Pokémon List');

    const listBefore = screen.getByTestId('pokemonList');
    expect(listBefore).toBeVisible();
    expect(listBefore.childElementCount).toBeGreaterThan(0);

    const pagination = screen.getByTestId('pagination');
    expect(pagination).toBeVisible();

    const input = screen.getByTestId('searchInput');
    await userEvent.clear(input);
    await userEvent.type(input, keywordAfter);

    const form = screen.getByTestId('searchForm');
    fireEvent.submit(form);

    rerender(
      <StoreProvider>
        <PokemonList
          data={data}
          allData={allData}
          page={page}
          keyword={keywordAfter}
        />
      </StoreProvider>
    );

    const listAfter = screen.getByTestId('pokemonList');
    expect(listAfter).toBeVisible();
    expect(listAfter.childElementCount).toBeGreaterThan(0);
  });
});
