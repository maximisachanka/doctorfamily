'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Скролл наверх при изменении пути или параметров
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Мгновенный скролл без анимации
    });
  }, [pathname, searchParams]);

  return null;
}
