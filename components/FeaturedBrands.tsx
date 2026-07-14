'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'


const brands = [
  {
    title: 'DiigiiHost',
    subtitle: 'Making Digital Affordable And Human For Small Businesses',
    image: '/images/featuredbrand.png',
    featured: true,
  },
  {
    title: 'Best Rate Websites',
    subtitle: 'Making Digital Affordable And Human For Small Businesses',
  },
  {
    title: 'Anuved',
    subtitle: 'Rediscovering Purity Through Devotion',
  },
  {
    title: 'Soupherb',
    subtitle: 'Reimagining Wellness With Purpose',
  },
  {
    title: 'NM Fest',
    subtitle: 'Giving A City Its Symbol, Its Pride, And Its Global Identity.',
  },
  {
    title: 'Combo Jumbo & COJ',
    subtitle:
      'Transforming Restaurants Into Communities Built On Togetherness',
  },
  {
    title: 'Learn & Achieve',
    subtitle:
      'Turning Fragmented Learning Into A Nationwide Education Ecosystem',
  },
  {
    title: 'Akirhs',
    subtitle:
      'Where Deep Tech Finds Its Voice, And Engineering Becomes A Clear Narrative.',
  },
  {
    title: 'NAFSCOB',
    subtitle:
      'Where Deep Tech Finds Its Voice, And Engineering Becomes A Clear Narrative.',
  },
  {
    title: 'HEFT',
    subtitle:
      'Transforming Heavy-Lifting Certification Into A 3-Day Intelligent, Automated System.',
  },
  {
    title: 'World Flair',
    subtitle:
      'Unifying Global Sports Procurement Into One Smart, Consolidated Engine.',
  },
  {
    title: 'Dr. Gaikwad',
    subtitle:
      'Proof That Science, Design, And Soul Can Coexist.',
  },
  {
    title: 'Loma Dental',
    subtitle:
      'Proof That Science, Design, And Soul Can Coexist.',
  },
]



export function FeaturedBrands() {

return (

<section
className="
bg-[#F5F5F5]
overflow-hidden
"
>


{
brands.map((brand,index)=>(

<motion.div

key={brand.title}

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
amount:.2
}}

transition={{
duration:.7,
delay:index*.05
}}

className="
border-t
border-[#052C27]/50
bg-[#F5F5F5]
"

>


<div
className="
mx-auto
max-w-[1440px]

px-5
sm:px-8
md:px-12
lg:px-[200px]

py-10
md:py-12
"
>


<div
className="
flex
flex-col
md:flex-row

items-center
md:justify-end

gap-8
md:gap-[77px]

"
>


{/* IMAGE */}

{
brand.featured ? (

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
duration:.7
}}

className="
relative

w-full
max-w-[316px]

h-[196px]

shadow-[4px_4px_0px_2px_#052C27]

shrink-0
"

>

<Image

src={brand.image!}

alt={brand.title}

fill

className="
object-cover
"

/>

</motion.div>


)

:(

<div
className="
hidden
md:block
w-[316px]
shrink-0
"
/>

)

}





{/* TEXT */}

<motion.div

initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.6
}}

className="
w-full
md:max-w-[600px]

min-w-0
"

>


<h3

className="
text-[#052C27]

text-[42px]
sm:text-[52px]
lg:text-[64px]

leading-[100%]

capitalize

font-normal

opacity-80

break-words

"

style={{
fontFamily:'Anton'
}}

>

{brand.title}

</h3>



<p

className={`
mt-5

text-[16px]
md:text-[20px]

leading-[120%]

capitalize

opacity-80

${
brand.featured
? 'text-[#8A8A8A]'
: 'text-[#5C5C5C]'
}
`}

style={{
fontFamily:'Altone',
fontWeight:500
}}

>

{brand.subtitle}

</p>


</motion.div>



</div>


</div>



<div
className="
border-b
border-[#052C27]/50
"
/>


</motion.div>


))

}


</section>


)

}