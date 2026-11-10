import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, Sparkles, ChevronRight, Eye, ShieldCheck, Instagram } from 'lucide-react';
import { BrandMonogram } from '../common/BrandMonogram';
import { AGENCY_INFO } from '../../data/agencyData';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll transforms for parallax depth
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.05]);
  const heroScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.94]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // 3D Card Interactive Tilt Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { damping: 20, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100vh] w-full flex items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-brand-dark"
    >
      {/* Dynamic Background Vignette & Radial Glow */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-vignette" />

        {/* Hero-specific Neon Radial Light Source */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] md:w-[950px] h-[550px] md:h-[950px] rounded-full blur-[160px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0, 230, 118, 0.28) 0%, rgba(6, 78, 59, 0.3) 40%, transparent 75%)',
          }}
        />
      </motion.div>

      {/* Floating Geometric Elements framing the space */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Angular Laser Beams */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="20%" x2="100%" y2="80%" stroke="rgba(0, 230, 118, 0.35)" strokeWidth="1" strokeDasharray="6 12" />
          <line x1="100%" y1="10%" x2="0" y2="90%" stroke="rgba(57, 255, 136, 0.25)" strokeWidth="1" />
        </svg>

        {/* Ambient Orbit Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] rounded-full border border-brand-neon/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full border border-dashed border-brand-bright/15 pointer-events-none animate-spin-very-slow" />
      </div>

      {/* Main Hero Container */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        {/* Left Column: Typography & CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Brand Tag Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-brand-forest/70 border border-brand-neon/30 shadow-glass mb-8 backdrop-blur-md group hover:border-brand-neon transition-colors"
          >
            <BrandMonogram size={22} variant="neon" withGlow />
            <div className="h-3.5 w-[1px] bg-brand-neon/40" />
            <span className="text-[11px] md:text-xs font-mono font-medium tracking-[0.25em] text-brand-bright uppercase flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-brand-neon animate-pulse" />
              MARKETING & CREATIVE AGENCY
            </span>
          </motion.div>

          {/* Headline Reveal: READY TO GROW? */}
          <div className="overflow-hidden mb-5">
            <motion.h1
              initial={{ y: "105%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white uppercase leading-[0.9] select-none"
            >
              READY TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-bright via-brand-neon to-white text-glow-neon">
                GROW?
              </span>
            </motion.h1>
          </div>

          {/* Supporting Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
            className="font-display font-semibold text-lg sm:text-2xl text-brand-muted-light tracking-wide uppercase leading-tight mb-5"
          >
            {AGENCY_INFO.supportingHeadline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-brand-muted max-w-xl font-normal leading-relaxed mb-10"
          >
            {AGENCY_INFO.description}
          </motion.p>

          {/* Interactive CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection('contact')}
              data-cursor="GO"
              className="w-full sm:w-auto px-9 py-4 rounded-full font-display font-bold text-xs md:text-sm tracking-widest uppercase bg-brand-bright text-black shadow-neon hover:shadow-neon-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>LET'S WORK TOGETHER</span>
              <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('portfolio')}
              data-cursor="WORK"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-semibold text-xs md:text-sm tracking-widest uppercase text-white border border-brand-neon/30 bg-brand-forest/50 hover:bg-brand-emerald/40 hover:border-brand-neon hover:text-brand-bright transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>EXPLORE OUR WORK</span>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-neon group-hover:scale-150 transition-transform" />
            </button>
          </motion.div>

          {/* Scroll cue on desktop */}
          <div
            onClick={() => scrollToSection('about')}
            className="mt-12 hidden lg:flex items-center gap-3 text-brand-muted/70 hover:text-brand-bright transition-colors cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full border border-brand-neon/30 flex items-center justify-center bg-brand-forest/40">
              <ArrowDown className="w-3.5 h-3.5 text-brand-neon animate-bounce" />
            </div>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase">SCROLL TO DISCOVER</span>
          </div>
        </div>

        {/* Right Column: 3D Perspective Artwork Showcase Card (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center perspective-1000"
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full max-w-md p-4 sm:p-5 rounded-3xl bg-gradient-to-b from-brand-forest/90 via-brand-forest/40 to-brand-dark border-2 border-brand-neon/40 shadow-neon-lg backdrop-blur-xl group"
          >
            {/* Corner geometric lines */}
            <div className="absolute -top-1 -right-1 w-10 h-10 border-t-2 border-r-2 border-brand-bright rounded-tr-xl pointer-events-none" />
            <div className="absolute -bottom-1 -left-1 w-10 h-10 border-b-2 border-l-2 border-brand-bright rounded-bl-xl pointer-events-none" />

            {/* Campaign Artwork Image Frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-dark border border-brand-neon/20">
              <img
                src="/insight_hero_post.jpg"
                alt="Insight Company — Ready to Grow Campaign"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Ambient neon gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Badge inside artwork */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-brand-dark/85 backdrop-blur-md border border-brand-neon/30">
                <div className="flex items-center gap-2.5">
                  <BrandMonogram size={26} variant="white" withGlow />
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-white uppercase tracking-wider">
                      INSIGHT COMPANY
                    </span>
                    <span className="font-mono text-[9px] text-brand-bright tracking-widest uppercase">
                      OFFICIAL VISUAL IDENTITY
                    </span>
                  </div>
                </div>

                <a
                  href={AGENCY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-brand-forest text-brand-neon hover:bg-brand-bright hover:text-black transition-colors"
                  aria-label="View on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Floating verification badge attached to card corner */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-3 sm:-right-5 px-4 py-2.5 rounded-2xl bg-brand-dark/95 border border-brand-neon/60 shadow-neon flex items-center gap-2.5 backdrop-blur-md"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-brand-bright animate-ping" />
              <div className="flex flex-col">
                <span className="text-[11px] font-display font-bold text-white uppercase tracking-wider">
                  PREMIUM QUALITY
                </span>
                <span className="text-[9px] font-mono text-brand-neon">
                  AESTHETIC BENCHMARK
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
