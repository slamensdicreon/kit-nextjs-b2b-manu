import { Field, ImageField, LinkField, RichTextField } from '@/lib/component-props';

export interface ProductDetailFields {
  title: Field<string>;
  category: Field<string>;
  sku: Field<string>;
  description: RichTextField;
  images: ImageField[];
  features: Field<string>[];
  specsLabel: Field<string>[];
  specsValue: Field<string>[];
  datasheet: LinkField;
  quoteLink: LinkField;
}
