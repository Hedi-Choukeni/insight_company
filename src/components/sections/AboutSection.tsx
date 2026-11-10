import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { BrandMonogram } from '../common/BrandMonogram';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Our Mission',
      description: 'To empower forward-thinking brands with strategic creativity, distinctive visual systems, and digital resonance that commands market attention.',
      icon: Target,
    },
    {
      title: 'Our Vision',
      description: 'To redefine digital brand culture by bridging rigorous strategic clarity with daring, uncompromising aesthetic direction.',
      icon: Eye,
    },
    {
      title: 'Creative Philosophy',
      description: 'We believe genuine impact happens at the intersection of bold ideas, disciplined design mathematics, and sincere emotional resonance.',
      icon: Compass,
    },
  ];

  return (
    <section id="about" className="relative py-28 md:py-36 px-6 md:px-12 bg-brand-dark overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full blur-[150px] bg-brand-emerald/30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px] bg-brand-forest/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-brand-neon" />
          <span className="text-xs font-mono tracking-[0.25em] text-brand-neon uppercase">
            // 01. ABOUT INSIGHT COMPANY
          </span>
        </div>

        {/* Editorial Split Header & Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline & Introduction */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-tight leading-[1.05] mb-8"
            >
              WE SEE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-bright to-brand-neon">BIGGER PICTURE.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-lg md:text-2xl font-light text-brand-muted-light leading-relaxed mb-8 border-l-2 border-brand-neon/60 pl-6"
            >
              "Great brands are built through powerful ideas, meaningful connections, and thoughtful execution."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-base text-brand-muted leading-relaxed mb-12"
            >
              Insight Company is a creative marketing agency dedicated to helping brands stand out in saturated digital spaces.
              We approach every engagement with curiosity, strategic discipline, and a deep respect for aesthetic craftsmanship — 
              delivering creative work that resonates deeply and drives authentic business growth.
            </motion.p>

            {/* Core Values / Focus Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-brand-emerald/40">
              {['Strategic Precision', 'Bespoke Aesthetics', 'Measurable Growth'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-mono tracking-wider text-white">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Abstract Art-Directed Composition & Identity Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-b from-brand-forest/70 to-brand-dark border border-brand-neon/20 shadow-glass overflow-hidden">
              {/* Corner geometric lines */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-brand-neon/40 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-brand-neon/40 pointer-events-none" />

              {/* Watermark Monogram Background */}
              <div className="absolute -right-16 -bottom-16 opacity-10 pointer-events-none">
                <BrandMonogram size={280} variant="white" />
              </div>

              {/* Content Pillars Cards */}
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between pb-4 border-b border-brand-neon/15">
                  <span className="font-mono text-xs tracking-widest text-brand-bright uppercase">
                    // CORE FOUNDATIONS
                  </span>
                  <Sparkles className="w-4 h-4 text-brand-neon" />
                </div>

                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                      className="p-5 rounded-2xl bg-brand-forest/50 border border-brand-neon/15 hover:border-brand-neon/40 transition-colors group"
                    >
                      <div className="flex items-center gap-3.5 mb-2.5">
                        <div className="w-9 h-9 rounded-xl bg-brand-emerald/50 border border-brand-neon/30 flex items-center justify-center text-brand-bright group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-display font-bold text-base text-white tracking-wide">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-brand-muted leading-relaxed pl-12">
                        {pillar.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Monogram stamp */}
              <div className="mt-8 pt-6 border-t border-brand-neon/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BrandMonogram size={32} variant="neon" withGlow />
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs tracking-wider text-white">INSIGHT</span>
                    <span className="font-mono text-[9px] tracking-widest text-brand-muted">ORIGINAL MONOGRAM</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-brand-emerald/40 border border-brand-neon/30 text-[10px] font-mono text-brand-bright">
                  EST. IDENTITY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

