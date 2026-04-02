import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Apex Manufacturing Solutions | Industrial Equipment & Automation',
  description:
    'Leading provider of industrial automation systems, precision tooling, and quality control equipment for manufacturing operations worldwide.',
  keywords: [
    'industrial automation',
    'manufacturing equipment',
    'precision tooling',
    'quality control',
    'B2B manufacturing',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
