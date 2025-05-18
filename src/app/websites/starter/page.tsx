'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CodeIcon, RocketIcon, ChartIcon, SparklesIcon, DevicesIcon } from '../../components/icons';

export default function StarterPage() {
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
              Pack Starter
              <span className="block text-blue-600">399€</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Une solution simple et efficace pour présenter votre activité en ligne avec style.
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
                src="/mockups/landing-page-showcase.png"
                alt="Site Vitrine Example"
                width={1200}
                height={600}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-3 sm:px-6 py-1 sm:py-2 rounded-full shadow-lg">
                <p className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Design responsive & moderne</p>
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
                  <DevicesIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Responsive</h3>
                <p className="text-gray-600">
                  Votre site s'adapte parfaitement à tous les écrans : ordinateurs, tablettes et smartphones.
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
                  <SparklesIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Moderne</h3>
                <p className="text-gray-600">
                  Une interface élégante et professionnelle qui met en valeur votre image de marque.
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
                  <CodeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Code Optimisé</h3>
                <p className="text-gray-600">
                  Un développement soigné pour des performances optimales et une maintenance facile.
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
                Tout ce dont vous avez besoin pour démarrer
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <RocketIcon className="h-5 w-5 text-blue-600 mr-3" />
                  Page d'accueil complète et personnalisée
                </li>
                <li className="flex items-center text-gray-600">
                  <SparklesIcon className="h-5 w-5 text-blue-600 mr-3" />
                  Animations fluides et élégantes
                </li>
                <li className="flex items-center text-gray-600">
                  <ChartIcon className="h-5 w-5 text-blue-600 mr-3" />
                  Optimisation SEO de base
                </li>
                <li className="flex items-center text-gray-600">
                  <DevicesIcon className="h-5 w-5 text-blue-600 mr-3" />
                  Compatible tous appareils
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
                src="/mockups/starter-features.png"
                alt="Fonctionnalités"
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
            Prêt à lancer votre projet ?
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