'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'


const testimonials = [
  {
    text:
      "Working with Alkesh doesn’t feel like outsourcing. It feels like building together.",
    name:"Suman Vyas",
    role:"Project Head, DiigiiHost",
    image:"/images/Ellipse1.png"
  },
  {
    text:
      "He understands people — and that changes everything.",
    name:"Dr. Gaikwad",
    role:"The Smile Architect",
    image:"/images/Ellipse1.png"
  },
  {
    text:
      "Working with Alkesh doesn’t feel like outsourcing. It feels like building together.",
    name:"Suman Vyas",
    role:"Project Head, DiigiiHost",
    image:"/images/Ellipse1.png"
  },
  {
    text:
      "He never talks about trends. He talks about truth. And somehow, that always works.",
    name:"Siddhant Jadhav",
    role:"Graphics & Content Lead",
    image:"/images/Ellipse1.png"
  },
  {
    text:
      "Working with Alkesh doesn’t feel like outsourcing. It feels like building together.",
    name:"Suman Vyas",
    role:"Project Head, DiigiiHost",
    image:"/images/Ellipse1.png"
  }
]

const moreUsers = [
  "/images/Ellipse1.png",
  "/images/Ellipse3.png",
  "/images/Ellipse4.png",
  "/images/Ellipse5.png",
]


export function TestimonialsSection(){

return (

<section
className="
relative
overflow-hidden
bg-white
py-24
"
>


{/* TITLE */}

<motion.h2

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
duration:.7
}}

className="
text-center
text-[#151515]
font-medium
text-[32px]
md:text-[40px]
leading-[120%]
"

style={{
fontFamily:'Altone'
}}

>

What People Say

</motion.h2>



{/* TESTIMONIAL TRACK */}

<div
className="
relative
max-w-[1960px]
mx-auto
mt-20
overflow-hidden
"
>


<motion.div

initial={{
x:80,
opacity:0
}}

whileInView={{
x:0,
opacity:1
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="
flex
gap-[115px]
w-max
px-6
md:px-0
mx-auto
"

>


{
testimonials.map((item,index)=>(

<div
key={index}
className="
flex
flex-col
gap-10
w-[300px]
shrink-0
"
>


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
delay:index*.1
}}

className="
text-[#151515]
opacity-80
text-[20px]
leading-[120%]
capitalize
h-[72px]
"

style={{
fontFamily:'Altone'
}}

>

“{item.text}”

</motion.p>



<div
className="
flex
items-start
gap-[25px]
"
>


<div
className="
relative
w-[50px]
h-[50px]
rounded-full
overflow-hidden
bg-[#D9D9D9]
"
>

<Image
src={item.image}
alt={item.name}
fill
className="
object-cover
"
/>

</div>



<div
className="
flex
flex-col
gap-2
"
>


<h4

className="
text-[#052C27]
opacity-80
text-[20px]
font-semibold
leading-[120%]
"

style={{
fontFamily:'Altone'
}}

>

{item.name}

</h4>



<p

className="
text-[#151515]
opacity-80
text-[16px]
leading-[120%]
font-medium
"

style={{
fontFamily:'Altone'
}}

>

{item.role}

</p>


</div>


</div>


</div>


))

}


</motion.div>


{/* DRAG BUTTON */}

<motion.div

initial={{
scale:0
}}

whileInView={{
scale:1
}}

viewport={{
once:true
}}

transition={{
duration:.5
}}

className="
hidden
lg:flex
absolute
right-[430px]
top-[0px]
w-[80px]
h-[80px]
rounded-full
bg-[rgba(30,30,30,.9)]
items-center
justify-center
z-10
"

>


<span
className="
text-[#F5F5F5]
text-[16px]
font-medium
"

style={{
fontFamily:'Altone'
}}

>
Drag
</span>


</motion.div>


</div>




{/* BOTTOM USERS BUTTON */}


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
duration:.6
}}

className="
mx-auto
mt-20
w-fit
border
border-[#5C5C5C]
rounded-full
p-[10px]
flex
items-center
gap-3
"

>


<div
className="
flex
"
>

{
moreUsers.map((image,index)=>(

<div
key={index}
className="
relative
w-[40px]
h-[40px]
rounded-full
overflow-hidden
bg-[#D9D9D9]
-ml-2
first:ml-0
"
>

<Image
src={image}
alt="user"
fill
className="
object-cover
"
/>


</div>

))
}

</div>



<span
className="
text-[#5C5C5C]
text-[20px]
font-medium
"

style={{
fontFamily:'Altone'
}}

>
More
</span>



<button
className="
w-[48px]
h-[48px]
rounded-full
bg-[#052C27]
flex
items-center
justify-center
"
>

<ArrowUpRight
size={24}
color="#F5F5F5"
/>

</button>


</motion.div>



</section>

)

}