import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { VariantProps } from '@/lib/component-props';
import type { ContentBlockFields } from './ContentBlock.props';

const placeholderFields: ContentBlockFields = {
  title: { value: 'Advanced Manufacturing Solutions' },
  description: {
    value:
      'Our integrated manufacturing platform combines real-time production monitoring, predictive maintenance, and automated quality control to reduce waste by up to 35% and increase overall equipment effectiveness. With over three decades of industry experience, we partner with manufacturers across aerospace, automotive, and medical device sectors to streamline operations and deliver measurable results.',
  },
  image: {
    value: {
      src: '/images/content-manufacturing.jpg',
      alt: 'Engineer reviewing production data on a digital dashboard',
      width: 800,
      height: 600,
    },
  },
  cta: { value: { href: '/solutions', text: 'View Our Solutions' } },
};

function resolveFields(props: VariantProps<ContentBlockFields>): ContentBlockFields {
  return {
    title: props.fields?.title ?? placeholderFields.title,
    description: props.fields?.description ?? placeholderFields.description,
    image: props.fields?.image ?? placeholderFields.image,
    cta: props.fields?.cta ?? placeholderFields.cta,
  };
}

function ContentText({ fields }: { fields: ContentBlockFields }) {
  return (
    <div className="flex flex-col justify-center space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-primary-900 md:text-4xl">
        {fields.title.value}
      </h2>
      <p className="text-lg leading-relaxed text-primary-700/80">
        {fields.description.value}
      </p>
      {fields.cta.value.href && (
        <div>
          <a
            href={fields.cta.value.href}
            target={fields.cta.value.target}
            className="inline-flex items-center gap-2 text-base font-semibold text-secondary-600 transition-colors hover:text-secondary-700"
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
  );
}

function ContentImage({ fields }: { fields: ContentBlockFields }) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-elevated">
      <Image
        src={fields.image.value.src}
        alt={fields.image.value.alt}
        width={fields.image.value.width || 800}
        height={fields.image.value.height || 600}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function Default(props: VariantProps<ContentBlockFields>) {
  const fields = resolveFields(props);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-primary-900 md:text-4xl">
            {fields.title.value}
          </h2>
          <p className="text-lg leading-relaxed text-primary-700/80">
            {fields.description.value}
          </p>
          {fields.image.value.src && (
            <div className="pt-4">
              <ContentImage fields={fields} />
            </div>
          )}
          {fields.cta.value.href && (
            <div className="pt-2">
              <a
                href={fields.cta.value.href}
                target={fields.cta.value.target}
                className="inline-flex items-center gap-2 rounded-md bg-primary-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-800"
              >
                {fields.cta.value.text || 'Learn More'}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function ImageLeft(props: VariantProps<ContentBlockFields>) {
  const fields = resolveFields(props);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ContentImage fields={fields} />
          <ContentText fields={fields} />
        </div>
      </div>
    </section>
  );
}

export function ImageRight(props: VariantProps<ContentBlockFields>) {
  const fields = resolveFields(props);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ContentText fields={fields} />
          <ContentImage fields={fields} />
        </div>
      </div>
    </section>
  );
}
