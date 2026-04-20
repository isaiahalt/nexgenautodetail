"use client"

import Image from "next/image"
import { Car, Droplets, Sparkles, Shield, Wind, Brush } from "lucide-react"
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % detailImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
      {detailImages.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentImage ? 1 : 0,
            scale: index === currentImage ? 1 : 1.1
          }}
          transition={{
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 1.2, ease: "easeOut" }
          }}
        >
          <Image
            src={image}
            alt={`Detailing showcase ${index + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}

      {/* Shine overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        animate={{ translateX: ["0%", "100%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut"
        }}
      />

      {/* Image indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {detailImages.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentImage ? 'bg-white' : 'bg-white/50'
            }`}
            animate={{
              scale: index === currentImage ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  )
}

const services = [
  {
    icon: Droplets,
    title: "Exterior Wash",
    description: "Thorough hand wash using premium automotive shampoo to remove dirt, grime, and contaminants. Special attention to grille, wheels, and tires.",
  },
  {
    icon: Brush,
    title: "Interior Detailing",
    description: "Deep cleaning of all interior surfaces including leather conditioning, carpet shampooing, and germ/odor elimination.",
  },
  {
    icon: Sparkles,
    title: "Paint Decontamination",
    description: "Professional clay bar treatment and iron decontamination to restore your paint to its original luster.",
  },
  {
    icon: Shield,
    title: "Protectant Wax",
    description: "Long-lasting sealant wax protection against environmental contaminants, UV rays, and water damage.",
  },
  {
    icon: Wind,
    title: "Steam Cleaning",
    description: "Deep plastic steam cleaning for hard-to-reach areas, removing embedded dirt and bacteria.",
  },
  {
    icon: Car,
    title: "Full Makeover",
    description: "Complete interior and exterior premium detailing for a showroom-ready transformation.",
  },
]

const whyReasons = [
  {
    number: "1",
    title: "Enhanced Comfort",
    description: "Revel in the comfort of a meticulously cleaned and refreshed interior.",
  },
  {
    number: "2",
    title: "Preserved Resale Value",
    description: "Regular detailing contributes to maintaining your vehicle's resale value by keeping it in optimal condition.",
  },
  {
    number: "3",
    title: "Driving Pleasure",
    description: "A clean and organized interior enhances the overall driving experience, making every journey a delight.",
  },
]

export function Services() {
  const headerRef = useRef(null)
  const gridRef = useRef(null)
  const whyRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" })
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            className="text-primary font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Premium Car Washing & Detailing
          </motion.h2>
          <motion.p
            className="text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From basic washes to complete makeovers, we offer comprehensive detailing services 
            tailored to your vehicle&apos;s needs. We come to you for hassle-free service.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <motion.div
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors relative z-10"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <service.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-2 relative z-10">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Section */}
        <div ref={whyRef} className="mt-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.p
              className="text-primary font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Why Choose Us
            </motion.p>
            <motion.h3
              className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Why Get Your Car Detailed?
            </motion.h3>
            <div className="space-y-6">
              {whyReasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={whyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-primary font-bold text-sm">{reason.number}</span>
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={whyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <AutoImageSlider />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
