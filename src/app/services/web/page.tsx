'use client'

import PageBackground from '../../components/PageBackground'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ServicesWeb() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50/30 to-gray-50">
      <PageBackground>
        <div className="container mx-auto px-6 py-32 md:py-40">
          {/* En-tête */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Création de Sites Web & Maquettes
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Développeur web indépendant, je propose des solutions sur mesure pour les TPE, freelances et entrepreneurs. 
                Mon objectif : créer votre présence en ligne avec des sites web modernes, performants et adaptés à votre budget.
              </p>
            </motion.div>
          </div>

          {/* Section Maquettes Web */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Maquettes Web</h2>
              <p className="text-lg text-gray-600">Des maquettes HTML/CSS prêtes à l'emploi pour démarrer rapidement</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  description: "Idéal pour démarrer avec une page unique moderne et responsive",
                  price: "49€",
                  features: ["Page unique", "Design responsive", "Animations basiques", "Formulaire de contact"]
                },
                {
                  name: "Standard",
                  description: "La solution parfaite pour un site vitrine complet jusqu'à 3 pages",
                  price: "99€",
                  features: ["Jusqu'à 3 pages", "Design responsive", "Animations avancées", "Formulaire de contact", "Menu de navigation"]
                },
                {
                  name: "Pro",
                  description: "Pour un site web professionnel complet avec toutes les fonctionnalités",
                  price: "149€",
                  features: ["Jusqu'à 5 pages", "Design responsive", "Animations premium", "Formulaires avancés", "Menu personnalisé", "Optimisation SEO"]
                }
              ].map((offer, index) => (
                <motion.div
                  key={offer.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-blue-400/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{offer.name}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-4">{offer.price}</div>
                    <p className="text-gray-600 mb-6">{offer.description}</p>
                    <ul className="space-y-3 mb-8">
                      {offer.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500 mb-6">Maquette HTML/CSS livrée – sans hébergement</p>
                    <Link
                      href={`/devis?type=maquette-${offer.name.toLowerCase()}`}
                      className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-xl transition-colors duration-300"
                    >
                      Demander cette maquette
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section Sites Web Clés en Main */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sites Web Clés en Main</h2>
              <p className="text-lg text-gray-600">Des solutions complètes avec hébergement et support inclus</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Essentiel",
                  description: "Site vitrine simple et efficace",
                  price: "150€",
                  features: [
                    "Page d'accueil",
                    "Page de contact",
                    "Design responsive",
                    "Hébergement 1 an",
                    "Support technique"
                  ]
                },
                {
                  name: "Vitrine",
                  description: "Site professionnel complet",
                  price: "300€",
                  features: [
                    "Jusqu'à 5 pages",
                    "Blog intégré",
                    "Design personnalisé",
                    "Optimisation SEO",
                    "Hébergement 1 an",
                    "Support prioritaire"
                  ]
                },
                {
                  name: "Sur Mesure",
                  description: "Solution personnalisée pour vos besoins spécifiques",
                  price: "Sur devis",
                  features: [
                    "Pages illimitées",
                    "Fonctionnalités avancées",
                    "Design unique",
                    "SEO premium",
                    "Hébergement premium",
                    "Support dédié"
                  ]
                }
              ].map((offer, index) => (
                <motion.div
                  key={offer.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-blue-400/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{offer.name}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-4">{offer.price}</div>
                    <p className="text-gray-600 mb-6">{offer.description}</p>
                    <ul className="space-y-3 mb-8">
                      {offer.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500 mb-6">Hébergement et support inclus</p>
                    <Link
                      href={`/devis?type=site-${offer.name.toLowerCase().replace(' ', '-')}`}
                      className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-xl transition-colors duration-300"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section Fonctionnement */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
              <p className="text-lg text-gray-600">Un processus simple et efficace en 4 étapes</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Choix de l'offre",
                  description: "Sélectionnez la formule qui correspond le mieux à vos besoins"
                },
                {
                  icon: "📝",
                  title: "Brief rapide",
                  description: "Discutons de votre projet et de vos attentes spécifiques"
                },
                {
                  icon: "🚀",
                  title: "Livraison",
                  description: "Réception de votre maquette ou mise en ligne de votre site"
                },
                {
                  icon: "✨",
                  title: "Paiement",
                  description: "Réglez uniquement une fois satisfait du résultat"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/5 rounded-2xl blur-2xl" />
              <div className="relative bg-white/80 backdrop-blur-sm p-12 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Prêt à lancer votre projet ?</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Contactez-moi pour discuter de votre projet et obtenir un devis personnalisé. 
                  Je vous répondrai dans les 24 heures.
                </p>
                <Link
                  href="/devis"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                >
                  Demander un devis
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </PageBackground>
    </div>
  )
} 