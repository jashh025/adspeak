import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Meta Ads', href: '/services' },
  { label: 'Google Ads', href: '/services' },
  { label: 'SEO', href: '/services' },
  { label: 'Websites', href: '/services' },
];

const socialLinks = [
  { icon: 'GlobeAltIcon', label: 'Instagram', href: '#' },
  { icon: 'ChatBubbleLeftIcon', label: 'WhatsApp', href: '#' },
  { icon: 'EnvelopeIcon', label: 'Email', href: 'mailto:contact@adspeak.in' },
];

export default function Footer() {
  return (
    <footer className="relative bg-secondary border-t border-white/[0.05] overflow-hidden">
      {/* Top highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/[0.05]">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <AppLogo size={36} />
              <span className="font-bold text-xl tracking-tight text-foreground">
                Ads<span className="text-gradient-red">Peak</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Reach Your Brand's Peak. Helping businesses grow through branding, websites, social media marketing, paid campaigns, and creative production.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <Icon name={s.icon as any} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-5">Company</h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-5">Services</h4>
              <ul className="flex flex-col gap-3">
                {serviceLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-xs text-muted-foreground">
            © 2026 AdsPeak. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with strategy. Designed for growth.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}