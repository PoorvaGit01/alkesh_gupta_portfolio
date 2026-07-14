'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'


const manifestoData = [
  {
    lines:[
      "A brand is",
      "not a logo.",
      "It’s a living system",
      "of emotion",
      "and intention."
    ],
    image:'/images/Rectangle463.png',
  },
  {
    lines:[
      "A founder is",
      "not a title.",
      "It’s the discipline",
      "to build",
      "what others Only",
      "imagine."
    ],
    image:'/images/Rectangle464.png',
  },
  {
    lines:[
      "And business Is",
      "Not about The Market",
      "It’s About",
      "The Value",
      "You Choose To Create",
      "Consistently"
    ],
    image:'/images/Rectangle465.png',
  }
]



export function BrandSoulManifesto(){

return(

<section
className="
relative
overflow-hidden
bg-[#052C27]
min-h-[1740px]
py-16
"
>


{/* Heading */}
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
duration:.7
}}

className="
text-center
text-[#F5F5F5]

text-[24px]
min-[375px]:text-[26px]
md:text-[40px]

leading-[120%]

font-medium

px-4
"

style={{
fontFamily:'Altone'
}}

>

The Brand Soul Manifesto

</motion.h2>



<div
className="
relative
max-w-[1391px]
mx-auto

mt-14
px-6
"
>


{
manifestoData.map((item,index)=>(


<div
key={item.title}

className={`
relative 

mb-[80px]

md:h-[400px]

flex

items-center

${index===1 
?'md:justify-end'
:'md:justify-start'
}

`}
>


{/* IMAGE */}

<motion.div

initial={{
opacity:0,
scale:.9
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className={`
relative

w-full
md:w-[350px]

h-[400px]

rounded-lg

overflow-hidden

shadow-[4px_4px_0px_rgba(255,255,255,.25)]

shrink-0

${
index===0
?'md:absolute md:left-[20px]'

:index===1
?'md:absolute md:right-[20px] md:top-0'

:'md:absolute md:left-[0px]'
}

`}

>

<Image

src={item.image}

alt="manifesto"

fill

className="
object-cover
"

/>

</motion.div>




{/* TEXT */}

<motion.div
initial={{
 opacity:0,
 x:index===1 ? -80 : 80
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

className={`
absolute

w-full
md:w-[673px]

${
 index===1
 ?
 'md:left-[120px]'
 :
 'md:right-[78px]'
}

bottom-0

text-[#F5F5F5]

font-medium

text-[32px]
md:text-[64px]

leading-[100%]

capitalize

`}

style={{
fontFamily:'Altone'
}}
>


{
item.lines.map((line,lineIndex)=>(

<motion.div

key={line}

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
 delay:lineIndex*.15,
 duration:.5
}}

className="
block
"
style={{
  marginLeft:
    index === 0
      ? `${(item.lines.length - 1 - lineIndex) * 35}px`
      : index === 1
      ? `${lineIndex * 35}px`
      : '0px'
}}
>

{line}

</motion.div>

))

}


</motion.div>


</div>



))

}


</div>


</section>


)

}