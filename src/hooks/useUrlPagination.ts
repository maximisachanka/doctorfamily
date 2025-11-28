import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export function useUrlPagination(itemsPerPage: number = 12) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Получаем текущую страницу из URL (по умолчанию 1)
  const currentPage = useMemo(() => {
    const page = searchParams.get('p');
    const pageNum = page ? parseInt(page, 10) : 1;
    return pageNum > 0 ? pageNum : 1;
  }, [searchParams]);

  // Функция для изменения страницы
  const setPage = useCallback((page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (page === 1) {
      // Удаляем параметр p если страница первая
      params.delete('p');
    } else {
      params.set('p', page.toString());
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    // Используем replace вместо push чтобы не добавлять в историю
    router.replace(newUrl, { scroll: false });
  }, [searchParams, pathname, router]);

  // Функция для получения пагинированных данных
  const paginateData = useCallback(<T,>(data: T[]): {
    paginatedData: T[];
    totalPages: number;
    startIndex: number;
    endIndex: number;
  } => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    return {
      paginatedData,
      totalPages,
      startIndex,
      endIndex,
    };
  }, [currentPage, itemsPerPage]);

  return {
    currentPage,
    setPage,
    paginateData,
    itemsPerPage,
  };
}
