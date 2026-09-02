'use client';

import { useRef } from 'react';
import {
  AnimatePresence,
  motion,
  useInView,
  type MotionProps,
  type Variants,
} from 'motion/react';
import { cn } from '@/lib/utils';

interface BlurFadeProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  inView?: boolean;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  duration = 0.45,
  delay = 0,
  offset = 10,
  direction = 'up',
  inView = false,
  blur = '6px',
  ...props
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: false, margin: '-60px' });
  const isInView = !inView || inViewResult;

  const axisKey = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const axisVal = direction === 'right' || direction === 'down' ? -offset : offset;

  const variants: Variants = {
    hidden: { [axisKey]: axisVal, opacity: 0, filter: `blur(${blur})` },
    visible: { [axisKey]: 0, opacity: 1, filter: 'blur(0px)' },
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        exit="hidden"
        variants={variants}
        transition={{ delay: 0.04 + delay, duration, ease: 'easeOut' }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
