import { Field, ImageField, LinkField } from '@/lib/component-props';

export interface TeamMemberItem {
  name: Field<string>;
  title: Field<string>;
  bio?: Field<string>;
  photo?: ImageField;
  linkedin?: LinkField;
}

export interface TeamMemberFields {
  sectionTitle?: Field<string>;
  subtitle?: Field<string>;
  members: TeamMemberItem[];
}
