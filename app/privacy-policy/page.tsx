import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Nex-Gen AutoDetail",
  description: "Privacy Policy for Nex-Gen AutoDetail. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Nex-Gen AutoDetail",
    description: "Privacy Policy for Nex-Gen AutoDetail. Learn how we collect, use, and protect your personal information.",
    url: "https://nexgenautodetail.com/privacy-policy",
    type: "article",
  },
}

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mb-12 text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  1. Introduction
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Nex-Gen AutoDetail (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our auto detailing services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  2. Information We Collect
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  We may collect information about you in a variety of ways, including:
                </p>
                <h3 className="mb-2 mt-6 text-lg font-medium text-foreground">
                  Personal Data
                </h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  When you book an appointment or contact us, we may collect personally identifiable 
                  information such as your name, email address, phone number, and vehicle information.
                </p>
                <h3 className="mb-2 mt-6 text-lg font-medium text-foreground">
                  Usage Data
                </h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  We may automatically collect certain information when you visit our website, including 
                  your IP address, browser type, operating system, access times, and the pages you have 
                  viewed directly before and after accessing the website.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  3. How We Use Your Information
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  We may use the information we collect from you for the following purposes:
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>To schedule and provide our auto detailing services</li>
                  <li>To send you appointment confirmations and reminders</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send promotional communications (with your consent)</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  4. Sharing Your Information
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information with trusted service providers who assist us in operating our business, 
                  such as payment processors and scheduling software, provided they agree to keep your 
                  information confidential.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  5. Data Security
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect the security 
                  of your personal information. However, no method of transmission over the Internet or 
                  electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  6. Your Rights
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  You have the right to access, correct, or delete your personal information. You may also 
                  opt out of receiving promotional communications from us at any time by contacting us 
                  or using the unsubscribe link in our emails.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  7. Cookies
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Our website may use cookies to enhance your experience. Cookies are small data files 
                  stored on your device. You can set your browser to refuse cookies or alert you when 
                  cookies are being sent. However, some parts of our website may not function properly 
                  without cookies.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  8. Changes to This Policy
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  9. Contact Us
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
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
