import { Field, ImageField, LinkField, RichTextField } from '@/lib/component-props';

export interface CaseStudyFields {
  title: Field<string>;
  client: Field<string>;
  clientLogo: ImageField;
  industry: Field<string>;
  heroImage: ImageField;
  challenge: RichTextField;
  solution: RichTextField;
  results: RichTextField;
  metrics: { label: Field<string>; value: Field<string> }[];
  link: LinkField;
}
