import { Field } from '@/lib/component-props';

export interface ContactFormFields {
  title?: Field<string>;
  subtitle?: Field<string>;
  successMessage?: Field<string>;
  showProductSelect?: Field<string>;
}
