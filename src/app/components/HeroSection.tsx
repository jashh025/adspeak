import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background flex items-end">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" />

      {/* Atmospheric blobs */}
      <div className="blob-red absolute top-1/4 left-1/4 w-[500px] h-[500px] pointer-events-none z-0 opacity-60" />
      <div className="blob-blue absolute bottom-1/4 right-1/4 w-[400px] h-[400px] pointer-events-none z-0 opacity-50" />

      {/* Vertical beam lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-8 md:px-16 lg:px-24">
        <div className="relative w-px h-full bg-white/[0.03] overflow-hidden">
          <div className="beam" />
        </div>
        <div className="relative w-px h-full bg-white/[0.03] overflow-hidden hidden md:block absolute left-1/3">
          <div className="beam beam-blue beam-delay-1" />
        </div>
        <div className="relative w-px h-full bg-white/[0.03] overflow-hidden hidden lg:block absolute left-2/3">
          <div className="beam beam-delay-2" />
        </div>
        <div className="relative w-px h-full bg-white/[0.03] overflow-hidden">
          <div className="beam beam-blue beam-delay-3" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-36 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-end">

          {/* Left: Main headline */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Eyebrow */}
            <div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-primary/30 bg-primary/10 text-xs font-bold tracking-widest text-primary uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Digital Marketing Agency · Madurai, India
              </span>
            </div>

            {/* Headline */}
            <div className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
              <h1 className="text-hero font-extrabold text-foreground leading-none tracking-tight">
                <span className="block text-foreground/80">We Don't Just</span>
                <span className="block text-gradient-red">Market. We</span>
                <span className="block text-foreground">Build Brands.</span>
              </h1>
            </div>

            {/* Sub */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-light [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
              Strategic digital marketing and brand development designed to scale your business from vision to victory. Reach Your Brand's Peak.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 [animation:animationIn_0.8s_ease-out_0.45s_both] animate-on-scroll animate">
              <Link href="/services" className="btn-primary">
                Explore Our Services
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right: Stats sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-10 [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll animate">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 border-t border-white/[0.06] pt-8 lg:border-t-0 lg:pt-0">
              {/* Stat 1 */}
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1.5 font-medium">
                  Avg. ROI Increase
                </div>
                <div className="text-5xl font-extrabold text-foreground leading-none">
                  3<span className="text-2xl font-semibold text-primary align-top ml-0.5">×</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">For clients in 90 days</div>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1.5 font-medium">
                  Campaigns Launched
                </div>
                <div className="text-5xl font-extrabold text-foreground leading-none">
                  200<span className="text-2xl font-semibold text-accent align-top ml-0.5">+</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Across Meta & Google</div>
              </div>

              {/* Stat 3 */}
              <div className="col-span-2 lg:col-span-1">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1.5 font-medium">
                  Services
                </div>
                <div className="text-5xl font-extrabold text-foreground leading-none">
                  9<span className="text-xl font-light text-muted-foreground align-top ml-1">core</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Under one roof</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll hint */}
        <div className="mt-16 flex items-center gap-3 text-xs text-muted-foreground [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll animate">
          <div className="w-8 h-px bg-white/20" />
          <span className="uppercase tracking-widest">Scroll to explore</span>
          <Icon name="ChevronDownIcon" size={14} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}