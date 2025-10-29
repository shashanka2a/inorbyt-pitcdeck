"use client"
import { motion } from 'motion/react';
import { WalletIcon, TokenIcon, RewardIcon, SDKIcon } from './icons/CustomIcons';

export function Slide5HowItWorks() {
  const components = [
    {
      Icon: WalletIcon,
      title: 'Wallet',
      description: 'Self-custodial identity',
      color: '#F26B2D',
    },
    {
      Icon: TokenIcon,
      title: 'Tokens',
      description: 'Creator-specific rewards',
      color: '#1A5A64',
    },
    {
      Icon: RewardIcon,
      title: 'Rewards',
      description: 'Unlock exclusive perks',
      color: '#F26B2D',
    },
    {
      Icon: SDKIcon,
      title: 'SDK',
      description: 'Easy integration',
      color: '#0E3E45',
    },
  ];

  return (
    <div className="relative w-full h-screen bg-[#0E3E45] flex items-center justify-center overflow-hidden px-16">
      <div className="max-w-6xl w-full">
        {/* Headline */}
        <motion.h2
          className="text-6xl text-[#F9F5EE] mb-4 text-center"
          style={{ fontFamily: 'Lora, serif' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          One wallet. One token economy.
        </motion.h2>
        <motion.p
          className="text-3xl text-[#F26B2D] mb-16 text-center"
          style={{ fontFamily: 'Lora, serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Infinite connections.
        </motion.p>

        {/* Bento grid */}
        <div className="grid grid-cols-4 gap-6">
          {components.map((component, index) => (
            <motion.div
              key={component.title}
              className="group relative bg-[#F9F5EE]/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#F9F5EE]/20 hover:border-[#F26B2D] transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Icon container */}
              <motion.div 
                className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                style={{ backgroundColor: component.color }}
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <component.Icon className="w-8 h-8 text-[#F9F5EE]" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl text-[#F9F5EE] mb-3" style={{ fontFamily: 'Lora, serif' }}>
                {component.title}
              </h3>

              {/* Description */}
              <p className="text-[#F9F5EE]/80" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {component.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-[#F26B2D]/0 group-hover:bg-[#F26B2D]/5 transition-all duration-300 pointer-events-none" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#F26B2D]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Connection flow */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <svg width="600" height="60" viewBox="0 0 600 60">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F9F5EE" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#F26B2D" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F9F5EE" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 10 30 Q 150 10, 300 30 T 590 30"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
            />
            {[10, 200, 400, 590].map((x, i) => (
              <motion.circle
                key={x}
                cx={x}
                cy="30"
                r="6"
                fill="#F26B2D"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + i * 0.2 }}
              />
            ))}
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
