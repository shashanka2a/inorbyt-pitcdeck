"use client"
import { motion } from 'motion/react';
import { CreatorIcon, FanIcon, FreelancerIcon, RewardIcon } from './icons/CustomIcons';
import { Award, Shuffle, Link } from 'lucide-react';

export function Slide4Solution() {
  const keyPoints = [
    { Icon: Award, label: 'Portable rewards' },
    { Icon: Link, label: 'Unified identity' },
    { Icon: Shuffle, label: 'Cross-platform value' },
  ];

  return (
    <div className="relative w-full h-screen bg-[#F9F5EE] flex items-center justify-center overflow-hidden px-16">
      <div className="max-w-6xl w-full">
        {/* Headline */}
        <motion.h2
          className="text-6xl text-[#0E3E45] mb-16 text-center leading-tight"
          style={{ fontFamily: 'Lora, serif' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Creator economies that{' '}
          <span className="text-[#F26B2D]">travel with you</span>
          <br />
          across the web.
        </motion.h2>

        {/* Orbit animation */}
        <div className="relative h-96 flex items-center justify-center">
          {/* Center */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="w-28 h-28 rounded-full bg-[#0E3E45] flex items-center justify-center shadow-xl"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <CreatorIcon className="w-12 h-12 text-[#F9F5EE]" />
            </motion.div>
            <p className="text-center mt-3 text-[#0E3E45]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Creator
            </p>
          </motion.div>

          {/* Orbiting elements */}
          {[
            { Component: FanIcon, label: 'Fans', angle: 0, delay: 0.5, color: '#F26B2D' },
            { Component: FreelancerIcon, label: 'Freelancers', angle: 120, delay: 0.7, color: '#1A5A64' },
            { Component: RewardIcon, label: 'Rewards', angle: 240, delay: 0.9, color: '#F26B2D' },
          ].map((item, index) => {
            const radius = 180;
            const angleRad = (item.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <motion.div
                key={item.label}
                className="absolute left-1/2 top-1/2"
                style={{
                  x: x - 44,
                  y: y - 44,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <motion.div
                  className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl"
                  style={{ backgroundColor: item.color }}
                  whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  }}
                >
                  <item.Component className="w-10 h-10 text-[#F9F5EE]" />
                </motion.div>
                <p className="text-center mt-3 text-[#0E3E45]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {item.label}
                </p>
              </motion.div>
            );
          })}

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
            {[0, 120, 240].map((angle, index) => {
              const radius = 180;
              const angleRad = (angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <motion.line
                  key={angle}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${x}px)`}
                  y2={`calc(50% + ${y}px)`}
                  stroke="#F26B2D"
                  strokeWidth="2.5"
                  strokeDasharray="8,6"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                />
              );
            })}
          </svg>

          {/* Orbit ring */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div
              className="rounded-full border-2 border-dashed border-[#0E3E45]/15"
              style={{ width: '400px', height: '400px' }}
            />
          </motion.div>
        </div>

        {/* Key points */}
        <motion.div
          className="flex justify-center gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {keyPoints.map((point, index) => (
            <motion.div
              key={point.label}
              className="group px-6 py-3 rounded-full bg-white border-2 border-[#0E3E45]/10 hover:border-[#F26B2D] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              whileHover={{ y: -2 }}
            >
              <point.Icon className="w-5 h-5 text-[#F26B2D]" />
              <p className="text-[#0E3E45]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {point.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
