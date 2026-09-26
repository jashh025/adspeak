import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-background relative overflow-hidden border-t border-white/[0.04]">
      <div className="blob-red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none opacity-25" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/10 text-xs font-bold tracking-widest text-primary uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Ready to Grow?
          </span>
          <h2 className="text-display font-extrabold text-foreground tracking-tight mt-2">
            Let's Build Your Brand's{' '}
            <span className="text-gradient-red">Next Success Story</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-base leading-relaxed max-w-xl mx-auto">
            Whether you're launching a new business or scaling an existing one, AdsPeak is ready to help you reach your peak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact" className="btn-primary">
              Get a Free Consultation
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
            <a href="tel:+919344882945" className="btn-secondary">
              <Icon name="PhoneIcon" size={16} />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}