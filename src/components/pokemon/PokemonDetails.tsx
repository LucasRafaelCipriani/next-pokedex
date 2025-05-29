'use client';

import React from 'react';
import Image from 'next/image';
import TypeBadge from './TypeBadge';
import PokemonStats from './PokemonStats';
import PokemonCries from './PokemonCries';
import { Pokemon } from '@/types/Pokemon';
import PokemonAbilities from './PokemonAbilities';

const PokemonDetails: React.FC<Pokemon> = ({ pokemon }) => {
  return (
    <section className="flex flex-col md:flex-row gap-x-9 py-[50px] lg:py-[80px] px-4 gap-y-6">
      <div className="border w-full md:w-2/4 sm:max-w-[500px] mx-auto rounded-2xl p-5 relative h-fit">
        <span className="absolute text-base font-bold right-[15px] top-[6px]">
          ID: {pokemon.id}
        </span>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width={500}
          height={500}
          alt={pokemon.name}
          priority
        />
      </div>
      <div className="w-full md:w-2/4 mx-auto">
        <h2 className="text-center text-[30px] font-bold capitalize md:text-left">
          {pokemon.name}
        </h2>
        <div className="flex flex-col gap-y-5 mt-5">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {pokemon.types.map(
              (
                { type }: { type: { name: string } },
                index: React.Key | null | undefined
              ) => (
                <TypeBadge key={index} type={type.name} />
              )
            )}
          </div>
          <div>
            <h2 className="text-[20px] font-bold">Information</h2>
            <div className="mt-3">
              <p>Height: {pokemon.height / 10}m</p>
              <p>Weight: {pokemon.weight / 10}kg</p>
            </div>
          </div>
          <PokemonStats pokemon={pokemon} />
          <PokemonAbilities pokemon={pokemon} />
          <PokemonCries pokemon={pokemon} />
        </div>
      </div>
    </section>
  );
};

export default PokemonDetails;
