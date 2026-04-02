import { cn } from '@/lib/utils';
import type { RowSplitterProps } from './RowSplitter.props';

/**
 * Default variant -- vertical flex layout with consistent spacing between rows.
 *
 * Reads `params.gap` for custom gap sizing:
 * - "sm"  : 1rem gap
 * - "md"  : 2rem gap (default)
 * - "lg"  : 3rem gap
 * - "xl"  : 4rem gap
 * - "none": no gap
 */
export function Default({ children, className, params }: RowSplitterProps) {
  const gap = params?.gap;

  const gapClass = (() => {
    switch (gap) {
      case 'none':
        return 'gap-0';
      case 'sm':
        return 'gap-4';
      case 'lg':
        return 'gap-12';
      case 'xl':
        return 'gap-16';
      case 'md':
      default:
        return 'gap-8';
    }
  })();

  return (
    <div className={cn('flex flex-col', gapClass, className)}>
      {children}
    </div>
  );
}

/**
 * Section variant -- each row is treated as a full-width section with vertical
 * padding, giving a stacked page-section feel.
 */
export function Section({ children, className }: RowSplitterProps) {
  return (
    <div className={cn('flex flex-col divide-y divide-surface-200', className)}>
      {children}
    </div>
  );
}
