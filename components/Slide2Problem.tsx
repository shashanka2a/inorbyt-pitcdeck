"use client"
import { motion } from 'motion/react';
import { Link2Off } from 'lucide-react';

export function Slide2Problem() {
  const platforms = [
    { name: 'Patreon', color: '#F96854', initial: 'P' },
    { name: 'YouTube', color: '#FF0000', initial: 'Y' },
    { name: 'Fiverr', color: '#1DBF73', initial: 'F' },
  ];

  return (
    <div className="relative w-full h-screen bg-[#F9F5EE] flex items-center justify-center overflow-hidden px-16">
      <div className="max-w-7xl w-full grid grid-cols-2 gap-20 items-center">
        {/* Left side - Headline */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl text-[#0E3E45] mb-6 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
            Creativity is thriving - but the economy around it is{' '}
            <span className="text-[#F26B2D]">fragmented.</span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 space-y-3"
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#F26B2D] mt-2" />
              <p className="text-[#0E3E45]/70 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                No portability between platforms
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#F26B2D] mt-2" />
              <p className="text-[#0E3E45]/70 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Fans locked into silos
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#F26B2D] mt-2" />
              <p className="text-[#0E3E45]/70 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Creators start from zero each time
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Platform visualization */}
        <motion.div
          className="relative h-[500px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="absolute bg-white rounded-3xl p-8 shadow-xl border-2 border-[#0E3E45]/5 hover:border-[#F26B2D]/30 transition-all duration-300"
              style={{
                width: '220px',
                top: `${index * 100}px`,
                left: `${index * 70}px`,
                zIndex: platforms.length - index,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div
                className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center shadow-lg"
                style={{ backgroundColor: platform.color }}
              >
                <span className="text-white text-2xl" style={{ fontFamily: 'Lora, serif' }}>
                  {platform.initial}
                </span>
              </div>
              <p className="text-[#0E3E45] text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {platform.name}
              </p>
              <p className="text-[#0E3E45]/50 text-sm mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Isolated ecosystem
              </p>
            </motion.div>
          ))}
          
          {/* Disconnection indicator */}
          <motion.div
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-[#F26B2D]/10 rounded-full p-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Link2Off className="w-12 h-12 text-[#F26B2D]" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
