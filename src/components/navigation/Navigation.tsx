'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { mainNavigation, type NavItem } from '@/data/navigation';
import type { NavigationProps } from './Navigation.props';

/* ------------------------------------------------------------------ */
/*  Mega-menu dropdown for top-level items with children               */
/* ------------------------------------------------------------------ */
function MegaMenu({
  item,
  isOpen,
  onClose,
}: {
  item: NavItem;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!item.children || !isOpen) return null;

  const hasNestedChildren = item.children.some((child) => child.children);

  return (
    <div
      className="absolute left-0 top-full z-50 w-screen bg-white shadow-overlay border-t border-surface-200"
      onMouseLeave={onClose}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {hasNestedChildren ? (
          /* Products-style: multi-column with sub-children */
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-4">
            {item.children.map((group) => (
              <div key={group.href}>
                <Link
                  href={group.href}
                  className="text-sm font-bold uppercase tracking-wider text-primary-900 hover:text-accent-500"
                  onClick={onClose}
                >
                  {group.label}
                </Link>
                {group.children && (
                  <ul className="mt-3 space-y-2">
                    {group.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="text-sm text-slate-600 hover:text-accent-500 transition-colors"
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Simple list dropdown */
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="rounded-md px-4 py-3 text-sm font-medium text-slate-700 hover:bg-surface-100 hover:text-accent-500 transition-colors"
                onClick={onClose}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
        <div className="mt-6 border-t border-surface-200 pt-4">
          <Link
            href={item.href}
            className="text-sm font-semibold text-secondary-600 hover:text-secondary-700"
            onClick={onClose}
          >
            View all {item.label} &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile nav: accordion-style                                        */
/* ------------------------------------------------------------------ */
function MobileNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <nav className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white shadow-xl">
        {/* Close button */}
        <div className="flex items-center justify-between border-b border-surface-200 px-4 py-4">
          <span className="text-lg font-bold text-primary-900">Menu</span>
          <button
            type="button"
            className="rounded-md p-2 text-slate-500 hover:bg-surface-100 hover:text-slate-700"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-4 py-4 space-y-1">
          {mainNavigation.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-primary-900 hover:bg-surface-100"
                    onClick={() => toggleExpand(item.label)}
                    aria-expanded={expandedItem === item.label}
                  >
                    {item.label}
                    <svg
                      className={cn(
                        'h-5 w-5 text-slate-400 transition-transform duration-200',
                        expandedItem === item.label && 'rotate-180'
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {expandedItem === item.label && (
                    <div className="ml-4 space-y-1 border-l-2 border-surface-200 pl-4 pb-2">
                      {item.children.map((child) => (
                        <div key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-surface-100 hover:text-accent-500"
                            onClick={onClose}
                          >
                            {child.label}
                          </Link>
                          {child.children && (
                            <div className="ml-4 space-y-1">
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className="block px-3 py-1.5 text-sm text-slate-500 hover:text-accent-500"
                                  onClick={onClose}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-3 text-base font-medium text-primary-900 hover:bg-surface-100"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-surface-200 px-4 py-6">
          <Link
            href="/contact?type=quote"
            className="btn-primary w-full text-center"
            onClick={onClose}
          >
            Request a Quote
          </Link>
        </div>
      </nav>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Default variant                                                    */
/* ------------------------------------------------------------------ */
export default function Navigation(props: NavigationProps) {
  return <Default {...props} />;
}

export function Default({ siteName }: NavigationProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeout.current = setTimeout(() => setOpenMenu(null), 150);
  }, []);

  const closeMega = useCallback(() => setOpenMenu(null), []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white transition-shadow duration-200',
        scrolled && 'shadow-elevated'
      )}
    >
      {/* Top utility bar */}
      <div className="hidden border-b border-surface-200 bg-surface-50 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-4 py-1.5 text-xs text-slate-500 sm:px-6 lg:px-8">
          <a href="tel:+18005550199" className="hover:text-primary-900 transition-colors">
            +1 (800) 555-0199
          </a>
          <a href="mailto:info@apexmfg.com" className="hover:text-primary-900 transition-colors">
            info@apexmfg.com
          </a>
          <Link href="/support/service" className="hover:text-primary-900 transition-colors">
            Service & Support
          </Link>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo / site name */}
        <Link href="/" className="flex items-center gap-3 group" aria-label={`${siteName} home`}>
          {/* Logo icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-900 text-white">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <span className="block text-lg font-bold leading-tight text-primary-900 group-hover:text-primary-700 transition-colors">
              {siteName || 'Apex Manufacturing'}
            </span>
            <span className="block text-[11px] uppercase tracking-widest text-slate-400">
              Solutions
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {mainNavigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className={cn(
                  'inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  openMenu === item.label
                    ? 'bg-surface-100 text-primary-900'
                    : 'text-slate-700 hover:bg-surface-100 hover:text-primary-900'
                )}
              >
                {item.label}
                {item.children && (
                  <svg
                    className={cn(
                      'h-4 w-4 text-slate-400 transition-transform duration-200',
                      openMenu === item.label && 'rotate-180'
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {item.children && (
                <MegaMenu item={item} isOpen={openMenu === item.label} onClose={closeMega} />
              )}
            </div>
          ))}
        </div>

        {/* Right-side actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact?type=quote"
            className="btn-primary hidden text-sm lg:inline-flex"
          >
            Request a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="rounded-md p-2 text-slate-700 hover:bg-surface-100 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
