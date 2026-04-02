import { Field, ImageField, LinkField } from '@/lib/component-props';

export interface CTASectionFields {
  title: Field<string>;
  description?: Field<string>;
  primaryCta?: LinkField;
  secondaryCta?: LinkField;
  image?: ImageField;
}
