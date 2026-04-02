import { ReactNode } from 'react';

export interface ColumnSplitterProps {
  children: ReactNode;
  className?: string;
  params?: Record<string, string>;
}
