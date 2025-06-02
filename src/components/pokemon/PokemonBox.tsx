import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PokemonBox = ({ name, url }: { name: string; url: string }) => {
  const match = url.match(/\/pokemon\/(\d+)\//);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    match ? Number(match[1]) : 1
  }.png`;

  const [src, setSrc] = useState('/loading.gif');

  useEffect(() => {
    setSrc(imageSrc);

    return () => {
      setSrc('/loading.gif');
    };
  }, [imageSrc]);

  return (
    <Link
      href={`/pokemon/${name}`}
      className="flex items-center flex-col border rounded-3xl hover:bg-gray-600 hover:text-white p-2 justify-between"
    >
      <Image
        width={96}
        height={96}
        src={src}
        alt={name}
        loading="lazy"
        onError={() => setSrc('/not-found.avif')}
        style={{ width: 'auto', maxWidth: '96px' }}
      />
      <h2 className="capitalize text-base md:text-[20px] font-bold text-center">
        {name}
      </h2>
    </Link>
  );
};

export default PokemonBox;
