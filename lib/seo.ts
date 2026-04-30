export const siteConfig = {
  name: 'Nex-Gen AutoDetail',
  baseUrl: 'https://nexgenautodetail.com',
  description:
    'premium auto detailing in Trumbull and Mahoning Counties, Ohio, with interior detailing, exterior wash packages, paint decontamination, steam cleaning, and protective wax services.',
  ogImage: '/apple-icon.png',
  phone: '+1-330-984-8257',
  serviceArea: 'Trumbull & Mahoning Counties, OH',
  hours: 'Mon - Sat: 8am - 6pm',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61573746522597',
    'https://www.tiktok.com/@nexgenautodetailing',
    'https://instagram.com/nexgenautodetail',
  ],
  keywords: [
    'premium auto detailing ohio',
    'car detailing trumbull county',
    'car detailing mahoning county',
    'interior detailing howland oh',
    'auto detailing warren oh',
    'car detailing boardman oh',
    'car detailing canfield oh',
    'paint decontamination ohio',
    'steam cleaning cars ohio',
    'protective wax detailing ohio',
  ],
} as const

export const seoRoutes = [
  {
    path: '/',
    priority: 1,
    changeFrequency: 'weekly' as const,
  },
  {
    path: '/privacy-policy',
    priority: 0.3,
    changeFrequency: 'yearly' as const,
  },
  {
    path: '/terms-of-service',
    priority: 0.3,
    changeFrequency: 'yearly' as const,
  },
] as const

export const seoLastModified = new Date('2026-04-21T00:00:00.000Z')
