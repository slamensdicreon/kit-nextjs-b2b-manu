import { cn } from '@/lib/utils';
import type { VariantProps } from '@/lib/component-props';
import type { TitleFields } from './Title.props';

const placeholderFields: TitleFields = {
  title: { value: 'Engineered for Performance' },
  subtitle: {
    value:
      'From precision CNC machining to fully automated assembly lines, our solutions are designed to maximize throughput and minimize downtime.',
  },
};

function resolveFields(props: VariantProps<TitleFields>): TitleFields {
  return {
    title: props.fields?.title ?? placeholderFields.title,
    subtitle: props.fields?.subtitle ?? placeholderFields.subtitle,
  };
}

export function Default(props: VariantProps<TitleFields>) {
  const fields = resolveFields(props);

  return (
    <div className="py-10 md:py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary-900 md:text-4xl">
          {fields.title.value}
        </h2>
        {fields.subtitle.value && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-primary-700/70">
            {fields.subtitle.value}
          </p>
        )}
      </div>
    </div>
  );
}

export function Centered(props: VariantProps<TitleFields>) {
  const fields = resolveFields(props);

  return (
    <div className="py-10 md:py-14">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary-900 md:text-4xl">
          {fields.title.value}
        </h2>
        {fields.subtitle.value && (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-primary-700/70">
            {fields.subtitle.value}
          </p>
        )}
      </div>
    </div>
  );
}

export function WithSubtitle(props: VariantProps<TitleFields>) {
  const fields = resolveFields(props);

  return (
    <div className="py-10 md:py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="border-l-4 border-accent-500 pl-6">
          <h2 className="text-3xl font-bold tracking-tight text-primary-900 md:text-4xl">
            {fields.title.value}
          </h2>
          {fields.subtitle.value && (
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-primary-700/70">
              {fields.subtitle.value}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
