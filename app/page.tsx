'use client'

import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { BrandCards } from '@/components/BrandCards'
import { Footer } from '@/components/Footer'
import { JourneySection } from '@/components/JourneySection'
import {AboutGallery} from "@/components/AboutGallery"
import {BrandSoulSection} from "@/components/BrandSoulSection"
import { FeaturedBrands } from '@/components/FeaturedBrands'
import { AboutAgPhoto } from "@/components/AboutAgPhoto";
import { BrandSoulManifesto } from '@/components/BrandSoulManifesto'
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FounderVisionSection } from '@/components/FounderVisionSection'
import { FounderStoryCard } from "@/components/FounderStoryCard";

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <JourneySection />
      <AboutGallery/>
      <BrandSoulSection/>
      <BrandCards />
      <FeaturedBrands />
      <AboutAgPhoto/>
      <BrandSoulManifesto/>
      <TestimonialsSection/>
      <FounderVisionSection/>
      <FounderStoryCard/>
      <Footer/>
    </main>
  )
}
