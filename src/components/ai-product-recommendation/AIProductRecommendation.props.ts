import { Field } from '@/lib/component-props';

export interface AIProductRecommendationFields {
  title: Field<string>;
  maxItems: Field<string>;
  context: Field<string>;
}

export interface RecommendedProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  matchScore: number;
  sku: string;
  specs: string[];
}
