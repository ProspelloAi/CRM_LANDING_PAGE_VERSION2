import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PartnersSection from "./components/PartnersSection";
import BenefitsSection from "./components/BenefitsSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Prices from "./components/Prices";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { JsonLd } from "react-schemaorg";
import { WebPage, SoftwareApplication } from "schema-dts";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <>
      <JsonLd<WebPage>
        item={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Tijarhub System Landing Page",
          url: "https://www.tijarhub.tech",
          description:
            "A powerful CRM platform for managing sales, customers, and operations with secure authentication and role-based access.",
          publisher: {
            "@type": "Organization",
            name: "Tijarhub System",
            logo: {
              "@type": "ImageObject",
              url: "https://www.tijarhub.tech/images/logo.png",
            },
          },
        }}
      />
      <JsonLd<SoftwareApplication>
        item={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "CRM System",
          operatingSystem: "Web",
          applicationCategory: "BusinessApplication",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
          description:
            "A modern CRM platform for sales, customer management, inventory, and operations.",
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <PartnersSection />
          <BenefitsSection />
          <FeaturesSection />
          <HowItWorksSection />
          <Prices />
          <TestimonialsSection />
          <FAQSection />

          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
