import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { Pricing } from "@/components/pricing"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { siteConfig } from '@/lib/seo'

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
