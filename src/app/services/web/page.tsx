'use client'

import PageBackground from '../../components/PageBackground'
import { GlobeIcon, SparklesIcon, ShieldIcon } from '../../components/icons'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ServicesWeb() {
  return (
    <PageBackground>
      <div className="container mx-auto px-6 py-32 md:py-40">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Services Web</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions web modernes et performantes pour votre entreprise.
            Du site vitrine à l'application sur mesure, nous donnons vie à vos projets.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
            <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
            <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <GlobeIcon className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Site Vitrine</h3>
              <p className="text-gray-600 mb-6">Présentez votre activité avec élégance</p>
              <ul className="space-y-2 text-gray-600">
                {['Design moderne', 'Responsive design', 'Optimisé SEO', 'Analytics intégrés'].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
            <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
            <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <SparklesIcon className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">E-commerce</h3>
              <p className="text-gray-600 mb-6">Vendez vos produits en ligne</p>
              <ul className="space-y-2 text-gray-600">
                {['Catalogue produits', 'Paiement sécurisé', 'Gestion des stocks', 'Dashboard admin'].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
            <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
            <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <ShieldIcon className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Application Web</h3>
              <p className="text-gray-600 mb-6">Solutions sur mesure pour votre entreprise</p>
              <ul className="space-y-2 text-gray-600">
                {['Développement custom', 'API intégrée', 'Base de données', 'Hébergement cloud'].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tarifs */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Nos Tarifs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <GlobeIcon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Site Vitrine</h3>
                <p className="text-gray-600 mb-6">À partir de 1000€</p>
                <ul className="space-y-2 text-gray-600">
                  {['Design personnalisé', 'Responsive design', 'Formulaire de contact', 'Hébergement 1 an offert'].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-blue-600 transform scale-105">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <SparklesIcon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">E-commerce</h3>
                <p className="text-gray-600 mb-6">À partir de 2000€</p>
                <ul className="space-y-2 text-gray-600">
                  {['Catalogue produits', 'Système de paiement', 'Formation incluse', 'Support technique'].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <ShieldIcon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sur Mesure</h3>
                <p className="text-gray-600 mb-6">Sur devis</p>
                <ul className="space-y-2 text-gray-600">
                  {['Analyse des besoins', 'Développement custom', 'Tests & déploiement', 'Maintenance'].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Nos Technologies</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Front-end</h3>
                <p className="text-gray-600">React, Next.js, Vue.js</p>
              </div>
            </div>

            <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Back-end</h3>
                <p className="text-gray-600">Node.js, Python, PHP</p>
              </div>
            </div>

            <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Base de données</h3>
                <p className="text-gray-600">MySQL, MongoDB, PostgreSQL</p>
              </div>
            </div>

            <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hébergement</h3>
                <p className="text-gray-600">AWS, Vercel, OVH</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative mt-16"
        >
          <div className="block">
            <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Un projet web ?</h3>
                  <p className="text-gray-600">
                    Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Demander un devis
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageBackground>
  )
} 