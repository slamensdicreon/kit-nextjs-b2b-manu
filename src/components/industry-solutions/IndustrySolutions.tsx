'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { VariantProps } from '@/lib/component-props';
import { IndustrySolutionsFields } from './IndustrySolutions.props';
import { Car, Plane, Cpu, UtensilsCrossed, Pill, ArrowRight } from 'lucide-react';

const defaultIndustries = [
  {
    name: 'Automotive',
    slug: 'automotive',
    icon: Car,
    description:
      'High-speed automation and precision tooling for automotive assembly lines, powertrain manufacturing, and quality inspection.',
    capabilities: ['Robotic Welding Systems', 'Assembly Line Automation', 'Paint Shop Solutions', 'Quality Vision Systems'],
  },
  {
    name: 'Aerospace & Defense',
    slug: 'aerospace',
    icon: Plane,
    description:
      'Precision-critical manufacturing solutions meeting AS9100D standards for aircraft components, defense systems, and satellite assemblies.',
    capabilities: ['5-Axis CNC Machining', 'Non-Destructive Testing', 'Composite Processing', 'Cleanroom Assembly'],
  },
  {
    name: 'Electronics',
    slug: 'electronics',
    icon: Cpu,
    description:
      'Micro-precision assembly and testing solutions for PCB manufacturing, semiconductor packaging, and consumer electronics.',
    capabilities: ['SMT Placement', 'AOI Inspection', 'Wire Bonding', 'Functional Testing'],
  },
  {
    name: 'Food & Beverage',
    slug: 'food-beverage',
    icon: UtensilsCrossed,
    description:
      'Hygienic processing and packaging automation designed to meet FDA and USDA requirements for food safety.',
    capabilities: ['Packaging Automation', 'Filling Systems', 'Label Inspection', 'Palletizing'],
  },
  {
    name: 'Pharmaceutical',
    slug: 'pharmaceutical',
    icon: Pill,
    description:
      'GMP-compliant manufacturing and inspection systems for pharmaceutical production, packaging, and serialization.',
    capabilities: ['Blister Packaging', 'Serialization', 'Vision Inspection', 'Cleanroom Automation'],
  },
];

export function Default(props: VariantProps<IndustrySolutionsFields>) {
  const title = props.fields?.title?.value || 'Industries We Serve';
  const subtitle =
    props.fields?.subtitle?.value ||
    'Tailored manufacturing solutions for the world\'s most demanding industries.';

  return (
    <section className="section">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>
        <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">{subtitle}</p>
        <div className="space-y-6">
          {defaultIndustries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div
                key={i}
                className="card flex flex-col md:flex-row gap-6 items-start hover:shadow-elevated transition-shadow"
              >
                <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-primary-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{industry.name}</h3>
                  <p className="text-slate-600 mb-3">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.capabilities.map((cap, j) => (
                      <span key={j} className="badge-primary text-xs">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={`/solutions/${industry.slug}`}
                  className="text-secondary-600 hover:text-accent-500 transition-colors flex items-center gap-1 text-sm font-medium shrink-0"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function IndustryGrid(props: VariantProps<IndustrySolutionsFields>) {
  const title = props.fields?.title?.value || 'Serving Global Industries';

  return (
    <section className="section bg-surface-50">
      <div className="container-wide">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {defaultIndustries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <a
                key={i}
                href={`/solutions/${industry.slug}`}
                className="card group text-center hover:border-accent-500 border-2 border-transparent transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-50 transition-colors">
                  <Icon className="w-8 h-8 text-primary-700 group-hover:text-accent-500 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-500">{industry.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Tabs(props: VariantProps<IndustrySolutionsFields>) {
  const [activeTab, setActiveTab] = useState(0);
  const title = props.fields?.title?.value || 'Industry Solutions';

  const active = defaultIndustries[activeTab];
  const ActiveIcon = active.icon;

  return (
    <section className="section">
      <div className="container-wide">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {defaultIndustries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={cn(
                  'flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all',
                  activeTab === i
                    ? 'bg-primary-900 text-white shadow-md'
                    : 'bg-surface-100 text-slate-600 hover:bg-surface-200'
                )}
              >
                <Icon className="w-4 h-4" />
                {industry.name}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center">
                <ActiveIcon className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900">{active.name}</h3>
            </div>
            <p className="text-slate-600 text-lg mb-6">{active.description}</p>
            <a
              href={`/solutions/${active.slug}`}
              className="btn-primary inline-flex"
            >
              Explore {active.name} Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-primary-900 mb-4">Key Capabilities</h4>
            <div className="space-y-3">
              {active.capabilities.map((cap, j) => (
                <div
                  key={j}
                  className="flex items-center gap-3 p-3 bg-surface-50 rounded-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-accent-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
