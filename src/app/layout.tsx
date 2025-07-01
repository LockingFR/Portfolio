import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Metadata } from 'next'
import EmailJSProvider from './providers/emailjs-provider'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'E-DInamic | Services informatiques professionnels',
  description: 'E-DInamic - Entreprise de services informatiques : réparation PC, montage sur mesure et création de sites web à Saint-Malo',
  keywords: 'services informatiques, réparation PC, montage PC, création sites web, Saint-Malo, E-DInamic',
  openGraph: {
    title: 'E-DInamic | Services informatiques professionnels',
    description: 'Services informatiques professionnels : réparation PC, montage sur mesure et création de sites web à Saint-Malo',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'E-DInamic'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "E-DInamic",
              "image": "https://www.edinamic.fr/new-logo.png",
              "description": "Services informatiques professionnels : réparation PC, montage sur mesure et création de sites web à Saint-Malo",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Saint-Malo",
                "addressRegion": "Bretagne",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "48.6493",
                "longitude": "-2.0257"
              },
              "url": "https://www.edinamic.fr",
              "telephone": "",
              "priceRange": "€€",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/edinamic",
                "https://www.facebook.com/edinamic"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <EmailJSProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </div>
        </EmailJSProvider>
      </body>
    </html>
  );
} 