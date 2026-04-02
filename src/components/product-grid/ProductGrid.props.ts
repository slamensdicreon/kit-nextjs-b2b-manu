import { Field } from '@/lib/component-props';
import { ProductCardFields } from '../product-card/ProductCard.props';

export interface ProductGridFields {
  heading: Field<string>;
  subheading: Field<string>;
  categories: Field<string[]>;
  industries: Field<string[]>;
  products: ProductCardFields[];
}
