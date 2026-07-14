'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    'Brand Soul',
    'Building For Bharat',
    'Learn with AG',
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-[1392px] rounded-full bg-[#052C27] px-5 lg:px-8 h-[67px] flex items-center justify-between"
      >
        {/* Logo */}
        {/* <Image
          src="/images/alkeshsirlogo 1.png"
          alt="Logo"
          width={123}
          height={28}
          priority
          className="w-[110px] lg:w-[123px] h-auto"
        /> */}

        <Image
          src="/images/alkeshsirlogo 1.png"
          alt="Logo"
          width={200}
          height={100}
          className="w-[150px] h-auto"
          />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#F5F5F5] text-[16px] font-medium whitespace-nowrap transition-opacity hover:opacity-70"
              style={{
                fontFamily: 'Altone',
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden lg:flex items-center justify-center rounded-full bg-white text-[#052C27] px-6 py-3 text-[16px] font-semibold shadow-[0_4px_4px_rgba(199,160,8,0.25)]"
          style={{ fontFamily: 'Altone' }}
        >
          Work With Me
        </motion.button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="absolute top-[78px] left-0 right-0 rounded-3xl bg-[#052C27] p-6 lg:hidden shadow-xl"
            >
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="text-[#F5F5F5] text-[16px] font-medium"
                    style={{
                      fontFamily: 'Altone',
                    }}
                  >
                    {item}
                  </a>
                ))}

                <button
                  className="mt-2 rounded-full bg-white py-3 text-[#052C27] font-semibold"
                  style={{
                    fontFamily: 'Altone',
                  }}
                >
                  Work With Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}