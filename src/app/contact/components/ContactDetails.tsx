import React from 'react';
import Icon from '@/components/ui/AppIcon';

const contactItems = [
  {
    icon: 'PhoneIcon',
    label: 'Call Us',
    lines: ['+91 93448 82945', '+91 93458 20813'],
    href: 'tel:+919344882945',
    color: 'red' as const,
  },
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    lines: ['contact@adspeak.in'],
    href: 'mailto:contact@adspeak.in',
    color: 'blue' as const,
  },
  {
    icon: 'MapPinIcon',
    label: 'Location',
    lines: ['Madurai, Tamil Nadu, India'],
    href: '#',
    color: 'red' as const,
  },
  {
    icon: 'ChatBubbleLeftEllipsisIcon',
    label: 'WhatsApp',
    lines: ['Fast responses for business inquiries'],
    href: 'https://wa.me/919344882945',
    color: 'blue' as const,
  },
];

const businessHours = [
  { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-5 h-full">
      {/* Contact cards */}
      {contactItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="spotlight-card rounded-sm border border-white/[0.06] p-5 flex items-start gap-4 group hover:border-primary/20 transition-all duration-300"
        >
          <div className={`w-10 h-10 rounded-sm border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            item.color === 'red' ?'border-primary/30 bg-primary/10 group-hover:bg-primary/20' :'border-accent/30 bg-accent/10 group-hover:bg-accent/20'
          }`}>
            <Icon
              name={item.icon as any}
              size={18}
              className={item.color === 'red' ? 'text-primary' : 'text-accent'}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{item.label}</div>
            {item.lines.map((line, i) => (
              <div key={i} className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-relaxed">
                {line}
              </div>
            ))}
          </div>
          <Icon name="ArrowRightIcon" size={14} className="text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
        </a>
      ))}

      {/* Business hours */}
      <div className="spotlight-card rounded-sm border border-white/[0.06] p-5">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="ClockIcon" size={16} className="text-primary" />
          <span className="text-xs font-bold text-foreground uppercase tracking-widest">Business Hours</span>
        </div>
        <div className="flex flex-col gap-2.5">
          {businessHours.map((bh) => (
            <div key={bh.day} className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">{bh.day}</span>
              <span className={`text-xs font-semibold ${bh.time === 'Closed' ? 'text-muted-foreground' : 'text-foreground'}`}>
                {bh.time}
              </span>
            </div>
          ))}
        </div>
        {/* Live status */}
        <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          <span className="text-xs text-green-400 font-semibold">We're Online Now</span>
        </div>
      </div>

      {/* CTA banner */}
      <div className="rounded-sm border border-primary/20 bg-primary/5 p-5 text-center">
        <p className="text-xs text-muted-foreground mb-3">Prefer instant chat?</p>
        <a
          href="https://wa.me/919344882945"
          className="btn-primary text-xs py-2.5 px-5 w-full justify-center"
        >
          <Icon name="ChatBubbleLeftEllipsisIcon" size={14} />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}