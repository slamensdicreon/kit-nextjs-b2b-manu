'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { VariantProps } from '@/lib/component-props';
import { ProductGridFields } from './ProductGrid.props';
import { ProductCardFields } from '../product-card/ProductCard.props';
import { Default as ProductCard } from '../product-card/ProductCard';

const placeholderProducts: ProductCardFields[] = [
  {
    title: { value: 'AX-7500 Robotic Arm Assembly' },
    category: { value: 'Automation' },
    shortDescription: { value: 'High-precision 6-axis robotic arm for automated assembly lines with sub-millimeter repeatability.' },
    image: { value: { src: '/images/placeholder-product.jpg', alt: 'AX-7500 Robotic Arm', width: 640, height: 480 } },
    link: { value: { href: '/products/ax-7500', text: 'Learn More' } },
    sku: { value: 'AX-7500-US' },
    specs: { value: 'Payload: 7.5 kg | Reach: 1200 mm' },
  },
  {
    title: { value: 'VisionPro QC-2000 Inspection System' },
    category: { value: 'Quality Control' },
    shortDescription: { value: 'AI-powered visual inspection system detecting defects at 99.97% accuracy across high-speed production lines.' },
    image: { value: { src: '/images/placeholder-product.jpg', alt: 'VisionPro QC-2000', width: 640, height: 480 } },
    link: { value: { href: '/products/qc-2000', text: 'Learn More' } },
    sku: { value: 'QC-2000-US' },
    specs: { value: 'Speed: 200 parts/min | Resolution: 5 MP' },
  },
  {
    title: { value: 'TurboMill X-900 CNC Center' },
    category: { value: 'Precision Tooling' },
    shortDescription: { value: '5-axis CNC machining center delivering ultra-precise cuts with ±0.005mm tolerance for complex geometries.' },
    image: { value: { src: '/images/placeholder-product.jpg', alt: 'TurboMill X-900', width: 640, height: 480 } },
    link: { value: { href: '/products/x-900', text: 'Learn More' } },
    sku: { value: 'TM-X900-US' },
    specs: { value: 'Tolerance: ±0.005 mm | Axes: 5' },
  },
  {
    title: { value: 'ConveyMax AGV-500 Autonomous Vehicle' },
    category: { value: 'Material Handling' },
    shortDescription: { value: 'Autonomous guided vehicle for warehouse logistics with 500 kg payload and intelligent path planning.' },
    image: { value: { src: '/images/placeholder-product.jpg', alt: 'ConveyMax AGV-500', width: 640, height: 480 } },
    link: { value: { href: '/products/agv-500', text: 'Learn More' } },
    sku: { value: 'AGV-500-US' },
    specs: { value: 'Payload: 500 kg | Speed: 2 m/s' },
  },
  {
    title: { value: 'SmartSense IoT Gateway' },
    category: { value: 'Automation' },
    shortDescription: { value: 'Industrial IoT gateway connecting legacy equipment to the cloud for real-time monitoring and predictive maintenance.' },
    image: { value: { src: '/images/placeholder-product.jpg', alt: 'SmartSense IoT Gateway', width: 640, height: 480 } },
    link: { value: { href: '/products/iot-gateway', text: 'Learn More' } },
    sku: { value: 'SS-IOT-100' },
    specs: { value: 'Protocols: MQTT, OPC-UA | Inputs: 64' },
  },
  {
    title: { value: 'LaserMark Pro Engraving System' },
    category: { value: 'Quality Control' },
    shortDescription: { value: 'Fiber laser marking system for permanent part identification, traceability, and compliance marking on metals and plastics.' },
    image: { value: { src: '/images/placeholder-product.jpg', alt: 'LaserMark Pro', width: 640, height: 480 } },
    link: { value: { href: '/products/lasermark-pro', text: 'Learn More' } },
    sku: { value: 'LM-PRO-50W' },
    specs: { value: 'Power: 50W | Speed: 7000 mm/s' },
  },
];

const allCategories = ['All', 'Automation', 'Quality Control', 'Precision Tooling', 'Material Handling'];

function FilterBar({
  categories,
  activeCategory,
  onCategoryChange,
  layout = 'horizontal',
}: {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  layout?: 'horizontal' | 'vertical';
}) {
  return (
    <div className={cn('flex gap-2 flex-wrap', layout === 'vertical' && 'flex-col')}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={cn(
            'rounded-full px-4 py-2 text-sm font-medium transition-all',
            activeCategory === cat
              ? 'bg-[#1B2A4A] text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
            layout === 'vertical' && 'rounded-lg text-left justify-start'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export function Default({ fields: f }: VariantProps<ProductGridFields>) {
  const [activeCategory, setActiveCategory] = useState('All');
  const products = f?.products ?? placeholderProducts;
  const heading = f?.heading?.value ?? 'Our Product Portfolio';
  const subheading =
    f?.subheading?.value ??
    'Explore our comprehensive range of industrial automation and manufacturing solutions.';

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category.value === activeCategory);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-[#1B2A4A] lg:text-4xl">{heading}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{subheading}</p>
        </div>
        <div className="mb-8 flex justify-center">
          <FilterBar
            categories={allCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <ProductCard key={i} fields={product} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-12 text-center text-gray-500">
            No products found in this category. Please try a different filter.
          </p>
        )}
      </div>
    </section>
  );
}

export function WithSidebar({ fields: f }: VariantProps<ProductGridFields>) {
  const [activeCategory, setActiveCategory] = useState('All');
  const products = f?.products ?? placeholderProducts;
  const heading = f?.heading?.value ?? 'Our Product Portfolio';

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category.value === activeCategory);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-[#1B2A4A] lg:text-4xl">{heading}</h2>
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
                Filter by Category
              </h3>
              <FilterBar
                categories={allCategories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                layout="vertical"
              />
              <hr className="my-5 border-gray-200" />
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
                Industry
              </h3>
              <div className="space-y-2">
                {['Automotive', 'Aerospace', 'Electronics', 'Pharmaceutical'].map((ind) => (
                  <label key={ind} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#1B2A4A] focus:ring-[#4A7C9B]"
                    />
                    {ind}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="mb-4 text-sm text-gray-500">
              Showing {filtered.length} of {products.length} products
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product, i) => (
                <ProductCard key={i} fields={product} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="py-12 text-center text-gray-500">
                No products match the selected filters.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
