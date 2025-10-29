"use client"
import { motion } from 'motion/react';
import { TransactionIcon, SDKIcon, PartnershipIcon } from './icons/CustomIcons';
import { TrendingUp } from 'lucide-react';

export function Slide8Business() {
  const models = [
    {
      Icon: TransactionIcon,
      title: 'Transaction Fees',
      description: 'Small fee on token transfers and reward redemptions',
      highlight: '2-3%',
      color: '#F26B2D',
    },
    {
      Icon: SDKIcon,
      title: 'SDK Licensing',
      description: 'Premium features and white-label solutions for platforms',
      highlight: 'SaaS Model',
      color: '#1A5A64',
    },
    {
      Icon: PartnershipIcon,
      title: 'Partnerships',
      description: 'Revenue share with creator platforms and marketplaces',
      highlight: 'Win-Win',
      color: '#0E3E45',
    },
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#F9F5EE] to-[#FDF8F1] flex items-center justify-center overflow-hidden px-16">
      <div className="max-w-6xl w-full">
        {/* Headline */}
        <motion.h2
          className="text-6xl text-[#0E3E45] mb-20 text-center"
          style={{ fontFamily: 'Lora, serif' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sustainable, scalable,{' '}
          <span className="text-[#F26B2D]">creator-aligned.</span>
        </motion.h2>

        {/* Business model tiles */}
        <div className="grid grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              className="group relative bg-white rounded-3xl p-8 shadow-lg border-2 border-[#0E3E45]/5 hover:border-[#F26B2D] transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F26B2D]/0 to-[#0E3E45]/0 group-hover:from-[#F26B2D]/5 group-hover:to-[#0E3E45]/5 transition-all duration-300 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon container */}
                <motion.div 
                  className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: model.color }}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                >
                  <model.Icon className="w-10 h-10 text-[#F9F5EE]" />
                </motion.div>

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F26B2D]/10 mb-4">
                  <TrendingUp className="w-4 h-4 text-[#F26B2D]" />
                  <span
                    className="text-[#F26B2D]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {model.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl text-[#0E3E45] mb-4" style={{ fontFamily: 'Lora, serif' }}>
                  {model.title}
                </h3>

                {/* Description */}
                <p className="text-[#0E3E45]/70 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {model.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#F26B2D]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0E3E45] border-2 border-[#F26B2D] shadow-xl">
            <TrendingUp className="w-5 h-5 text-[#F26B2D]" />
            <p className="text-[#F9F5EE]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Revenue scales with creator success — our incentives are aligned
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
