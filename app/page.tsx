"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Slide1Cover } from '@/components/Slide1Cover'
import { Slide2Problem } from '@/components/Slide2Problem'
import { Slide3Opportunity } from '@/components/Slide3Opportunity'
import { Slide4Solution } from '@/components/Slide4Solution'
import { Slide5HowItWorks } from '@/components/Slide5HowItWorks'
import { Slide6Technology } from '@/components/Slide6Technology'
import { Slide7Market } from '@/components/Slide7Market'
import { Slide8Business } from '@/components/Slide8Business'
import { Slide9Traction } from '@/components/Slide9Traction'
import { Slide10Vision } from '@/components/Slide10Vision'

const slides = [
  { component: Slide1Cover, title: 'Cover', theme: 'dark' },
  { component: Slide2Problem, title: 'Problem', theme: 'light' },
  { component: Slide3Opportunity, title: 'Opportunity', theme: 'dark' },
  { component: Slide4Solution, title: 'Solution', theme: 'light' },
  { component: Slide5HowItWorks, title: 'How It Works', theme: 'dark' },
  { component: Slide6Technology, title: 'Technology', theme: 'light' },
  { component: Slide7Market, title: 'Market', theme: 'dark' },
  { component: Slide8Business, title: 'Business Model', theme: 'light' },
  { component: Slide9Traction, title: 'Traction', theme: 'dark' },
  { component: Slide10Vision, title: 'Vision', theme: 'dark' },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  const CurrentSlideComponent = slides[currentSlide].component as any
  const isLightTheme = slides[currentSlide].theme === 'light'

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0E3E45]">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#F26B2D] z-50 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: (currentSlide + 1) / slides.length }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <motion.button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`w-14 h-14 rounded-full backdrop-blur-md border-2 flex items-center justify-center hover:bg-[#F26B2D] hover:border-[#F26B2D] transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed shadow-lg ${
            isLightTheme
              ? 'bg-[#0E3E45]/10 border-[#0E3E45]/30'
              : 'bg-[#F9F5EE]/10 border-[#F9F5EE]/30'
          }`}
          whileHover={currentSlide > 0 ? { scale: 1.1 } : {}}
          whileTap={currentSlide > 0 ? { scale: 0.95 } : {}}
        >
          <ChevronLeft className={`w-6 h-6 ${isLightTheme ? 'text-[#0E3E45]' : 'text-[#F9F5EE]'}`} />
        </motion.button>

        <div className={`flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md border-2 shadow-lg ${
          isLightTheme
            ? 'bg-[#0E3E45]/10 border-[#0E3E45]/30'
            : 'bg-[#F9F5EE]/10 border-[#F9F5EE]/30'
        }`}>
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 h-2.5 bg-[#F26B2D]'
                  : isLightTheme
                  ? 'w-2.5 h-2.5 bg-[#0E3E45]/30 hover:bg-[#0E3E45]/60'
                  : 'w-2.5 h-2.5 bg-[#F9F5EE]/30 hover:bg-[#F9F5EE]/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        <motion.button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`w-14 h-14 rounded-full backdrop-blur-md border-2 flex items-center justify-center hover:bg-[#F26B2D] hover:border-[#F26B2D] transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed shadow-lg ${
            isLightTheme
              ? 'bg-[#0E3E45]/10 border-[#0E3E45]/30'
              : 'bg-[#F9F5EE]/10 border-[#F9F5EE]/30'
          }`}
          whileHover={currentSlide < slides.length - 1 ? { scale: 1.1 } : {}}
          whileTap={currentSlide < slides.length - 1 ? { scale: 0.95 } : {}}
        >
          <ChevronRight className={`w-6 h-6 ${isLightTheme ? 'text-[#0E3E45]' : 'text-[#F9F5EE]'}`} />
        </motion.button>
      </div>

      <div className={`fixed top-8 right-8 z-50 px-6 py-3 rounded-full backdrop-blur-md border-2 shadow-lg ${
        isLightTheme
          ? 'bg-[#0E3E45]/10 border-[#0E3E45]/30'
          : 'bg-[#F9F5EE]/10 border-[#F9F5EE]/30'
      }`}>
        <p className={`font-medium ${isLightTheme ? 'text-[#0E3E45]' : 'text-[#F9F5EE]'}`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
          {currentSlide + 1} / {slides.length}
        </p>
      </div>

      <div className={`fixed top-8 left-8 z-50 px-6 py-3 rounded-full backdrop-blur-md border-2 shadow-lg ${
        isLightTheme
          ? 'bg-[#0E3E45]/10 border-[#0E3E45]/30'
          : 'bg-[#F9F5EE]/10 border-[#F9F5EE]/30'
      }`}>
        <AnimatePresence mode="wait">
          <motion.p
            key={currentSlide}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className={`font-medium ${isLightTheme ? 'text-[#0E3E45]' : 'text-[#F9F5EE]'}`}
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {slides[currentSlide].title}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className={`fixed bottom-8 right-8 z-50 px-4 py-2 rounded-full backdrop-blur-md border ${
        isLightTheme
          ? 'bg-[#0E3E45]/5 border-[#0E3E45]/20'
          : 'bg-[#F9F5EE]/5 border-[#F9F5EE]/20'
      }`}>
        <p className={`text-sm ${isLightTheme ? 'text-[#0E3E45]/60' : 'text-[#F9F5EE]/60'}`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Use ← → or Space to navigate
        </p>
      </div>
    </div>
  )
}
