import { Field, ImageField, LinkField } from '@/lib/component-props';

export interface HeroFields {
  title: Field<string>;
  description: Field<string>;
  image: ImageField;
  primaryCta: LinkField;
  secondaryCta: LinkField;
}
