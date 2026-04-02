'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { VariantProps } from '@/lib/component-props';
import { ProductDetailFields } from './ProductDetail.props';

const placeholderFields: ProductDetailFields = {
  title: { value: 'AX-7500 Robotic Arm Assembly' },
  category: { value: 'Automation' },
  sku: { value: 'AX-7500-US' },
  description: {
    value: `<p>The AX-7500 Robotic Arm Assembly is our flagship 6-axis industrial robot, engineered for high-speed automated assembly operations. With sub-millimeter repeatability and a robust payload capacity, it's the ideal solution for manufacturers seeking to increase throughput while maintaining exacting quality standards.</p>
<p>Built with aerospace-grade aluminum and hardened steel gearing, the AX-7500 delivers exceptional durability even in demanding 24/7 production environments. Its advanced collision detection and force-torque sensing enable safe human-robot collaboration without the need for physical safety barriers.</p>`,
  },
  images: [
    { value: { src: '/images/placeholder-product.jpg', alt: 'AX-7500 Front View', width: 800, height: 600 } },
    { value: { src: '/images/placeholder-product-2.jpg', alt: 'AX-7500 Side View', width: 800, height: 600 } },
    { value: { src: '/images/placeholder-product-3.jpg', alt: 'AX-7500 In Production', width: 800, height: 600 } },
  ],
  features: [
    { value: '6-axis articulation with 1200mm reach envelope' },
    { value: 'Sub-millimeter repeatability (±0.02mm)' },
    { value: 'Advanced collision detection and force-torque sensing' },
    { value: 'IP67-rated for washdown environments' },
    { value: 'Integrated vision system compatibility' },
    { value: 'EtherCAT and PROFINET communication protocols' },
    { value: '24/7 continuous operation rated' },
    { value: 'Quick-change end effector mounting system' },
  ],
  specsLabel: [
    { value: 'Payload Capacity' },
    { value: 'Reach' },
    { value: 'Repeatability' },
    { value: 'Axes' },
    { value: 'Weight' },
    { value: 'Power Supply' },
    { value: 'Protection Rating' },
    { value: 'Operating Temperature' },
    { value: 'Communication' },
    { value: 'Certifications' },
  ],
  specsValue: [
    { value: '7.5 kg' },
    { value: '1200 mm' },
    { value: '±0.02 mm' },
    { value: '6' },
    { value: '185 kg' },
    { value: '200–600 VAC, 50/60 Hz' },
    { value: 'IP67' },
    { value: '0°C to 45°C' },
    { value: 'EtherCAT, PROFINET, EtherNet/IP' },
    { value: 'CE, UL, ISO 10218-1' },
  ],
  datasheet: { value: { href: '/downloads/ax-7500-datasheet.pdf', text: 'Download Datasheet' } },
  quoteLink: { value: { href: '/quote?product=AX-7500', text: 'Request a Quote' } },
};

export function Default({ fields: f }: VariantProps<ProductDetailFields>) {
  const fields = f ?? placeholderFields;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = fields.images?.length ? fields.images : placeholderFields.images;

  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <ol className="flex items-center gap-2">
            <li><a href="/products" className="hover:text-[#4A7C9B] transition-colors">Products</a></li>
            <li>/</li>
            <li><a href={`/products?category=${fields.category.value}`} className="hover:text-[#4A7C9B] transition-colors">{fields.category.value}</a></li>
            <li>/</li>
            <li className="text-[#1B2A4A] font-medium">{fields.title.value}</li>
          </ol>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Image Gallery */}
          <div>
            <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
              <img
                src={images[activeImageIndex].value.src}
                alt={images[activeImageIndex].value.alt}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-[#FF6B35]/10 px-3 py-1 text-xs font-semibold text-[#FF6B35]">
                {fields.category.value}
              </span>
            </div>
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={cn(
                      'h-20 w-20 overflow-hidden rounded-lg border-2 transition-all',
                      i === activeImageIndex
                        ? 'border-[#4A7C9B] shadow-md'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    )}
                  >
                    <img
                      src={img.value.src}
                      alt={img.value.alt}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
              SKU: {fields.sku.value}
            </div>
            <h1 className="mb-4 text-3xl font-bold text-[#1B2A4A] lg:text-4xl">
              {fields.title.value}
            </h1>
            <div
              className="prose prose-gray mb-6 max-w-none text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: fields.description.value }}
            />

            {/* CTA buttons */}
            <div className="mb-8 flex flex-wrap gap-4">
              <a
                href={fields.quoteLink.value.href}
                className="inline-flex items-center gap-2 rounded-lg bg-[#FF6B35] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#FF6B35]/25 transition-all hover:bg-[#e55a25] hover:shadow-xl"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {fields.quoteLink.value.text || 'Request a Quote'}
              </a>
              <a
                href={fields.datasheet.value.href}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-[#1B2A4A] px-6 py-3 text-sm font-bold text-[#1B2A4A] transition-all hover:bg-[#1B2A4A] hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {fields.datasheet.value.text || 'Download Datasheet'}
              </a>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h2 className="mb-4 text-lg font-bold text-[#1B2A4A]">Key Features</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {fields.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature.value}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs Summary */}
            <div>
              <h2 className="mb-4 text-lg font-bold text-[#1B2A4A]">Technical Specifications</h2>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-sm">
                  <tbody>
                    {fields.specsLabel.map((label, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 font-semibold text-[#1B2A4A] w-1/2">
                          {label.value}
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          {fields.specsValue[i]?.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
