import React, { useMemo } from 'react';
import { pokemonTypeColors } from '@/constants/constants';

const TypeBadge = ({ type }: { type: string }) => {
  const key = type.toLowerCase() as keyof typeof pokemonTypeColors;
  const typeColor = useMemo(() => pokemonTypeColors[key] || '#777', [key]);

  return (
    <div
      className="py-1 px-2 text-white text-center rounded-4xl uppercase text-[12px] min-w-[70px]  w-fit"
      style={{ backgroundColor: typeColor }}
    >
      {type}
    </div>
  );
};

export default TypeBadge;
