import { ReactNode } from 'react';

export interface PageContentProps {
  children: ReactNode;
  className?: string;
  params?: Record<string, string>;
}
