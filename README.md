# Sitecore XM Cloud — B2B Manufacturing CCL Starter Template

A **Click Click Launch (CCL)** starter website template for **Sitecore XM Cloud** with AI features. This template provides a fully functional B2B Manufacturing website using **Content SDK**, **SXA** for visual Page Editor experience, and **Tailwind CSS** for styling.

**Demo Company:** Apex Manufacturing Solutions — a fictional industrial equipment manufacturer.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Runtime:** React 19
- **CMS:** Sitecore XM Cloud with Content SDK
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript 5.8
- **UI Components:** Radix UI, Lucide Icons, Framer Motion
- **Forms:** React Hook Form + Zod validation
- **i18n:** next-intl

## Getting Started

### Prerequisites

- Node.js 22+
- npm 10+
- Sitecore XM Cloud environment (for connected mode)

### Setup

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd kit-nextjs-b2b-manu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env.local
   cp sitecore.config.ts.example sitecore.config.ts
   ```
   Edit `.env.local` with your XM Cloud credentials:
   - `SITECORE_EDGE_CONTEXT_ID` — Your XM Cloud Edge context ID
   - `SITECORE_EDITING_SECRET` — Secret for Pages editor integration
   - `SITECORE_SITE_NAME` — Your site name (default: `b2b-manufacturing`)

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
├── authoring/                    # Sitecore content serialization
│   └── b2b-manufacturing.module.json
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── [site]/[locale]/[[...path]]/  # Dynamic Sitecore pages
│   │   ├── api/editing/          # Pages editor API
│   │   ├── globals.css           # Tailwind theme
│   │   └── layout.tsx            # Root layout
│   ├── components/               # SXA rendering components
│   │   ├── hero/                 # Hero with 3 variants
│   │   ├── navigation/           # Mega-menu navigation
│   │   ├── product-grid/         # Filterable product grid
│   │   ├── quote-request/        # RFQ lead generation form
│   │   ├── ai-product-recommendation/  # AI-powered suggestions
│   │   ├── ai-content-summary/   # AI content summaries
│   │   ├── ai-search-assistant/  # AI-enhanced search
│   │   └── ... (25+ components)
│   ├── data/                     # Navigation & demo content
│   ├── i18n/                     # Internationalization
│   ├── lib/                      # Utilities & SDK client
│   ├── Layout.tsx                # Main page layout
│   ├── Bootstrap.tsx             # Client-side initialization
│   └── middleware.ts             # Multisite & locale routing
├── xmcloud.build.json            # XM Cloud build configuration
├── sitecore.json                 # Content serialization config
├── sitecore.config.ts.example    # Content SDK configuration
├── tailwind.config.ts            # Tailwind CSS theme
└── next.config.ts                # Next.js configuration
```

## Components (28 total)

### Layout
| Component | Variants |
|-----------|----------|
| Navigation | Default (mega-menu), Minimal |
| Footer | Default (4-column), Compact |
| Container | Default, FullWidth, Narrow |
| ColumnSplitter | Default, Sidebar, EqualHeight |
| RowSplitter | Default, Section |
| PageContent | Default, Flush, Narrow |

### Hero & Content
| Component | Variants |
|-----------|----------|
| Hero | Default, ImageBackground, ImageRight |
| Banner | Default, Announcement |
| RichText | Default |
| Title | Default, Centered, WithSubtitle |
| ContentBlock | Default, ImageLeft, ImageRight |
| Image | Default, FullWidth |
| LinkList | Default, Inline, Grid |
| Promo | Default, Large, Minimal |

### B2B Manufacturing
| Component | Variants |
|-----------|----------|
| ProductCard | Default, Compact, Detailed |
| ProductGrid | Default, WithSidebar |
| ProductDetail | Default |
| TechnicalSpecs | Default, Accordion |
| QuoteRequest | Default, Inline, Modal |
| CaseStudy | Default, Card |
| IndustrySolutions | Default, Grid, Tabs |
| StatsCounter | Default, Row, Grid |
| Testimonials | Default, Carousel, Grid |
| TrustSignals | Default, LogoBar |
| Downloads | Default, Table |
| ContactForm | Default, Sidebar |
| CTASection | Default, WithImage, Centered |
| TeamMember | Default, Grid |
| Timeline | Default |
| FAQ | Default (accordion) |

### AI-Enhanced
| Component | Description |
|-----------|-------------|
| AIProductRecommendation | AI-powered product suggestions |
| AIContentSummary | AI-generated content summaries |
| AISearchAssistant | Natural language search |

### SXA Shared
| Component | Description |
|-----------|-------------|
| PartialDesignDynamicPlaceholder | Dynamic placeholder composition |
| StructuredData | JSON-LD SEO markup |
| ContentSDK | SDK connection status |

## Design System

**Color Palette:**
- Primary: Navy (#1B2A4A) — trust, authority
- Secondary: Steel Blue (#4A7C9B) — industrial, professional
- Accent: Safety Orange (#FF6B35) — CTAs, highlights

**Typography:** Inter (headings/body), JetBrains Mono (technical specs)

## XM Cloud Deployment

1. Connect your repository to XM Cloud
2. Configure `xmcloud.build.json` with your rendering host settings
3. Push content serialization items via `dotnet sitecore ser push`
4. Deploy via XM Cloud Deploy app

## SXA Page Editor

All components support the SXA variant pattern and are compatible with XM Cloud Pages visual editor:
- Drag-and-drop page composition
- Component variant selection
- Real-time visual editing
- Content preview before publishing

## License

Apache-2.0
