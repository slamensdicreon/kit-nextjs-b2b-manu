import { Field, LinkField } from '@/lib/component-props';

export interface BannerFields {
  text: Field<string>;
  link: LinkField;
  backgroundColor: Field<string>;
}
