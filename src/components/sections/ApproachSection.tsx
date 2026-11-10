import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/agencyData';

export const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="relative py-28 md:py-36 px-6 md:px-12 bg-brand-dark/95 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full blur-[170px] bg-brand-emerald/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-brand-neon" />
              <span className="text-xs font-mono tracking-[0.25em] text-brand-neon uppercase">
                // 04. OUR METHODOLOGY
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-tight leading-tight">
              CREATIVITY WITH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-bright to-brand-neon">
                A PURPOSE.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm md:text-base text-brand-muted leading-relaxed">
              We eliminate creative guesswork with a rigorous, four-stage strategic trajectory that turns abstract brand aspirations into measurable market dominance.
            </p>
          </div>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative p-8 rounded-3xl bg-brand-forest/40 border border-brand-neon/15 hover:border-brand-neon/50 transition-all duration-400 group shadow-glass flex flex-col justify-between"
              >
                {/* Subtle Top Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-brand-neon/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Step Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-4xl font-extrabold text-brand-bright/30 group-hover:text-brand-bright transition-colors duration-300">
                      {step.number}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-brand-neon/30 flex items-center justify-center text-brand-neon text-xs font-mono group-hover:bg-brand-neon group-hover:text-black transition-all duration-300">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-2xl text-white tracking-tight uppercase mb-2 group-hover:text-brand-bright transition-colors">
                    {step.title}
                  </h3>
                  <h4 className="text-xs font-mono text-brand-neon/80 tracking-wider uppercase mb-4">
                    {step.subtitle}
                  </h4>

                  <p className="text-xs md:text-sm text-brand-muted leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Focus Deliverables */}
                <div className="pt-4 border-t border-brand-emerald/30 space-y-2">
                  {step.focusPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-[11px] font-mono text-brand-muted-light">
                      <CheckCircle2 className="w-3 h-3 text-brand-bright flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

