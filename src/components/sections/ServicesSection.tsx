import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Share2, Palette, Crown, Film, TrendingUp, Megaphone, Code, 
  ArrowUpRight, Plus, Minus, CheckCircle, Sparkles 
} from 'lucide-react';
import { SERVICES_DATA } from '../../data/agencyData';
import { ServiceItem } from '../../types';

export const ServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Share2': return Share2;
      case 'Palette': return Palette;
      case 'Crown': return Crown;
      case 'Film': return Film;
      case 'TrendingUp': return TrendingUp;
      case 'Megaphone': return Megaphone;
      case 'Code': return Code;
      default: return Sparkles;
    }
  };

  const activeService = SERVICES_DATA.find(s => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="relative py-28 md:py-36 px-6 md:px-12 bg-brand-dark/95 overflow-hidden">
      {/* Dynamic Background Light shifting based on active service */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] rounded-full blur-[180px] bg-brand-emerald/25 pointer-events-none transition-all duration-700" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full blur-[160px] bg-brand-neon/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-brand-neon" />
              <span className="text-xs font-mono tracking-[0.25em] text-brand-neon uppercase">
                // 02. AGENCY CAPABILITIES
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-tight">
              WHAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-bright to-brand-neon">WE DO.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm md:text-base text-brand-muted leading-relaxed">
              We engineer tailor-made creative systems that elevate brands into cultural category leaders across every modern touchpoint.
            </p>
            <span className="inline-block mt-2 text-[11px] font-mono text-brand-neon/70">
              * Tailored capabilities subject to project scope
            </span>
          </div>
        </div>

        {/* Editorial Layout: Interactive List on Left + Spotlight Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services Interactive Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-brand-emerald/30 border-y border-brand-emerald/30">
            {SERVICES_DATA.map((service) => {
              const Icon = getServiceIcon(service.iconName);
              const isActive = activeServiceId === service.id;
              const isExpanded = expandedId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  className={`group relative py-7 px-4 md:px-6 transition-all duration-300 cursor-pointer ${
                    isActive ? 'bg-brand-forest/40' : 'hover:bg-brand-forest/20'
                  }`}
                >
                  {/* Left Active Glow Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-brand-neon shadow-neon"
                    />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 md:gap-6 flex-1">
                      {/* Number */}
                      <span className={`font-mono text-sm md:text-base transition-colors duration-300 pt-1 ${
                        isActive ? 'text-brand-bright font-bold' : 'text-brand-muted/60 group-hover:text-brand-bright'
                      }`}>
                        {service.number}
                      </span>

                      <div className="flex flex-col flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className={`font-display font-bold text-xl md:text-2xl lg:text-3xl tracking-tight transition-all duration-300 ${
                            isActive ? 'text-white translate-x-1' : 'text-brand-muted group-hover:text-white'
                          }`}>
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-xs md:text-sm text-brand-muted mt-2 line-clamp-2 leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Right Icon & Expand trigger */}
                    <div className="flex items-center gap-3 pt-1">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isActive
                          ? 'border-brand-neon bg-brand-bright text-black shadow-neon rotate-45'
                          : 'border-brand-emerald/40 text-brand-muted group-hover:border-brand-neon/60 group-hover:text-white'
                      }`}>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile expandable drawer if clicked */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden mt-5 pt-4 border-t border-brand-emerald/30 overflow-hidden"
                      >
                        <p className="text-xs text-brand-muted-light mb-4 leading-relaxed">
                          {service.detailedDescription}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.deliverables.map((item, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-brand-emerald/40 text-brand-bright border border-brand-neon/20">
                              ✓ {item}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Desktop Spotlight Panel (5 cols) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="p-8 md:p-10 rounded-3xl bg-gradient-to-b from-brand-forest/80 via-brand-forest/50 to-brand-dark border border-brand-neon/30 shadow-glass relative overflow-hidden"
            >
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-neon/20 blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-neon/20">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-bold text-brand-bright">
                      {activeService.number}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-brand-emerald/60 text-brand-bright border border-brand-neon/30">
                      {activeService.tag}
                    </span>
                  </div>
                  {React.createElement(getServiceIcon(activeService.iconName), {
                    className: "w-6 h-6 text-brand-neon animate-pulse"
                  })}
                </div>

                <h4 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight uppercase mb-4 leading-tight">
                  {activeService.title}
                </h4>

                <p className="text-sm md:text-base text-brand-muted-light leading-relaxed mb-8">
                  {activeService.detailedDescription}
                </p>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono tracking-widest text-brand-neon uppercase block">
                    // KEY DELIVERABLES
                  </span>
                  {activeService.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-white">
                      <CheckCircle className="w-4 h-4 text-brand-bright flex-shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="w-full py-3.5 rounded-full text-center font-display font-bold text-xs tracking-widest uppercase bg-brand-emerald hover:bg-brand-neon hover:text-black text-brand-bright border border-brand-neon/40 shadow-neon transition-all duration-300"
                >
                  REQUEST THIS SERVICE
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

