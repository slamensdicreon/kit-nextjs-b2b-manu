'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { VariantProps } from '@/lib/component-props';
import { TechnicalSpecsFields, SpecGroup } from './TechnicalSpecs.props';

const placeholderGroups: SpecGroup[] = [
  {
    groupName: { value: 'Physical Dimensions' },
    items: [
      { label: { value: 'Height' }, value: { value: '1,850 mm' } },
      { label: { value: 'Width' }, value: { value: '720 mm' } },
      { label: { value: 'Depth' }, value: { value: '680 mm' } },
      { label: { value: 'Weight' }, value: { value: '185 kg' } },
      { label: { value: 'Footprint' }, value: { value: '0.49 m²' } },
    ],
  },
  {
    groupName: { value: 'Performance' },
    items: [
      { label: { value: 'Payload Capacity' }, value: { value: '7.5 kg' } },
      { label: { value: 'Maximum Reach' }, value: { value: '1,200 mm' } },
      { label: { value: 'Repeatability' }, value: { value: '±0.02 mm' } },
      { label: { value: 'Maximum Speed' }, value: { value: '2,000 mm/s' } },
      { label: { value: 'Cycle Time' }, value: { value: '< 0.4 s (standard pick-and-place)' } },
    ],
  },
  {
    groupName: { value: 'Electrical' },
    items: [
      { label: { value: 'Power Supply' }, value: { value: '200–600 VAC, 50/60 Hz, 3-phase' } },
      { label: { value: 'Power Consumption' }, value: { value: '2.5 kW (typical)' } },
      { label: { value: 'Controller' }, value: { value: 'Apex RC-500 (integrated)' } },
      { label: { value: 'I/O Interfaces' }, value: { value: '32 DI / 32 DO, 4 AI / 4 AO' } },
    ],
  },
  {
    groupName: { value: 'Environment & Certifications' },
    items: [
      { label: { value: 'Protection Rating' }, value: { value: 'IP67' } },
      { label: { value: 'Operating Temperature' }, value: { value: '0°C to 45°C' } },
      { label: { value: 'Humidity' }, value: { value: '10–90% RH (non-condensing)' } },
      { label: { value: 'Noise Level' }, value: { value: '< 68 dB(A)' } },
      { label: { value: 'Certifications' }, value: { value: 'CE, UL, ISO 10218-1, ISO 13849 PLd' } },
    ],
  },
];

const placeholderFields: TechnicalSpecsFields = {
  heading: { value: 'Technical Specifications' },
  groups: placeholderGroups,
};

export function Default({ fields: f }: VariantProps<TechnicalSpecsFields>) {
  const fields = f ?? placeholderFields;

  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-[#1B2A4A]">{fields.heading.value}</h2>
        <div className="space-y-8">
          {fields.groups.map((group, gi) => (
            <div key={gi}>
              <h3 className="mb-3 text-lg font-bold text-[#1B2A4A] border-b-2 border-[#FF6B35] pb-2 inline-block">
                {group.groupName.value}
              </h3>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-sm">
                  <tbody>
                    {group.items.map((item, ii) => (
                      <tr key={ii} className={ii % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 font-semibold text-[#1B2A4A] w-2/5 border-r border-gray-100">
                          {item.label.value}
                        </td>
                        <td className="px-4 py-3 text-gray-700">{item.value.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Accordion({ fields: f }: VariantProps<TechnicalSpecsFields>) {
  const fields = f ?? placeholderFields;
  const [openGroups, setOpenGroups] = useState<Set<number>>(new Set([0]));

  function toggleGroup(index: number) {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-[#1B2A4A]">{fields.heading.value}</h2>
        <div className="space-y-3">
          {fields.groups.map((group, gi) => {
            const isOpen = openGroups.has(gi);
            return (
              <div
                key={gi}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleGroup(gi)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
                >
                  <span className="text-base font-bold text-[#1B2A4A]">
                    {group.groupName.value}
                  </span>
                  <svg
                    className={cn(
                      'h-5 w-5 text-gray-500 transition-transform duration-200',
                      isOpen && 'rotate-180'
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={cn(
                    'transition-all duration-300 ease-in-out',
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  )}
                >
                  <div className="border-t border-gray-100">
                    <table className="w-full text-sm">
                      <tbody>
                        {group.items.map((item, ii) => (
                          <tr key={ii} className={ii % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-6 py-3 font-semibold text-[#1B2A4A] w-2/5">
                              {item.label.value}
                            </td>
                            <td className="px-6 py-3 text-gray-700">{item.value.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
