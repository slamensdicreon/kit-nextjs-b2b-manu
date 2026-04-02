'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { VariantProps } from '@/lib/component-props';
import { QuoteRequestFields } from './QuoteRequest.props';

// import { useForm } from 'react-hook-form';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  productInterest: string;
  quantity: string;
  message: string;
}

const productOptions = [
  'AX-7500 Robotic Arm Assembly',
  'VisionPro QC-2000 Inspection System',
  'TurboMill X-900 CNC Center',
  'ConveyMax AGV-500 Autonomous Vehicle',
  'SmartSense IoT Gateway',
  'LaserMark Pro Engraving System',
  'Custom Solution',
  'Other',
];

function FormFields({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'sm:grid-cols-2')}>
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-semibold text-[#1B2A4A]">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            placeholder="John"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#4A7C9B] focus:ring-2 focus:ring-[#4A7C9B]/20 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm font-semibold text-[#1B2A4A]">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            placeholder="Smith"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#4A7C9B] focus:ring-2 focus:ring-[#4A7C9B]/20 focus:outline-none transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-[#1B2A4A]">
          Business Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="john.smith@company.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#4A7C9B] focus:ring-2 focus:ring-[#4A7C9B]/20 focus:outline-none transition-colors"
        />
      </div>
      <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'sm:grid-cols-2')}>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-[#1B2A4A]">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            placeholder="Acme Manufacturing Inc."
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#4A7C9B] focus:ring-2 focus:ring-[#4A7C9B]/20 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-[#1B2A4A]">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (555) 123-4567"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#4A7C9B] focus:ring-2 focus:ring-[#4A7C9B]/20 focus:outline-none transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="productInterest" className="mb-1.5 block text-sm font-semibold text-[#1B2A4A]">
          Product of Interest <span className="text-red-500">*</span>
        </label>
        <select
          id="productInterest"
          name="productInterest"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-[#4A7C9B] focus:ring-2 focus:ring-[#4A7C9B]/20 focus:outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%236b7280%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat"
        >
          <option value="">Select a product...</option>
          {productOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="quantity" className="mb-1.5 block text-sm font-semibold text-[#1B2A4A]">
          Estimated Quantity
        </label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          placeholder="e.g. 10 units"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#4A7C9B] focus:ring-2 focus:ring-[#4A7C9B]/20 focus:outline-none transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-[#1B2A4A]">
          Project Details / Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your application, production requirements, and any specific needs..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#4A7C9B] focus:ring-2 focus:ring-[#4A7C9B]/20 focus:outline-none transition-colors resize-none"
        />
      </div>
    </>
  );
}

export function Default({ fields: f }: VariantProps<QuoteRequestFields>) {
  const heading = f?.heading?.value ?? 'Request a Quote';
  const description =
    f?.description?.value ??
    'Complete the form below and one of our manufacturing solutions specialists will contact you within one business day with a customized quote.';

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-[#1B2A4A] lg:text-4xl">{heading}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5 rounded-2xl bg-white p-8 shadow-lg border border-gray-100 lg:p-10"
        >
          <FormFields />
          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-lg bg-[#FF6B35] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF6B35]/25 transition-all hover:bg-[#e55a25] hover:shadow-xl focus:ring-4 focus:ring-[#FF6B35]/20"
            >
              Submit Quote Request
            </button>
          </div>
          <p className="text-center text-xs text-gray-500">
            By submitting this form, you agree to our{' '}
            <a href="/privacy" className="underline hover:text-[#4A7C9B]">
              Privacy Policy
            </a>
            . We&apos;ll never share your data with third parties.
          </p>
        </form>
      </div>
    </section>
  );
}

export function Inline({ fields: f }: VariantProps<QuoteRequestFields>) {
  const heading = f?.heading?.value ?? 'Get a Quick Quote';

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-[#1B2A4A]">{heading}</h3>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <FormFields compact />
        <button
          type="submit"
          className="w-full rounded-lg bg-[#FF6B35] px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#e55a25] focus:ring-4 focus:ring-[#FF6B35]/20"
        >
          Request Quote
        </button>
      </form>
    </div>
  );
}

export function Modal({ fields: f }: VariantProps<QuoteRequestFields>) {
  const [isOpen, setIsOpen] = useState(false);
  const heading = f?.heading?.value ?? 'Request a Quote';

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg bg-[#FF6B35] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#FF6B35]/25 transition-all hover:bg-[#e55a25] hover:shadow-xl"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Request a Quote
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          {/* Dialog */}
          <div className="relative mx-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="mb-6 text-2xl font-bold text-[#1B2A4A]">{heading}</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <FormFields />
              <button
                type="submit"
                className="w-full rounded-lg bg-[#FF6B35] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF6B35]/25 transition-all hover:bg-[#e55a25] hover:shadow-xl"
              >
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
