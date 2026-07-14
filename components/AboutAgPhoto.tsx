'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function AboutAgPhoto() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#151515]
        min-h-[700px]
        py-20
        lg:py-0
      "
    >

      {/* Background */}
      <Image
        src="/images/about-agphoto.png"
        alt="about background"
        fill
        priority
        className="
          object-cover
          opacity-80
        "
      />


      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/40
        "
      />


      <div
        className="
          relative
          mx-auto
          max-w-[1440px]
          min-h-[700px]

          px-6
          md:px-10
          lg:px-0
        "
      >


        {/* TITLE */}
        <motion.h2
          initial={{
            opacity:0,
            x:-50
          }}
          whileInView={{
            opacity:1,
            x:0
          }}
          viewport={{
            once:true,
            amount:.3
          }}
          transition={{
            duration:.8
          }}
          className="
            absolute

            left-6
            lg:left-[24px]

            top-[40px]
            lg:top-[59px]

            w-[280px]
            lg:w-[323px]

            text-[#F5F5F5]

            text-[32px]
            lg:text-[40px]

            leading-[120%]

            font-medium
          "
          style={{
            fontFamily:'Altone'
          }}
        >
          The Soul Behind the Brand
        </motion.h2>




        {/* CENTER CARD */}
        <motion.div
          initial={{
            opacity:0,
            y:80
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:.9
          }}
          className="
            absolute

            left-1/2
            -translate-x-1/2

            bottom-0

            w-full
            max-w-[392px]

            h-[560px]
            md:h-[651px]

            flex
            flex-col
            justify-end
            items-center

            px-2
            pb-5
          "
        >


          {/* Portrait */}
          <motion.div
            initial={{
              scale:.95,
              opacity:0
            }}
            whileInView={{
              scale:1,
              opacity:1
            }}
            viewport={{
              once:true
            }}
            transition={{
              duration:.7
            }}
            className="
              relative

              w-full

              h-[420px]
              md:h-[499px]

              rounded-[24px]

              overflow-hidden
            "
          >

            {/* <Image
              src="/images/about/person.jpg"
              alt="portrait"
              fill
              className="
                object-cover
              "
            /> */}

          </motion.div>


        </motion.div>



      </div>


    </section>
  )
}