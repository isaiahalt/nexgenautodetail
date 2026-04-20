"use client"

import { useRef } from "react"
import Link from "next/link"
import { Check, Diamond, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"

const packages = [
  {
    id: "full-interior",
    name: "Full Interior",
    category: "full",
    price: 200,
    features: [
      "Deep Plastic Steam Clean",
      "Leather, Plastic, Vinyl Protection",
      "Shampooing Seats & Carpet",
      "Germ/Odor Elimination",
      "Clean Windows",
    ],
    recommended: true,
  },
  {
    id: "full-exterior",
    name: "Full Exterior",
    category: "full",
    price: 120,
    features: [
      "Deep Hand Wash",
      "Deep Wheel Cleaning",
      "Bugs Removal",
      "Iron Decon Removal",
      "Clay Bar Treatment",
      "Sealant Wax (3-month coverage)",
      "Trim Restoration",
      "Tire Shine",
      "Clean Windows",
    ],
    recommended: true,
  },
]

const specialPackages = [
  {
    id: "full-makeover",
    name: "Full Makeover",
    price: '250-275',
    icon: Diamond,
    features: [
      "Exterior & Interior Premium Detailing",
      "Includes Deep Hand Wash, Iron Decon, Clay Bar Treatment",
      "Full Vehicle Wax & Trim Restoration",
      "Interior Deep Plastic Steam Clean, Leather Protection",
      "Germ & Odor Elimination, Shampooing Seats & Carpet",
    ],
  },
  {
    id: "maintenance",
    name: "Full Maintenance",
    price: 225,
    icon: RotateCcw,
    badge: "Best Value!",
    features: [
      "Regular upkeep for a showroom-ready look",
      "Hand Wash, Wheel Cleaning, Spray Wax, Tire Shine",
      "Interior Dusting, Vacuuming, and Surface Cleaning",
    ],
  },
]

export function Pricing() {
  const headerRef = useRef(null)
  const packagesRef = useRef(null)
  const specialRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })
  const packagesInView = useInView(packagesRef, { once: true, margin: "-50px" })
  const specialInView = useInView(specialRef, { once: true, margin: "-50px" })

  return (
    <section id="pricing" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            className="text-primary font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Service Pricing
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Premium Car Detailing Packages
          </motion.h2>
          <motion.p
            className="text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose from our range of professional detailing packages. All prices shown are starting prices and may vary based on vehicle condition.
          </motion.p>
        </div>

        {/* Full Treatment Packages */}
        <div ref={packagesRef} className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={cn(
                "relative p-6 rounded-lg border transition-all",
                pkg.recommended
                  ? "bg-primary/5 border-primary"
                  : "bg-background border-border hover:border-primary/50"
              )}
              initial={{ opacity: 0, y: 30 }}
              animate={packagesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {pkg.recommended && (
                <motion.div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={packagesInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 400, delay: 0.3 + index * 0.1 }}
                >
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium whitespace-nowrap">
                    Recommended
                  </span>
                </motion.div>
              )}
              <div className="mb-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Full Treatment
                </p>
                <h3 className="text-lg font-semibold text-foreground">{pkg.name}</h3>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">
                  ${pkg.price}
                </span>
                <span className="text-muted-foreground text-sm ml-1">+</span>
              </div>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-2 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={packagesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                  >
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant={pkg.recommended ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link href="#contact">Book Now</Link>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Special Packages */}
        <div ref={specialRef} className="grid md:grid-cols-2 gap-6 pt-4">
          {specialPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className="relative p-8 rounded-lg bg-background border border-border hover:border-primary/50 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={specialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              {/* Glow background */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {pkg.badge && (
                <motion.div
                  className="absolute -top-3 right-6 z-10"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={specialInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ type: "spring", stiffness: 400, delay: 0.4 }}
                >
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium whitespace-nowrap shadow-lg">
                    {pkg.badge}
                  </span>
                </motion.div>
              )}
              <div className="flex items-start gap-4 mb-6 relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <pkg.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-primary mt-1">
                    ${pkg.price}<span className="text-lg text-muted-foreground ml-1">+</span>
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mb-6 relative z-10">
                {pkg.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-2 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={specialInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                  >
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative z-10">
                <Button className="w-full" asChild>
                  <Link href="#contact">Book Now</Link>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
