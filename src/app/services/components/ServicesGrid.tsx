import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Service {
  tag: string;
  icon: string;
  title: string;
  desc: string;
  features: string[];
  color: 'red' | 'blue';
  image?: string;
  imageAlt?: string;
}

const services: Service[] = [
{
  tag: '01',
  icon: 'PaintBrushIcon',
  title: 'Branding & Consulting',
  desc: 'Build a strong, memorable brand identity with strategic positioning, creative direction, and a brand voice that resonates.',
  features: ['Brand strategy & positioning', 'Logo & visual identity design', 'Brand guidelines & tone of voice', 'Market research & competitor analysis'],
  color: 'red',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c89dff00-1785296150143.png",
  imageAlt: 'Brand identity design process, dark workspace with design tools and color palettes on a screen'
},
{
  tag: '02',
  icon: 'ComputerDesktopIcon',
  title: 'Website Development',
  desc: 'Modern, responsive, conversion-focused websites built to rank on Google and turn visitors into customers.',
  features: ['Mobile-responsive design', 'SEO-optimized architecture', 'Landing pages & e-commerce', 'Fast loading & secure hosting'],
  color: 'blue',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11bc57644-1772175190337.png",
  imageAlt: 'Website development on a laptop screen showing modern dark UI design, well-lit workspace'
},
{
  tag: '03',
  icon: 'DevicePhoneMobileIcon',
  title: 'Social Media Marketing',
  desc: 'Content creation, reels, community management, and audience growth strategies that build real brand presence.',
  features: ['Content calendar & strategy', 'Reel & post production', 'Community engagement', 'Analytics & growth reporting'],
  color: 'red'
},
{
  tag: '04',
  icon: 'MegaphoneIcon',
  title: 'Meta Ads',
  desc: 'High-performing Facebook and Instagram campaigns with precision targeting and maximum ROI for your ad spend.',
  features: ['Audience research & targeting', 'Ad creative design & copy', 'A/B testing & optimization', 'Detailed performance reporting'],
  color: 'blue'
},
{
  tag: '05',
  icon: 'MagnifyingGlassIcon',
  title: 'Google Ads',
  desc: 'Reach customers who are actively searching for your business — exactly when they need you most.',
  features: ['Search & display campaigns', 'Keyword research & bidding', 'Landing page optimization', 'Conversion tracking setup'],
  color: 'red'
},
{
  tag: '06',
  icon: 'ArrowTrendingUpIcon',
  title: 'SEO',
  desc: 'Long-term organic visibility improvements that bring qualified traffic to your website month after month.',
  features: ['On-page & technical SEO', 'Content strategy & blogging', 'Local SEO (Google My Business)', 'Backlink building & rank tracking'],
  color: 'blue'
},
{
  tag: '07',
  icon: 'FilmIcon',
  title: 'Video Shoot',
  desc: 'Professional product shoots and commercial videos that tell your brand story and elevate your perception.',
  features: ['Product & lifestyle shoots', 'Commercial brand videos', 'Testimonial videos', 'Studio & on-location shoots'],
  color: 'red',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f8200080-1764810668855.png",
  imageAlt: 'Professional video production setup with camera and lighting equipment in a dark studio environment'
},
{
  tag: '08',
  icon: 'ScissorsIcon',
  title: 'Video Editing',
  desc: 'High-quality edits for Reels, advertisements, and promotional content that stop the scroll.',
  features: ['Reels & short-form editing', 'Color grading & sound design', 'Motion graphics & captions', 'Platform-optimized exports'],
  color: 'blue'
}];


export default function ServicesGrid() {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden border-b border-white/[0.04]">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col gap-6">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.tag}
                className="spotlight-card rounded-sm border border-white/[0.05] overflow-hidden animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]"
                style={{ animationDelay: `${i * 0.07}s` }}>
                
                <div className={`grid grid-cols-1 ${service.image ? 'md:grid-cols-12' : 'md:grid-cols-1'} gap-0`}>
                  {/* Content */}
                  <div className={`${service.image ? 'md:col-span-8' : 'md:col-span-12'} p-6 md:p-8 flex flex-col justify-between`}>
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-sm border flex items-center justify-center ${
                        service.color === 'red' ? 'border-primary/30 bg-primary/10' : 'border-accent/30 bg-accent/10'}`
                        }>
                          <Icon
                            name={service.icon as any}
                            size={22}
                            className={service.color === 'red' ? 'text-primary' : 'text-accent'} />
                          
                        </div>
                        <div>
                          <span className="text-xs font-mono text-muted-foreground">{service.tag}</span>
                          <h2 className="text-lg md:text-xl font-bold text-foreground">{service.title}</h2>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      {service.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((f, fi) =>
                      <div key={fi} className="flex items-center gap-2.5">
                          <div className={`w-1 h-1 rounded-full flex-shrink-0 ${service.color === 'red' ? 'bg-primary' : 'bg-accent'}`} />
                          <span className="text-xs text-muted-foreground">{f}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all ${
                        service.color === 'red' ? 'text-primary' : 'text-accent'}`
                        }>
                        
                        Get Started <Icon name="ArrowRightIcon" size={12} />
                      </Link>
                    </div>
                  </div>

                  {/* Image */}
                  {service.image &&
                  <div className="md:col-span-4 relative min-h-[200px] md:min-h-0 overflow-hidden">
                      <AppImage
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      fill
                      className="object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw" />
                    
                      <div className="absolute inset-0 bg-gradient-to-r from-card/80 via-card/20 to-transparent" />
                    </div>
                  }
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

}
