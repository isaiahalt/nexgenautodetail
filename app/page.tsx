import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { siteConfig } from '@/lib/seo'

const Services = dynamic(() => import("@/components/services").then((mod) => mod.Services))
const BeforeAfterSlider = dynamic(() =>
  import("@/components/before-after-slider").then((mod) => mod.BeforeAfterSlider)
)
const About = dynamic(() => import("@/components/about").then((mod) => mod.About))
const Pricing = dynamic(() => import("@/components/pricing").then((mod) => mod.Pricing))
const Reviews = dynamic(() => import("@/components/reviews").then((mod) => mod.Reviews))
const Contact = dynamic(() => import("@/components/contact").then((mod) => mod.Contact))

export const metadata: Metadata = {
  title: 'Mobile Auto Detailing in Trumbull & Mahoning Counties, Ohio',
  description:
    'Book mobile auto detailing from Nex-Gen AutoDetail for interior deep cleaning, exterior wash packages, paint decontamination, steam cleaning, and wax protection in Howland, Warren, Boardman, and Canfield.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mobile Auto Detailing in Trumbull & Mahoning Counties, Ohio',
    description:
      'Professional mobile detailing for interiors, exteriors, clay bar treatment, steam cleaning, and wax protection across Trumbull and Mahoning Counties.',
    url: siteConfig.baseUrl,
    type: 'website',
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Auto Detailing in Trumbull & Mahoning Counties, Ohio',
    description:
      'Interior detailing, exterior wash packages, paint decontamination, and wax protection from Nex-Gen AutoDetail.',
    images: [siteConfig.ogImage],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfterSlider />
        <About />
        <Pricing />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
