'use client'

import { motion } from 'framer-motion'


const visionBlocks = [
  {
    lines:[
      "My next chapter is about building with people,",
      "not just for them."
    ],
    height:"min-h-[240px]",
    bars:2
  },

  {
    lines:[
      "Through The Bharat Building Mission,",
      "I’m creating a community of founders",
      "from every corner of India — Tier 2, Tier 3,",
      "and beyond"
    ],
    height:"min-h-[400px]",
    bars:4
  },

  {
    lines:[
      "who want to grow with purpose, not pressure.",
      "Because someday, when someone says",
      "“Bharat is rising,”",
      "I want to know",
      "we helped build that rise, with soul."
    ],
    height:"min-h-[500px]",
    bars:5
  }
]



export function FounderVisionSection(){

return (

<section
className="
bg-white
relative
overflow-hidden
"
>


{/* TOP LINE */}

<div
className="
max-w-[1400px]
mx-auto
border-t
border-[#5C5C5C]
"
>
</div>



{
visionBlocks.map((block,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
y:60
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
duration:.8,
delay:index*.15
}}

className={`
relative
max-w-[1440px]
mx-auto
bg-[#F5F5F5]

${block.height}

max-sm:min-h-[220px]

flex
items-center
justify-center

px-6
md:px-10

max-sm:px-4

overflow-hidden
`}
>



{/* TEXT */}

<div
className="
relative
w-full
max-w-[1358px]

text-center

whitespace-nowrap

max-sm:whitespace-normal
"
>


{/* BACK TEXT */}

<p
className="
absolute
inset-0

flex
flex-col
items-center
justify-center

text-[#D9D9D9]
opacity-80

font-normal

text-[42px]
md:text-[64px]

max-sm:text-[22px]

leading-[120%]

uppercase
select-none
"

style={{
fontFamily:'Anton'
}}
>

{
block.lines.map((line,i)=>(
<span key={i}>
{line}
</span>
))
}

</p>




{/* FRONT TEXT */}

<motion.p

initial={{
clipPath:"inset(100% 0 0 0)"
}}

whileInView={{
clipPath:"inset(0% 0 0 0)"
}}

viewport={{
once:true
}}

transition={{
duration:1
}}

className="
relative

flex
flex-col
items-center
justify-center

text-[#052C27]
opacity-80

font-normal

text-[42px]
md:text-[64px]

max-sm:text-[22px]

leading-[120%]

uppercase
"

style={{
fontFamily:'Anton'
}}

>

{
block.lines.map((line,i)=>(

<span 
key={i}
className="
max-sm:block
"
>
{line}
</span>

))
}

</motion.p>


</div>





{/* SIDE BARS */}

<div
className="
absolute

left-[24px]

top-1/2
-translate-y-1/2

flex
flex-col

gap-0

max-sm:left-[10px]
"
>

{
Array.from({
length:block.bars
}).map((_,i)=>(

<motion.div

key={i}

initial={{
scaleY:0
}}

whileInView={{
scaleY:1
}}

viewport={{
once:true
}}

transition={{
duration:.5,
delay:i*.1
}}

className="
origin-top

w-[4px]

md:w-[8px]

h-[78px]

max-sm:w-[3px]
max-sm:h-[45px]

bg-[#052C27]
"

/>

))

}

</div>



</motion.div>


))

}




{/* BOTTOM LINE */}

<div
className="
w-[1400px]
max-w-[90%]
mx-auto
border-t
border-[#5C5C5C]
mt-10
"
>
</div>


</section>

)

}