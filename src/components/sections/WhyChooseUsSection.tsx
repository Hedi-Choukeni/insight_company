import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Eye, Zap, ArrowRight } from 'lucide-react';
import { WHY_US_PILLARS } from '../../data/agencyData';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return Sparkles;
      case 'Compass': return Compass;
      case 'Eye': return Eye;
      case 'Zap': return Zap;
      default: return Sparkles;
    }
  };

  return (
    <section id="why-us" className="relative py-28 md:py-36 px-6 md:px-12 bg-brand-dark overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] rounded-full blur-[170px] bg-brand-forest/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-brand-neon" />
              <span className="text-xs font-mono tracking-[0.25em] text-brand-neon uppercase">
                // 05. AGENCY PHILOSOPHY
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-tight leading-tight">
              YOUR VISION. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-bright to-brand-neon">
                OUR CREATIVE THINKING.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm md:text-base text-brand-muted leading-relaxed">
              We operate as your dedicated creative co-pilot — obsessing over every pixel, headline, and motion transition so your brand commands instant authority.
            </p>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_US_PILLARS.map((pillar, idx) => {
            const Icon = getIcon(pillar.iconName);
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-brand-forest/60 via-brand-forest/30 to-brand-dark border border-brand-neon/15 hover:border-brand-neon/45 transition-all duration-400 group shadow-glass relative overflow-hidden"
              >
                {/* Glow watermark */}
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-brand-neon/10 rounded-full blur-2xl group-hover:bg-brand-neon/20 transition-all duration-500" />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-emerald/50 border border-brand-neon/30 flex items-center justify-center text-brand-bright group-hover:scale-110 group-hover:shadow-neon transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-2xl font-bold text-brand-muted/40 group-hover:text-brand-bright transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl md:text-3xl text-white uppercase tracking-tight mb-2 group-hover:text-brand-bright transition-colors">
                  {pillar.title}
                </h3>

                <h4 className="text-sm font-mono text-brand-neon/90 uppercase tracking-wider mb-4">
                  {pillar.headline}
                </h4>

                <p className="text-sm md:text-base text-brand-muted leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

