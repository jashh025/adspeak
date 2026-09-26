'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What services does AdsPeak provide?',
    answer: 'We offer full-service branding, website development, SEO, Meta & Google Ads, social media management, video shoots, video editing, and print design (flyers, banners, posters). Everything your brand needs under one roof.',
  },
  {
    question: 'How long does it take to see results from digital marketing?',
    answer: 'Paid ads (Meta/Google Ads) deliver immediate traffic and leads within days. SEO and brand strategy yield strong exponential returns over 3 to 6 months. We set realistic timelines upfront.',
  },
  {
    question: 'How long does a website project take?',
    answer: 'Most websites are completed within 7–21 days, depending on the project scope, number of pages, and custom features required.',
  },
  {
    question: 'Do you offer custom marketing packages?',
    answer: 'Yes, we tailor every package to match your business goals, target audience, and budget. No cookie-cutter formulas — every solution is built for your brand.',
  },
  {
    question: 'Can you handle complete social media management?',
    answer: 'Absolutely. We manage content creation, posting schedules, community engagement, reels production, and audience growth strategies end-to-end.',
  },
  {
    question: 'Do you offer video shoots and editing?',
    answer: 'Yes. We produce professional product shoots, commercial videos, brand films, and premium edits for social media advertising and promotional content.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Atmospheric blob */}
      <div className="blob-red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/10 text-xs font-semibold tracking-widest text-primary uppercase mb-4">
            <span className="w-1 h-1 rounded-full bg-primary" />
            FAQ
          </span>
          <h2 className="text-section font-bold text-foreground mt-2">
            Frequently Asked <span className="text-gradient-red">Questions</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="spotlight-card border border-white/[0.06] rounded-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
                  {item.question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-sm border border-white/10 flex items-center justify-center transition-all duration-300 ${
                    openIndex === i ? 'bg-primary border-primary rotate-45' : 'bg-white/[0.03]'
                  }`}
                >
                  <Icon name="PlusIcon" size={12} className="text-foreground" />
                </span>
              </button>
              <div className={`faq-content ${openIndex === i ? 'open' : ''}`}>
                <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}