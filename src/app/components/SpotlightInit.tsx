'use client';

import { useEffect } from 'react';

export default function SpotlightInit() {
  useEffect(() => {
    // Spotlight card mouse tracking
    const cards = document.querySelectorAll<HTMLElement>('.spotlight-card');
    const handleMouseMove = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return null;
}