import { Field, ImageField, LinkField } from '@/lib/component-props';

export interface PromoFields {
  title: Field<string>;
  description: Field<string>;
  image: ImageField;
  cta: LinkField;
}
