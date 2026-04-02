import { Field, ImageField } from '@/lib/component-props';

export interface TestimonialItem {
  quote: Field<string>;
  authorName: Field<string>;
  authorTitle: Field<string>;
  company: Field<string>;
  avatar?: ImageField;
  rating?: Field<string>;
}

export interface TestimonialsFields {
  title?: Field<string>;
  subtitle?: Field<string>;
  testimonials: TestimonialItem[];
}
