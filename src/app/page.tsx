import PokemonGrid from '@/components/pokemon/PokemonGrid';
import { itemsPerPage } from '@/constants/constants';

export default async function Home() {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerPage}&offset=0`
  );
  const data = await res.json();

  return <PokemonGrid data={data} />;
}
