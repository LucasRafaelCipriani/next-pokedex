'use client';

import React, { useState } from 'react';
import PokemonBox from './PokemonBox';
import Pagination from '../Pagination';
import Button from '../Button';

interface PokemonGridProps {
  data: {
    results: { name: string; url: string }[];
    count: number;
  };
  page?: number;
}

const PokemonList: React.FC<PokemonGridProps> = ({ data, page = 1 }) => {
  const pokes: { name: string; url: string }[] = data.results;
  const [search, setSearch] = useState('');

  const searchPokemonHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <section className="px-6 py-[50px] lg:py-[80px]">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-7">
        <h2 className="text-[32px] font-bold mb-4">Pokémon List</h2>
        <form
          onSubmit={searchPokemonHandler}
          className="flex gap-x-2 items-center border rounded-lg p-2 w-fit"
        >
          <label htmlFor="search" className="text-base">
            Search:
          </label>
          <input
            id="search"
            className="border-b outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </form>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 mb-10">
        {pokes.map((poke, index) => (
          <PokemonBox name={poke.name} key={index} url={poke.url} />
        ))}
      </div>
      <Pagination count={data.count} currentPage={page} />
    </section>
  );
};

export default PokemonList;
