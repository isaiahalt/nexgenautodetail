import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Nex-Gen AutoDetail",
  description: "Terms of Service for Nex-Gen AutoDetail. Read our terms and conditions for using our auto detailing services.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Nex-Gen AutoDetail",
    description: "Terms of Service for Nex-Gen AutoDetail. Read our terms and conditions for using our auto detailing services.",
    url: "https://nexgenautodetail.com/terms-of-service",
    type: "article",
  },
}

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Back link */}
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            {/* Header */}
            <h1 className="mb-4 font-serif text-4xl font-bold text-foreground">
              Terms of Service
            </h1>
            <p className="mb-12 text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  1. Agreement to Terms
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  By accessing our website or using our auto detailing services, you agree to be bound by 
                  these Terms of Service and all applicable laws and regulations. If you do not agree with 
                  any of these terms, you are prohibited from using our services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  2. Services
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Nex-Gen AutoDetail provides mobile auto detailing services including but not limited to:
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Exterior washing and detailing</li>
                  <li>Interior cleaning and detailing</li>
                  <li>Paint decontamination and waxing</li>
                  <li>Engine bay cleaning</li>
                  <li>Headlight restoration</li>
                </ul>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Services are provided at customer-designated locations within our service area 
                  (Trumbull & Mahoning Counties, Ohio).
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  3. Appointments & Scheduling
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Appointments can be scheduled through our website, phone, or text message. 
                  By scheduling an appointment, you agree to:
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Provide accurate contact and vehicle information</li>
                  <li>Be present or have the vehicle accessible at the scheduled time</li>
                  <li>Ensure adequate space and access for our team to perform services</li>
                  <li>Have access to water and electricity if required for the service</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  4. Cancellation Policy
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  We understand that plans change. We request at least 24 hours notice for cancellations 
                  or rescheduling. Cancellations made with less than 24 hours notice may be subject to a 
                  cancellation fee. Repeated no-shows may result in requiring a deposit for future bookings.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  5. Pricing & Payment
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Prices for our services are listed on our website and are subject to change without notice. 
                  Final pricing may vary based on vehicle condition, size, and additional services requested. 
                  Payment is due upon completion of services unless otherwise arranged.
                </p>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  We accept cash, online payment, and other payment methods as indicated at the time of booking.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  6. Vehicle Condition
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Before beginning any service, we will conduct a brief inspection of your vehicle. 
                  We recommend removing all personal belongings and valuables from your vehicle prior 
                  to service. Nex-Gen AutoDetail is not responsible for items left in vehicles.
                </p>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Please inform us of any existing damage, paint issues, or areas of concern before 
                  service begins. Some pre-existing conditions may affect the results of certain services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  7. Liability & Disclaimers
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  While we take the utmost care with every vehicle, Nex-Gen AutoDetail is not liable for:
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Pre-existing damage or conditions</li>
                  <li>Paint or clear coat failure due to age, wear, or previous repairs</li>
                  <li>Damage caused by defective factory paint or aftermarket modifications</li>
                  <li>Items left in the vehicle</li>
                  <li>Weather-related issues affecting completed services</li>
                </ul>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Our liability is limited to the cost of the services provided. We will work with you 
                  to address any concerns about our work quality.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  8. Satisfaction Guarantee
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  We stand behind our work. If you are not satisfied with our service, please contact us 
                  within 48 hours of service completion. 
                </p>
              </section>

              {/* <section className="mb-10">
              
             
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Use of automatic car washes with brushes</li>
                  <li>Use of harsh chemicals or abrasive cleaning methods</li>
                  <li>Failure to follow maintenance recommendations</li>
                  <li>Physical damage to the coated surfaces</li>
                </ul>
              </section> */}

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  9. Intellectual Property
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  All content on this website, including text, images, logos, and graphics, is the property 
                  of Nex-Gen AutoDetail and is protected by applicable intellectual property laws. You may 
                  not reproduce, distribute, or use any content without our prior written consent.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  10. Changes to Terms
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  We reserve the right to modify these Terms of Service at any time. Changes will be 
                  effective immediately upon posting to our website. Your continued use of our services 
                  constitutes acceptance of any modified terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  11. Governing Law
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  These Terms of Service shall be governed by and construed in accordance with the laws 
                  of the State of Ohio, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  12. Contact Information
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 rounded-xl border border-border bg-card p-6">
                  <p className="font-semibold text-foreground">Nex-Gen AutoDetail</p>
                  <p className="text-muted-foreground">Phone: (330) 984-8257</p>
                
                  <p className="text-muted-foreground">Service Area: Trumbull & Mahoning Counties, Ohio</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
