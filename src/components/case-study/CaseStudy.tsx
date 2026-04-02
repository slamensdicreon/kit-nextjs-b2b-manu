'use client';

import { cn } from '@/lib/utils';
import { VariantProps } from '@/lib/component-props';
import { CaseStudyFields } from './CaseStudy.props';

const placeholderFields: CaseStudyFields = {
  title: { value: 'Reducing Assembly Line Downtime by 73% with Predictive Automation' },
  client: { value: 'Sterling Automotive Group' },
  clientLogo: { value: { src: '/images/placeholder-logo.svg', alt: 'Sterling Automotive Group', width: 180, height: 48 } },
  industry: { value: 'Automotive' },
  heroImage: { value: { src: '/images/placeholder-case-study.jpg', alt: 'Sterling Automotive production floor', width: 1200, height: 600 } },
  challenge: {
    value:
      '<p>Sterling Automotive Group was experiencing frequent unplanned downtime on their primary assembly line, averaging 14 hours per month. Legacy equipment lacked real-time monitoring capabilities, resulting in reactive maintenance that disrupted production schedules and increased costs by an estimated $2.3M annually.</p>',
  },
  solution: {
    value:
      '<p>Apex Manufacturing Solutions deployed a comprehensive SmartSense IoT monitoring network across 47 critical production assets, paired with AX-7500 robotic arms at three key bottleneck stations. Our predictive maintenance algorithms analyze vibration, temperature, and power consumption data to forecast equipment failures 72 hours in advance, enabling planned maintenance windows.</p>',
  },
  results: {
    value:
      '<p>Within six months of full deployment, Sterling Automotive achieved a 73% reduction in unplanned downtime and a 31% increase in overall equipment effectiveness (OEE). The ROI breakeven was reached in just 4.5 months.</p>',
  },
  metrics: [
    { label: { value: 'Downtime Reduction' }, value: { value: '73%' } },
    { label: { value: 'OEE Improvement' }, value: { value: '31%' } },
    { label: { value: 'ROI Breakeven' }, value: { value: '4.5 mo' } },
    { label: { value: 'Annual Savings' }, value: { value: '$1.7M' } },
  ],
  link: { value: { href: '/case-studies/sterling-automotive', text: 'Read Full Case Study' } },
};

export function Default({ fields: f }: VariantProps<CaseStudyFields>) {
  const fields = f ?? placeholderFields;

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="relative mb-12 overflow-hidden rounded-2xl">
          <img
            src={fields.heroImage.value.src}
            alt={fields.heroImage.value.alt}
            className="h-64 w-full object-cover sm:h-80 lg:h-96"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 lg:p-12">
            <span className="mb-3 inline-block rounded-full bg-[#FF6B35] px-3 py-1 text-xs font-semibold text-white">
              {fields.industry.value}
            </span>
            <h1 className="max-w-3xl text-2xl font-bold text-white lg:text-4xl">
              {fields.title.value}
            </h1>
          </div>
        </div>

        {/* Client & Metrics */}
        <div className="mb-12 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <img
              src={fields.clientLogo.value.src}
              alt={fields.clientLogo.value.alt}
              className="h-12 w-auto"
            />
            <div>
              <div className="text-xs uppercase tracking-wider text-gray-500">Client</div>
              <div className="font-semibold text-[#1B2A4A]">{fields.client.value}</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            {fields.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-[#FF6B35]">{metric.value.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{metric.label.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-8 w-1 rounded-full bg-red-500" />
              <h2 className="text-xl font-bold text-[#1B2A4A]">The Challenge</h2>
            </div>
            <div
              className="prose prose-sm prose-gray max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: fields.challenge.value }}
            />
          </div>
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-8 w-1 rounded-full bg-[#4A7C9B]" />
              <h2 className="text-xl font-bold text-[#1B2A4A]">Our Solution</h2>
            </div>
            <div
              className="prose prose-sm prose-gray max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: fields.solution.value }}
            />
          </div>
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-8 w-1 rounded-full bg-emerald-500" />
              <h2 className="text-xl font-bold text-[#1B2A4A]">The Results</h2>
            </div>
            <div
              className="prose prose-sm prose-gray max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: fields.results.value }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Card({ fields: f }: VariantProps<CaseStudyFields>) {
  const fields = f ?? placeholderFields;

  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={fields.heroImage.value.src}
          alt={fields.heroImage.value.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-[#FF6B35] px-3 py-1 text-xs font-semibold text-white">
          {fields.industry.value}
        </span>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center gap-3">
          <img
            src={fields.clientLogo.value.src}
            alt={fields.clientLogo.value.alt}
            className="h-8 w-auto opacity-60"
          />
          <span className="text-sm text-gray-500">{fields.client.value}</span>
        </div>
        <h3 className="mb-3 text-lg font-bold text-[#1B2A4A] group-hover:text-[#4A7C9B] transition-colors line-clamp-2">
          {fields.title.value}
        </h3>
        <div className="mb-4 flex flex-wrap gap-4">
          {fields.metrics.slice(0, 3).map((metric, i) => (
            <div key={i}>
              <span className="text-lg font-bold text-[#FF6B35]">{metric.value.value}</span>
              <span className="ml-1 text-xs text-gray-500">{metric.label.value}</span>
            </div>
          ))}
        </div>
        <a
          href={fields.link.value.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B35] hover:text-[#e55a25] transition-colors"
        >
          {fields.link.value.text || 'Read Case Study'}
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}
