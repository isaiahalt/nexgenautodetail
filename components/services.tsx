"use client"

import Image from "next/image"
import { Car, Droplets, Sparkles, Shield, Wind, Brush, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const detailImages = [
  "/images/tback.jpg",
  "/images/bronco.jpg",
  "/images/lincoln.jpg",
  "/images/red.jpg",
  "/images/redd.jpg",
  "/images/lines.jpg"
]

function AutoImageSlider() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % detailImages.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + detailImages.length) % detailImages.length)

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(nextImage, 4000)
    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <div 
      className="aspect-[4/3] rounded-lg overflow-hidden relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {detailImages.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentImage ? 1 : 0,
            scale: index === currentImage ? 1 : 1.1
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image src={image} alt={`Detailing showcase ${index + 1}`} fill className="object-cover" />
        </motion.div>
      ))}

      {/* Manual Navigation */}
      <button
        type="button"
        onClick={prevImage}
        aria-label="Show previous image"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white opacity-100 backdrop-blur-sm transition-opacity hover:bg-black/40 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={nextImage}
        aria-label="Show next image"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white opacity-100 backdrop-blur-sm transition-opacity hover:bg-black/40 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {detailImages.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Show image ${index + 1}`}
            className={`h-2 rounded-full transition-all ${index === currentImage ? 'bg-white w-6' : 'bg-white/50 w-2'}`}
          />
        ))}
      </div>
    </div>
  )
}

const services = [
  { icon: Droplets, title: "Exterior Wash", description: "Thorough hand wash using premium automotive shampoo to remove dirt, grime, and contaminants." },
  { icon: Brush, title: "Interior Detailing", description: "Deep cleaning of all interior surfaces including leather conditioning and carpet shampooing." },
  { icon: Sparkles, title: "Paint Decontamination", description: "Professional clay bar treatment and iron decontamination to restore your paint's luster." },
  { icon: Shield, title: "Protectant Wax", description: "Long-lasting sealant wax protection against environmental contaminants and UV rays." },
  { icon: Wind, title: "Steam Cleaning", description: "Deep plastic steam cleaning for hard-to-reach areas, removing embedded dirt and bacteria." },
  { icon: Car, title: "Full Makeover", description: "Complete interior and exterior premium detailing for a showroom-ready transformation." },
]

const whyReasons = [
  { number: "1", title: "Enhanced Comfort", description: "Revel in the comfort of a meticulously cleaned and refreshed interior." },
  { number: "2", title: "Preserved Resale Value", description: "Regular detailing contributes to maintaining your vehicle's resale value." },
  { number: "3", title: "Driving Pleasure", description: "A clean interior enhances the overall driving experience, making every journey a delight." },
]

export function Services() {
  const headerRef = useRef(null), gridRef = useRef(null), whyRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" })
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.p className="text-primary font-medium mb-4" initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}>Our Services</motion.p>
          <motion.h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6" initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>Premium Car Washing & Detailing</motion.h2>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div key={index} className="p-6 rounded-lg bg-card border border-border" initial={{ opacity: 0, y: 30 }} animate={gridInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><service.icon className="h-6 w-6 text-primary" /></div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div ref={whyRef} className="mt-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Why Get Your Car Detailed?</h3>
            <div className="space-y-6">
              {whyReasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><span className="text-primary font-bold">{reason.number}</span></div>
                  <div><h4 className="font-semibold">{reason.title}</h4><p className="text-muted-foreground text-sm">{reason.description}</p></div>
                </div>
              ))}
            </div>
          </div>
          <AutoImageSlider />
        </div>
      </div>
    </section>
  )
}