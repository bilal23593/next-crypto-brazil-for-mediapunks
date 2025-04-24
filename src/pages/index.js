import CallToAction from "@/components/CallToAction";
import ConsentPopup from "@/components/ConsentPopup";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InvestmentInfo from "@/components/InvestmentInfo";
import Investors from "@/components/Investors";
import LiveTradingView from "@/components/LiveTradingView";
import SuccessStory1 from "@/components/SuccessStory1";
import SuccessStory2 from "@/components/SuccessStory2";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brazil Future | Home</title>
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
        <SuccessStory1 />
        <SuccessStory2 />
        <LiveTradingView />
        <InvestmentInfo />
        <Investors />
        <Testimonials />
        <CTAButton />
        <CallToAction />
        <Footer />
      </main>
      <ConsentPopup />
    </>
  );
}
