import { SitecorePageProps } from '@/lib/component-props';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';

/**
 * Main layout component that wraps all Sitecore pages.
 * Renders the navigation, page content, and footer.
 */
export default function SitecoreLayout(props: SitecorePageProps) {
  return (
    <>
      <Navigation siteName={props.site} locale={props.locale} />
      <main className="flex-1">{/* Sitecore placeholder content renders here */}</main>
      <Footer />
    </>
  );
}
