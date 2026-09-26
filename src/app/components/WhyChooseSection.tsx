import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const reasons = [
{
  icon: 'ChartBarIcon',
  title: 'Results-Driven Strategy',
  desc: 'Every campaign is designed with one goal: measurable business growth. We track leads, conversions, and revenue — not just vanity metrics.'
},
{
  icon: 'SparklesIcon',
  title: 'Creative Excellence',
  desc: 'Eye-catching designs and impactful brand storytelling that make your brand impossible to ignore in a crowded market.'
},
{
  icon: 'BoltIcon',
  title: 'Performance Marketing',
  desc: 'Data-backed Meta & Google campaigns focused on qualified leads, sales, and maximum ROI for your ad spend.'
},
{
  icon: 'CubeIcon',
  title: 'Complete Digital Solutions',
  desc: 'From branding to video production — everything your business needs to grow is under one roof with a single point of contact.'
}];


export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden border-t border-white/[0.04]">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />
      <div className="blob-blue absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Section header */}
        <div className="mb-14 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-accent/30 bg-accent/10 text-xs font-bold tracking-widest text-accent uppercase mb-4">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Why AdsPeak
          </span>
          <h2 className="text-display font-bold text-foreground mt-3">
            Built for Brands That{' '}
            <span className="text-gradient-red">Mean Business</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed">
            We combine creativity with performance marketing to create campaigns that don't just generate views — they generate real business results.
          </p>
        </div>

        {/* Bento grid */}
        {/* 
           BENTO AUDIT:
           Array: [HeroImage, HeaderBlock, Reason1, Reason2, Reason3, Reason4] = 6 cards
           Row 1 (grid-cols-12): [col-1→4: HeroImage cs-4 rs-2] [col-5→12: HeaderBlock cs-8]
           Row 2: [col-1→4: HeroImage cont.] [col-5→8: Reason1 cs-4] [col-9→12: Reason2 cs-4]
           Row 3: [col-1→4: Reason3 cs-4] [col-5→8: Reason4 cs-4] [col-9→12: MissionCard cs-4]
           Placed 6/6 ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Hero Image Card — row-span-2 */}
          <div className="md:col-span-4 md:row-span-2 spotlight-card rounded-sm overflow-hidden relative min-h-[280px] md:min-h-0 group animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_183be303d-1766470449787.png"
              alt="AdsPeak team in a modern agency office, dark ambient lighting, strategic planning session with screens showing campaign data"
              fill
              className="object-cover opacity-70 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute top-5 left-5 text-xs font-bold font-mono text-primary/60 tracking-widest">(001)</div>
            <div className="absolute bottom-5 left-5 right-5">
              <div className="bg-black/80 backdrop-blur border border-white/10 p-3 rounded-sm">
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-semibold">Brand Authority</div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[92%]" />
                </div>
                <div className="flex justify-between text-xs mt-2 text-primary font-semibold">
                  <span>Active</span>
                  <span>92% Score</span>
                </div>
              </div>
            </div>
          </div>

          {/* Header Block */}
          <div className="md:col-span-8 spotlight-card rounded-sm p-6 md:p-8 flex flex-col justify-between min-h-[160px] border border-white/[0.05] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-tight">
                From Startup to <span className="text-muted-foreground font-normal">Authority.</span>
                <br />One Agency. <span className="text-gradient-red">Complete Growth.</span>
              </h3>
              <span className="text-xs font-mono text-muted-foreground tracking-widest hidden sm:block">[LIVE]</span>
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold max-w-md mt-4">
              WE TRANSITION BRANDS FROM BASIC MARKETING TO AUTHORITY POSITIONING THROUGH STRATEGY, CREATIVITY, AND DATA.
            </p>
          </div>

          {/* Reason cards */}
          {reasons.map((r, i) =>
          <div
            key={i}
            className="md:col-span-4 spotlight-card rounded-sm p-6 border border-white/[0.05] flex flex-col gap-4 group animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]"
            style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
            
              <div className="w-10 h-10 rounded-sm border border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                <Icon name={r.icon as any} size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground mb-2">{r.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          )}

          {/* Mission card */}
          <div className="md:col-span-4 spotlight-card rounded-sm p-6 border border-primary/20 bg-primary/5 flex flex-col justify-between min-h-[160px] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both]">
            <div className="text-xs font-mono text-muted-foreground tracking-widest">[MISSION]</div>
            <div>
              <h4 className="text-sm font-bold text-foreground mb-2">Our Mission</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                To empower businesses with innovative digital marketing solutions that create measurable growth, stronger brand identity, and long-term success.
              </p>
            </div>
            <div className="flex gap-1 mt-3">
              <div className="h-1 w-8 rounded-full bg-primary" />
              <div className="h-1 w-4 rounded-full bg-white/10" />
              <div className="h-1 w-2 rounded-full bg-white/10" />
            </div>
          </div>

        </div>
      </div>
    </section>);

}