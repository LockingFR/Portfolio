'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CodeIcon, RocketIcon, ChartIcon, SparklesIcon, DevicesIcon, GlobeIcon, MailIcon } from '../../components/icons';

export default function BusinessPage() {
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
              Pack Business
              <span className="block text-blue-600">599€</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Une solution complète pour développer votre présence en ligne avec un site web professionnel multi-pages.
            </p>
          </motion.div>

          {/* Image de mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-5xl mx-auto mt-8 sm:mt-16 px-4 sm:px-0"
          >
            <div className="relative">
              <Image
                src="/mockups/multi-page-showcase.png"
                alt="Site Business Example"
                width={1200}
                height={600}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-3 sm:px-6 py-1 sm:py-2 rounded-full shadow-lg">
                <p className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">5 pages personnalisées avec formulaires EmailJS</p>
              </div>
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-blue-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">
                Support 3 mois inclus
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Caractéristiques */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ce qui est inclus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <GlobeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">5 Pages Personnalisées</h3>
                <p className="text-gray-600">
                  Un site web complet avec 5 pages sur mesure pour présenter votre activité en détail.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <MailIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">EmailJS Intégré</h3>
                <p className="text-gray-600">
                  Système de formulaires avancé pour une communication efficace avec vos clients.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <ChartIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO de Base</h3>
                <p className="text-gray-600">
                  Optimisation pour les moteurs de recherche pour améliorer votre visibilité en ligne.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités détaillées */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Une Solution Business Complète
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <RocketIcon className="h-5 w-5 text-blue-600 mr-3" />
                  Design professionnel et moderne
                </li>
                <li className="flex items-center text-gray-600">
                  <SparklesIcon className="h-5 w-5 text-blue-600 mr-3" />
                  Animations et transitions fluides
                </li>
                <li className="flex items-center text-gray-600">
                  <DevicesIcon className="h-5 w-5 text-blue-600 mr-3" />
                  Parfaitement responsive
                </li>
                <li className="flex items-center text-gray-600">
                  <CodeIcon className="h-5 w-5 text-blue-600 mr-3" />
                  Code optimisé pour les performances
                </li>
                <li className="flex items-center text-gray-600">
                  <GlobeIcon className="h-5 w-5 text-blue-600 mr-3" />
                  Hébergement et domaine inclus
                </li>
                <li className="flex items-center text-gray-600">
                  <MailIcon className="h-5 w-5 text-blue-600 mr-3" />
                  Support technique 3 mois
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px]"
            >
              <Image
                src="/mockups/business-features.png"
                alt="Fonctionnalités Business"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Prêt à développer votre présence en ligne ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/websites/quote"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-blue-600 bg-white hover:bg-blue-50 rounded-lg transition-colors"
            >
              Demander un devis
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white border-2 border-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 