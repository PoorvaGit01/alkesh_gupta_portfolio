'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'


export function JourneySection() {

return (

<section
className="
bg-[#F5F5F5]

py-12
sm:py-16
md:py-24

overflow-hidden
"
>


<div

className="
mx-auto

max-w-[1392px]

px-5
sm:px-6
md:px-8
lg:px-6

"

>


{/* HEADING */}

<motion.h2

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.6
}}

className="

max-w-[855px]

text-[26px]
min-[360px]:text-[28px]
sm:text-[32px]
md:text-[40px]

leading-[120%]

text-[#052C27]

"

style={{

fontFamily:'Altone',

fontWeight:500

}}

>

My journey didn’t start with a business plan. It started with questions.

</motion.h2>





{/* DESCRIPTION */}

<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.7
}}

className="

mt-8
sm:mt-10
md:mt-14

flex

justify-start
md:justify-end

"

>


<div

className="

w-full

max-w-[450px]

space-y-5
md:space-y-8

"

>


<p

className="

text-[16px]
sm:text-[18px]
md:text-[20px]

leading-[120%]

text-[#3A3A3A]

"

style={{

fontFamily:'Altone',

fontWeight:500

}}

>

Why do some brands connect deeply while others don’t?

</p>



<p

className="

text-[16px]
sm:text-[18px]
md:text-[20px]

leading-[120%]

text-[#3A3A3A]

"

style={{

fontFamily:'Altone',

fontWeight:500

}}

>

Why do some founders feel aligned, while others burn out chasing trends?

</p>


</div>


</motion.div>





{/* IMAGE */}

<motion.div

initial={{
opacity:0,
scale:.97
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

transition={{
duration:.7
}}

className="

relative

mt-10
sm:mt-12
md:mt-20

w-full

overflow-hidden

rounded-[4px]

h-[220px]
min-[360px]:h-[260px]

sm:h-[380px]

md:h-[500px]

lg:h-[600px]

"

>


<Image

src="/images/digihost.png"

alt="Journey"

fill

sizes="
(max-width:640px) 100vw,
(max-width:1024px) 100vw,
1392px
"

className="

object-cover

"

priority={false}

/>


</motion.div>



</div>



</section>


)

}