import { cn } from '@/lib/utils';
import type { PageContentProps } from './PageContent.props';

/**
 * Default variant -- main content area wrapper.
 *
 * Provides consistent vertical spacing, a sensible min-height so the page
 * footer is pushed down even on short pages, and a semantic <main> landmark.
 */
export function Default({ children, className }: PageContentProps) {
  return (
    <main
      id="main-content"
      className={cn('min-h-[60vh] py-8 md:py-12 lg:py-16', className)}
    >
      {children}
    </main>
  );
}

/**
 * Flush variant -- no vertical padding; content sits edge-to-edge vertically.
 * Useful for pages where the hero or first section handles its own spacing.
 */
export function Flush({ children, className }: PageContentProps) {
  return (
    <main
      id="main-content"
      className={cn('min-h-[60vh]', className)}
    >
      {children}
    </main>
  );
}

/**
 * Narrow variant -- constrains width for article/blog-style content while
 * keeping vertical rhythm.
 */
export function Narrow({ children, className }: PageContentProps) {
  return (
    <main
      id="main-content"
      className={cn(
        'mx-auto min-h-[60vh] max-w-4xl px-4 py-8 sm:px-6 md:py-12 lg:px-8 lg:py-16',
        className
      )}
    >
      {children}
    </main>
  );
}
