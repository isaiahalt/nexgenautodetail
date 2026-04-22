"use client"

import Image from "next/image"
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const aboutImages = [
  "/images/detail-process.jpg",
  "/images/front.jpg",
  "/images/back.jpg"
]

function AboutImageSlider() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % aboutImages.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + aboutImages.length) % aboutImages.length)

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(nextImage, 3500)
    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <div 
      className="aspect-[4/3] rounded-lg overflow-hidden relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {aboutImages.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentImage ? 1 : 0,
            scale: index === currentImage ? 1 : 1.05
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Image
            src={image}
            alt={`Detailing showcase ${index + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      ))}

      {/* Navigation Buttons */}
      <button
        type="button"
        onClick={prevImage}
        aria-label="Show previous image"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white opacity-100 backdrop-blur-sm transition-opacity hover:bg-black/40 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={nextImage}
        aria-label="Show next image"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white opacity-100 backdrop-blur-sm transition-opacity hover:bg-black/40 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Image indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {aboutImages.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Show image ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${index === currentImage ? 'bg-primary scale-110' : 'bg-white/70'}`}
          />
        ))}
      </div>
    </div>
  )
}

const features = [
  "Meticulous attention to every detail",
  "Premium products and equipment",
  "Mobile service available - we come to you",
  "Hassle-free booking experience",
  "Satisfaction guaranteed",
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Slider Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <AboutImageSlider />
            
            {/* Floating 5-Star Card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-background p-6 rounded-lg shadow-xl border border-border max-w-xs hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">5</div>
                <div>
                  <p className="font-semibold text-foreground">5-Star Rating</p>
                  <p className="text-sm text-muted-foreground">Verified on Google</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.p className="text-primary font-medium mb-4" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>About Us</motion.p>
            <motion.h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>Premium Car Detailing Excellence</motion.h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Discover the pinnacle of automotive care. With an unwavering commitment to perfection, 
              we set the standard for meticulous craftsmanship and unparalleled customer service.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li key={index} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + index * 0.1 }}>
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}