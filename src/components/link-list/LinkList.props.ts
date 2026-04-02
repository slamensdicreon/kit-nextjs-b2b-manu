import { Field, LinkField } from '@/lib/component-props';

export interface LinkListFields {
  title: Field<string>;
  links: LinkField[];
}
