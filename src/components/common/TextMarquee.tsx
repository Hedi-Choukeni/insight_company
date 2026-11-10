import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface TextMarqueeProps {
  items?: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export const TextMarquee: React.FC<TextMarqueeProps> = ({
  items = [
    'BRAND IDENTITY',
    'DIGITAL STRATEGY',
    'CINEMATIC MOTION',
    'SOCIAL ARCHITECTURE',
    'VISUAL STORYTELLING',
    'GRAPHIC DESIGN',
    'WEBSITE DEVELOPMENT',
    'READY TO GROW',
  ],
  direction = 'left',
  speed = 28,
  className = '',
}) => {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden py-6 border-y border-brand-emerald/40 bg-brand-forest/20 backdrop-blur-md select-none ${className}`}>
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 group">
            <span className="font-display font-extrabold text-lg sm:text-2xl md:text-3xl text-white/40 tracking-[0.2em] uppercase group-hover:text-brand-bright transition-colors duration-300">
              {item}
            </span>
            <Sparkles className="w-4 h-4 text-brand-neon/40 group-hover:text-brand-neon group-hover:scale-125 transition-all duration-300" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

