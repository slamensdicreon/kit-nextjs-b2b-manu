import { Field } from '@/lib/component-props';

export interface AISearchAssistantFields {
  placeholder: Field<string>;
  suggestedQueries: Field<string>;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  relevance: number;
}
