'use client';

import { useMotionValue, useMotionValueEvent, type MotionValue } from 'motion/react';

export function useOneWayProgress(source: MotionValue<number>): MotionValue<number> {
  const max = useMotionValue(0);
  useMotionValueEvent(source, 'change', (v) => {
    if (v > max.get()) max.set(v);
  });
  return max;
}
