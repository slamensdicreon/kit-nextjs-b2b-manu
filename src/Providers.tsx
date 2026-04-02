'use client';

import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Client-side providers wrapper.
 * Add context providers here (theme, auth, cart, etc.)
 */
export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      {/* Add providers here as needed:
          <ThemeProvider>
          <AuthProvider>
          <CartProvider>
      */}
      {children}
    </>
  );
}
