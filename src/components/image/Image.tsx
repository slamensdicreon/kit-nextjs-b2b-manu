import NextImage from 'next/image';
import { cn } from '@/lib/utils';
import type { VariantProps } from '@/lib/component-props';
import type { ImageComponentFields } from './Image.props';

const placeholderFields: ImageComponentFields = {
  image: {
    value: {
      src: '/images/factory-floor.jpg',
      alt: 'Automated production line in a modern manufacturing facility',
      width: 1200,
      height: 675,
    },
  },
  caption: { value: 'Our 120,000 sq ft facility in Detroit, MI houses over 50 CNC machines.' },
};

function resolveFields(props: VariantProps<ImageComponentFields>): ImageComponentFields {
  return {
    image: props.fields?.image ?? placeholderFields.image,
    caption: props.fields?.caption ?? placeholderFields.caption,
  };
}

export function Default(props: VariantProps<ImageComponentFields>) {
  const fields = resolveFields(props);

  return (
    <figure className="py-8 md:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="overflow-hidden rounded-lg shadow-card">
          <NextImage
            src={fields.image.value.src}
            alt={fields.image.value.alt}
            width={fields.image.value.width || 1200}
            height={fields.image.value.height || 675}
            className="h-auto w-full object-cover"
          />
        </div>
        {fields.caption.value && (
          <figcaption className="mt-3 text-center text-sm text-primary-700/60">
            {fields.caption.value}
          </figcaption>
        )}
      </div>
    </figure>
  );
}

export function FullWidth(props: VariantProps<ImageComponentFields>) {
  const fields = resolveFields(props);

  return (
    <figure className="relative">
      <div className="aspect-[21/9] w-full overflow-hidden">
        <NextImage
          src={fields.image.value.src}
          alt={fields.image.value.alt}
          width={fields.image.value.width || 1920}
          height={fields.image.value.height || 820}
          className="h-full w-full object-cover"
        />
      </div>
      {fields.caption.value && (
        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 pb-4 pt-12 text-sm text-white/90">
          {fields.caption.value}
        </figcaption>
      )}
    </figure>
  );
}
