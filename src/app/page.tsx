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
            className="absolute inset-0"
          >
            <Image
              src="/images/background.png"
              alt="Circuit Pattern"
              fill
              className="object-cover opacity-40"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Logo flottant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-4 left-4 md:top-8 md:left-8 z-20"
        >
          <Image
            src="/images/Logo.jpg"
            alt="E-DInamic Logo"
            width={50}
            height={50}
            className="rounded-lg shadow-lg md:w-[60px] md:h-[60px]"
          />
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
              Solutions d'automatisation et support informatique pour propulser votre entreprise vers l'avenir
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            <Link href="/services" className="group relative w-full sm:w-auto">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Découvrir nos services
              </motion.button>
            </Link>
            <Link href="/contact" className="group relative w-full sm:w-auto">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-base md:text-lg hover:bg-white/10 transition-all"
              >
                Nous contacter
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator avec animation fluide */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ 
              y: [-10, 10, -10],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center"
          >
            <span className="text-white/60 text-sm mb-2">Découvrir</span>
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
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
                title: "Automatisation RPA",
                description: "Optimisez vos processus métier grâce à l'automatisation robotisée",
                icon: (
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
              {
                title: "Support Informatique",
                description: "Une assistance technique réactive et professionnelle pour votre parc informatique",
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "EDI EDIFACT",
                description: "Solutions d'échange de données informatisées pour le secteur logistique",
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                )
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
                <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-base md:text-lg text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA avec effet de profondeur */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-blue-900 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/background.png"
            alt="Circuit Pattern"
            fill
            className="object-cover opacity-20"
          />
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center relative"
          >
            <motion.div
              animate={{ 
                y: [-3, 3, -3],
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
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 relative">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé
            </p>
            <Link href="/contact" className="group relative inline-block w-full sm:w-auto">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Demander un devis
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 