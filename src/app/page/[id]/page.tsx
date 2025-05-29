import Pagination from '@/components/Pagination';
import PokemonBox from '@/components/PokemonBox';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const pageId = Number(id ?? 1);
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${20 * (pageId - 1)}`
  );
  const data = await res.json();

  const pokes: { name: string; url: string }[] = data.results;

  return (
    <section className="px-4 py-6">
      <h2 className="text-[32px] font-bold mb-4">Pokémon List</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 mb-5">
        {pokes.map((poke, index) => (
          <PokemonBox name={poke.name} key={index} url={poke.url} />
        ))}
      </div>
      <Pagination count={data.count} currentPage={pageId} />
    </section>
  );
}
