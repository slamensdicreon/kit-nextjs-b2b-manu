import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { VariantProps } from '@/lib/component-props';
import type { PromoFields } from './Promo.props';

const placeholderFields: PromoFields = {
  title: { value: 'Reduce Downtime by 40%' },
  description: {
    value:
      'Our predictive maintenance platform uses IoT sensors and machine learning to identify equipment issues before they cause costly production stops. Schedule a demo to see how we can optimize your operations.',
  },
  image: {
    value: {
      src: '/images/promo-predictive-maintenance.jpg',
      alt: 'Real-time equipment monitoring dashboard showing predictive analytics',
      width: 600,
      height: 400,
    },
  },
  cta: { value: { href: '/demo', text: 'Schedule a Demo' } },
};

function resolveFields(props: VariantProps<PromoFields>): PromoFields {
  return {
    title: props.fields?.title ?? placeholderFields.title,
    description: props.fields?.description ?? placeholderFields.description,
    image: props.fields?.image ?? placeholderFields.image,
    cta: props.fields?.cta ?? placeholderFields.cta,
  };
}

export function Default(props: VariantProps<PromoFields>) {
  const fields = resolveFields(props);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-surface-200 bg-white shadow-card transition-shadow hover:shadow-elevated">
          {fields.image.value.src && (
            <div className="aspect-[3/2] overflow-hidden">
              <Image
                src={fields.image.value.src}
                alt={fields.image.value.alt}
                width={fields.image.value.width || 600}
                height={fields.image.value.height || 400}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-primary-900">
              {fields.title.value}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-primary-700/80">
              {fields.description.value}
            </p>
            {fields.cta.value.href && (
              <a
                href={fields.cta.value.href}
                target={fields.cta.value.target}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
              >
                {fields.cta.value.text || 'Learn More'}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Large(props: VariantProps<PromoFields>) {
  const fields = resolveFields(props);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-primary-900 text-white">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
                {fields.title.value}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-primary-200">
                {fields.description.value}
              </p>
              {fields.cta.value.href && (
                <div className="mt-8">
                  <a
                    href={fields.cta.value.href}
                    target={fields.cta.value.target}
                    className="inline-flex items-center gap-2 rounded-md bg-accent-500 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-900"
                  >
                    {fields.cta.value.text || 'Learn More'}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
            {fields.image.value.src && (
              <div className="relative min-h-[300px] lg:min-h-0">
                <Image
                  src={fields.image.value.src}
                  alt={fields.image.value.alt}
                  width={fields.image.value.width || 800}
                  height={fields.image.value.height || 600}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 to-transparent lg:from-primary-900/20" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Minimal(props: VariantProps<PromoFields>) {
  const fields = resolveFields(props);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="rounded-lg border border-surface-200 bg-surface-50 px-8 py-10 text-center md:px-12 md:py-14">
          <h3 className="text-2xl font-bold text-primary-900 md:text-3xl">
            {fields.title.value}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-700/80 md:text-lg">
            {fields.description.value}
          </p>
          {fields.cta.value.href && (
            <a
              href={fields.cta.value.href}
              target={fields.cta.value.target}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary-900 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              {fields.cta.value.text || 'Learn More'}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
