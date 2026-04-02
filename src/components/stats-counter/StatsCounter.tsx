'use client';

import { cn } from '@/lib/utils';
import { VariantProps } from '@/lib/component-props';
import { StatsCounterFields } from './StatsCounter.props';

const defaultStats = [
  { value: '25+', label: 'Years of Excellence', suffix: '' },
  { value: '500+', label: 'Global Clients', suffix: '' },
  { value: '50+', label: 'Countries Served', suffix: '' },
  { value: '99.7', label: 'Uptime Guarantee', suffix: '%' },
];

function resolveStats(props: VariantProps<StatsCounterFields>) {
  if (props.fields?.stats?.length) {
    return props.fields.stats.map((s) => ({
      value: s.value?.value || '0',
      label: s.label?.value || '',
      suffix: s.suffix?.value || '',
    }));
  }
  return defaultStats;
}

export function Default(props: VariantProps<StatsCounterFields>) {
  const stats = resolveStats(props);
  const title = props.fields?.title?.value || 'Trusted by Manufacturers Worldwide';
  const subtitle =
    props.fields?.subtitle?.value ||
    'Our track record speaks for itself — delivering precision, reliability, and innovation.';

  return (
    <section className="section bg-primary-900 text-white">
      <div className="container-wide text-center">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>}
        {subtitle && (
          <p className="text-lg text-primary-200 mb-12 max-w-2xl mx-auto">{subtitle}</p>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-500 mb-2">
                {stat.value}
                {stat.suffix && <span className="text-3xl">{stat.suffix}</span>}
              </div>
              <div className="text-primary-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Row(props: VariantProps<StatsCounterFields>) {
  const stats = resolveStats(props);

  return (
    <section className="py-12 bg-surface-50 border-y border-surface-200">
      <div className="container-wide">
        <div className="flex flex-wrap justify-center divide-x divide-surface-300">
          {stats.map((stat, i) => (
            <div key={i} className="px-8 py-4 text-center">
              <div className="text-3xl font-bold text-primary-900">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Grid(props: VariantProps<StatsCounterFields>) {
  const stats = resolveStats(props);
  const title = props.fields?.title?.value || 'By the Numbers';

  return (
    <section className="section">
      <div className="container-wide">
        {title && <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>}
        <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={cn(
                'card text-center py-10',
                i % 2 === 0 ? 'bg-primary-50' : 'bg-secondary-50'
              )}
            >
              <div className="text-4xl font-bold text-primary-900 mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
