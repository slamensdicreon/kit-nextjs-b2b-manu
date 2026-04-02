import { cn } from '@/lib/utils';
import type { ContainerProps } from './Container.props';

/**
 * Default container -- constrained width with responsive horizontal padding.
 */
export function Default({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}

/**
 * FullWidth variant -- spans the full viewport width with minimal padding.
 */
export function FullWidth({ children, className }: ContainerProps) {
  return (
    <div className={cn('w-full px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}

/**
 * Narrow variant -- tighter max-width, ideal for long-form text content.
 */
export function Narrow({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto max-w-4xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
