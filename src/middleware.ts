import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Next.js middleware for handling:
 * - Multisite resolution
 * - Locale detection and redirects
 * - Personalization
 * - Sitecore redirects
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next();
  }

  // Default locale redirect: if no locale in path, redirect to /en
  const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE || 'en';
  const defaultSite = process.env.SITECORE_SITE_NAME || 'b2b-manufacturing';

  // If accessing root, redirect to default site/locale
  if (pathname === '/') {
    return NextResponse.redirect(
      new URL(`/${defaultSite}/${defaultLocale}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/).*)',
  ],
};
