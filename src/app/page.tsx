'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Import des images
import backgroundImg from '../../pictures/background.png';
import logoImg from '../../pictures/Logo.jpg';
import getsImg from '../../pictures/gets.png';

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
          className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-900/90"
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
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-400/20 blur-lg" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-4 md:mb-6 tracking-tight">
              E-DInamic
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto font-light">
              Services informatiques personnalisés : réparation PC, montage sur mesure et création de sites web
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Services avec cartes flottantes */}
      <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-blue-50/30 to-gray-50">
          <Image
            src="/images/gets.png"
            alt="Background Pattern"
            fill
            className="object-cover opacity-5"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Des solutions sur mesure pour optimiser votre infrastructure informatique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Réparation PC",
                description: "Diagnostic et réparation de vos ordinateurs, optimisation des performances et maintenance préventive",
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                href: "/services/informatique"
              },
              {
                title: "Montage PC",
                description: "Assemblage sur mesure de votre ordinateur selon vos besoins et votre budget, avec des composants soigneusement sélectionnés",
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                href: "/services/informatique"
              },
              {
                title: "Création de Sites Web",
                description: "Conception et développement de sites web modernes, responsifs et personnalisés pour votre entreprise ou projet personnel",
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                href: "/services/web"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <Link href={service.href} className="block">
                  <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <div className="mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                    <p className="text-base md:text-lg text-gray-600">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Call to Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative lg:col-span-3"
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
        </div>
      </section>

      {/* Call to Action - Réparation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-8">
            {/* Réparation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
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

            {/* Web */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative"
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
        </div>
      </section>
    </main>
  );
} 