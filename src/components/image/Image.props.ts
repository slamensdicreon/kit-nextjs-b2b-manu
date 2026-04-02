import { Field, ImageField } from '@/lib/component-props';

export interface ImageComponentFields {
  image: ImageField;
  caption: Field<string>;
}
