import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import ServicesHero from '@/app/services/components/ServicesHero';
import ServicesGrid from '@/app/services/components/ServicesGrid';
import ServicesCTA from '@/app/services/components/ServicesCTA';
import SpotlightInit from '@/app/components/SpotlightInit';

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
        <FAQSection />
      </main>
      <Footer />
      <SpotlightInit />
    </div>
  );
}