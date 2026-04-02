import dynamic from 'next/dynamic';

/**
 * Component Map — Maps Sitecore rendering names to React components.
 *
 * Each key is the name of a Sitecore rendering as defined in the
 * content tree (e.g., "Hero", "ProductGrid"). The value is a
 * dynamically imported React component for code-splitting.
 *
 * When adding a new component:
 * 1. Create the component in src/components/<name>/
 * 2. Add the mapping below with the Sitecore rendering name as key
 * 3. Register the rendering in Sitecore (authoring items)
 */
export const componentMap: Record<string, ReturnType<typeof dynamic>> = {
  // ─── Layout Components ────────────────────────────────────────
  Navigation: dynamic(() => import('@/components/navigation/Navigation')),
  Footer: dynamic(() => import('@/components/footer/Footer')),
  Container: dynamic(() => import('@/components/container/Container')),
  ColumnSplitter: dynamic(() => import('@/components/column-splitter/ColumnSplitter')),
  RowSplitter: dynamic(() => import('@/components/row-splitter/RowSplitter')),
  PageContent: dynamic(() => import('@/components/page-content/PageContent')),

  // ─── Hero & Banner ────────────────────────────────────────────
  Hero: dynamic(() => import('@/components/hero/Hero')),
  Banner: dynamic(() => import('@/components/banner/Banner')),

  // ─── Content Components ───────────────────────────────────────
  RichText: dynamic(() => import('@/components/rich-text/RichText')),
  Title: dynamic(() => import('@/components/title/Title')),
  ContentBlock: dynamic(() => import('@/components/content-block/ContentBlock')),
  Image: dynamic(() => import('@/components/image/Image')),
  LinkList: dynamic(() => import('@/components/link-list/LinkList')),
  Promo: dynamic(() => import('@/components/promo/Promo')),

  // ─── B2B Manufacturing Components ─────────────────────────────
  ProductCard: dynamic(() => import('@/components/product-card/ProductCard')),
  ProductGrid: dynamic(() => import('@/components/product-grid/ProductGrid')),
  ProductDetail: dynamic(() => import('@/components/product-detail/ProductDetail')),
  TechnicalSpecs: dynamic(() => import('@/components/technical-specs/TechnicalSpecs')),
  QuoteRequest: dynamic(() => import('@/components/quote-request/QuoteRequest')),
  CaseStudy: dynamic(() => import('@/components/case-study/CaseStudy')),
  IndustrySolutions: dynamic(() => import('@/components/industry-solutions/IndustrySolutions')),
  StatsCounter: dynamic(() => import('@/components/stats-counter/StatsCounter')),
  Testimonials: dynamic(() => import('@/components/testimonials/Testimonials')),
  TrustSignals: dynamic(() => import('@/components/trust-signals/TrustSignals')),
  Downloads: dynamic(() => import('@/components/downloads/Downloads')),
  ContactForm: dynamic(() => import('@/components/contact-form/ContactForm')),
  CTASection: dynamic(() => import('@/components/cta-section/CTASection')),
  TeamMember: dynamic(() => import('@/components/team-member/TeamMember')),
  Timeline: dynamic(() => import('@/components/timeline/Timeline')),
  FAQ: dynamic(() => import('@/components/faq/FAQ')),

  // ─── AI-Enhanced Components ───────────────────────────────────
  AIProductRecommendation: dynamic(
    () => import('@/components/ai-product-recommendation/AIProductRecommendation')
  ),
  AIContentSummary: dynamic(
    () => import('@/components/ai-content-summary/AIContentSummary')
  ),
  AISearchAssistant: dynamic(
    () => import('@/components/ai-search-assistant/AISearchAssistant')
  ),

  // ─── SXA Shared Components ────────────────────────────────────
  PartialDesignDynamicPlaceholder: dynamic(
    () =>
      import(
        '@/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder'
      )
  ),
  StructuredData: dynamic(
    () => import('@/components/structured-data/StructuredData')
  ),
  ContentSDK: dynamic(() => import('@/components/content-sdk/ContentSDK')),
};

export default componentMap;
