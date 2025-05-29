import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PokemonBox = ({ name, url }: { name: string; url: string }) => {
  const match = url.match(/\/pokemon\/(\d+)\//);
  let id = 1;

  if (match) {
    id = Number(match[1]);
  }

  return (
    <Link
      href={`/pokemon/${id}`}
      className="flex items-center flex-col border rounded-3xl hover:bg-gray-600 hover:text-white p-2"
    >
      <Image
        width={120}
        height={120}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <h2 className="capitalize text-base sm:text-[20px] font-bold text-center">
        {name}
      </h2>
    </Link>
  );
};

export default PokemonBox;
