"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, useInView, AnimatePresence } from "framer-motion"

// Google Business URL - Update this with your actual Google Business page
const GOOGLE_BUSINESS_URL = "https://www.google.com/search?sca_esv=c8c748bd08932296&sxsrf=ANbL-n60WIcqZ9zNxQbjTaVvjYPMzCeScg:1776564609394&q=nexgen+auto+detail+reviews&uds=ALYpb_kIptUka81iHxXp1ytED-LKknfMKJ8mtxoSIsiGx0kVqX7oKMi7YyaXAAM0e7kJqQOcUNdgvRhH41nA6NcPdTknKifc9nXDrU0lPeJfS01sugYwhjL4imbHLllqb_9sNv4l8sXG0vXLb3wTkilnO3nElLOtjEhWV-G2OsUYtD5KEIVhQLtqmHf487fUwx0spuw1_CLdG4JRjpXfbwFuqEAEV--_uassYBTjjztk7owT_m3HMVN2W1ecgKhD4h4zEhxVYjx_6y0cVcGU0moSWLjF6FMtfxl2sdRayaQo0e7sWp3CqfJEiX4rHpWp4CpHuALNcLJ7b9YBhQy4po3ZvBzIWTpESJKR-KCq95ULNmenNiIPJ7ofV0ng1cwrykoSbbpVgT6TC1TMNhs_gylN022JnuTRsmJif1X-NNH4qPwbGzs-Fub6aI6M6uyHDOCgfJYSGO5GTBYQ2rmng_3FVSFKpITKhtCpHEUKQHZWxuaMjwe7pE8OEKAJobOgEtbVw6hQFcjQ3BXmnZVL4qznqDfl8OWclA&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOSik5Mk2yfDmIM96Jh57EUJld-ZF_SvCWq71-_twS1nAPVvpGeTWA6a_DyaPCU4vzaF7dgmiQe-C-9cWlVGmw9_Abd3h6pGdsPQHKUf5SdwpxB7Rag%3D%3D&sa=X&ved=2ahUKEwilodrz6viTAxXrjokEHQYRET4Qk8gLegQIGRAB&ictx=1&biw=1327&bih=929&dpr=2#ebo=4"

const reviews = [
  {
    id: 1,
    name: "Rachael V.",
    date: "April 2025",
    rating: 5,
    service: "Interior & Exterior Detailing",
    vehicle: "Multiple cars",
    review: "Isaiah detailed (inside and out) three of our cars over the weekend and all three look brand new. So much attention to detail. Highly recommend if you need this service.",
  },
  {
    id: 2,
    name: "Kelly B.",
    date: "May 2025",
    rating: 5,
    service: "Full Detailing",
    vehicle: "Car",
    review: "If you want your car to look, shine, and smell better than when you first purchased it, look no further than Nex-Gen AutoDetail. Impeccable.",
  },
  {
    id: 3,
    name: "Rhonda V.",
    date: "May 2025",
    rating: 5,
    service: "Full Detailing",
    vehicle: "Car",
    review: "Extremely happy with our car detailing!! It looks & smells like new!! We will recommend him to all our friends & family!!",
  },
  {
    id: 4,
    name: "Michael T.",
    date: "March 2025",
    rating: 5,
    service: "Paint Decontamination and waxing",
    vehicle: "SUV",
    review: "Absolutely amazing work on my SUV. The polish looks incredible and the paint has never looked better. Professional service from start to finish.",
  },
  {
    id: 5,
    name: "Sarah M.",
    date: "February 2025",
    rating: 5,
    service: "Full Makeover",
    vehicle: "Sedan",
    review: "My car looks better than the day I bought it! The interior steam cleaning removed stains I thought were permanent. Will definitely be a repeat customer.",
  },
  {
    id: 6,
    name: "James R.",
    date: "January 2025",
    rating: 5,
    service: "Paint Correction",
    vehicle: "Sports Car",
    review: "The swirl marks on my black paint are completely gone. Isaiah really knows what he's doing. Worth every penny!",
  },
]

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })

  const reviewsPerPage = 3
  const totalPages = Math.ceil(reviews.length / reviewsPerPage)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % totalPages)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, totalPages])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const visibleReviews = reviews.slice(
    currentIndex * reviewsPerPage,
    (currentIndex + 1) * reviewsPerPage
  )

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  return (
    <section id="reviews" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12">
          <motion.p
            className="text-primary font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            What Our Customers Say
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Real Reviews from Real Clients
          </motion.h2>
          
          {/* Google Rating Badge */}
          <motion.div
            className="inline-flex items-center gap-4 px-6 py-4 rounded-lg bg-card border border-border"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
          >
            <div className="text-center">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={headerInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  >
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>
              <motion.p
                className="text-2xl font-bold text-foreground"
                initial={{ opacity: 0 }}
                animate={headerInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                5.0
              </motion.p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">Google Rating</p>
              <p className="text-xs text-muted-foreground">65+ Verified Reviews</p>
            </div>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid md:grid-cols-3 gap-6 mb-8"
            >
              {visibleReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className="p-6 rounded-lg bg-card border border-border relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.15)" }}
                >
                  {/* Quote Icon */}
                  <motion.div
                    className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Quote className="h-4 w-4 text-primary" />
                  </motion.div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.3, rotate: 10 }}
                      >
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    &ldquo;{review.review}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-primary font-semibold">
                          {review.name.charAt(0)}
                        </span>
                      </motion.div>
                      <div>
                        <p className="font-medium text-foreground">{review.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {review.service} - {review.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </motion.div>
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setDirection(i > currentIndex ? 1 : -1)
                  setCurrentIndex(i)
                }}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 w-2"
                )}
                aria-label={`Go to page ${i + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                layout
              />
            ))}
          </div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              aria-label="Next reviews"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Google Actions */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="gap-2"
            >
              <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer">
                <Star className="h-4 w-4" />
                Leave Us a Review
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer">
                See All 65+ Reviews on Google
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
