import { Field, RichTextField } from '@/lib/component-props';

export interface AIContentSummaryFields {
  content: RichTextField;
  summaryLength: Field<string>;
}
