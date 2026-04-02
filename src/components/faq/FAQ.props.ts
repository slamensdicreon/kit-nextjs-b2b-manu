import { Field } from '@/lib/component-props';

export interface FAQItem {
  question: Field<string>;
  answer: Field<string>;
}

export interface FAQFields {
  title?: Field<string>;
  subtitle?: Field<string>;
  items: FAQItem[];
}
