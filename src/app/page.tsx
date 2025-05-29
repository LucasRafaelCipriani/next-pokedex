import PokemonList from '@/components/pokemon/PokemonList';
import { itemsPerPage } from '@/constants/constants';

export default async function Home() {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerPage}&offset=0`
  );
  const data = await res.json();

  return <PokemonList data={data} />;
}
