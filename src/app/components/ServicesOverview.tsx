import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const services = [
  { icon: 'PaintBrushIcon', title: 'Branding & Consulting', desc: 'Brand strategy, identity design, and positioning that makes you unforgettable.', tag: '01' },
  { icon: 'ComputerDesktopIcon', title: 'Website Development', desc: 'Modern, responsive, conversion-focused websites built for results.', tag: '02' },
  { icon: 'DevicePhoneMobileIcon', title: 'Social Media Marketing', desc: 'Content creation, reels, engagement, and audience growth strategies.', tag: '03' },
  { icon: 'MegaphoneIcon', title: 'Meta Ads', desc: 'High-performing Facebook and Instagram campaigns with maximum ROI.', tag: '04' },
  { icon: 'MagnifyingGlassIcon', title: 'Google Ads', desc: 'Reach customers actively searching for your business, right when they need you.', tag: '05' },
  { icon: 'ArrowTrendingUpIcon', title: 'SEO', desc: 'Improve search rankings and increase organic traffic over time.', tag: '06' },
  { icon: 'FilmIcon', title: 'Video Shoot', desc: 'Professional product shoots and commercial videos that elevate your brand.', tag: '07' },
  { icon: 'ScissorsIcon', title: 'Video Editing', desc: 'High-quality edits for Reels, advertisements, and promotional content.', tag: '08' },
  { icon: 'PrinterIcon', title: 'Print & Design', desc: 'Premium flyers, posters, and banners for digital and print campaigns.', tag: '09' },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden border-t border-white/[0.04]">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />
      <div className="blob-red absolute bottom-0 left-0 w-96 h-96 pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/10 text-xs font-bold tracking-widest text-primary uppercase mb-4">
              <span className="w-1 h-1 rounded-full bg-primary" />
              Our Services
            </span>
            <h2 className="text-display font-bold text-foreground mt-2">
              Everything Your Brand{' '}
              <span className="text-gradient-blue">Needs to Grow</span>
            </h2>
          </div>
          <Link href="/services" className="btn-secondary self-start md:self-auto flex-shrink-0">
            View All Services
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>

        {/* Asymmetric services grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Featured service — large */}
          <div className="md:col-span-5 spotlight-card rounded-sm p-8 border border-white/[0.05] flex flex-col justify-between min-h-[240px] group animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-sm border border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                <Icon name="PaintBrushIcon" size={24} className="text-primary" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">01</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Branding & Consulting</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Build a strong brand identity with strategic positioning, creative direction, and a brand voice that resonates with your target audience.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest mt-4 hover:gap-3 transition-all">
              Learn more <Icon name="ArrowRightIcon" size={12} />
            </Link>
          </div>

          {/* Two medium cards */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.slice(1, 3).map((s, i) => (
              <div
                key={i}
                className="spotlight-card rounded-sm p-6 border border-white/[0.05] flex flex-col justify-between group animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]"
                style={{ animationDelay: `${0.25 + i * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-sm border border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all">
                    <Icon name={s.icon as any} size={20} className="text-accent" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{s.tag}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining 6 services in 3-col grid */}
          {services.slice(3).map((s, i) => (
            <div
              key={i}
              className="md:col-span-4 spotlight-card rounded-sm p-6 border border-white/[0.05] flex flex-col gap-4 group animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]"
              style={{ animationDelay: `${0.2 + i * 0.08}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-sm border border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                  <Icon name={s.icon as any} size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{s.tag}</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1.5">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}