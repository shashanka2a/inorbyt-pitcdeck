"use client"
import { motion } from 'motion/react';
import { OrbitLogo } from './icons/CustomIcons';

export function Slide1Cover() {
  return (
    <div className="relative w-full h-screen bg-[#0E3E45] flex items-center justify-center overflow-hidden">
      {/* Animated orbit rings */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {[1, 2, 3].map((ring, index) => (
          <motion.div
            key={ring}
            className="absolute rounded-full border-2 border-[#F26B2D]/20"
            style={{
              width: `${300 + index * 150}px`,
              height: `${300 + index * 150}px`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: {
                duration: 20 + index * 10,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </motion.div>

      {/* Glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="w-96 h-96 bg-[#F26B2D]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Logo */}
        <motion.div
          className="mb-12 flex items-center justify-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <OrbitLogo className="w-32 h-32" />
        </motion.div>

        <h1 className="text-8xl mb-6 text-[#F9F5EE]" style={{ fontFamily: 'Lora, serif' }}>
          InOrbyt
        </h1>
        
        <p className="text-3xl mb-6 text-[#F9F5EE]" style={{ fontFamily: 'Lora, serif' }}>
          Creator-Owned. Fan-Powered. Interoperable.
        </p>
        
        <p className="text-xl text-[#F9F5EE]/80 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Building the interoperable reward layer for the creator economy - powered by Base.
        </p>
      </motion.div>

      {/* Bottom accent line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F26B2D] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </div>
  );
}
