"use client"
import { motion } from 'motion/react';

export function Slide10Vision() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#0E3E45] via-[#1A5A64] to-[#0E3E45] flex items-center justify-center overflow-hidden">
      {/* Expanding orbit lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[1, 2, 3, 4, 5].map((line, index) => (
          <motion.div
            key={line}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 3,
              delay: index * 0.3,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <svg width="800" height="800" viewBox="0 0 800 800">
              <circle
                cx="400"
                cy="400"
                r={200 + index * 80}
                stroke="#F26B2D"
                strokeWidth="2"
                fill="none"
                strokeDasharray="10,10"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Gradient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[600px] h-[600px] bg-[#F26B2D]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Logo */}
        <motion.div
          className="mb-12 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
            {/* Orbit rings */}
            <motion.circle
              cx="75"
              cy="75"
              r="50"
              stroke="#F26B2D"
              strokeWidth="2"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="75"
              cy="75"
              r="35"
              stroke="#F9F5EE"
              strokeWidth="2"
              fill="none"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <circle cx="75" cy="75" r="20" fill="#F26B2D" />
            
            {/* Orbiting dots */}
            <motion.circle
              cx="125"
              cy="75"
              r="6"
              fill="#F9F5EE"
              animate={{ rotate: 360 }}
              style={{ transformOrigin: '75px 75px' }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="25"
              cy="75"
              r="6"
              fill="#F9F5EE"
              animate={{ rotate: 360 }}
              style={{ transformOrigin: '75px 75px' }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="75"
              cy="25"
              r="6"
              fill="#F9F5EE"
              animate={{ rotate: 360 }}
              style={{ transformOrigin: '75px 75px' }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          className="text-7xl text-[#F9F5EE] mb-8 leading-tight"
          style={{ fontFamily: 'Lora, serif', textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          The interoperable layer
          <br />
          of the <span className="text-[#F26B2D]" style={{ textShadow: '0 2px 20px rgba(242,107,45,0.5)' }}>creative web.</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-2xl text-[#F9F5EE] mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: 'DM Sans, sans-serif', textShadow: '0 1px 10px rgba(0,0,0,0.3)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Empowering creators to move freely across the web.
        </motion.p>

        {/* Call to action */}
        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <motion.button 
            className="px-8 py-4 bg-[#F26B2D] text-[#F9F5EE] rounded-full hover:bg-[#F26B2D]/90 transition-all duration-300 shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            <span style={{ fontFamily: 'DM Sans, sans-serif' }}>Join the Movement</span>
          </motion.button>
          <motion.button 
            className="px-8 py-4 bg-transparent border-2 border-[#F9F5EE] text-[#F9F5EE] rounded-full hover:bg-[#F9F5EE]/10 transition-all duration-300"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            <span style={{ fontFamily: 'DM Sans, sans-serif' }}>Learn More</span>
          </motion.button>
        </motion.div>

        {/* Contact info */}
        <motion.p
          className="text-[#F9F5EE]/60 mt-12"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          hello@inorbyt.io
        </motion.p>
      </motion.div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F26B2D] to-transparent" />
    </div>
  );
}
