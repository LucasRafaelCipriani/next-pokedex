import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="py-4 px-5 bg-red-600 text-white sticky top-0 z-10">
      <Link href="/">
        <h1 className="text-2xl font-bold">Next Pokédex</h1>
      </Link>
    </header>
  );
};

export default Header;
