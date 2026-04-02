import { Field, ImageField } from '@/lib/component-props';

export interface TrustItem {
  name: Field<string>;
  description?: Field<string>;
  logo?: ImageField;
  badge?: Field<string>;
}

export interface TrustSignalsFields {
  title?: Field<string>;
  items: TrustItem[];
}
