import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function ServicesHero() {
  return (
    <section className="relative pt-36 pb-20 bg-background overflow-hidden border-b border-white/[0.05]">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="blob-red absolute top-1/2 left-1/4 w-96 h-96 pointer-events-none opacity-40 -translate-y-1/2" />
      <div className="blob-blue absolute top-1/3 right-1/4 w-80 h-80 pointer-events-none opacity-30" />

      {/* Beams */}
      <div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-16">
        <div className="relative w-px h-full bg-white/[0.03] overflow-hidden">
          <div className="beam" />
        </div>
        <div className="relative w-px h-full bg-white/[0.03] overflow-hidden">
          <div className="beam beam-blue beam-delay-2" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/10 text-xs font-bold tracking-widest text-primary uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Our Services
          </span>
          <h1 className="text-hero font-extrabold text-foreground leading-none tracking-tight mt-3">
            <span className="block text-foreground/80">Everything Your</span>
            <span className="block text-gradient-red">Brand Needs</span>
            <span className="block text-foreground">to Grow.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mt-6 max-w-xl leading-relaxed">
            From brand identity to performance ads — 9 core services, one agency, zero compromise. We handle it all so you can focus on running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/contact" className="btn-primary">
              Get a Free Consultation
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>

        {/* Service tags */}
        <div className="flex flex-wrap gap-2 mt-12 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
          {['Branding', 'Web Dev', 'Social Media', 'Meta Ads', 'Google Ads', 'SEO', 'Video Shoot', 'Video Editing', 'Print & Design']?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs font-semibold border border-white/10 rounded-sm text-muted-foreground bg-white/[0.02] hover:border-primary/30 hover:text-primary transition-all cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
