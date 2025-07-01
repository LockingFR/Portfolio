'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../../components/ContactForm'

export default function ReparationMontagePc() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-32 md:py-40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Réparation & Montage PC à Saint-Malo
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert en réparation d'ordinateurs et montage PC sur mesure. Service rapide, professionnel et adapté à vos besoins.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services Informatiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Réparation PC */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-4">Réparation PC</h3>
              <p className="text-gray-600 mb-6">Service complet de réparation pour tous types d'ordinateurs</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Diagnostic gratuit
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Intervention rapide
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Réparation matérielle
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Dépannage logiciel
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Récupération de données
                </li>
              </ul>
            </motion.div>

            {/* Montage PC */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-4">Montage PC sur Mesure</h3>
              <p className="text-gray-600 mb-6">Configuration personnalisée selon vos besoins et votre budget</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Conseil personnalisé
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Composants premium
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Assemblage professionnel
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Tests et benchmarks
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Installation système
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Tarifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Diagnostic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Diagnostic</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">Gratuit</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Analyse complète
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Devis détaillé
                </li>
              </ul>
            </motion.div>

            {/* Réparation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Réparation</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">À partir de 49€</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Main d'œuvre
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Garantie intervention
                </li>
              </ul>
            </motion.div>

            {/* Montage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Montage PC</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">80€</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Assemblage complet
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Tests et optimisation
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Nous Choisir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Rapidité',
                description: 'Intervention sous 24h à Saint-Malo et environs'
              },
              {
                icon: '💪',
                title: 'Expertise',
                description: '5+ années d\'expérience en informatique'
              },
              {
                icon: '💰',
                title: 'Prix Justes',
                description: 'Tarifs transparents et devis gratuit'
              },
              {
                icon: '🤝',
                title: 'Service Local',
                description: 'Un professionnel de proximité à votre écoute'
              }
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Zone d'Intervention</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              Nous intervenons à Saint-Malo et dans les communes environnantes :
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Saint-Malo',
                'Dinard',
                'Cancale',
                'Saint-Jouan-des-Guérets',
                'Saint-Méloir-des-Ondes',
                'Paramé'
              ].map((location, index) => (
                <motion.div
                  key={location}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-blue-50 p-3 rounded-lg"
                >
                  {location}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-center mb-8">Demander un devis gratuit</h2>
              <p className="text-center text-gray-600 mb-12">
                Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé pour votre projet.
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 