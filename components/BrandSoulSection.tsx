'use client'

import Image from 'next/image'
import {motion} from 'framer-motion'


const cards=[

{
img:'/images/brandimg1.png'
},

{
img:'/images/brandimg2.png'
},

{
img:'/images/brandimg3.png'
}

]


export function BrandSoulSection(){

return(

// {/* <section className="bg-[#F5F5F5] py-16 md:py-24"> */}

<section className="bg-[#F5F5F5] pt-8 pb-16 md:pb-24">


<div className="
mx-auto
max-w-[1392px]
px-5
md:px-8
lg:px-6
">

<motion.h2

initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}

className="
text-center
text-[32px]
md:text-[40px]
leading-[120%]
text-[#052C27]
"

style={{
fontFamily:'Altone',
fontWeight:500
}}

>

The Brand Soul Philosophy.

</motion.h2>




{/* Cards */}

<div
className="
relative
mt-14
mx-auto
w-full
max-w-[1392px]
h-[321px]
hidden
md:block
"
>


{cards.map((card,index)=>(

<motion.div

key={card.img}

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
delay:index*.15
}}

className={`
absolute
w-[240px]
h-[300px]
rounded-lg
overflow-hidden

${
index===0
?
"left-[calc(50%-376px)] top-[21px]"
:
index===1
?
"left-[calc(50%-120px)] top-0"
:
"left-[calc(50%+136px)] top-[21px]"
}

`}

>

<Image

src={card.img}

alt="Brand Soul"

fill

className="
object-cover
"

/>


</motion.div>


))}


</div>



{/* Mobile Cards */}

<div
className="
mt-14
flex
flex-col
items-center
gap-6
md:hidden
"
>

{cards.map((card,index)=>(

<motion.div

key={card.img}

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
delay:index*.15
}}

className="
relative
w-[240px]
h-[300px]
rounded-lg
overflow-hidden
"

>

<Image

src={card.img}

alt="Brand Soul"

fill

className="
object-cover
"

/>


</motion.div>


))}

</div>


<motion.p

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:true
}}

className="
mx-auto
mt-20
max-w-[698px]
text-center
text-[18px]
md:text-[20px]
leading-[120%]
text-[#5C5C5C]
"

style={{
fontFamily:'Altone',
fontWeight:500
}}

>

Because every brand, just like every human, has a soul. When you find it, align with it, and express it with integrity — 
<span
  style={{
    color:'#0B221E',
    display:'inline'
  }}
>
  it creates movement.
</span>

</motion.p>

</div>



{/* Big Typography Section */}

<div
className="
mt-24
bg-[#F5F5F5]
overflow-hidden
py-10

max-sm:py-6
"
>


<motion.h3

initial={{
x:-80,
opacity:0
}}

whileInView={{
x:0,
opacity:0.8
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="
whitespace-nowrap

text-[70px]
sm:text-[90px]
lg:text-[128px]

max-sm:text-[34px]
max-sm:whitespace-normal

capitalize

text-[#052C27]

leading-[120%]

max-sm:leading-[110%]

"

style={{
fontFamily:'Anton',
fontWeight:400
}}

>

The stronger the soul

</motion.h3>





<motion.h3

initial={{
x:80,
opacity:0
}}

whileInView={{
x:0,
opacity:.8
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="
whitespace-nowrap

text-right

text-[70px]
sm:text-[90px]
lg:text-[128px]

max-sm:text-[34px]
max-sm:whitespace-normal

capitalize

text-[#052C27]

leading-[120%]

max-sm:leading-[110%]

max-sm:text-left

"

style={{
fontFamily:'Anton',
fontWeight:400
}}

>

the stronger the brand

</motion.h3>


</div>



</section>

)

}