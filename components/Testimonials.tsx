'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    company: 'Brands That Carry My Soul',
    role: 'Strategic Partnership',
    quote: 'Working with Alkesh transformed how we approach brand strategy. The insights were invaluable.',
    author: 'CEO',
    image: '🚀',
  },
  {
    id: 2,
    company: 'Skillinist',
    role: 'Best Rude Websites',
    quote: 'The digital infrastructure built here set us up for scale. Excellence in every detail.',
    author: 'Founder',
    image: '⚡',
  },
  {
    id: 3,
    company: 'Animed',
    role: 'Creative Vision',
    quote: 'Reimagining brand identity with purpose. This is where strategy meets soul.',
    author: 'Design Lead',
    image: '✨',
  },
  {
    id: 4,
    company: 'Sougham',
    role: 'Growth Partnership',
    quote: 'Numbers matter, but purpose matters more. That&apos;s the philosophy here.',
    author: 'Head of Growth',
    image: '📈',
  },
  {
    id: 5,
    company: 'Nill Fest',
    role: 'Brand Evolution',
    quote: 'From concept to execution, every milestone was handled with care and expertise.',
    author: 'Project Manager',
    image: '🎯',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlay, current])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-anton font-bold mb-4">
            Voices of Trust
          </h2>
          <p className="text-lg text-background/70 max-w-2xl">
            Brands and leaders who&apos;ve experienced transformation through strategic partnership.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-96">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
              className="absolute inset-0 bg-background text-foreground rounded-2xl p-8 md:p-12 flex flex-col justify-between"
            >
              {/* Quote */}
              <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-8">
                &quot;{testimonials[current].quote}&quot;
              </p>

              {/* Author info */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">{testimonials[current].company}</h3>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
                <div className="text-5xl">{testimonials[current].image}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute -bottom-20 left-0 right-0 flex items-center justify-center gap-4">
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-full border border-muted hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1)
                    setCurrent(index)
                    setIsAutoPlay(false)
                  }}
                  animate={{
                    width: index === current ? 24 : 8,
                    backgroundColor: index === current ? '#1a1a1a' : '#d9d9d9',
                  }}
                  className="h-2 rounded-full transition-all"
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-full border border-muted hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
