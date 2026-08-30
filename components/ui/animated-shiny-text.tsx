import { type CSSProperties, type FC, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  shimmerColor?: string;
  baseColor?: string;
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  style: styleProp,
  shimmerColor = 'rgba(255,255,255,0.9)',
  baseColor = '#C0F158',
  shimmerWidth = 80,
}) => {
  return (
    <span
      className={cn('inline-block', className)}
      style={
        {
          backgroundImage: `linear-gradient(
            120deg,
            ${baseColor} 0%,
            ${baseColor} 35%,
            ${shimmerColor} 50%,
            ${baseColor} 65%,
            ${baseColor} 100%
          )`,
          backgroundSize: `${shimmerWidth * 4}px 100%`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          backgroundPosition: '200% 0',
          animation: 'shiny-text 4s ease-in-out infinite',
          ...styleProp,
        } as CSSProperties
      }
    >
      {children}
    </span>
  );
};
