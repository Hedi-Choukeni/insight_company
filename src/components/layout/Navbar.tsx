import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Instagram, Phone } from 'lucide-react';
import { BrandMonogram } from '../common/BrandMonogram';
import { AGENCY_INFO } from '../../data/agencyData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Approach', href: '#approach' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
            aria-label="Insight Company Home"
          >
            <div className="relative">
              <BrandMonogram
                size={38}
                variant="white"
                className="group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-brand-neon/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold tracking-[0.22em] text-sm md:text-base text-white group-hover:text-brand-bright transition-colors uppercase">
                INSIGHT
              </span>
              <span className="font-mono text-[9px] tracking-[0.35em] text-brand-muted -mt-0.5 uppercase">
                COMPANY
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-forest/40 border border-brand-neon/15 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-brand-muted hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-brand-emerald/80 border border-brand-neon/40 shadow-neon"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              data-cursor="TALK"
              className="relative hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase overflow-hidden group border border-brand-neon/40 bg-brand-forest/60 hover:border-brand-neon transition-all duration-300 shadow-sm hover:shadow-neon"
            >
              <span className="relative z-10 text-brand-bright group-hover:text-black transition-colors duration-300">
                LET'S TALK
              </span>
              <ArrowUpRight className="relative z-10 w-3.5 h-3.5 text-brand-bright group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              <div className="absolute inset-0 bg-brand-bright -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-brand-neon/20 bg-brand-forest/50 text-brand-bright hover:bg-brand-emerald/40 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden bg-brand-dark/95 backdrop-blur-2xl flex flex-col pt-28 px-8 pb-10"
          >
            <div className="flex flex-col gap-5 flex-1">
              <span className="text-xs font-mono tracking-widest text-brand-neon/80 uppercase">
                // Menu Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`text-2xl font-display tracking-tight py-2 border-b border-brand-emerald/30 flex items-center justify-between ${
                    activeSection === link.href.substring(1)
                      ? 'text-brand-bright font-bold'
                      : 'text-brand-muted hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-brand-neon/50" />
                </motion.a>
              ))}
            </div>

            <div className="pt-6 border-t border-brand-emerald/40 flex flex-col gap-4">
              <div className="flex items-center gap-4 text-sm text-brand-muted">
                <a
                  href={AGENCY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-bright transition-colors"
                >
                  <Instagram className="w-4 h-4 text-brand-neon" />
                  <span>{AGENCY_INFO.instagramHandle}</span>
                </a>
              </div>

              <div className="flex items-center gap-4 text-sm text-brand-muted">
                <Phone className="w-4 h-4 text-brand-neon" />
                <span>{AGENCY_INFO.phones[0].display} / {AGENCY_INFO.phones[1].display}</span>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full py-3.5 rounded-full text-center font-bold text-xs tracking-widest uppercase bg-brand-bright text-black shadow-neon transition-transform active:scale-95"
              >
                LET'S WORK TOGETHER
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

