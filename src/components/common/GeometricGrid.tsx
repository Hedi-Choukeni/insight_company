import React from 'react';
import { motion } from 'framer-motion';

export const GeometricGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Angular Lines inspired by the Instagram post */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="neonGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E676" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#064E3B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#022C22" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="neonGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#39FF88" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#064E3B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#031812" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Angular diagonal perspectives */}
        <motion.line
          x1="-10%"
          y1="25%"
          x2="110%"
          y2="75%"
          stroke="url(#neonGradient1)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
        <motion.line
          x1="110%"
          y1="15%"
          x2="-10%"
          y2="85%"
          stroke="url(#neonGradient2)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.6, delay: 0.4, ease: "easeInOut" }}
        />

        {/* Fine geometric accents */}
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="rgba(0, 230, 118, 0.05)" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="rgba(0, 230, 118, 0.05)" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="0" y1="35%" x2="100%" y2="35%" stroke="rgba(0, 230, 118, 0.04)" strokeWidth="1" />
        <line x1="0" y1="70%" x2="100%" y2="70%" stroke="rgba(0, 230, 118, 0.04)" strokeWidth="1" />
      </svg>

      {/* Subtle Atmospheric Light Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none opacity-40 bg-brand-emerald"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.45, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 left-1/3 w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none opacity-20 bg-brand-neon"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom ambient emerald glow */}
      <div className="absolute -bottom-40 right-10 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-25 bg-brand-forest" />
    </div>
  );
};

