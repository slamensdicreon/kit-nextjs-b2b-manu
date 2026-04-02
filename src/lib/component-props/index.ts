import { ReactNode } from 'react';

/** Sitecore field types for Content SDK */
export interface Field<T = string> {
  value: T;
  editable?: string;
}

export interface ImageField {
  value: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  editable?: string;
}

export interface LinkField {
  value: {
    href: string;
    text?: string;
    target?: string;
    title?: string;
    class?: string;
  };
  editable?: string;
}

export interface RichTextField {
  value: string;
  editable?: string;
}

export interface FileField {
  value: {
    src: string;
    title?: string;
    description?: string;
    size?: string;
  };
}

/** Base component props passed by Sitecore layout service */
export interface ComponentProps {
  rendering?: {
    uid?: string;
    componentName?: string;
    dataSource?: string;
  };
  params?: Record<string, string>;
  fields?: Record<string, unknown>;
}

/** Props for components that accept children (placeholders) */
export interface ComponentWithChildrenProps extends ComponentProps {
  children?: ReactNode;
}

/** Page-level props resolved by the page route */
export interface SitecorePageProps {
  site: string;
  locale: string;
  path: string;
  layoutData?: LayoutData;
}

/** Sitecore layout service response */
export interface LayoutData {
  sitecore: {
    context: {
      pageEditing: boolean;
      language: string;
      site: {
        name: string;
      };
    };
    route: RouteData | null;
  };
}

/** Route data from Sitecore */
export interface RouteData {
  name: string;
  displayName?: string;
  fields?: Record<string, unknown>;
  placeholders: Record<string, ComponentRendering[]>;
  itemId?: string;
  templateName?: string;
}

/** Component rendering data from layout service */
export interface ComponentRendering {
  uid: string;
  componentName: string;
  dataSource?: string;
  params?: Record<string, string>;
  fields?: Record<string, unknown>;
  placeholders?: Record<string, ComponentRendering[]>;
}

/** Variant props — each component variant receives these */
export interface VariantProps<TFields = Record<string, unknown>> {
  fields: TFields;
  params?: Record<string, string>;
  isPageEditing?: boolean;
}
