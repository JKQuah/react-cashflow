'use client';

import { motion, type MotionStyle, type Transition } from 'motion/react';
import { cn } from '@/lib/utils';

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  transition?: Transition;
  className?: string;
  style?: React.CSSProperties;
  reverse?: boolean;
  initialOffset?: number;
  borderWidth?: number;
}

export function BorderBeam({
  className,
  size = 80,
  delay = 0,
  duration = 8,
  colorFrom = '#C0F158',
  colorTo = '#4ADE80',
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1.5,
}: BorderBeamProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit]"
      style={
        {
          padding: `${borderWidth}px`,
          background: 'transparent',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          '--border-beam-width': `${borderWidth}px`,
        } as React.CSSProperties
      }
    >
      <motion.div
        className={cn('absolute aspect-square rounded-full', className)}
        style={
          {
            width: size,
            height: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            background: `radial-gradient(circle, ${colorFrom}, ${colorTo}, transparent 60%)`,
            filter: 'blur(4px)',
            opacity: 0.8,
            ...style,
          } as MotionStyle
        }
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration,
          delay: -delay,
          ...transition,
        }}
      />
    </div>
  );
}
