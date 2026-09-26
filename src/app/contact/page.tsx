import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactForm from '@/app/contact/components/ContactForm';
import ContactDetails from '@/app/contact/components/ContactDetails';
import SpotlightInit from '@/app/components/SpotlightInit';

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <section className="py-16 bg-secondary relative overflow-hidden border-b border-white/[0.04]">
          <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
              <div className="lg:col-span-5">
                <ContactDetails />
              </div>
            </div>
          </div>
        </section>
        <FAQSection />
      </main>
      <Footer />
      <SpotlightInit />
    </div>
  );
}