'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { footerNavigation } from '@/data/navigation';
import type { FooterProps } from './Footer.props';

const COMPANY_NAME = 'Apex Manufacturing Solutions';
const TAGLINE = 'Precision engineering for modern manufacturing';

/* ------------------------------------------------------------------ */
/*  Newsletter signup form                                             */
/* ------------------------------------------------------------------ */
function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    // In production this would call an API endpoint
    setStatus('success');
    setEmail('');
  };

  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-white">
        Stay Updated
      </h3>
      <p className="mt-3 text-sm text-slate-400">
        Get the latest product updates, industry insights, and manufacturing best practices delivered to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex gap-2">
          <label htmlFor="footer-email" className="sr-only">
            Email address
          </label>
          <input
            id="footer-email"
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            className="min-w-0 flex-1 rounded bg-primary-800 px-4 py-2.5 text-sm text-white placeholder-slate-400 border border-primary-700 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
          />
          <button
            type="submit"
            className="rounded bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-600 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-900"
          >
            Subscribe
          </button>
        </div>

        {status === 'success' && (
          <p className="mt-2 text-sm text-green-400">
            Thank you! You have been subscribed.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-2 text-sm text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Link column                                                        */
/* ------------------------------------------------------------------ */
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-slate-400 hover:text-accent-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Default variant                                                    */
/* ------------------------------------------------------------------ */
export default function Footer(props: FooterProps) {
  return <Default {...props} />;
}

export function Default(_props: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900" aria-label="Site footer">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Quick Links */}
          <FooterColumn title="Quick Links" links={footerNavigation.quickLinks} />

          {/* Column 2: Industries */}
          <FooterColumn title="Industries" links={footerNavigation.industries} />

          {/* Column 3: Support */}
          <FooterColumn title="Support" links={footerNavigation.support} />

          {/* Column 4: Newsletter */}
          <NewsletterForm />
        </div>

        {/* Company info row */}
        <div className="mt-16 border-t border-primary-800 pt-8">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Branding */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-500 text-white">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
              </div>
              <div>
                <span className="block text-base font-bold text-white">{COMPANY_NAME}</span>
                <span className="block text-xs text-slate-400">{TAGLINE}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {[
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com',
                  icon: (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: 'X (Twitter)',
                  href: 'https://twitter.com',
                  icon: (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  label: 'YouTube',
                  href: 'https://youtube.com',
                  icon: (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-accent-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800 bg-primary-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-slate-300 transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
