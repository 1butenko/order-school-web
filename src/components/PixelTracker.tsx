'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as fbq from '@/lib/tracker';

function PixelTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page view on route change
    fbq.pageview();
  }, [pathname, searchParams]);

  return null;
}

export default function PixelTracker() {
  return (
    <Suspense fallback={null}>
      <PixelTrackerInner />
    </Suspense>
  );
}