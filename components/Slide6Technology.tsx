"use client"
import { motion } from 'motion/react';

export function Slide6Technology() {
  const layers = [
    { name: 'Users', color: '#F26B2D', width: '80%' },
    { name: 'InOrbyt Layer', color: '#F26B2D', width: '65%' },
    { name: 'Base', color: '#0052FF', width: '50%' },
    { name: 'Ethereum', color: '#627EEA', width: '35%' },
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-[#F9F5EE] to-[#FDF8F1] flex items-center justify-center overflow-hidden px-8 sm:px-16">
      <div className="max-w-5xl w-full">
        {/* Headline */}
        <motion.h2
          className="text-5xl sm:text-6xl text-[#0E3E45] mb-6 text-center leading-tight px-4"
          style={{ fontFamily: 'Lora, serif' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Built for interoperability -
        </motion.h2>
        <motion.p
          className="text-2xl sm:text-3xl text-[#F26B2D] mb-20 text-center px-4"
          style={{ fontFamily: 'Lora, serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          powered by Base.
        </motion.p>

        {/* Architecture diagram */}
        <div className="space-y-10">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
            >
              <motion.div
                className="relative rounded-full h-28 flex items-center justify-center shadow-2xl border-4 border-white/50"
                style={{
                  width: layer.width,
                  backgroundColor: layer.name === 'InOrbyt Layer' ? '#0E3E45' : layer.color,
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <span
                  className="text-2xl text-white font-medium relative z-10"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {layer.name}
                </span>

                {/* Glow effect for InOrbyt */}
                {layer.name === 'InOrbyt Layer' && (
                  <div className="absolute inset-0 rounded-full bg-[#F26B2D]/20 blur-xl pointer-events-none" />
                )}
              </motion.div>

              {/* Connecting arrow */}
              {index < layers.length - 1 && (
                <motion.svg
                  width="40"
                  height="50"
                  viewBox="0 0 40 50"
                  className="my-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                >
                  <motion.path
                    d="M20 5 L20 45 M15 40 L20 45 L25 40"
                    stroke="#0E3E45"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{
                      strokeDashoffset: [0, 100],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    strokeDasharray="10 5"
                  />
                </motion.svg>
              )}
            </motion.div>
          ))}
        </div>

        {/* Base logo credit */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" fill="#0052FF" />
            <path
              d="M20 8 C13.4 8 8 13.4 8 20 C8 26.6 13.4 32 20 32 C25.2 32 29.6 28.8 31.2 24.4 L26.8 24.4 C25.6 26.4 23 27.6 20 27.6 C16.2 27.6 13.2 24.6 13.2 20.8 L32 20.8 C32 20.4 32 20 32 20 C32 13.4 26.6 8 20 8 Z M13.2 18.4 C13.6 15.2 16.4 12.8 20 12.8 C23.6 12.8 26.4 15.2 26.8 18.4 L13.2 18.4 Z"
              fill="white"
            />
          </svg>
          <p className="text-[#0E3E45]/60" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Powered by Base
          </p>
        </motion.div>
      </div>
    </div>
  );
}
