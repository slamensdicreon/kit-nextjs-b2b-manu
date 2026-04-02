import { Metadata } from 'next';
import { SitecorePageProps } from '@/lib/component-props';
import SitecoreLayout from '@/Layout';

type PageProps = {
  params: Promise<{
    site: string;
    locale: string;
    path?: string[];
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { site, locale, path } = await params;
  const pagePath = path ? `/${path.join('/')}` : '/';

  return {
    title: `${pagePath === '/' ? 'Home' : path?.[path.length - 1]} | Apex Manufacturing Solutions`,
    alternates: {
      canonical: `/${site}/${locale}${pagePath}`,
    },
  };
}

export default async function SitecorePage({ params }: PageProps) {
  const { site, locale, path } = await params;
  const pagePath = path ? `/${path.join('/')}` : '/';

  const pageProps: SitecorePageProps = {
    site,
    locale,
    path: pagePath,
  };

  return <SitecoreLayout {...pageProps} />;
}
