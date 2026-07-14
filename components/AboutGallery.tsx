'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'


const images = [
  {
    src:'/images/img1.png',
    alt:'Nafscob'
  },
  {
    src:'/images/img2.png',
    alt:'Soupherb'
  },
  {
    src:'/images/img3.png',
    alt:'Anuved'
  },
  {
    src:'/images/img4.png',
    alt:'Bni'
  },
  {
    src:'/images/img5.png',
    alt:'Dr Gaikwad'
  }
]


export function AboutGallery(){

return(

<section 
className="
bg-[#F5F5F5]
pt-12
pb-8
sm:pt-16
overflow-hidden
"
>


<div
className="
mx-auto
max-w-[1392px]
w-full
"
>


{/* INTRO TEXT */}

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
once:true,
amount:.3
}}

transition={{
duration:.7
}}

className="
mx-auto
max-w-[700px]
text-center
px-5
"

>


<p

className="
text-[18px]
sm:text-[20px]
md:text-[24px]

leading-[120%]

text-[#5C5C5C]
"

style={{
fontFamily:'Altone',
fontWeight:500
}}

>

What began as a small digital agency slowly evolved into

</p>



<p

className="
mt-2

text-[18px]
sm:text-[20px]
md:text-[24px]

leading-[120%]

text-[#5C5C5C]
"

style={{
fontFamily:'Altone',
fontWeight:500
}}

>

a place where we didn’t just design websites or logos...

</p>



<p

className="
mt-2

text-[18px]
sm:text-[20px]
md:text-[24px]

leading-[120%]

text-[#0B221E]
"

style={{
fontFamily:'Altone',
fontWeight:500
}}

>

we understood people

</p>


</motion.div>





{/* IMAGES */}

<div
className="
mt-10
sm:mt-14
"
>


<div

className="
flex

items-center
justify-start
sm:justify-center

gap-3
sm:gap-4

overflow-x-auto
sm:overflow-hidden

px-5
sm:px-0

scrollbar-hide
"

>


{
images.map((item,index)=>(


<motion.div

key={item.src}

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
amount:.2
}}

transition={{
duration:.6,
delay:index*.1
}}


className="
relative

shrink-0

w-[130px]
h-[160px]

xs:w-[145px]
xs:h-[175px]

sm:w-[180px]
sm:h-[220px]

lg:w-[204px]
lg:h-[240px]

rounded-lg

overflow-hidden
"

>


<Image

src={item.src}

alt={item.alt}

fill

sizes="
( max-width:640px ) 150px,
204px
"

className="
object-cover
"

/>


</motion.div>


))
}


</div>


</div>





{/* BOTTOM TEXT */}

<motion.p


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

mx-auto

mt-12
sm:mt-16

max-w-[646px]

text-center

px-5

text-[16px]
sm:text-[18px]
md:text-[20px]

leading-[120%]

text-[#5C5C5C]

"

style={{
fontFamily:'Altone',
fontWeight:500
}}

>

And somewhere along that path, the idea that defined everything I do was born

</motion.p>



</div>


</section>

)

}