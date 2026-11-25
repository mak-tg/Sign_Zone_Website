import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.signzoneusa.com'),
  title: {
    default: 'Sign Zone | Custom Business Signs in Dallas–Fort Worth',
    template: '%s',
  },
  description:
    'Channel letters, monument, pylon, storefront, interior and vehicle signs for Dallas–Fort Worth businesses. Designed, permitted, built and installed by one team.',
  applicationName: 'Sign Zone',
  authors: [{ name: 'Sign Zone DFW', url: 'https://www.signzoneusa.com' }],
  keywords: [
    'commercial signs Dallas',
    'channel letter signs Fort Worth',
    'monument signs DFW',
    'storefront signs Texas',
    'custom business signs Plano',
    'LED sign contractor Frisco',
    'sign permitting Dallas',
    'pylon signs Arlington',
    'vehicle wraps Carrollton',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sign Zone | Custom Business Signs in Dallas–Fort Worth',
    description:
      'Channel letters, monument, pylon, storefront, interior and vehicle signs for Dallas–Fort Worth businesses. Designed, permitted, built and installed by one team.',
    url: 'https://www.signzoneusa.com',
    siteName: 'Sign Zone DFW',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 600,
        height: 180,
        alt: 'Sign Zone Commercial Business Signs Dallas-Fort Worth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Zone | Custom Business Signs in Dallas–Fort Worth',
    description:
      'Channel letters, monument, pylon, storefront, interior and vehicle signs for Dallas–Fort Worth businesses. Designed, permitted, built and installed by one team.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/images/favicon.png',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Dallas-Fort Worth',
    'geo.position': '32.7767;-96.7970',
    ICBM: '32.7767, -96.7970',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        {/* Theme before first paint: saved choice, otherwise light (the default). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "try{var t=localStorage.getItem('sz-theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light')}catch(e){}",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,600;0,700;0,800;1,700;1,800&family=Barlow:ital,wght@0,600;0,700;0,800;0,900;1,700;1,800&family=Outfit:wght@600;700;800;900&display=swap"
        />
      </head>
      <body>
        <GoogleAnalytics />
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Mobile sticky CTA bar */}
        <div className="mbar">
          <a className="btn btn-ghost" href="tel:2147144623">
            Call
          </a>
          <a className="btn btn-ghost" href="sms:2147144623">
            Text
          </a>
          <a className="btn btn-blue" href="/quote" style={{ flex: 2 }}>
            Free quote
          </a>
        </div>
      </body>
    </html>
  )
}
