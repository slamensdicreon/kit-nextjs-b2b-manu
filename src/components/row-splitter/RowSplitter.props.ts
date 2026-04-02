import { ReactNode } from 'react';

export interface RowSplitterProps {
  children: ReactNode;
  className?: string;
  params?: Record<string, string>;
}
