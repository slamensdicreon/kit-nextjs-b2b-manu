import Image from 'next/image';
import { VariantProps } from '@/lib/component-props';
import { CTASectionFields } from './CTASection.props';
import { ArrowRight } from 'lucide-react';

function resolveFields(props: VariantProps<CTASectionFields>) {
  return {
    title: props.fields?.title?.value || 'Ready to Optimize Your Manufacturing?',
    description:
      props.fields?.description?.value ||
      'Contact our engineering team to discuss how Apex solutions can improve your production efficiency, quality, and throughput.',
    primaryCtaText: props.fields?.primaryCta?.value?.text || 'Request a Quote',
    primaryCtaHref: props.fields?.primaryCta?.value?.href || '/contact?type=quote',
    secondaryCtaText: props.fields?.secondaryCta?.value?.text || 'View Products',
    secondaryCtaHref: props.fields?.secondaryCta?.value?.href || '/products',
    imageSrc: props.fields?.image?.value?.src || '',
    imageAlt: props.fields?.image?.value?.alt || '',
  };
}

export function Default(props: VariantProps<CTASectionFields>) {
  const f = resolveFields(props);

  return (
    <section className="section-dark">
      <div className="container-wide text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{f.title}</h2>
        <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">{f.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={f.primaryCtaHref} className="btn-primary">
            {f.primaryCtaText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href={f.secondaryCtaHref}
            className="btn border-2 border-white text-white hover:bg-white hover:text-primary-900"
          >
            {f.secondaryCtaText}
          </a>
        </div>
      </div>
    </section>
  );
}

export function WithImage(props: VariantProps<CTASectionFields>) {
  const f = resolveFields(props);

  return (
    <section className="bg-primary-900">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{f.title}</h2>
            <p className="text-lg text-primary-200 mb-8">{f.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={f.primaryCtaHref} className="btn-primary">
                {f.primaryCtaText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href={f.secondaryCtaHref}
                className="btn border-2 border-primary-300 text-primary-200 hover:bg-primary-800"
              >
                {f.secondaryCtaText}
              </a>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            {f.imageSrc ? (
              <Image src={f.imageSrc} alt={f.imageAlt} fill className="object-cover" />
            ) : (
              <div className="w-full h-full bg-primary-800 flex items-center justify-center">
                <p className="text-primary-400 text-sm">CTA Image Placeholder</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Centered(props: VariantProps<CTASectionFields>) {
  const f = resolveFields(props);

  return (
    <section className="py-16 bg-surface-50">
      <div className="container-narrow text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{f.title}</h2>
        <p className="text-slate-500 mb-8">{f.description}</p>
        <a href={f.primaryCtaHref} className="btn-primary">
          {f.primaryCtaText}
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
}
