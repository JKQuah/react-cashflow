'use client';

import { useEffect, useRef, type RefObject } from 'react';
import { type MotionValue } from 'motion/react';

/**
 * When the user scrolls UP through a sticky-scroll section that has already
 * been fully seen (progress ≥ 1), jump instantly to the top of the section
 * so the scroll zone doesn't trap them on the return trip.
 */
export function useScrollSkipOnReturn(
  containerRef: RefObject<HTMLDivElement | null>,
  oneWayProgress: MotionValue<number>,
) {
  const jumping = useRef(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const scrollingUp = y < lastY.current;
      lastY.current = y;

      if (!scrollingUp || jumping.current || !containerRef.current) return;
      if (oneWayProgress.get() < 0.99) return;

      const el = containerRef.current;
      const top = el.offsetTop;
      const bottom = top + el.offsetHeight - window.innerHeight;

      // Inside the scroll zone (not yet at the top edge of the section)
      if (y > top && y <= bottom) {
        jumping.current = true;
        window.scrollTo({ top, behavior: 'instant' });
        setTimeout(() => { jumping.current = false; }, 150);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [containerRef, oneWayProgress]);
}
