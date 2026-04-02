import { Field, ImageField, LinkField, RichTextField } from '@/lib/component-props';

export interface IndustrySolution {
  name: Field<string>;
  icon: Field<string>;
  image: ImageField;
  description: RichTextField;
  capabilities: Field<string>[];
  link: LinkField;
}

export interface IndustrySolutionsFields {
  heading: Field<string>;
  subheading: Field<string>;
  industries: IndustrySolution[];
}
