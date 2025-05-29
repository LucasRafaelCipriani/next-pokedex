import React, { useRef } from 'react';
import { Pokemon } from '@/types/Pokemon';
import Button from '../Button';

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
            <Button
              onClick={() => {
                legacyCryRef.current?.play();
              }}
            >
              Legacy
            </Button>
          </div>
        )}
        <div>
          <audio ref={latestCryRef} src={pokemon.cries.latest} />
          <Button
            onClick={() => {
              latestCryRef.current?.play();
            }}
          >
            Latest
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCries;
