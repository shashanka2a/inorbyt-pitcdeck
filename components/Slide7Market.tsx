"use client"
import { motion } from 'motion/react';

export function Slide7Market() {
  const markets = [
    { name: 'Creator Economy', value: '$250B', color: '#F26B2D', radius: 160 },
    { name: 'Freelance Market', value: '$1.5T', color: '#0E3E45', radius: 120 },
    { name: 'Web3 Adoption', value: '$450B', color: '#1A5A64', radius: 80 },
  ];

  return (
    <div className="relative w-full h-screen bg-[#0E3E45] flex items-center justify-center overflow-hidden px-16">
      <div className="max-w-6xl w-full">
        {/* Headline */}
        <motion.h2
          className="text-4xl sm:text-5xl text-[#F9F5EE] mb-8 text-center leading-tight"
          style={{ fontFamily: 'Lora, serif' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The intersection of{' '}
          <span className="text-[#F26B2D]">three massive markets.</span>
        </motion.h2>

        {/* Radial chart */}
        <div className="relative h-[420px] flex items-center justify-center overflow-visible mb-6">
          {/* Center point */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F26B2D] z-20" />

          {/* Orbit rings */}
          {markets.map((market, index) => {
            // Place labels evenly around each circle's circumference
            const angleDeg = (360 / markets.length) * index - 90; // start at top
            const angleRad = (angleDeg * Math.PI) / 180;
            const radialOffset = market.radius + 48 + index * 8; // push slightly outside ring
            const x = Math.cos(angleRad) * radialOffset;
            const y = Math.sin(angleRad) * radialOffset;
            return (
              <motion.div
                key={market.name}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              >
                {/* Ring */}
                <motion.div
                  className="rounded-full border-4"
                  style={{
                    width: `${market.radius * 2}px`,
                    height: `${market.radius * 2}px`,
                    borderColor: market.color,
                    opacity: 0.5,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30 + index * 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Market label - evenly distributed on circumference */}
                <motion.div
                  className="absolute rounded-2xl px-6 py-4 shadow-xl z-30"
                  style={{
                    backgroundColor: market.color,
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: 'translate(-50%, -50%)',
                    minWidth: '220px',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                >
                  <p className="text-sm text-[#F9F5EE]/90 mb-2 text-center whitespace-nowrap" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {market.name}
                  </p>
                  <p className="text-4xl text-[#F9F5EE] text-center whitespace-nowrap font-semibold" style={{ fontFamily: 'Lora, serif' }}>
                    {market.value}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Glow effects */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 bg-[#F26B2D]/10 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { label: 'Active Creators', value: '300M+' },
            { label: 'Global Freelancers', value: '1.2B' },
            { label: 'Web3 Users', value: '500M+' },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="text-center bg-[#F9F5EE]/5 backdrop-blur-sm rounded-3xl p-8 border border-[#F9F5EE]/10 hover:border-[#F26B2D]/50 transition-all duration-300"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
            >
              <p className="text-5xl sm:text-6xl text-[#F26B2D] mb-4 font-semibold" style={{ fontFamily: 'Lora, serif' }}>
                {stat.value}
              </p>
              <p className="text-lg text-[#F9F5EE]/90" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
