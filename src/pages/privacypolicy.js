import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import Head from "next/head";
import Script from "next/script";

export default function privacypolicy() {
  return (
    <>
      <Head>
        <title>Brazil Future | Privacy Policy</title>
        <meta name="description" content="Created By Cube Cake Team" />
      </Head>
      <Script
        strategy="afterInteractive" // Load the script after the page has loaded
        src="https://www.googletagmanager.com/gtag/js?id=G-5ZZBM4ND5G"
        id="google-analytics-script"
      />
      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5ZZBM4ND5G');
          `,
        }}
      />

      <main className="flex items-center text-dark w-full min-h-screen">
        <PrivacyPolicyContent />
      </main>
    </>
  );
}
