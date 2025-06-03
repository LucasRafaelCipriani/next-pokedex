import React, { useCallback, useMemo } from 'react';
import Link from 'next/link';
import { itemsPerPage } from '@/constants/constants';

const Pagination = ({
  count,
  currentPage,
}: {
  count: number;
  currentPage: number;
}) => {
  const totalPages = useMemo(() => Math.ceil(count / itemsPerPage), [count]);

  const getPages = useCallback(() => {
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
  }, [currentPage, totalPages]);

  return (
    <div className="flex justify-center" data-testid="pagination">
      {getPages().map((page, i) =>
        typeof page === 'number' ? (
          <Link
            key={i}
            href={`?page=${page}`}
            className={`border border-black text-center p-2 min-w-[36px] ${
              currentPage === page
                ? 'bg-gray-500 text-white pointer-events-none'
                : ''
            }`}
          >
            {page}
          </Link>
        ) : (
          <button
            key={i}
            disabled
            className={'border border-black text-center p-2 min-w-[36px]'}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
