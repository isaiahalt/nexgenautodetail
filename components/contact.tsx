"use client"

import { useState, useRef } from "react"
import { Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"
import { motion, useInView, AnimatePresence } from "framer-motion"

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "(330) 984-8257",
    href: "tel:+13309848257",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Trumbull & Mahoning Counties, OH",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 8am - 6pm",
    href: null,
  },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mbdqkoww", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("Error sending message.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <motion.p className="text-primary font-medium mb-4" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
              Get In Touch
            </motion.p>
            <motion.h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}>
              Ready to Transform Your Vehicle?
            </motion.h2>
            <motion.p className="text-muted-foreground leading-relaxed mb-8" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
              Book your appointment today or reach out with any questions. We serve Trumbull & Mahoning Counties.
            </motion.p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}>
                  {item.href ? (
                    <a href={item.href} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div className="bg-background p-8 rounded-lg border border-border relative overflow-hidden" initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <h3 className="text-xl font-semibold text-foreground mb-6">Book Your Appointment</h3>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div key="success" className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10">
                  <FieldGroup className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field><FieldLabel htmlFor="firstName">First Name</FieldLabel><Input id="firstName" name="firstName" required /></Field>
                      <Field><FieldLabel htmlFor="lastName">Last Name</FieldLabel><Input id="lastName" name="lastName" required /></Field>
                    </div>
                    <Field><FieldLabel htmlFor="email">Email</FieldLabel><Input id="email" name="email" type="email" required /></Field>
                    <Field><FieldLabel htmlFor="phone">Phone Number</FieldLabel><Input id="phone" name="phone" type="tel" required /></Field>
                    <Field><FieldLabel htmlFor="vehicle">Vehicle Type</FieldLabel><Input id="vehicle" name="vehicle" required /></Field>
                    <Field>
                      <FieldLabel htmlFor="service">Service Interested In</FieldLabel>
                      <select id="service" name="service" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:ring-1 focus-visible:ring-ring" required>
                        <option value="">Select a service</option>
                        <option value="full-interior">Full Interior</option>
                        <option value="full-exterior">Full Exterior</option>
                        <option value="full-makeover">Full Makeover</option>
                        <option value="maintenance">Maintenance Package</option>
                      </select>
                    </Field>
                    <Field><FieldLabel htmlFor="message">Message</FieldLabel><Textarea id="message" name="message" rows={4} /></Field>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Request Appointment"}
                    </Button>
                  </FieldGroup>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}