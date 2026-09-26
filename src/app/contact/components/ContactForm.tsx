'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const serviceOptions = [
  'Branding & Consulting',
  'Website Development',
  'Social Media Marketing',
  'Meta Ads',
  'Google Ads',
  'SEO',
  'Video Shoot',
  'Video Editing',
  'Print & Design',
  'Complete Package',
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock submit — backend integration point
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="spotlight-card rounded-sm border border-primary/20 bg-primary/5 p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-6">
          <Icon name="CheckIcon" size={32} className="text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">Message Sent!</h3>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
          Thank you for reaching out. Our team will contact you within 24 hours to discuss your project.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
          className="btn-secondary mt-6 text-xs"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="spotlight-card rounded-sm border border-white/[0.06] p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground">Start Your Growth Journey</h2>
        <p className="text-sm text-muted-foreground mt-1">Tell us about your business and goals.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs font-semibold text-foreground uppercase tracking-widest">
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Arjun Sharma"
              className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-xs font-semibold text-foreground uppercase tracking-widest">
              Phone Number <span className="text-primary">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-foreground uppercase tracking-widest">
            Email Address <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="arjun@yourbusiness.in"
            className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
          />
        </div>

        {/* Service */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-xs font-semibold text-foreground uppercase tracking-widest">
            Service Required <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled className="bg-card text-muted-foreground">Select a service...</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-card text-foreground">{opt}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Icon name="ChevronDownIcon" size={16} className="text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-xs font-semibold text-foreground uppercase tracking-widest">
            Tell Us About Your Business
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Brief description of your business, goals, and what you're looking to achieve..."
            className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Icon name="ArrowRightIcon" size={16} />
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          We respond within 24 hours. No spam, ever.
        </p>
      </form>
    </div>
  );
}