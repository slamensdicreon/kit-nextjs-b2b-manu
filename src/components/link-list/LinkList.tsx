import { cn } from '@/lib/utils';
import type { VariantProps } from '@/lib/component-props';
import type { LinkListFields } from './LinkList.props';

const placeholderFields: LinkListFields = {
  title: { value: 'Quick Links' },
  links: [
    { value: { href: '/solutions/cnc-machining', text: 'CNC Machining Services' } },
    { value: { href: '/solutions/robotic-assembly', text: 'Robotic Assembly' } },
    { value: { href: '/solutions/quality-assurance', text: 'Quality Assurance' } },
    { value: { href: '/solutions/rapid-prototyping', text: 'Rapid Prototyping' } },
    { value: { href: '/about/certifications', text: 'Certifications & Standards' } },
    { value: { href: '/contact', text: 'Request a Quote' } },
  ],
};

function resolveFields(props: VariantProps<LinkListFields>): LinkListFields {
  return {
    title: props.fields?.title ?? placeholderFields.title,
    links: props.fields?.links ?? placeholderFields.links,
  };
}

export function Default(props: VariantProps<LinkListFields>) {
  const fields = resolveFields(props);

  return (
    <nav className="py-10 md:py-14">
      <div className="container mx-auto px-4 lg:px-8">
        {fields.title.value && (
          <h3 className="mb-6 text-lg font-bold text-primary-900">
            {fields.title.value}
          </h3>
        )}
        <ul className="space-y-3">
          {fields.links.map((link, index) => (
            <li key={index}>
              <a
                href={link.value.href}
                target={link.value.target}
                className="group flex items-center gap-2 text-base text-secondary-600 transition-colors hover:text-secondary-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 shrink-0 text-accent-500 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                {link.value.text || link.value.href}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function Inline(props: VariantProps<LinkListFields>) {
  const fields = resolveFields(props);

  return (
    <nav className="py-8 md:py-10">
      <div className="container mx-auto px-4 lg:px-8">
        {fields.title.value && (
          <h3 className="mb-4 text-lg font-bold text-primary-900">
            {fields.title.value}
          </h3>
        )}
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {fields.links.map((link, index) => (
            <li key={index}>
              <a
                href={link.value.href}
                target={link.value.target}
                className="text-base text-secondary-600 transition-colors hover:text-secondary-700 hover:underline"
              >
                {link.value.text || link.value.href}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function Grid(props: VariantProps<LinkListFields>) {
  const fields = resolveFields(props);

  return (
    <nav className="py-10 md:py-14">
      <div className="container mx-auto px-4 lg:px-8">
        {fields.title.value && (
          <h3 className="mb-6 text-lg font-bold text-primary-900">
            {fields.title.value}
          </h3>
        )}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fields.links.map((link, index) => (
            <li key={index}>
              <a
                href={link.value.href}
                target={link.value.target}
                className="group flex items-center gap-3 rounded-lg border border-surface-200 bg-white px-5 py-4 transition-all hover:border-secondary-300 hover:shadow-card"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary-50 text-secondary-600 transition-colors group-hover:bg-secondary-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <span className="text-base font-medium text-primary-800 group-hover:text-secondary-600">
                  {link.value.text || link.value.href}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
