import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { VariantProps } from '@/lib/component-props';
import type { HeroFields } from './Hero.props';

const placeholderFields: HeroFields = {
  title: { value: 'Precision Engineering for Modern Manufacturing' },
  description: {
    value:
      'Empowering industrial automation with cutting-edge CNC machining, robotic assembly, and smart factory solutions. Trusted by 500+ manufacturers worldwide to deliver consistent quality at scale.',
  },
  image: {
    value: {
      src: '/images/hero-manufacturing.jpg',
      alt: 'Modern manufacturing facility with CNC machines and robotic arms',
      width: 1200,
      height: 800,
    },
  },
  primaryCta: { value: { href: '/contact', text: 'Request a Quote' } },
  secondaryCta: { value: { href: '/solutions', text: 'Explore Solutions' } },
};

function resolveFields(props: VariantProps<HeroFields>): HeroFields {
  return {
    title: props.fields?.title ?? placeholderFields.title,
    description: props.fields?.description ?? placeholderFields.description,
    image: props.fields?.image ?? placeholderFields.image,
    primaryCta: props.fields?.primaryCta ?? placeholderFields.primaryCta,
    secondaryCta: props.fields?.secondaryCta ?? placeholderFields.secondaryCta,
  };
}

export function Default(props: VariantProps<HeroFields>) {
  const fields = resolveFields(props);

  return (
    <section className="relative min-h-[600px] bg-primary-900 text-white">
      <div className="container mx-auto flex min-h-[600px] flex-col items-center gap-12 px-4 py-20 lg:flex-row lg:px-8">
        <div className="flex flex-1 flex-col justify-center space-y-8">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {fields.title.value}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-primary-200 md:text-xl">
            {fields.description.value}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            {fields.primaryCta.value.href && (
              <a
                href={fields.primaryCta.value.href}
                target={fields.primaryCta.value.target}
                className="inline-flex items-center justify-center rounded-md bg-accent-500 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-900"
              >
                {fields.primaryCta.value.text || 'Get Started'}
              </a>
            )}
            {fields.secondaryCta.value.href && (
              <a
                href={fields.secondaryCta.value.href}
                target={fields.secondaryCta.value.target}
                className="inline-flex items-center justify-center rounded-md border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {fields.secondaryCta.value.text || 'Learn More'}
              </a>
            )}
          </div>
        </div>
        <div className="relative flex-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-overlay">
            <Image
              src={fields.image.value.src}
              alt={fields.image.value.alt}
              width={fields.image.value.width || 1200}
              height={fields.image.value.height || 800}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-lg bg-secondary-500/20" />
        </div>
      </div>
    </section>
  );
}

export function ImageBackground(props: VariantProps<HeroFields>) {
  const fields = resolveFields(props);

  return (
    <section className="relative min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={fields.image.value.src}
          alt={fields.image.value.alt}
          width={fields.image.value.width || 1920}
          height={fields.image.value.height || 1080}
          className="h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-primary-900/50" />
      </div>
      <div className="container relative z-10 mx-auto flex min-h-[600px] flex-col justify-center px-4 py-24 lg:px-8">
        <div className="max-w-2xl space-y-8">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {fields.title.value}
          </h1>
          <p className="text-lg leading-relaxed text-primary-100/90 md:text-xl">
            {fields.description.value}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            {fields.primaryCta.value.href && (
              <a
                href={fields.primaryCta.value.href}
                target={fields.primaryCta.value.target}
                className="inline-flex items-center justify-center rounded-md bg-accent-500 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
              >
                {fields.primaryCta.value.text || 'Get Started'}
              </a>
            )}
            {fields.secondaryCta.value.href && (
              <a
                href={fields.secondaryCta.value.href}
                target={fields.secondaryCta.value.target}
                className="inline-flex items-center justify-center rounded-md border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {fields.secondaryCta.value.text || 'Learn More'}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImageRight(props: VariantProps<HeroFields>) {
  const fields = resolveFields(props);

  return (
    <section className="min-h-[600px] bg-white">
      <div className="grid min-h-[600px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-4 py-20 sm:px-8 lg:px-16 xl:px-24">
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-accent-50 px-4 py-1.5 text-sm font-medium text-accent-700">
              Industry-Leading Solutions
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary-900 md:text-5xl">
              {fields.title.value}
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-primary-700/80">
              {fields.description.value}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              {fields.primaryCta.value.href && (
                <a
                  href={fields.primaryCta.value.href}
                  target={fields.primaryCta.value.target}
                  className="inline-flex items-center justify-center rounded-md bg-primary-900 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  {fields.primaryCta.value.text || 'Get Started'}
                </a>
              )}
              {fields.secondaryCta.value.href && (
                <a
                  href={fields.secondaryCta.value.href}
                  target={fields.secondaryCta.value.target}
                  className="inline-flex items-center justify-center rounded-md border-2 border-primary-200 px-8 py-4 text-base font-semibold text-primary-900 transition-colors hover:border-primary-400 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {fields.secondaryCta.value.text || 'Learn More'}
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-0">
          <Image
            src={fields.image.value.src}
            alt={fields.image.value.alt}
            width={fields.image.value.width || 1200}
            height={fields.image.value.height || 800}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
        </div>
      </div>
    </section>
  );
}
