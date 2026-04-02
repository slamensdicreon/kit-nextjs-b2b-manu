'use client';

import { cn } from '@/lib/utils';
import { VariantProps } from '@/lib/component-props';
import { ProductCardFields } from './ProductCard.props';

const placeholderFields: ProductCardFields = {
  title: { value: 'AX-7500 Robotic Arm Assembly' },
  category: { value: 'Automation' },
  shortDescription: {
    value:
      'High-precision 6-axis robotic arm designed for automated assembly lines. Features sub-millimeter repeatability and advanced collision detection for safe human-robot collaboration.',
  },
  image: {
    value: {
      src: '/images/placeholder-product.jpg',
      alt: 'AX-7500 Robotic Arm Assembly',
      width: 640,
      height: 480,
    },
  },
  link: { value: { href: '/products/ax-7500', text: 'Learn More' } },
  sku: { value: 'AX-7500-US' },
  specs: {
    value: 'Payload: 7.5 kg | Reach: 1200 mm | Repeatability: ±0.02 mm',
  },
};

const categoryColors: Record<string, string> = {
  Automation: 'bg-[#FF6B35]/10 text-[#FF6B35]',
  'Quality Control': 'bg-emerald-50 text-emerald-700',
  'Precision Tooling': 'bg-[#4A7C9B]/10 text-[#4A7C9B]',
  'Material Handling': 'bg-amber-50 text-amber-700',
};

function getCategoryStyle(category: string): string {
  return categoryColors[category] ?? 'bg-gray-100 text-gray-700';
}

export function Default({ fields: f }: VariantProps<ProductCardFields>) {
  const fields = f ?? placeholderFields;

  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={fields.image.value.src}
          alt={fields.image.value.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={fields.image.value.width}
          height={fields.image.value.height}
        />
        <span
          className={cn(
            'absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold',
            getCategoryStyle(fields.category.value)
          )}
        >
          {fields.category.value}
        </span>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold text-[#1B2A4A] group-hover:text-[#4A7C9B] transition-colors">
          {fields.title.value}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-3">
          {fields.shortDescription.value}
        </p>
        <a
          href={fields.link.value.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B35] hover:text-[#e55a25] transition-colors"
        >
          {fields.link.value.text || 'Learn More'}
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export function Compact({ fields: f }: VariantProps<ProductCardFields>) {
  const fields = f ?? placeholderFields;

  return (
    <article className="group flex gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={fields.image.value.src}
          alt={fields.image.value.alt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <span
            className={cn(
              'mb-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
              getCategoryStyle(fields.category.value)
            )}
          >
            {fields.category.value}
          </span>
          <h3 className="text-sm font-bold text-[#1B2A4A] group-hover:text-[#4A7C9B] transition-colors">
            {fields.title.value}
          </h3>
        </div>
        <a
          href={fields.link.value.href}
          className="text-xs font-semibold text-[#FF6B35] hover:text-[#e55a25]"
        >
          {fields.link.value.text || 'Learn More'} &rarr;
        </a>
      </div>
    </article>
  );
}

export function Detailed({ fields: f }: VariantProps<ProductCardFields>) {
  const fields = f ?? placeholderFields;

  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <img
          src={fields.image.value.src}
          alt={fields.image.value.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={fields.image.value.width}
          height={fields.image.value.height}
        />
        <span
          className={cn(
            'absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold',
            getCategoryStyle(fields.category.value)
          )}
        >
          {fields.category.value}
        </span>
      </div>
      <div className="p-6">
        <div className="mb-1 text-xs font-medium text-gray-400 uppercase tracking-wider">
          SKU: {fields.sku.value}
        </div>
        <h3 className="mb-2 text-xl font-bold text-[#1B2A4A] group-hover:text-[#4A7C9B] transition-colors">
          {fields.title.value}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          {fields.shortDescription.value}
        </p>
        {fields.specs.value && (
          <div className="mb-4 rounded-lg bg-gray-50 p-3">
            <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Key Specs
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">{fields.specs.value}</p>
          </div>
        )}
        <a
          href={fields.link.value.href}
          className="inline-flex items-center gap-2 rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#4A7C9B]"
        >
          {fields.link.value.text || 'Learn More'}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}
