'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-6 py-4">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between rounded-sm px-5 py-3 transition-all duration-500 ${
          scrolled
            ? 'bg-[#040508]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40'
            : 'bg-white/[0.03] backdrop-blur-md border border-white/[0.06]'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <AppLogo size={32} />
          <span className="font-bold text-lg tracking-tight text-foreground hidden sm:block">
            Ads<span className="text-gradient-red">Peak</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link?.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
            Free Consultation
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <Icon name="XMarkIcon" size={24} />
          ) : (
            <Icon name="Bars3Icon" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8">
          <nav className="flex flex-col gap-2">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={() => setMobileOpen(false)}
                className="text-xl font-semibold text-foreground py-4 border-b border-white/[0.06] hover:text-primary transition-colors"
              >
                {link?.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center text-sm"
            >
              Get a Free Consultation
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
          {/* Close button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 p-2 text-foreground"
            aria-label="Close menu"
          >
            <Icon name="XMarkIcon" size={28} />
          </button>
        </div>
      )}
    </header>
  );
}