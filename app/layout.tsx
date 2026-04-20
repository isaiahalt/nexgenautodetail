import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Nex-Gen AutoDetail | Premium Car Detailing Services in Ohio',
  description: 'Experience premium car detailing services in Trumbull & Mahoning Counties, Ohio. Professional interior detailing, paint decontamination, protective wax coating, and mobile detailing. Serving Howland, Warren, Boardman, and Canfield.',
  keywords: 'car detailing, auto detailing, paint decontamination, interior cleaning, protective wax, mobile detailing, car maintenance, Howland OH, Warren OH, Boardman OH, Canfield OH, professional car care',
  authors: [{ name: 'Nex-Gen AutoDetail' }],
  creator: 'Nex-Gen AutoDetail',
  publisher: 'Nex-Gen AutoDetail',
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
  metadataBase: new URL('https://nexgenautodetail.com'),
  canonical: 'https://nexgenautodetail.com',
  openGraph: {
    title: 'Nex-Gen AutoDetail | Premium Car Detailing Services',
    description: 'Professional car detailing services in Trumbull & Mahoning Counties, Ohio. Paint decontamination, interior detailing, protective wax coating, and mobile service.',
    type: 'website',
    url: 'https://nexgenautodetail.com',
    siteName: 'Nex-Gen AutoDetail',
    locale: 'en_US',
    images: [
      {
        url: '/images/hero-car.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium car detailing service',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nex-Gen AutoDetail | Premium Car Detailing Services',
    description: 'Professional car detailing in Ohio. Paint protection, interior cleaning, and mobile service.',
    creator: '@nexgenautodetail',
    images: ['/images/hero-car.jpg'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://nexgenautodetail.com',
    name: 'Nex-Gen AutoDetail',
    description: 'Professional mobile car detailing services in Trumbull & Mahoning Counties, Ohio',
    url: 'https://nexgenautodetail.com',
    telephone: '+1-330-984-8257',
    email: 'info@nexgenautodetail.com',
    image: 'https://nexgenautodetail.com/images/hero-car.jpg',
    sameAs: [
      'https://www.facebook.com/profile.php?id=61573746522597',
      'https://www.tiktok.com/@nexgenautodetailing',
      'https://instagram.com/nexgenautodetail',
    ],
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Serving Howland, Warren, Boardman & Canfield',
      addressLocality: 'Trumbull & Mahoning Counties',
      addressRegion: 'OH',
      addressCountry: 'US',
    },
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://nexgenautodetail.com" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
