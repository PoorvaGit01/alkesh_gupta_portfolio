'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'


export function FounderStoryCard(){

return (

<section
className="
relative
bg-white
py-12
overflow-hidden
"
>

<motion.div

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true,
amount:.3
}}

transition={{
duration:.8
}}

className="
relative
mx-auto
w-full
max-w-[1200px]

h-[600px]

sm:h-[600px]
max-sm:h-[420px]

rounded-[16px]

overflow-hidden
shadow-[0px_4px_4px_4px_rgba(199,160,8,0.25)]

px-4
sm:px-0
"
>


{/* BACKGROUND IMAGE */}

<Image

src="/images/unnamed7.png"

alt="Founder story"

fill

className="
object-cover
"

priority

/>


{/* OVERLAY */}

<div
className="
absolute
inset-0
bg-black/20
"
/>



{/* CONTENT */}

<motion.div

initial={{
opacity:0,
scale:.95
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

transition={{
duration:.8,
delay:.2
}}

className="
absolute
left-1/2
top-1/2

-translate-x-1/2
-translate-y-1/2


w-[661px]
max-w-[661px]


max-sm:w-full
max-sm:px-6


flex
flex-col
items-center

gap-6

"
>


{/* QUOTE */}

<h2
className="
w-full
text-center

text-[#F5F5F5]
opacity-80


text-[36px]
leading-[140%]


max-sm:text-[24px]
max-sm:leading-[135%]


font-normal
capitalize
"

style={{
fontFamily:"'Kaushan Script', cursive",
fontWeight:400,
fontStyle:"normal",
letterSpacing:"0%",
}}

>

<span>

This is not my story,
<br/>

It’s a reminder,
<br/>

that every founder’s story can have a soul.

</span>

</h2>



{/* NAME */}

<p

className="
text-center

text-[18px]
md:text-[20px]

max-sm:text-[16px]

font-medium
leading-[120%]


bg-gradient-to-r
from-[#F8EEA4]
to-[#C7A008]


bg-clip-text
text-transparent

"

style={{
fontFamily:"Altone"
}}

>

- Alkesh Gupta

</p>


</motion.div>


</motion.div>


</section>

)

}