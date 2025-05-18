'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CodeIcon, RocketIcon, ChartIcon, SparklesIcon } from '../components/icons'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const services = [
  {
    title: 'Sites Vitrines',
    description: 'Présentez votre entreprise avec élégance',
    features: ['Design moderne', 'Responsive', 'SEO optimisé', 'Formulaire de contact'],
    image: '/images/templates/vitrine.jpg'
  },
  {
    title: 'E-commerce',
    description: 'Vendez vos produits en ligne',
    features: ['Catalogue produits', 'Panier d\'achat', 'Paiement sécurisé', 'Gestion des stocks'],
    image: '/images/templates/ecommerce.jpg'
  },
  {
    title: 'Applications Web',
    description: 'Solutions web sur mesure',
    features: ['Fonctionnalités personnalisées', 'Interface intuitive', 'Base de données', 'API REST'],
    image: '/images/templates/webapp.jpg'
  },
  {
    title: 'Portfolios',
    description: 'Mettez en valeur vos créations',
    features: ['Galerie dynamique', 'Animations fluides', 'Design créatif', 'Optimisation des images'],
    image: '/images/templates/portfolio.jpg'
  }
]

export default function WebsitesPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background décoratif */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/wave-top.svg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Création de Sites Web
              <span className="block text-blue-600">Sur Mesure</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Des solutions web professionnelles adaptées à vos besoins, de la simple page vitrine au site e-commerce complet.
            </p>
          </motion.div>

          {/* Image de mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-5xl mx-auto mt-16"
          >
            <Image
              src="/mockups/responsive-showcase.png"
              alt="Responsive Design Showcase"
              width={1200}
              height={600}
              className="rounded-lg shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Section des offres */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offre Starter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <CodeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pack Starter</h3>
                <p className="text-gray-600 mb-6">Site vitrine une page, parfait pour présenter votre activité</p>
                <div className="text-3xl font-bold text-gray-900 mb-6">399€</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-600">
                    <SparklesIcon className="h-5 w-5 text-blue-600 mr-2" />
                    Design moderne
                  </li>
                  <li className="flex items-center text-gray-600">
                    <RocketIcon className="h-5 w-5 text-blue-600 mr-2" />
                    Responsive design
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChartIcon className="h-5 w-5 text-blue-600 mr-2" />
                    Formulaire de contact
                  </li>
                </ul>
                <Link 
                  href="/websites/starter"
                  className="block w-full py-3 px-6 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  En savoir plus
                </Link>
              </div>
            </motion.div>

            {/* Offre Business */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <RocketIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pack Business</h3>
                <p className="text-gray-600 mb-6">Site web complet avec pages multiples et fonctionnalités avancées</p>
                <div className="text-3xl font-bold text-gray-900 mb-6">599€</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-600">
                    <SparklesIcon className="h-5 w-5 text-blue-600 mr-2" />
                    5 pages personnalisées
                  </li>
                  <li className="flex items-center text-gray-600">
                    <RocketIcon className="h-5 w-5 text-blue-600 mr-2" />
                    Intégration EmailJS
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChartIcon className="h-5 w-5 text-blue-600 mr-2" />
                    SEO de base
                  </li>
                </ul>
                <Link 
                  href="/websites/business"
                  className="block w-full py-3 px-6 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  En savoir plus
                </Link>
              </div>
            </motion.div>

            {/* Offre Pro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <ChartIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pack Pro</h3>
                <p className="text-gray-600 mb-6">Solution complète avec fonctionnalités premium et SEO avancé</p>
                <div className="text-3xl font-bold text-gray-900 mb-6">799€</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-600">
                    <SparklesIcon className="h-5 w-5 text-blue-600 mr-2" />
                    Site complet sur mesure
                  </li>
                  <li className="flex items-center text-gray-600">
                    <RocketIcon className="h-5 w-5 text-blue-600 mr-2" />
                    Animations avancées
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChartIcon className="h-5 w-5 text-blue-600 mr-2" />
                    SEO premium
                  </li>
                </ul>
                <Link 
                  href="/websites/pro"
                  className="block w-full py-3 px-6 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  En savoir plus
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Besoin d'une solution personnalisée ?
          </h2>
          <Link
            href="/websites/quote"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </main>
  )
} 