'use client'

import { motion } from 'framer-motion'


export function Hero() {

return (

<section
className="
relative
w-full

min-h-screen
md:min-h-[881px]

flex
items-center
justify-center

overflow-hidden

pt-[80px]
sm:pt-[90px]
"
>


{/* Background */}

<div

className="
absolute
inset-0

bg-cover
bg-center
bg-no-repeat

"

style={{

backgroundImage:
"linear-gradient(rgba(0,0,0,0.36), rgba(0,0,0,0.36)), url('/images/hero-bg.png')"

}}

/>



{/* CONTENT */}

<div

className="
relative
z-20

w-full

max-w-[721px]

mx-auto

px-5
sm:px-6
lg:px-8

text-center

"

>


<motion.h1

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8,
ease:'easeOut'
}}

className="

text-center

text-[28px]
min-[360px]:text-[30px]
sm:text-[36px]
md:text-[40px]

leading-[120%]

text-[#F5F5F5]

break-words

"

style={{

fontFamily:'Altone',

fontWeight:600

}}

>


Hi, I&apos;m{' '}



<span

className="

inline

text-[28px]
min-[360px]:text-[30px]
sm:text-[36px]
md:text-[40px]

leading-[120%]

"

style={{

fontFamily:'Altone',

fontWeight:600,

color:'#E2C755'

}}

>

Alkesh Gupta

</span>



{' '}— a Founder, Creator, and Soul Alchemist.



</motion.h1>



</div>



</section>


)

}