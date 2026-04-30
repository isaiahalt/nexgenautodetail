import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { siteConfig } from '@/lib/seo'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: 'Nex-Gen AutoDetail | Premium Auto Detailing in Trumbull & Mahoning Counties, Ohio',
    template: '%s | Nex-Gen AutoDetail',
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: 'Automotive',
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Nex-Gen AutoDetail | Premium Auto Detailing in Trumbull & Mahoning Counties, Ohio',
    description: siteConfig.description,
    type: 'website',
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    locale: 'en_US',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Nex-Gen AutoDetail Premium auto detailing service in Ohio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nex-Gen AutoDetail | Premium Auto Detailing in Ohio',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.baseUrl}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.baseUrl,
    telephone: siteConfig.phone,
    image: `${siteConfig.baseUrl}${siteConfig.ogImage}`,
    sameAs: siteConfig.sameAs,
    priceRange: '$$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Howland',
      },
      {
        '@type': 'City',
        name: 'Warren',
      },
      {
        '@type': 'City',
        name: 'Boardman',
      },
      {
        '@type': 'City',
        name: 'Canfield',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'US-OH',
      availableLanguage: 'en',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Auto detailing packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Interior',
            description: 'Deep plastic steam cleaning, leather and vinyl protection, seat and carpet shampooing, and odor elimination.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Exterior',
            description: 'Hand wash, wheel cleaning, bug removal, iron decontamination, clay bar treatment, sealant wax, and trim restoration.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Makeover',
            description: 'Combined interior and exterior premium detailing package for a full vehicle refresh.',
          },
        },
      ],
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
