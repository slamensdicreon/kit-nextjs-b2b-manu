import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  params?: Record<string, string>;
}
