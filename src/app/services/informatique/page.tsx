'use client'

import PageBackground from '../../components/PageBackground'
import { DevicesIcon, ShieldIcon, SparklesIcon, CodeIcon, ServerIcon, DatabaseIcon, ChartIcon, CogIcon, CloudIcon } from '../../components/icons/index'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ServicesInformatique() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50/30 to-gray-50">
      <PageBackground>
        <div className="container mx-auto px-6 py-32 md:py-40">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Services Informatiques</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour tous vos besoins en informatique.
              Diagnostic, réparation et optimisation de vos équipements.
            </p>
          </div>

          {/* Types de pannes courantes */}
          <div className="mb-24">
            <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Types de pannes courantes</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Problèmes matériels</h3>
                <ul className="space-y-4">
                  {[
                    'Écran cassé',
                    'Batterie défectueuse',
                    'Problèmes de charge'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Problèmes logiciels</h3>
                <ul className="space-y-4">
                  {[
                    'PC lent',
                    'Virus & malwares',
                    'Windows corrompu'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Autres services</h3>
                <ul className="space-y-4">
                  {[
                    'Récupération données',
                    'Installation logiciels',
                    'Maintenance préventive'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <ChartIcon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Diagnostic</h3>
                <p className="text-gray-600 mb-6">Analyse complète de votre matériel</p>
                <ul className="space-y-2 text-gray-600">
                  {['Identification des problèmes', 'Tests matériels', 'Rapport détaillé', 'Devis gratuit si réparation'].map((feature, index) => (
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
                    <CogIcon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Réparation</h3>
                <p className="text-gray-600 mb-6">Solutions pour tous types de pannes</p>
                <ul className="space-y-2 text-gray-600">
                  {['Remplacement composants', 'Nettoyage approfondi', 'Mise à jour système', 'Optimisation performances'].map((feature, index) => (
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
                    <ServerIcon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Montage PC</h3>
                <p className="text-gray-600 mb-6">Configuration sur mesure</p>
                <ul className="space-y-2 text-gray-600">
                  {['Conseil personnalisé', 'Composants premium', 'Tests et benchmarks', 'Installation système'].map((feature, index) => (
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
                      <DevicesIcon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Diagnostic</h3>
                  <p className="text-gray-600 mb-6">À partir de 30€</p>
                  <ul className="space-y-2 text-gray-600">
                    {['Offert si réparation', 'Devis détaillé', 'Conseils inclus'].map((feature, index) => (
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
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Réparation</h3>
                  <p className="text-gray-600 mb-6">À partir de 50€</p>
                  <ul className="space-y-2 text-gray-600">
                    {['Main d\'oeuvre', 'Tests approfondis', 'Garantie 3 mois'].map((feature, index) => (
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
                      <CodeIcon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Montage PC</h3>
                  <p className="text-gray-600 mb-6">80€ (hors composants)</p>
                  <ul className="space-y-2 text-gray-600">
                    {['Installation complète', 'Tests de stabilité', 'Support technique'].map((feature, index) => (
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

          {/* Processus */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Notre Processus</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <ChartIcon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Diagnostic</h3>
                  <p className="text-gray-600">Analyse complète de votre matériel</p>
                </div>
              </div>

              <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <DatabaseIcon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Devis</h3>
                  <p className="text-gray-600">Proposition détaillée et transparente</p>
                </div>
              </div>

              <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <CogIcon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Réparation</h3>
                  <p className="text-gray-600">Intervention par nos experts</p>
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
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Tests</h3>
                  <p className="text-gray-600">Vérification approfondie</p>
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
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Besoin d'une réparation ?</h3>
                    <p className="text-gray-600">
                      Contactez-nous pour un diagnostic personnalisé de votre équipement
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Prendre rendez-vous
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
    </div>
  )
} 