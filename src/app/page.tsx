import PokemonList from '@/components/pokemon/PokemonList';
import { itemsPerPage } from '@/constants/constants';

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string; search: string };
}) {
  const page = Number((await searchParams).page ?? 1);
  const search = (await searchParams).search ?? '';

  const url = page
    ? `https://pokeapi.co/api/v2/pokemon/?limit=10000&offset=${
        itemsPerPage * (page - 1)
      }`
    : 'https://pokeapi.co/api/v2/pokemon/?limit=10000&offset=0';

  const res = await fetch(url);
  const resAll = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?limit=10000&offset=0'
  );
  const data = await res.json();
  const allData = await resAll.json();

  return (
    <PokemonList data={data} allData={allData} page={page} keyword={search} />
  );
}
