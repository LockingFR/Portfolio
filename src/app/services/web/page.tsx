'use client'

import PageBackground from '../../components/PageBackground'
import AnimatedCard from '../../components/AnimatedCard'
import { GlobeIcon, SparklesIcon, ShieldIcon } from '../../components/icons'

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
          <AnimatedCard
            title="Site Vitrine"
            description="Présentez votre activité avec élégance"
            features={[
              'Design moderne',
              'Responsive design',
              'Optimisé SEO',
              'Analytics intégrés'
            ]}
            icon={<GlobeIcon className="w-8 h-8 text-blue-600" />}
          />

          <AnimatedCard
            title="E-commerce"
            description="Vendez vos produits en ligne"
            features={[
              'Catalogue produits',
              'Paiement sécurisé',
              'Gestion des stocks',
              'Dashboard admin'
            ]}
            icon={<SparklesIcon className="w-8 h-8 text-blue-600" />}
            delay={0.2}
          />

          <AnimatedCard
            title="Application Web"
            description="Solutions sur mesure pour votre entreprise"
            features={[
              'Développement custom',
              'API intégrée',
              'Base de données',
              'Hébergement cloud'
            ]}
            icon={<ShieldIcon className="w-8 h-8 text-blue-600" />}
            delay={0.4}
          />
        </div>

        {/* Tarifs */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Nos Tarifs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard
              title="Site Vitrine"
              description="À partir de 1000€"
              features={[
                'Design personnalisé',
                'Responsive design',
                'Formulaire de contact',
                'Hébergement 1 an offert'
              ]}
              delay={0.3}
            />

            <AnimatedCard
              title="E-commerce"
              description="À partir de 2000€"
              features={[
                'Catalogue produits',
                'Système de paiement',
                'Formation incluse',
                'Support technique'
              ]}
              className="border-2 border-blue-600 transform scale-105"
              delay={0.4}
            />

            <AnimatedCard
              title="Sur Mesure"
              description="Sur devis"
              features={[
                'Analyse des besoins',
                'Développement custom',
                'Tests & déploiement',
                'Maintenance'
              ]}
              delay={0.5}
            />
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Nos Technologies</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <AnimatedCard
              title="Front-end"
              description="React, Next.js, Vue.js"
              delay={0.2}
            />
            <AnimatedCard
              title="Back-end"
              description="Node.js, Python, PHP"
              delay={0.3}
            />
            <AnimatedCard
              title="Base de données"
              description="MySQL, MongoDB, PostgreSQL"
              delay={0.4}
            />
            <AnimatedCard
              title="Hébergement"
              description="AWS, Vercel, OVH"
              delay={0.5}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Un projet web ?</h2>
            <p className="text-gray-600 mb-6">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Demander un devis
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </PageBackground>
  )
} 