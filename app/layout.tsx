import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { company } from '@/lib/company'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.macrocephalon.com'),
  title: 'Macrocephalon Private Limited | Software, AI & Engineering Project Solutions',
  description: 'Macrocephalon Private Limited provides software development, AI solutions, web applications, embedded systems, MATLAB projects, academic engineering projects, research support, and technology consulting services.',
  keywords: [
    'Macrocephalon',
    'Software Development',
    'AI Solutions',
    'Web Development',
    'Engineering Projects',
    'Academic Projects',
    'Embedded Systems',
    'MATLAB Projects',
    'Research Support',
    'LLM Integration',
    'IoT Projects',
    'Technology Consulting',
  ],
  authors: [{ name: 'Macrocephalon Private Limited' }],
  creator: 'Macrocephalon Private Limited',
  publisher: 'Macrocephalon Private Limited',
  openGraph: {
    title: 'Macrocephalon Private Limited | Software, AI & Engineering Project Solutions',
    description: 'Engineering the Future From Code to Circuit — software development, AI solutions, engineering projects, MATLAB, embedded systems, research support, and technology consulting.',
    url: 'https://www.macrocephalon.com',
    siteName: 'Macrocephalon Private Limited',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg?v=4', type: 'image/svg+xml' },
      { url: '/logo-trademark.png', type: 'image/png' },
    ],
    apple: '/logo-trademark.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.legalName,
    legalName: company.legalName,
    alternateName: [company.brandName, company.shortLegalName, 'Macrocephalon Services & Technologies'],
    foundingDate: company.incorporationDate,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'CIN',
      value: company.cin,
    },
    url: 'https://www.macrocephalon.com',
    logo: 'https://www.macrocephalon.com/icon.svg',
    slogan: 'Engineering the Future From Code to Circuit',
    email: 'director@macrocephalon.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaysingpur',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    sameAs: [],
  }

  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <GoogleAnalytics gaId="G-R4BTVB7C2M" />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
