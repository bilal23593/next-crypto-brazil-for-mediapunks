import CallToAction from "@/components/CallToAction";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InvestmentInfo from "@/components/InvestmentInfo";
import Investors from "@/components/Investors";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cube Cake Studiios | Home</title>
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
        <Hero />
        <InvestmentInfo />
        <Investors />
        <Testimonials />
        <CTAButton />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}
