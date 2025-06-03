'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { itemsPerPage } from '@/constants/constants';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { searchPokemon, updateList } from '@/lib/slices/mainSlice';
import PokemonBox from './PokemonBox';
import Pagination from '../Pagination';
import Button from '../Button';

interface PokemonGridProps {
  data: {
    results: { name: string; url: string }[];
    count: number;
  };
  allData: {
    results: { name: string; url: string }[];
    count: number;
  };
  keyword?: string;
  page?: number;
}

const PokemonList: React.FC<PokemonGridProps> = ({
  data,
  allData,
  keyword = '',
  page = 1,
}) => {
  const { searchList, pokemonList: allPokemonList } = useAppSelector(
    (state) => state.main
  );
  const pokemonList = data.results;
  const count = data.count;

  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();

  const isSearch = useMemo(() => keyword !== '', [keyword]);
  const pokes: { name: string; url: string }[] = isSearch
    ? searchList
    : pokemonList.slice(0, itemsPerPage);
  const [search, setSearch] = useState(keyword);

  const searchPokemonHandler = useCallback(
    (searchStr: string): void => {
      const filteredList = allPokemonList.filter((pokemon) =>
        pokemon.name.includes(searchStr)
      );

      const params = new URLSearchParams(searchParams);

      if (filteredList.length <= 0) {
        alert('No results for the specified Pokémon.');

        router.push(`/`);
        setSearch('');
        return;
      }

      if (searchStr === '') {
        params.delete('search');

        dispatch(
          searchPokemon({
            list: [],
          })
        );

        router.push(`?${params.toString()}`);
        return;
      }

      params.set('search', searchStr);

      dispatch(
        searchPokemon({
          list: filteredList,
        })
      );

      if (
        params.get('search') !== searchStr ||
        !window.location.search.includes('search')
      ) {
        router.push(`?${params.toString()}`);
      }
    },
    [allPokemonList, dispatch, router, searchParams]
  );

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    searchPokemonHandler(search);
  };

  useEffect(() => {
    if (!isSearch) {
      dispatch(
        updateList({
          list: allData?.results ?? [],
          count: allData.count,
        })
      );
    } else {
      searchPokemonHandler(search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allData, dispatch]);

  return (
    <section className="px-6 py-[50px] lg:py-[80px]">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-7">
        <h2
          className="text-[32px] font-bold mb-4"
          data-testid="pokemonListHeading"
        >
          Pokémon List
        </h2>
        <form
          onSubmit={formSubmitHandler}
          className="flex gap-x-2 items-center border rounded-lg p-2 w-fit"
          data-testid="searchForm"
        >
          <label htmlFor="search" className="text-base">
            Search:
          </label>
          <input
            id="search"
            className="border-b outline-none"
            value={search}
            data-testid="searchInput"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            type="submit"
            data-testid="searchBtn"
            disabled={search.length > 0 && search.length < 3}
          >
            Search
          </Button>
        </form>
      </div>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 min-[1600px]:!grid-cols-6 gap-5 mb-10"
        data-testid="pokemonList"
      >
        {pokes.map((poke, index) => (
          <PokemonBox name={poke.name} key={index} url={poke.url} />
        ))}
      </div>
      {!isSearch && <Pagination count={count} currentPage={page} />}
    </section>
  );
};

export default PokemonList;
