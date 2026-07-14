'use client'

import { motion } from 'framer-motion'


const brands = [
  {
    id: 1,
    title: 'Brand-identity-setup',
  },
  {
    id: 2,
    title: 'Digital-Infrastructure',
  },
  {
    id: 3,
    title: 'Image-re-engineering',
  },
]


export function BrandCards() {


return (

<section

className="
w-full

bg-[#F5F5F5]

py-12
sm:py-16
md:py-20

px-5
sm:px-6
lg:px-8

overflow-hidden
"

>


<div

className="
max-w-[1392px]

mx-auto

"

>


{/* HEADING */}

<motion.div

initial={{
opacity:0,
y:40
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
duration:.7
}}

className="
text-center

mb-10
sm:mb-14
md:mb-16

"

>


<motion.h2

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
duration:.6
}}

className="

text-[#052C27]

text-[30px]
sm:text-[36px]
md:text-[48px]

leading-[120%]

font-semibold

"

style={{
fontFamily:'Altone'
}}

>

Brands That Carry My Soul

</motion.h2>





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
delay:.2
}}

className="

mx-auto

mt-5

w-full

max-w-[532px]

text-center

text-[15px]
sm:text-[16px]

leading-[120%]

text-[#5C5C5C]

"

style={{
fontFamily:'Altone',
fontWeight:400
}}

>

Over the years, I&apos;ve had the privilege of shaping brands that became more than businesses — they became movements

</motion.p>


</motion.div>






{/* BRAND CARDS PLACEHOLDER */}

<div

className="

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

gap-6

"

>


{
brands.map((brand,index)=>(


<motion.div

key={brand.id}

initial={{
opacity:0,
y:40
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
delay:index*.1
}}

className="

hidden

"

>

{brand.title}

</motion.div>


))
}


</div>



</div>


</section>


)

}