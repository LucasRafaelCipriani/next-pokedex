import React from 'react';
import { Pokemon } from '@/types/Pokemon';

const PokemonStats: React.FC<Pokemon> = ({ pokemon }) => {
  return (
    <div>
      <h2 className="text-[20px] font-bold">Stats</h2>
      <div className="mt-3 flex flex-col gap-y-3">
        {pokemon.stats.map((value, index) => {
          const maxStat = 255;
          const percentage = (value.base_stat / maxStat) * 100;

          return (
            <div key={index}>
              <label className="capitalize">
                {value.stat.name.replaceAll('-', ' ')}:
              </label>
              <div
                style={{
                  background: '#ddd',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  height: '16px',
                  width: '100%',
                  marginTop: '4px',
                }}
              >
                <div
                  style={{
                    width: `${percentage}%`,
                    height: '100%',
                    background: 'linear-gradient(to right, #4caf50, #8bc34a)',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonStats;
