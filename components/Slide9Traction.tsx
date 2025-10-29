"use client"
import { motion } from 'motion/react';
import { CheckCircle2, Zap, Target } from 'lucide-react';

export function Slide9Traction() {
  const milestones = [
    { 
      phase: 'MVP', 
      quarter: 'Q1 2025', 
      status: 'completed', 
      description: 'Core platform launched',
      Icon: CheckCircle2,
    },
    { 
      phase: 'SDK Beta', 
      quarter: 'Q2 2025', 
      status: 'current', 
      description: 'Developer partnerships',
      Icon: Zap,
    },
    { 
      phase: 'Growth', 
      quarter: 'Q3-Q4 2025', 
      status: 'upcoming', 
      description: 'Scale to 10k creators',
      Icon: Target,
    },
  ];

  return (
    <div className="relative w-full h-screen bg-[#0E3E45] flex items-center justify-center overflow-hidden px-16">
      <div className="max-w-6xl w-full">
        {/* Headline */}
        <motion.h2
          className="text-6xl text-[#F9F5EE] mb-20 text-center"
          style={{ fontFamily: 'Lora, serif' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Early traction and a{' '}
          <span className="text-[#F26B2D]">clear roadmap</span> forward.
        </motion.h2>

        {/* Orbit-style timeline */}
        <div className="relative h-80 mb-16">
          {/* Timeline line */}
          <svg className="absolute inset-0 w-full h-32 top-20" style={{ pointerEvents: 'none' }}>
            <motion.path
              d="M 100 64 Q 350 20, 600 64 T 1100 64"
              stroke="#F26B2D"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>

          {/* Milestones */}
          <div className="relative flex justify-between items-start pt-20 px-8">
            {milestones.map((milestone, index) => {
              const isCompleted = milestone.status === 'completed';
              const isCurrent = milestone.status === 'current';

              return (
                <motion.div
                  key={milestone.phase}
                  className="flex flex-col items-center"
                  style={{ flex: 1 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                >
                  {/* Node */}
                  <div className="relative mb-6">
                    <motion.div
                      className={`w-24 h-24 rounded-full border-4 flex items-center justify-center shadow-xl ${
                        isCompleted
                          ? 'bg-[#F26B2D] border-[#F26B2D]'
                          : isCurrent
                          ? 'bg-[#F9F5EE] border-[#F26B2D]'
                          : 'bg-[#0E3E45] border-[#F9F5EE]/30'
                      }`}
                      animate={
                        isCurrent
                          ? {
                              scale: [1, 1.1, 1],
                              boxShadow: [
                                '0 0 0 0 rgba(242, 107, 45, 0.7)',
                                '0 0 0 20px rgba(242, 107, 45, 0)',
                                '0 0 0 0 rgba(242, 107, 45, 0)',
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <milestone.Icon 
                        className={`w-10 h-10 ${
                          isCompleted || isCurrent ? 'text-[#F26B2D]' : 'text-[#F9F5EE]/40'
                        }`}
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3
                      className="text-2xl text-[#F9F5EE] mb-2"
                      style={{ fontFamily: 'Lora, serif' }}
                    >
                      {milestone.phase}
                    </h3>
                    <p
                      className="text-[#F26B2D] mb-2"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {milestone.quarter}
                    </p>
                    <p
                      className="text-[#F9F5EE]/70 text-sm"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Traction metrics */}
        <motion.div
          className="grid grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {[
            { label: 'Beta Creators', value: '150+' },
            { label: 'Platform Integrations', value: '5' },
            { label: 'Tokens Issued', value: '2.5M' },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              className="bg-[#F9F5EE]/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#F9F5EE]/20 hover:border-[#F26B2D]/50 text-center transition-all duration-300"
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <p className="text-5xl text-[#F26B2D] mb-3" style={{ fontFamily: 'Lora, serif' }}>
                {metric.value}
              </p>
              <p className="text-[#F9F5EE]/80" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
