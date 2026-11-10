import React from 'react';
import { motion } from 'framer-motion';

interface BrandMonogramProps {
  className?: string;
  size?: number | string;
  variant?: 'white' | 'neon' | 'emerald';
  animated?: boolean;
  withGlow?: boolean;
}

export const BrandMonogram: React.FC<BrandMonogramProps> = ({
  className = '',
  size = 48,
  variant = 'white',
  animated = false,
  withGlow = false,
}) => {
  const imgSrc = variant === 'neon' ? '/insight_monogram_neon.png' : '/insight_monogram_white.png';

  const glowStyle = withGlow ? {
    filter: variant === 'neon' 
      ? 'drop-shadow(0 0 12px rgba(0, 230, 118, 0.75)) drop-shadow(0 0 24px rgba(6, 78, 59, 0.9))'
      : 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 20px rgba(0, 230, 118, 0.3))'
  } : {};

  if (animated) {
    return (
      <motion.div
        className={`relative inline-flex items-center justify-center select-none ${className}`}
        style={{ width: size, height: size }}
        initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.08, rotate: 2 }}
      >
        <img
          src={imgSrc}
          alt="Insight Company Monogram"
          className="w-full h-full object-contain filter transition-all duration-300"
          style={glowStyle}
        />
      </motion.div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={imgSrc}
        alt="Insight Company Monogram"
        className="w-full h-full object-contain transition-all duration-300"
        style={glowStyle}
      />
    </div>
  );
};

