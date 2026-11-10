import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, X, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/agencyData';
import { PortfolioItem } from '../../types';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Branding', 'Social Media', 'Visual Identity', 'Digital Campaigns', 'Web & Interactive'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-28 md:py-36 px-6 md:px-12 bg-brand-dark overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] rounded-full blur-[190px] bg-brand-emerald/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-brand-neon" />
              <span className="text-xs font-mono tracking-[0.25em] text-brand-neon uppercase">
                // 03. CURATED SHOWCASE
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-tight leading-tight">
              SELECTED WORK. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-bright to-brand-neon">
                POWERFUL IDEAS.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm md:text-base text-brand-muted leading-relaxed">
              A curated selection of creative concepts, identity systems, and visual narratives designed to captivate audience imagination.
            </p>
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-forest/60 border border-brand-neon/20 text-[11px] font-mono text-brand-neon">
              <Sparkles className="w-3 h-3 text-brand-bright" />
              <span>Agency Creative Showcase Concepts</span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 flex-shrink-0 cursor-pointer ${
                  isSelected
                    ? 'text-black font-bold bg-brand-bright shadow-neon'
                    : 'text-brand-muted bg-brand-forest/40 hover:text-white hover:bg-brand-emerald/30 border border-brand-neon/15'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Editorial Asymmetric Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch"
        >
          {filteredProjects.map((project, idx) => {
            // Asymmetric layout logic for high-end editorial feel
            const colSpan = idx % 3 === 0 
              ? 'lg:col-span-8' 
              : (idx % 3 === 1 ? 'lg:col-span-4' : 'lg:col-span-6');

            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`${colSpan} group cursor-pointer flex flex-col`}
                onClick={() => setActiveModalProject(project)}
                data-cursor="VIEW"
              >
                <div className="relative overflow-hidden rounded-3xl bg-brand-forest/50 border border-brand-neon/20 group-hover:border-brand-neon/60 transition-all duration-500 shadow-glass flex-1 flex flex-col">
                  {/* Image Container with Zoom & Reveal */}
                  <div className="relative w-full h-72 sm:h-96 lg:h-[420px] overflow-hidden bg-brand-dark">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                    />

                    {/* Gradient overlay for text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                    {/* Top Badges */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-widest bg-brand-dark/80 backdrop-blur-md text-brand-bright border border-brand-neon/30 uppercase">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-brand-muted bg-brand-dark/60 backdrop-blur-md">
                        {project.year}
                      </span>
                    </div>

                    {/* Floating Hover Action Circle */}
                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-brand-bright text-black flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-neon z-20">
                      <ArrowUpRight className="w-5 h-5 font-bold" />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-1 bg-gradient-to-b from-brand-forest/60 to-brand-dark/80">
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-xs font-mono text-brand-neon/80">
                        <span>{project.client}</span>
                      </div>
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-white group-hover:text-brand-bright transition-colors uppercase tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs md:text-sm text-brand-muted mt-2 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-brand-neon/15">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono tracking-wider uppercase text-brand-muted/80 bg-brand-dark/60 px-2.5 py-1 rounded border border-brand-neon/10"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
              onClick={() => setActiveModalProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-brand-dark border border-brand-neon/40 shadow-neon-lg p-6 sm:p-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-brand-forest/80 text-brand-bright hover:bg-brand-emerald hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="overflow-hidden rounded-2xl mb-6 max-h-80 w-full">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-brand-emerald/40 text-brand-bright border border-brand-neon/30">
                    {activeModalProject.category}
                  </span>
                  <span className="text-xs font-mono text-brand-muted">{activeModalProject.year}</span>
                </div>

                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase mb-4">
                  {activeModalProject.title}
                </h3>

                <p className="text-sm sm:text-base text-brand-muted-light leading-relaxed mb-6">
                  {activeModalProject.description}
                </p>

                <div className="p-4 rounded-xl bg-brand-forest/40 border border-brand-neon/20 mb-6">
                  <span className="text-xs font-mono text-brand-neon block mb-1 uppercase tracking-wider">
                    // Creative Concept Disclosure
                  </span>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    This case study represents an editorial creative benchmark demonstrating Insight Company's art direction, typography systems, and digital storytelling standards.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {activeModalProject.tags.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono text-brand-bright bg-brand-emerald/30 px-3 py-1 rounded-md border border-brand-neon/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="#contact"
                    onClick={() => setActiveModalProject(null)}
                    className="flex-1 py-3.5 rounded-full text-center font-bold text-xs tracking-widest uppercase bg-brand-bright text-black shadow-neon transition-transform active:scale-95"
                  >
                    DISCUSS A SIMILAR PROJECT
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

