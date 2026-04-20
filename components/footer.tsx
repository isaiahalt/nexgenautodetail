"use client"

import Link from "next/link"
import { Phone, MapPin, Facebook, Instagram } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Music2 } from 'lucide-react';

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Interior Detailing",
  "Exterior Wash",
  "Protective Sealant Wax",
  "Paint Decontamination",
  "Full Makeover",
  "Maintenance Package",
]

export function Footer() {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-50px" })

  return (
    <footer className="bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 py-16" ref={footerRef}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block mb-4">
              <motion.span
                className="text-xl font-bold tracking-tight"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-primary">NEX-GEN</span>{" "}
                <span className="text-foreground">AutoDetail</span>
              </motion.span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium auto detailing services in Trumbull & Mahoning Counties. 
              We bring showroom-quality results to your driveway.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61573746522597"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Facebook"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/nexgenautodetail2025?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
           <motion.a
  href="https://www.tiktok.com/@nexgenautodetailing?is_from_webapp=1&sender_device=pc"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
  aria-label="Tiktok"
  whileHover={{ scale: 1.1, y: -2 }}
  whileTap={{ scale: 0.95 }}
>
  <Music2 className="h-5 w-5" />
</motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    <motion.span whileHover={{ x: 5 }} className="inline-block">
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <span className="text-sm text-muted-foreground">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 3 }}>
                <a
                  href="tel:+13309848257"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <motion.span whileHover={{ rotate: 15 }}>
                    <Phone className="h-4 w-4" />
                  </motion.span>
                  <span>(330) 984-8257</span>
                </a>
              </motion.li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  Serving Howland, Warren,<br />
                  Boardman & Canfield, OH
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
       {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nex-Gen AutoDetail. All rights reserved.
          </p>
          
          {/* Added Developer Link */}
          <div className="text-sm text-muted-foreground">
            Developed by{" "}
            <a 
              href="https://github.com/petervannord" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Gabriel
            </a>
          </div>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
