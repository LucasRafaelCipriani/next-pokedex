import Image from 'next/image';
import React from 'react';

const Pokemon = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();

  return (
    <section className="flex flex-col lg:flex-row gap-x-9 py-6 px-4 gap-y-6">
      <div className="border rounded-2xl p-5">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width={500}
          height={500}
          alt={pokemon.name}
        />
      </div>
      <div>
        <h2 className="text-center text-[30px] font-bold capitalize">
          {pokemon.name}
        </h2>
      </div>
    </section>
  );
};

export default Pokemon;
