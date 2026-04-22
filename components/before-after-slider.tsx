"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

interface BeforeAfterImage {
  before: string
  after: string
  label?: string
}

const defaultImages: BeforeAfterImage[] = [
  {
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
    label: "Full Exterior",
  },
  {
    before: "/images/before-2.jpg",
    after: "/images/after-2.jpg",
    label: "Full Exterior",
  },
  {
    before: "/images/dirty.jpg",
    after: "/images/clean.jpg",
    label: "Full Interior",
  },
  {
    before: "/images/vibebef.jpg",
    after: "/images/vibeaft.jpg",
    label: "Wheel & Tire Detail",
  },
]

interface SliderItemProps {
  image: BeforeAfterImage
  index: number
}

function SliderItem({ image, index }: SliderItemProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
      setSliderPosition(percent)
    },
    []
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return
      handleMove(e.clientX)
    },
    [isDragging, handleMove]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return
      handleMove(e.touches[0].clientX)
    },
    [isDragging, handleMove]
  )

  const handleInteractionStart = useCallback(() => {
    setIsDragging(true)
  }, [])

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-border bg-card shadow-xl"
        onMouseMove={handleMouseMove}
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        onTouchMove={handleTouchMove}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={image.after}
            alt="After detailing"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            loading={image.after === "/images/clean.jpg" ? "eager" : "lazy"}
            draggable={false}
          />
          <div className="absolute bottom-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg">
            AFTER
          </div>
        </div>

        {/* Before Image (Overlay with clip) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={image.before}
            alt="Before detailing"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            draggable={false}
          />
          <div className="absolute bottom-4 left-4 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground shadow-lg">
            BEFORE
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 z-10 w-1"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="absolute inset-0 bg-primary shadow-lg" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-primary bg-background shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={isDragging ? { scale: 1.1 } : { scale: 1 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-primary"
              >
                <path
                  d="M8 6L4 12L8 18M16 6L20 12L16 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Label */}
      {image.label && (
        <motion.p
          className="mt-4 text-center text-sm font-medium text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
        >
          {image.label}
        </motion.p>
      )}
    </motion.div>
  )
}

interface BeforeAfterSliderProps {
  images?: BeforeAfterImage[]
}

export function BeforeAfterSlider({ images = defaultImages }: BeforeAfterSliderProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="transformations"
      className="relative overflow-hidden bg-card py-24"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              See The Difference
            </span>
          </motion.div>
          <motion.h2
            className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-balance">Before & After</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Drag the slider to see the dramatic transformation our detailing services provide.
            Real results from real customers.
          </motion.p>
        </div>

        {/* Slider Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {images.map((image, index) => (
            <SliderItem key={index} image={image} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="mb-6 text-muted-foreground text-lg md:text-xl lg:text-2xl font-semibold">
            Ready to see your car transformed?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Your Detail
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
