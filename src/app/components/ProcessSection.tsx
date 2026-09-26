import React from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  { num: '01', icon: 'MagnifyingGlassIcon', title: 'Discover', desc: 'Deep-dive into your business, audience, and competitive landscape to find the real opportunity.' },
  { num: '02', icon: 'MapIcon', title: 'Strategize', desc: 'Create a customized growth plan with clear KPIs, channels, timelines, and budget allocation.' },
  { num: '03', icon: 'PencilSquareIcon', title: 'Create', desc: 'Design compelling content, creatives, and campaigns that speak directly to your audience.' },
  { num: '04', icon: 'RocketLaunchIcon', title: 'Launch', desc: 'Execute across the right platforms with precision targeting and real-time monitoring.' },
  { num: '05', icon: 'ChartBarIcon', title: 'Optimize', desc: 'Track, analyze, and continuously improve performance to maximize your ROI every month.' },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden border-t border-white/[0.04]">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50" />
      <div className="blob-red absolute top-1/2 right-0 w-80 h-80 pointer-events-none opacity-25 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-accent/30 bg-accent/10 text-xs font-bold tracking-widest text-accent uppercase mb-4">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Our Process
          </span>
          <h2 className="text-display font-bold text-foreground mt-2">
            From Strategy <span className="text-gradient-red">to Success</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            A proven 5-step framework that transforms your marketing from scattered tactics to a focused growth engine.
          </p>
        </div>

        {/* Horizontal process flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 hidden md:block pointer-events-none" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4 py-6 group animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Step circle */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110 ${
                  i === 0 ? 'border-primary bg-primary/15' :
                  i === 4 ? 'border-accent bg-accent/15': 'border-white/15 bg-white/[0.03]'
                }`}>
                  <Icon name={step.icon as any} size={24} className={`${
                    i === 0 ? 'text-primary' :
                    i === 4 ? 'text-accent': 'text-muted-foreground group-hover:text-foreground'
                  } transition-colors`} />
                </div>
                {/* Step number badge */}
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-background border border-white/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-muted-foreground" style={{ fontSize: '9px' }}>{step.num}</span>
                </div>
              </div>

              <h3 className="text-sm font-bold text-foreground mb-2 tracking-wide uppercase">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom stats strip */}
        <div className="mt-16 grid grid-cols-3 gap-4 border-t border-white/[0.06] pt-12 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
          {[
            { val: '7–21', unit: 'Days', label: 'Website Delivery' },
            { val: '40%', unit: '+', label: 'Avg Efficiency Gain' },
            { val: '99', unit: '%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-4xl font-extrabold text-foreground leading-none">
                {stat.val}<span className="text-base md:text-xl font-semibold text-primary">{stat.unit}</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}