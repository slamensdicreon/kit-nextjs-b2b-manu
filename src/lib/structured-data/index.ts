/**
 * JSON-LD structured data utilities for SEO.
 * Generates schema.org markup for manufacturing/B2B context.
 */

export interface OrganizationSchema {
  name: string;
  description: string;
  url: string;
  logo?: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
  };
}

export interface ProductSchema {
  name: string;
  description: string;
  image?: string;
  sku?: string;
  brand?: string;
  manufacturer?: string;
  category?: string;
}

export function generateOrganizationLD(org: OrganizationSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    description: org.description,
    url: org.url,
    ...(org.logo && { logo: org.logo }),
    ...(org.contactPoint && {
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: org.contactPoint.telephone,
        contactType: org.contactPoint.contactType,
      },
    }),
  };
}

export function generateProductLD(product: ProductSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    ...(product.image && { image: product.image }),
    ...(product.sku && { sku: product.sku }),
    ...(product.brand && {
      brand: { '@type': 'Brand', name: product.brand },
    }),
    ...(product.manufacturer && {
      manufacturer: { '@type': 'Organization', name: product.manufacturer },
    }),
    ...(product.category && { category: product.category }),
  };
}

export function generateBreadcrumbLD(
  items: { name: string; url: string }[]
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
