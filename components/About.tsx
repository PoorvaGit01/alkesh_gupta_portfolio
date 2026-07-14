'use client'

import { motion } from 'framer-motion'

export function About() {
  const philosophyItems = [
    {
      title: 'A BRAND IS',
      description: 'not a logo. it\'s a system of values and interactions.',
      emoji: '🎨',
    },
    {
      title: 'A FOUNDER IS',
      description: 'not a title. The Discipline is what matters.',
      emoji: '💼',
    },
    {
      title: 'And BUSINESS is',
      description: 'about the Market You Choose to Create, Collectively.',
      emoji: '🌍',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-anton font-bold mb-6">
            Philosophy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            The foundation of everything we build is rooted in purpose-driven design and authentic strategy.
          </p>
        </motion.div>

        {/* Philosophy cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {philosophyItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-card rounded-xl border border-border hover:border-accent transition-colors"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-foreground/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-border"
        >
          <h3 className="text-3xl md:text-4xl font-anton font-bold mb-6">
            The Vision
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
            We partner with founders and visionary leaders who want to grow with purpose, not pressure. Because someday, when someone says &quot;Bharat is rising,&quot; I want to know we helped build that rise, with soul.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Our work spans digital strategy, brand identity, and sustainable scaling. We believe in creating systems that last, brands that resonate, and businesses that matter.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
