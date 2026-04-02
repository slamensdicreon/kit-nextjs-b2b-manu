import {
  generateOrganizationLD,
  generateProductLD,
  generateBreadcrumbLD,
} from '@/lib/structured-data';
import { ComponentProps } from '@/lib/component-props';
import { StructuredDataFields } from './StructuredData.props';

interface StructuredDataComponentProps extends ComponentProps {
  fields: StructuredDataFields;
}

/**
 * StructuredData — Renders JSON-LD structured data for SEO.
 * Supports Organization, Product, and BreadcrumbList types.
 * The `data` field should contain a JSON string matching the expected schema.
 */
export default function StructuredData({
  fields,
}: StructuredDataComponentProps) {
  const type = fields?.type?.value || 'Organization';
  const rawData = fields?.data?.value || '';

  let jsonLd: object | null = null;

  try {
    const parsed = JSON.parse(rawData);

    switch (type) {
      case 'Organization':
        jsonLd = generateOrganizationLD(parsed);
        break;
      case 'Product':
        jsonLd = generateProductLD(parsed);
        break;
      case 'BreadcrumbList':
        jsonLd = generateBreadcrumbLD(parsed);
        break;
      default:
        // Allow raw JSON-LD passthrough for other types
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': type,
          ...parsed,
        };
    }
  } catch {
    // If no data or invalid JSON, render default Organization schema
    jsonLd = generateOrganizationLD({
      name: 'Industrial Automation Solutions',
      description:
        'Leading provider of industrial automation, motion control, and manufacturing solutions for B2B enterprises.',
      url: typeof window !== 'undefined' ? window.location.origin : 'https://example.com',
    });
  }

  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
    />
  );
}
