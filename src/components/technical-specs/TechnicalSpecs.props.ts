import { Field } from '@/lib/component-props';

export interface SpecItem {
  label: Field<string>;
  value: Field<string>;
}

export interface SpecGroup {
  groupName: Field<string>;
  items: SpecItem[];
}

export interface TechnicalSpecsFields {
  heading: Field<string>;
  groups: SpecGroup[];
}
