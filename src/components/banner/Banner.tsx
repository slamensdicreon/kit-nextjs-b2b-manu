import { cn } from '@/lib/utils';
import type { VariantProps } from '@/lib/component-props';
import type { BannerFields } from './Banner.props';

const placeholderFields: BannerFields = {
  text: { value: 'Now offering free consultation for first-time clients — limited availability.' },
  link: { value: { href: '/contact', text: 'Book Now' } },
  backgroundColor: { value: '' },
};

function resolveFields(props: VariantProps<BannerFields>): BannerFields {
  return {
    text: props.fields?.text ?? placeholderFields.text,
    link: props.fields?.link ?? placeholderFields.link,
    backgroundColor: props.fields?.backgroundColor ?? placeholderFields.backgroundColor,
  };
}

export function Default(props: VariantProps<BannerFields>) {
  const fields = resolveFields(props);

  return (
    <div
      className="bg-accent-500 text-white"
      style={fields.backgroundColor.value ? { backgroundColor: fields.backgroundColor.value } : undefined}
    >
      <div className="container mx-auto flex items-center justify-center gap-4 px-4 py-3 text-center text-sm font-medium md:text-base">
        <span>{fields.text.value}</span>
        {fields.link.value.href && (
          <a
            href={fields.link.value.href}
            target={fields.link.value.target}
            className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/20 px-4 py-1 text-sm font-semibold transition-colors hover:bg-white/30"
          >
            {fields.link.value.text || 'Learn More'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export function Announcement(props: VariantProps<BannerFields>) {
  const fields = resolveFields(props);

  return (
    <div className="bg-primary-900 text-white">
      <div className="container mx-auto flex items-center justify-center gap-3 px-4 py-3 text-center text-sm font-medium md:text-base">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 text-accent-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
        <span>{fields.text.value}</span>
        {fields.link.value.href && (
          <a
            href={fields.link.value.href}
            target={fields.link.value.target}
            className="inline-flex shrink-0 items-center gap-1 border-b border-accent-400/50 text-accent-400 transition-colors hover:border-accent-400 hover:text-accent-300"
          >
            {fields.link.value.text || 'Learn More'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
