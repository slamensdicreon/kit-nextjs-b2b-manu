/**
 * Sitecore Content SDK client singleton.
 * Initializes the SitecoreClient with configuration from sitecore.config.
 *
 * Usage:
 *   import client from '@/lib/sitecore-client';
 *   const data = await client.getItem('/path/to/item');
 */

// Note: Uncomment the lines below when sitecore.config.ts is set up
// import { SitecoreClient } from '@sitecore-content-sdk/nextjs/client';
// import scConfig from 'sitecore.config';
//
// const client = new SitecoreClient({
//   ...scConfig,
// });
//
// export default client;

/** Placeholder client for development without Sitecore connection */
const client = {
  async getItem(path: string) {
    console.log(`[Sitecore Client] Fetching item: ${path}`);
    return null;
  },
  async getLayoutData(path: string, language: string) {
    console.log(`[Sitecore Client] Fetching layout: ${path} [${language}]`);
    return null;
  },
};

export default client;
