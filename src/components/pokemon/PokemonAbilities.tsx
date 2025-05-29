import React from 'react';
import { Pokemon } from '@/types/Pokemon';

const PokemonAbilities: React.FC<Pokemon> = ({ pokemon }) => {
  return (
    <div>
      <h2 className="text-[20px] font-bold">Abilities</h2>
      <div className="mt-3 flex flex-wrap gap-3">
        {pokemon.abilities.map((value, index) => {
          return !value.is_hidden ? (
            <div
              key={index}
              className="py-1 px-2 text-white text-center rounded-4xl uppercase text-[12px] min-w-[70px] bg-amber-500 w-fit"
            >
              {value.ability.name}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default PokemonAbilities;
