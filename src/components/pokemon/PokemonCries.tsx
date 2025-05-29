import React, { useRef } from 'react';
import { Pokemon } from '@/types/Pokemon';

const PokemonCries = ({ pokemon }: Pokemon) => {
  const legacyCryRef = useRef<HTMLAudioElement>(null);
  const latestCryRef = useRef<HTMLAudioElement>(null);

  return (
    <div>
      <h2 className="text-[20px] font-bold">Cries</h2>
      <div className="mt-3 flex gap-x-2">
        {pokemon.cries.legacy && (
          <div>
            <audio ref={legacyCryRef} src={pokemon.cries.legacy} />
            <button
              className="bg-blue-400 text-white rounded-2xl border py-2 px-4"
              onClick={() => {
                legacyCryRef.current?.play();
              }}
            >
              Legacy
            </button>
          </div>
        )}
        <div>
          <audio ref={latestCryRef} src={pokemon.cries.latest} />
          <button
            className="bg-blue-400 text-white rounded-2xl border py-2 px-4"
            onClick={() => {
              latestCryRef.current?.play();
            }}
          >
            Latest
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCries;
