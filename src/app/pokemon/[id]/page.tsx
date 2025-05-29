import React from 'react';
import PokemonDetails from '@/components/pokemon/PokemonDetails';

const Pokemon = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();

  return <PokemonDetails pokemon={pokemon} />;
};

export default Pokemon;
