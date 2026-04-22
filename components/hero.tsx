"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Shield, Clock } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

const features = [
  {
    icon: Shield,
    title: "Protective Sealant Wax",
    subtitle: "Long-lasting protection",
  },
  {
    icon: Sparkles,
    title: "Paint Decontamination",
    subtitle: "Flawless finish",
  },
  {
    icon: Clock,
    title: "Pickup/Drop-off Service",
    subtitle: "We come to you",
  },
]

export function Hero() {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)

  const [particles, setParticles] = useState<{ x: number; y: number; duration: number; delay: number }[]>([])

  useEffect(() => {
    if (reduceMotion) {
      setParticles([])
      return
    }

    setParticles(
      Array.from({ length: 8 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: 4 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    )
  }, [reduceMotion])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Premium car detailing"
          fill
          className="object-cover scale-110"
          sizes="100vw"
          quality={85}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ x: p.x, y: p.y }}
            animate={{
              y: [null, -20, 20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">Premium Detailing Services</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.span
              className="text-foreground block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Premium Detailing
            </motion.span>
            <motion.span
              className="text-primary block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Excellence Delivered
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Experience the pinnacle of automotive care with Nex-Gen AutoDetail. 
            We transform your vehicle with meticulous craftsmanship and unparalleled attention to detail.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" asChild className="group relative overflow-hidden">
                <Link href="#contact">
                  <span className="relative z-10 flex items-center">
                    Book Your Detail
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" variant="outline" asChild className="backdrop-blur-sm">
                <Link href="#pricing">View Packages</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex items-center gap-3 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="h-5 w-5 text-primary" />
                </motion.div>
                <div>
                  <p className="text-sm font-medium text-foreground">{feature.title}</p>
                  <p className="text-xs text-muted-foreground">{feature.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2 cursor-pointer"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={reduceMotion ? undefined : { duration: 1.5, repeat: Infinity }}
          whileHover={{ borderColor: "hsl(var(--primary))" }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={reduceMotion ? undefined : { opacity: [1, 0.5, 1], y: [0, 4, 0] }}
            transition={reduceMotion ? undefined : { duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
