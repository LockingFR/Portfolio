import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'E-DInamic | Services informatiques personnalisés',
  description: 'E-DInamic - Services informatiques sur mesure : réparation PC, montage sur mesure et création de sites web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
} 