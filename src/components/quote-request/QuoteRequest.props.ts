import { Field, RichTextField } from '@/lib/component-props';

export interface QuoteRequestFields {
  heading: Field<string>;
  description: RichTextField;
  productOptions: Field<string[]>;
  successMessage: Field<string>;
}
