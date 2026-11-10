import React from 'react';
import { ArrowUp, Instagram, Phone, Sparkles } from 'lucide-react';
import { BrandMonogram } from '../common/BrandMonogram';
import { AGENCY_INFO } from '../../data/agencyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Approach', href: '#approach' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-brand-forest/40 border-t border-brand-emerald/40 pt-20 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-emerald/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Tier: Monogram & Large CTA prompt */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-16 border-b border-brand-emerald/30 gap-8">
          <div className="flex items-center gap-4">
            <BrandMonogram size={48} variant="white" withGlow />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl md:text-2xl tracking-[0.2em] text-white uppercase">
                INSIGHT
              </span>
              <span className="font-mono text-[10px] tracking-[0.4em] text-brand-muted uppercase">
                COMPANY
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs font-mono text-brand-muted hidden sm:inline-block">
              READY TO GROW? LET'S TALK.
            </span>
            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-full border border-brand-neon/30 bg-brand-forest/60 text-brand-bright hover:bg-brand-neon hover:text-black transition-all duration-300 shadow-sm hover:shadow-neon"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Links & Channels */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-brand-emerald/20 text-xs">
          <div className="md:col-span-5 flex flex-col gap-3">
            <span className="font-mono text-brand-neon tracking-widest uppercase">
              // Creative Direction
            </span>
            <p className="text-brand-muted leading-relaxed max-w-sm">
              We turn creative ideas into powerful brand experiences. Distinctive visual identities, bespoke editorial design, and cinematic digital platforms.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-2">
            <span className="font-mono text-brand-neon tracking-widest uppercase mb-1">
              // Navigation
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-brand-muted hover:text-brand-bright transition-colors uppercase tracking-wider font-mono text-[11px]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-mono text-brand-neon tracking-widest uppercase mb-1">
              // Connect
            </span>
            <a
              href={AGENCY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-muted hover:text-brand-bright transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-brand-neon" />
              <span>{AGENCY_INFO.instagramHandle}</span>
            </a>
            <div className="flex items-center gap-2 text-brand-muted">
              <Phone className="w-3.5 h-3.5 text-brand-neon" />
              <span>{AGENCY_INFO.phones[0].display} / {AGENCY_INFO.phones[1].display}</span>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-brand-muted/70">
          <span>
            © {new Date().getFullYear()} Insight Company. All creative rights reserved.
          </span>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-brand-bright" />
            <span className="text-brand-muted">Crafted for Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

