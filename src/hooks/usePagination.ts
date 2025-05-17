import { useCallback, useState } from 'react';

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = useCallback((_event: unknown, value: number) => {
    setCurrentPage(value);
  }, []);

  return { currentPage, handlePageChange };
};
