import React from 'react';
import PokemonBox from './PokemonBox';
import Pagination from '../Pagination';

interface PokemonGridProps {
  data: {
    results: { name: string; url: string }[];
    count: number;
  };
  page?: number;
}

const PokemonGrid: React.FC<PokemonGridProps> = ({ data, page = 1 }) => {
  const pokes: { name: string; url: string }[] = data.results;

  return (
    <section className="px-4 py-[50px] lg:py-[80px]">
      <h2 className="text-[32px] font-bold mb-4">Pokémon List</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 mb-10">
        {pokes.map((poke, index) => (
          <PokemonBox name={poke.name} key={index} url={poke.url} />
        ))}
      </div>
      <Pagination count={data.count} currentPage={page} />
    </section>
  );
};

export default PokemonGrid;
