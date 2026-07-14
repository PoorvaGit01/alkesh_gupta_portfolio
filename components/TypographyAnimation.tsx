'use client'

import { motion } from 'framer-motion'

export function TypographyAnimation() {
  const sections = [
    {
      id: 1,
      mainText: 'The stronger the soul',
      highlightText: 'the stronger the brand',
      color: '#052C27',
    },
    {
      id: 2,
      mainText: 'Through The Bharat Building Mission, I\'m creating a community of founders from every corner of India — Tier 2, Tier 3, and beyond',
      color: '#052C27',
    },
    {
      id: 3,
      mainText: 'My next chapter is about building with people, not just for them.',
      color: '#052C27',
    },
  ]

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-24 py-20">
        {/* Section 1: Main Typography */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative text-center"
        >
          {/* Decorative left lines */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 bg-primary h-20 opacity-30" />
          
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            style={{ color: sections[0].color, fontFamily: 'Anton, sans-serif' }}
          >
            {sections[0].mainText}
          </h2>
          
          <h3 
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            style={{ color: sections[0].color, fontFamily: 'Anton, sans-serif' }}
          >
            {sections[0].highlightText}
          </h3>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative text-center"
        >
          {/* Decorative left line */}
          <div className="absolute left-12 top-0 w-1 bg-primary h-32 opacity-40" />
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto"
            style={{ color: sections[1].color, fontFamily: 'Anton, sans-serif' }}
          >
            {sections[1].mainText}
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative text-center"
        >
          {/* Decorative left lines */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-primary h-24 opacity-40" />
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl mx-auto"
            style={{ color: sections[2].color, fontFamily: 'Anton, sans-serif' }}
          >
            {sections[2].mainText}
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
