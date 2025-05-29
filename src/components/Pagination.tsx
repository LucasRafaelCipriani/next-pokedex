import React from 'react';
import Link from 'next/link';

const Pagination = ({
  count,
  currentPage,
}: {
  count: number;
  currentPage: number;
}) => {
  const totalPages = Math.ceil(count / 20);

  const getPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 4) pages.push('...');

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 3) pages.push('...');

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center">
      {getPages().map((page, i) => (
        <Link
          key={i}
          href={`/page/${page}`}
          className={`border border-black p-2 ${
            currentPage === page ? 'bg-gray-500 text-white' : ''
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
