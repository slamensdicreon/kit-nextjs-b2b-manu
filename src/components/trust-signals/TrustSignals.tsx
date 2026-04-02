import { VariantProps } from '@/lib/component-props';
import { TrustSignalsFields } from './TrustSignals.props';
import { Shield, Award, CheckCircle, Globe } from 'lucide-react';

const defaultCertifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System', icon: Shield },
  { name: 'ISO 14001:2015', description: 'Environmental Management', icon: Globe },
  { name: 'CE Certified', description: 'European Conformity', icon: CheckCircle },
  { name: 'UL Listed', description: 'Safety Certification', icon: Award },
  { name: 'AS9100D', description: 'Aerospace Quality Standard', icon: Shield },
  { name: 'IATF 16949', description: 'Automotive Quality', icon: Award },
];

export function Default(props: VariantProps<TrustSignalsFields>) {
  const title = props.fields?.title?.value || 'Certifications & Standards';

  return (
    <section className="section bg-surface-50">
      <div className="container-wide">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
          Our commitment to quality is backed by internationally recognized certifications and
          industry standards.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {defaultCertifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div
                key={i}
                className="card text-center py-8 hover:border-accent-500 border-2 border-transparent transition-colors"
              >
                <Icon className="w-10 h-10 text-secondary-500 mx-auto mb-3" />
                <p className="font-bold text-primary-900 text-sm mb-1">{cert.name}</p>
                <p className="text-xs text-slate-500">{cert.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function LogoBar(props: VariantProps<TrustSignalsFields>) {
  const title = props.fields?.title?.value || 'Certified & Trusted';

  return (
    <section className="py-12 bg-white border-y border-surface-200">
      <div className="container-wide">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
          {title}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {defaultCertifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 text-slate-400 hover:text-primary-900 transition-colors"
              >
                <Icon className="w-6 h-6" />
                <span className="font-semibold text-sm">{cert.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
