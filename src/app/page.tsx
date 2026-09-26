import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import HeroSection from '@/app/components/HeroSection';
import WhyChooseSection from '@/app/components/WhyChooseSection';
import ServicesOverview from '@/app/components/ServicesOverview';
import ProcessSection from '@/app/components/ProcessSection';
import SpotlightInit from '@/app/components/SpotlightInit';

export default function HomePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <ServicesOverview />
        <ProcessSection />
        <FAQSection />
      </main>
      <Footer />
      <SpotlightInit />
    </div>
  );
}