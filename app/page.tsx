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

export const metadata: Metadata = {
  title: 'Nex-Gen AutoDetail | Premium Car Detailing Services in Ohio',
  description: 'Experience premium car detailing services in Trumbull & Mahoning Counties, Ohio. Professional interior detailing, paint decontamination, protective wax coating, and mobile detailing. Serving Howland, Warren, Boardman, and Canfield.',
  openGraph: {
    title: 'Nex-Gen AutoDetail | Premium Car Detailing Services',
    description: 'Professional car detailing services in Ohio. Paint decontamination, interior detailing, protective wax coating, and mobile service.',
    url: 'https://nexgenautodetail.com',
    type: 'website',
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
