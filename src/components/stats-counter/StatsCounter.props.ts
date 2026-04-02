import { Field, ImageField } from '@/lib/component-props';

export interface StatItem {
  value: Field<string>;
  label: Field<string>;
  suffix?: Field<string>;
}

export interface StatsCounterFields {
  title?: Field<string>;
  subtitle?: Field<string>;
  stats: StatItem[];
  backgroundImage?: ImageField;
}
