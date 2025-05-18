'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section avec effet de parallaxe */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-700/90 to-blue-900/90"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 overflow-hidden"
          >
            <div className="absolute inset-[-10%] scale-110">
              <Image
                src="/images/background.png"
                alt="Circuit Pattern"
                fill
                className="object-cover opacity-40"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Texte flottant avec effet de profondeur */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [-3, 3, -3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-12 md:-top-20 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-400/20 blur-2xl" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 tracking-tight drop-shadow-2xl">
              E-DInamic
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 md:mb-12 max-w-3xl mx-auto font-light drop-shadow-lg">
              Votre partenaire de confiance pour tous vos besoins informatiques et web
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services/informatique"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Services Informatiques
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services/web"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
                >
                  Services Web
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Effet de particules en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent" />
      </section>

      {/* Contenu principal avec background GETS */}
      <div className="relative">
        {/* Background GETS pour tout le contenu */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/gets.png"
            alt="GETS Background"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        </div>

        {/* Section Services */}
        <section className="relative z-10 py-20 md:py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nos Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des solutions complètes et personnalisées pour répondre à tous vos besoins numériques
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Informatique */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <Link href="/services/informatique" className="block">
                  <div className="absolute inset-0 bg-blue-400/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Services Informatiques</h3>
                      <p className="text-gray-600 mb-6">
                        Réparation, maintenance et montage PC sur mesure. Un service professionnel pour des solutions durables.
                      </p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Diagnostic complet
                        </li>
                        <li className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Réparation toutes marques
                        </li>
                        <li className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Montage PC sur mesure
                        </li>
                      </ul>
                    </div>
                    <span className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      Découvrir nos services
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>

              {/* Service Web */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <Link href="/services/web" className="block">
                  <div className="absolute inset-0 bg-blue-400/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Services Web</h3>
                      <p className="text-gray-600 mb-6">
                        Création de sites web professionnels et applications sur mesure. Des solutions modernes et performantes.
                      </p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Sites vitrines
                        </li>
                        <li className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          E-commerce
                        </li>
                        <li className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Applications sur mesure
                        </li>
                      </ul>
                    </div>
                    <span className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      Découvrir nos services
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Pourquoi nous choisir */}
        <section className="relative z-10 py-20 md:py-32 bg-transparent">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pourquoi Nous Choisir ?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une expertise reconnue et un service client d'excellence
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Expertise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-white p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Expertise</h3>
                  <p className="text-gray-600">
                    Plus de 10 ans d'expérience dans le domaine informatique et le développement web.
                  </p>
                </div>
              </motion.div>

              {/* Qualité */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-white p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Qualité</h3>
                  <p className="text-gray-600">
                    Un service professionnel et des solutions durables adaptées à vos besoins.
                  </p>
                </div>
              </motion.div>

              {/* Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-white p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
                  <p className="text-gray-600">
                    Un accompagnement personnalisé et un support technique réactif.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 py-20 md:py-32 bg-white/80"
        >
          <div className="container mx-auto px-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:p-12 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Prêt à démarrer votre projet ?
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Nous contacter
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 