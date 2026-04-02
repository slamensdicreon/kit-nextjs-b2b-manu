import Script from 'next/script';

/**
 * External scripts component.
 * Add analytics, tracking, and third-party scripts here.
 */
export default function Scripts() {
  return (
    <>
      {/* Google Tag Manager - uncomment and add your GTM ID */}
      {/* <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXX');`,
        }}
      /> */}

      {/* Sitecore CDP/Personalize - uncomment when configured */}
      {/* <Script
        src={`${process.env.NEXT_PUBLIC_CDP_TARGET_URL}/browser/HzKMbExAuBMpPxFlBgrVCw/sitecore-engage.js`}
        strategy="afterInteractive"
      /> */}
    </>
  );
}
