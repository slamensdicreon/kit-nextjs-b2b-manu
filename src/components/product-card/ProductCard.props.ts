import { Field, ImageField, LinkField } from '@/lib/component-props';

export interface ProductCardFields {
  title: Field<string>;
  category: Field<string>;
  shortDescription: Field<string>;
  image: ImageField;
  link: LinkField;
  sku: Field<string>;
  specs: Field<string>;
}
