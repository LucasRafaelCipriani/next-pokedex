import PokemonGrid from '@/components/pokemon/PokemonGrid';
import { itemsPerPage } from '@/constants/constants';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const pageId = Number(id ?? 1);
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerPage}&offset=${
      itemsPerPage * (pageId - 1)
    }`
  );
  const data = await res.json();

  return <PokemonGrid data={data} page={pageId} />;
}
