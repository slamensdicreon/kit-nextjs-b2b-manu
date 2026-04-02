import { Field } from '@/lib/component-props';

export interface TimelineEvent {
  year: Field<string>;
  title: Field<string>;
  description: Field<string>;
}

export interface TimelineFields {
  sectionTitle?: Field<string>;
  subtitle?: Field<string>;
  events: TimelineEvent[];
}
