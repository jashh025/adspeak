import React from 'react';

export default function ContactHero() {
  return (
    <section className="relative pt-36 pb-16 bg-background overflow-hidden border-b border-white/[0.05]">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="blob-red absolute top-1/2 right-1/3 w-80 h-80 pointer-events-none opacity-35 -translate-y-1/2" />

      {/* Beams */}
      <div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-16">
        <div className="relative w-px h-full bg-white/[0.03] overflow-hidden">
          <div className="beam beam-blue" />
        </div>
        <div className="relative w-px h-full bg-white/[0.03] overflow-hidden">
          <div className="beam beam-delay-1" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/10 text-xs font-bold tracking-widest text-primary uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Get in Touch
          </span>
          <h1 className="text-hero font-extrabold text-foreground leading-none tracking-tight mt-3">
            <span className="block text-foreground/80">Let's Build Your</span>
            <span className="block text-gradient-red">Brand's Next</span>
            <span className="block text-foreground">Success Story.</span>
          </h1>
          <p className="text-base text-muted-foreground mt-5 leading-relaxed max-w-lg">
            Whether you're launching a new business or scaling an existing one, AdsPeak is ready to help. Fill in the form and we'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}