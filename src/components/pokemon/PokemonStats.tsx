import React from 'react';
import { Pokemon } from '@/types/Pokemon';

const PokemonStats: React.FC<Pokemon> = ({ pokemon }) => {
  return (
    <div>
      <h2 className="text-[20px] font-bold">Stats</h2>
      <div className="mt-3">
        {pokemon.stats.map((value, index) => (
          <p key={index} className="capitalize">
            {value.stat.name}: {value.base_stat}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;
