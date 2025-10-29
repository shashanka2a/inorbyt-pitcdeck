"use client"
import { motion } from 'motion/react';
import { CreatorIcon, FanIcon, FreelancerIcon } from './icons/CustomIcons';

export function Slide3Opportunity() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#0E3E45] via-[#1A5A64] to-[#0E3E45] flex items-center justify-center overflow-hidden px-16">
      <div className="max-w-6xl w-full text-center">
        {/* Headline */}
        <motion.h2
          className="text-5xl sm:text-6xl text-[#F9F5EE] mb-12 leading-tight"
          style={{ fontFamily: 'Lora, serif' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A connected layer for the{' '}
          <span className="text-[#F26B2D]">entire creator economy.</span>
        </motion.h2>

        {/* Venn diagram */}
        <div className="relative h-[450px] w-full flex items-center justify-center overflow-visible">
          {/* Circle 1 - Creators */}
          <motion.div
            className="absolute group"
            style={{ 
              left: 'calc(50% - 160px)', 
              top: '50px',
              width: '260px',
              height: '260px',
              zIndex: 10
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="w-full h-full rounded-full bg-[#F26B2D]/30 backdrop-blur-sm border-3 border-[#F26B2D] flex items-center justify-center shadow-2xl relative"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              style={{ zIndex: 40 }}
            >
              <div className="text-center px-4 relative z-50 pointer-events-none">
                <CreatorIcon className="w-16 h-16 text-[#F9F5EE] mx-auto mb-3" />
                <p className="text-[#F9F5EE] text-xl whitespace-nowrap" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Creators
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Circle 2 - Fans */}
          <motion.div
            className="absolute group"
            style={{ 
              right: 'calc(50% - 160px)', 
              top: '50px',
              width: '260px',
              height: '260px',
              zIndex: 10
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div 
              className="w-full h-full rounded-full bg-[#F9F5EE]/30 backdrop-blur-sm border-3 border-[#F9F5EE] flex items-center justify-center shadow-2xl relative"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              style={{ zIndex: 40 }}
            >
              <div className="text-center px-4 relative z-50 pointer-events-none">
                <FanIcon className="w-16 h-16 text-[#F9F5EE] mx-auto mb-3" />
                <p className="text-[#F9F5EE] text-xl whitespace-nowrap" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Fans
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Circle 3 - Freelancers */}
          <motion.div
            className="absolute group"
            style={{ 
              left: '50%', 
              transform: 'translateX(-50%)', 
              bottom: '30px',
              width: '260px',
              height: '260px',
              zIndex: 10
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.div 
              className="w-full h-full rounded-full bg-[#1A5A64]/50 backdrop-blur-sm border-3 border-[#1A5A64] flex items-center justify-center shadow-2xl relative"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              style={{ zIndex: 40 }}
            >
              <div className="text-center px-4 relative z-50 pointer-events-none">
                <FreelancerIcon className="w-16 h-16 text-[#F9F5EE] mx-auto mb-3" />
                <p className="text-[#F9F5EE] text-xl whitespace-nowrap" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Freelancers
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Center logo - InOrbyt */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ zIndex: 50 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ rotate: 180, transition: { duration: 0.6 } }}
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#F26B2D] to-[#0E3E45] flex items-center justify-center shadow-2xl border-4 border-[#F9F5EE]">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="16" stroke="#F9F5EE" strokeWidth="2.5" fill="none" />
                <circle cx="32" cy="32" r="6" fill="#F9F5EE" />
                <circle cx="48" cy="32" r="3" fill="#F9F5EE" />
                <circle cx="16" cy="32" r="3" fill="#F9F5EE" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
