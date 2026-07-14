'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'


const navLinks = [
  "about",
  "work",
  "services",
  "contact"
]

const brands = [
  "diigiihost",
  "quote your price",
  "best rate websites"
]

const socials = [
  "instagram",
  "facebook",
  "youtube",
  "linkedin",
  "x"
]


const fadeUp = {
  hidden:{
    opacity:0,
    y:40
  },
  show:{
    opacity:1,
    y:0
  }
}



export function Footer(){

return (

<footer
className="
relative
bg-[#151515]
w-full
min-h-[500px]
overflow-hidden

px-6
py-10

md:px-0
md:py-0
"
>


{/* TOP CONTENT */}

<div
className="
flex
flex-col
md:block
"
>


{/* LEFT TITLE */}

<motion.h2

variants={fadeUp}

initial="hidden"

whileInView="show"

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="
md:absolute
left-[24px]
top-[40px]

w-full
md:w-[294px]

text-[24px]
leading-[29px]

bg-gradient-to-r
from-[#F8EEA4]
to-[#C7A008]

bg-clip-text
text-transparent

mb-10
md:mb-0
"

style={{
fontFamily:'Altone'
}}

>

Maybe it’s time we build something together.

</motion.h2>





{/* LINKS WRAPPER */}

<div
className="
grid
grid-cols-3
gap-8

md:block
"
>


{/* NAV */}

<motion.div

variants={fadeUp}

initial="hidden"

whileInView="show"

viewport={{
once:true
}}

transition={{
duration:.6,
delay:.2
}}

className="
md:absolute
right-[441px]
top-[40px]

flex
flex-col
gap-5
"
>

{
navLinks.map((item)=>(
<p
key={item}
className="
text-[#F5F5F5]
text-[20px]
leading-[24px]
"
style={{
fontFamily:'Altone'
}}
>
{item}
</p>
))
}

</motion.div>





{/* BRANDS */}

<motion.div

variants={fadeUp}

initial="hidden"

whileInView="show"

viewport={{
once:true
}}

transition={{
duration:.6,
delay:.35
}}

className="
md:absolute
right-[184px]
top-[40px]

flex
flex-col
gap-5
"
>

{
brands.map((item)=>(
<p
key={item}
className="
text-[#F5F5F5]
text-[20px]
leading-[24px]
"
style={{
fontFamily:'Altone'
}}
>
{item}
</p>
))
}

</motion.div>





{/* SOCIAL */}

<motion.div

variants={fadeUp}

initial="hidden"

whileInView="show"

viewport={{
once:true
}}

transition={{
duration:.6,
delay:.5
}}

className="
md:absolute
right-[23px]
top-[40px]

flex
flex-col
gap-5
"
>

{
socials.map((item)=>(
<p
key={item}
className="
text-[#F5F5F5]
text-[20px]
leading-[24px]
"
style={{
fontFamily:'Altone'
}}
>
{item}
</p>
))
}

</motion.div>


</div>

</div>





{/* LOGO */}

<motion.div

initial={{
opacity:0,
scale:.8
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
delay:.6
}}

className="
relative

mt-20

md:absolute
md:left-[24px]
md:bottom-[40px]

w-[256px]
h-[57px]
"
>

<Image

src="/images/alkeshsirlogo 1.png"

alt="Alkesh Gupta"

fill

className="
object-contain
"

/>

</motion.div>





{/* COPYRIGHT */}

<motion.p

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.6,
delay:.8
}}

className="
mt-8

md:absolute
md:right-[24px]
md:bottom-[40px]

text-[#F5F5F5]

text-[16px]
leading-[19px]

"
style={{
fontFamily:'Altone'
}}

>

Copyright © 2026 Alkesh Gupta. All Rights Reserved. Powered By : DIIGIIHOST

</motion.p>



</footer>

)

}