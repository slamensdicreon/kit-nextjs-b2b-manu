'use client';

import { useState } from 'react';
import { VariantProps } from '@/lib/component-props';
import { FAQFields } from './FAQ.props';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const defaultFAQs = [
  {
    question: 'What industries do you serve?',
    answer:
      'We serve a wide range of manufacturing industries including Automotive, Aerospace & Defense, Electronics Assembly, Food & Beverage, Pharmaceutical, and General Manufacturing. Our solutions are designed to be adaptable across different production environments.',
  },
  {
    question: 'Do you offer custom engineering solutions?',
    answer:
      'Yes, our engineering team specializes in designing custom solutions tailored to your specific manufacturing requirements. From modified standard products to fully bespoke systems, we work closely with your team to deliver the optimal solution.',
  },
  {
    question: 'What is the typical lead time for orders?',
    answer:
      'Standard product lead times range from 4-8 weeks depending on the product line and configuration. Custom engineered solutions typically require 12-16 weeks. We also maintain a stock of commonly ordered items for faster delivery.',
  },
  {
    question: 'Do you provide installation and training services?',
    answer:
      'Absolutely. We offer comprehensive installation services performed by our certified technicians, along with operator and maintenance training programs. On-site training, virtual sessions, and detailed documentation are all included.',
  },
  {
    question: 'What warranty and support do you offer?',
    answer:
      'All Apex products come with a standard 2-year warranty covering parts and labor. Extended warranty options are available. Our global support team provides 24/7 technical assistance, and we maintain regional service centers for rapid response.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'You can request a quote through our online quote request form, by calling our sales team at +1 (800) 555-APEX, or by emailing sales@apexmfg.com. Our team typically responds within 24 hours with a detailed proposal.',
  },
  {
    question: 'Do you offer financing or leasing options?',
    answer:
      'Yes, we partner with several industrial financing providers to offer flexible payment terms, leasing arrangements, and capital equipment financing. Contact our sales team to discuss options that fit your budget.',
  },
];

export function Default(props: VariantProps<FAQFields>) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const title = props.fields?.title?.value || 'Frequently Asked Questions';
  const subtitle =
    props.fields?.subtitle?.value ||
    'Find answers to common questions about our products, services, and processes.';

  return (
    <section className="section">
      <div className="container-wide max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-slate-500 text-center mb-12">{subtitle}</p>

        <div className="space-y-3">
          {defaultFAQs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border border-surface-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-50 transition-colors"
                >
                  <span className="font-semibold text-primary-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200',
                      isOpen && 'rotate-180'
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-200',
                    isOpen ? 'max-h-96' : 'max-h-0'
                  )}
                >
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
