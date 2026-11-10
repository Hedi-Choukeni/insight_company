import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Pause, Volume2, VolumeX, Maximize2, X, Sparkles, 
  ArrowUpRight, Film, CheckCircle2 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/agencyData';
import { PortfolioItem } from '../../types';

interface VideoCardProps {
  project: PortfolioItem;
  index: number;
  onOpenModal: (project: PortfolioItem) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ project, index, onOpenModal }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative flex flex-col rounded-3xl overflow-hidden bg-brand-forest/40 border border-brand-neon/25 hover:border-brand-neon transition-all duration-500 shadow-glass"
    >
      {/* Video Container */}
      <div 
        className="relative w-full aspect-[9/16] sm:aspect-[4/5] md:aspect-[9/16] max-h-[580px] bg-black overflow-hidden cursor-pointer"
        onClick={() => onOpenModal(project)}
      >
        <video
          ref={videoRef}
          src={project.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />

        {/* Ambient Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest bg-brand-dark/80 backdrop-blur-md text-brand-bright border border-brand-neon/40 uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-bright animate-ping" />
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-brand-muted bg-brand-dark/70 backdrop-blur-md">
            {project.year}
          </span>
        </div>

        {/* Interactive Floating Video Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="p-2.5 rounded-full bg-brand-dark/80 hover:bg-brand-emerald text-white border border-brand-neon/30 transition-all duration-300 backdrop-blur-md hover:scale-110"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-brand-bright" /> : <Play className="w-4 h-4 text-brand-bright fill-brand-bright" />}
            </button>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleSound}
              className="p-2.5 rounded-full bg-brand-dark/80 hover:bg-brand-emerald text-white border border-brand-neon/30 transition-all duration-300 backdrop-blur-md hover:scale-110"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-brand-muted" /> : <Volume2 className="w-4 h-4 text-brand-bright" />}
            </button>
          </div>

          {/* Expand Theater Modal Button */}
          <button
            onClick={() => onOpenModal(project)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-bright text-black font-mono text-xs font-bold shadow-neon hover:scale-105 transition-transform"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">THEATER</span>
          </button>
        </div>
      </div>

      {/* Card Info Details */}
      <div className="p-6 flex flex-col justify-between flex-1 bg-gradient-to-b from-brand-forest/60 to-brand-dark border-t border-brand-neon/15">
        <div>
          <span className="text-[11px] font-mono text-brand-neon uppercase tracking-wider block mb-1">
            // {project.client}
          </span>
          <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-brand-bright transition-colors uppercase tracking-tight mb-2">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-brand-muted leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-brand-neon/10">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono tracking-wider uppercase text-brand-bright bg-brand-emerald/40 px-2.5 py-1 rounded border border-brand-neon/20"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const PortfolioSection: React.FC = () => {
  const [modalProject, setModalProject] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="relative py-28 md:py-36 px-6 md:px-12 bg-brand-dark overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full blur-[200px] bg-brand-emerald/25 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-brand-neon" />
              <span className="text-xs font-mono tracking-[0.25em] text-brand-neon uppercase">
                // 03. SELECTED WORK & PRODUCTIONS
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
              Explore our real motion campaigns, cinematic reels, and visual productions crafted for ambitious brands.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-forest/80 border border-brand-neon/30 text-[11px] font-mono text-brand-bright shadow-neon">
              <Film className="w-3.5 h-3.5 text-brand-bright" />
              <span>Official Video Reel Showcase</span>
            </div>
          </div>
        </div>

        {/* 3-Column Video Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.map((project, idx) => (
            <VideoCard
              key={project.id}
              project={project}
              index={idx}
              onOpenModal={(p) => setModalProject(p)}
            />
          ))}
        </div>

        {/* Theater Video Modal */}
        <AnimatePresence>
          {modalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl"
              onClick={() => setModalProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-3xl bg-brand-dark border-2 border-brand-neon/50 shadow-neon-lg p-6 sm:p-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setModalProject(null)}
                  className="absolute top-6 right-6 p-2.5 rounded-full bg-brand-forest/90 text-brand-bright hover:bg-brand-emerald hover:text-white transition-colors z-20"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Theater Video Player */}
                <div className="overflow-hidden rounded-2xl mb-6 bg-black flex items-center justify-center max-h-[65vh]">
                  <video
                    src={modalProject.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full max-h-[65vh] object-contain rounded-2xl"
                  />
                </div>

                {/* Project Metadata */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-brand-emerald/50 text-brand-bright border border-brand-neon/30">
                    {modalProject.category}
                  </span>
                  <span className="text-xs font-mono text-brand-muted">{modalProject.year}</span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase mb-3">
                  {modalProject.title}
                </h3>

                <p className="text-sm sm:text-base text-brand-muted-light leading-relaxed mb-6">
                  {modalProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {modalProject.tags.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono text-brand-bright bg-brand-emerald/30 px-3 py-1 rounded-md border border-brand-neon/20">
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="#contact"
                    onClick={() => setModalProject(null)}
                    className="flex-1 py-4 rounded-full text-center font-display font-bold text-xs md:text-sm tracking-widest uppercase bg-brand-bright text-black shadow-neon transition-transform active:scale-95 cursor-pointer"
                  >
                    DISCUSS A VIDEO PRODUCTION PROJECT
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
