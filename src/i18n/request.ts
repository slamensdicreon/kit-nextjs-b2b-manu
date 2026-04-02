/**
 * i18n configuration for next-intl.
 * Defines locale handling and message loading.
 */

const defaultLocale = 'en';
const supportedLocales = ['en'];

export function getLocale(locale?: string): string {
  if (locale && supportedLocales.includes(locale)) {
    return locale;
  }
  return defaultLocale;
}

export async function getMessages(locale: string) {
  try {
    return (await import(`./messages/${locale}.json`)).default;
  } catch {
    return (await import(`./messages/en.json`)).default;
  }
}

export { defaultLocale, supportedLocales };
