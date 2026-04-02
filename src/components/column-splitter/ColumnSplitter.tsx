import { cn } from '@/lib/utils';
import type { ColumnSplitterProps } from './ColumnSplitter.props';

/**
 * Maps a column count (string from params or default) to the appropriate
 * Tailwind grid classes. Supports 2, 3, or 4 columns with responsive
 * breakpoints that collapse to a single column on mobile.
 */
function getGridClasses(columns: string | undefined): string {
  switch (columns) {
    case '4':
      return 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4';
    case '3':
      return 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3';
    case '2':
    default:
      return 'grid grid-cols-1 gap-6 md:grid-cols-2';
  }
}

/**
 * Default variant -- responsive CSS Grid layout.
 *
 * Reads `params.columns` to determine the number of columns:
 * - "2" (default): two-column layout
 * - "3": three-column layout
 * - "4": four-column layout
 *
 * Children are distributed evenly across columns. On smaller screens the
 * grid collapses to fewer columns for readability.
 */
export function Default({ children, className, params }: ColumnSplitterProps) {
  const columns = params?.columns;

  return (
    <div className={cn(getGridClasses(columns), className)}>
      {children}
    </div>
  );
}

/**
 * Sidebar variant -- 2-column layout with a wider main area and a narrower sidebar.
 * The main content takes up 2/3 and the sidebar 1/3 on large screens.
 */
export function Sidebar({ children, className }: ColumnSplitterProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-8 lg:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * EqualHeight variant -- same as Default but children are stretched to equal height.
 */
export function EqualHeight({ children, className, params }: ColumnSplitterProps) {
  const columns = params?.columns;

  return (
    <div className={cn(getGridClasses(columns), 'items-stretch', className)}>
      {children}
    </div>
  );
}
