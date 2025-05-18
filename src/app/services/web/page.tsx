import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services Web',
  description: 'Création de sites web professionnels : sites vitrines, e-commerce et solutions sur mesure pour votre entreprise.',
}

export default function ServicesWeb() {
  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <div className="waves-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* En-tête avec Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Services Web</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions web sur mesure pour donner vie à vos projets. De la conception à la mise en ligne, nous vous accompagnons à chaque étape.
          </p>
        </div>

        {/* Pourquoi nous choisir */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Pourquoi nous choisir ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Optimale</h3>
              <p className="text-gray-600">Sites web rapides et optimisés pour une expérience utilisateur exceptionnelle</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Responsive</h3>
              <p className="text-gray-600">Adaptation parfaite sur tous les appareils, du mobile au grand écran</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sécurité Renforcée</h3>
              <p className="text-gray-600">Protection avancée contre les menaces et conformité RGPD</p>
            </div>
          </div>
        </div>

        {/* Section Processus */}
        <div className="mt-24 mb-16 bg-white rounded-xl shadow-md p-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Notre Processus</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center relative z-10">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-400"></div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">1. Conception</h3>
              <p className="text-gray-600">Analyse de vos besoins et maquettage</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center relative z-10">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-400"></div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">2. Développement</h3>
              <p className="text-gray-600">Création de votre site sur mesure</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center relative z-10">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-400"></div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">3. Tests</h3>
              <p className="text-gray-600">Validation et optimisation</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center relative z-10">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">4. Mise en ligne</h3>
              <p className="text-gray-600">Déploiement et formation</p>
            </div>
          </div>
        </div>

        {/* Maquettes Web */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Solutions Web</h2>
          
          {/* Maquettes de code */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Maquettes de Code</h3>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Des solutions de code prêtes à l'emploi que vous pourrez modifier vous-même. 
              Idéal pour les développeurs et les personnes techniques souhaitant gérer leur site en autonomie.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Maquette Basic */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Basic</h3>
                  <div className="text-blue-600 text-2xl font-bold">49€</div>
                  <p className="text-gray-500 text-sm mt-1">Code simple et modulable</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600 text-sm">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    1 page HTML/CSS
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Code commenté
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Design responsive
                  </li>
                </ul>
              </div>

              {/* Maquette Standard */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border-2 border-blue-600">
                <div className="text-center mb-6">
                  <div className="bg-blue-50 text-blue-600 text-sm font-semibold py-1 px-3 rounded-full inline-block mb-2">
                    Populaire
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard</h3>
                  <div className="text-blue-600 text-2xl font-bold">99€</div>
                  <p className="text-gray-500 text-sm mt-1">Solution complète</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600 text-sm">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    3 pages HTML/CSS
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Animations incluses
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Formulaire de contact
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Guide d'utilisation
                  </li>
                </ul>
              </div>

              {/* Maquette Premium */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium</h3>
                  <div className="text-blue-600 text-2xl font-bold">199€</div>
                  <p className="text-gray-500 text-sm mt-1">Solution avancée</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600 text-sm">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    5 pages HTML/CSS
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Animations avancées
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Intégration médias
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Support technique
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Forfaits de développement */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Forfaits de Développement</h3>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Des solutions complètes où nous nous occupons de tout : développement, intégration, déploiement et maintenance.
              Idéal pour les entreprises souhaitant un site professionnel clé en main.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Site Vitrine */}
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Site Vitrine</h3>
                  <div className="text-blue-600 text-2xl font-bold">À partir de 399€</div>
                  <p className="text-gray-500 text-sm mt-1">Parfait pour débuter</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Design responsive
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Jusqu'à 5 pages
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Formulaire de contact
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Déploiement inclus
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Support technique
                  </li>
                </ul>
              </div>

              {/* Site E-commerce */}
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-2 border-blue-600 transform scale-105">
                <div className="text-center mb-6">
                  <div className="bg-blue-50 text-blue-600 text-sm font-semibold py-1 px-3 rounded-full inline-block mb-2">
                    Plus populaire
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Site E-commerce</h3>
                  <div className="text-blue-600 text-2xl font-bold">À partir de 799€</div>
                  <p className="text-gray-500 text-sm mt-1">Solution complète</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Catalogue produits illimité
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Paiement sécurisé
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Gestion des stocks
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dashboard administrateur
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Formation incluse
                  </li>
                </ul>
              </div>

              {/* Site Sur Mesure */}
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Sur Mesure</h3>
                  <div className="text-blue-600 text-2xl font-bold">Sur devis</div>
                  <p className="text-gray-500 text-sm mt-1">Projet personnalisé</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fonctionnalités avancées
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    API personnalisée
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Accompagnement complet
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Maintenance évolutive
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Support prioritaire
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Technologies Utilisées</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L1 21h22L12 2zm0 3.83L19.17 19H4.83L12 5.83z"/>
                </svg>
              </div>
              <h3 className="font-semibold">React</h3>
              <p className="text-sm text-gray-600">Interface moderne</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3 className="font-semibold">Next.js</h3>
              <p className="text-sm text-gray-600">Performance SEO</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H3V6h18v14z"/>
                </svg>
              </div>
              <h3 className="font-semibold">Tailwind CSS</h3>
              <p className="text-sm text-gray-600">Design élégant</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3 className="font-semibold">Node.js</h3>
              <p className="text-sm text-gray-600">Backend robuste</p>
            </div>
          </div>
        </div>

        {/* Témoignages */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Ce que disent nos clients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">JM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jean Martin</h4>
                  <p className="text-sm text-gray-600">Restaurant Le Gourmet</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Un travail remarquable ! Notre site vitrine a complètement transformé notre présence en ligne. Les réservations ont augmenté de 40%."
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">SD</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sophie Dubois</h4>
                  <p className="text-sm text-gray-600">Boutique Mode & Style</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Notre e-commerce est parfaitement optimisé et facile à gérer. Le support technique est toujours réactif et professionnel."
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">PL</span>
                </div>
                <div>
                  <h4 className="font-semibold">Pierre Lambert</h4>
                  <p className="text-sm text-gray-600">Agence Immobilière</p>
                </div>
              </div>
              <p className="text-gray-600">
                "La solution sur mesure développée correspond exactement à nos besoins. L'équipe a su comprendre et répondre à nos attentes."
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Questions Fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Quels sont les délais de réalisation ?</h3>
                  <p className="text-gray-600">
                    Les délais varient selon le type de projet :<br/>
                    • Site vitrine : 2-3 semaines<br/>
                    • E-commerce : 4-6 semaines<br/>
                    • Sur mesure : à définir selon le projet<br/>
                    Le délai exact vous sera communiqué lors du devis après analyse de vos besoins.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Comment se déroule le paiement ?</h3>
                  <p className="text-gray-600">
                    Nous fonctionnons avec un acompte de 30% à la commande, 40% au début du développement, et le solde à la livraison. 
                    Des facilités de paiement peuvent être mises en place pour les projets importants.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Comment est géré l'hébergement ?</h3>
                  <p className="text-gray-600">
                    Votre site sera hébergé sur GitHub Pages, une solution fiable et performante. 
                    Nous nous occupons de toute la configuration technique pour assurer un déploiement optimal de votre site.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Quel support après la mise en ligne ?</h3>
                  <p className="text-gray-600">
                    Nous assurons un support technique réactif et incluons une formation à l'utilisation de votre site. 
                    Des contrats de maintenance sont disponibles pour un suivi régulier et des mises à jour.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Les sites sont-ils optimisés pour le référencement ?</h3>
                  <p className="text-gray-600">
                    Absolument ! Tous nos sites sont développés avec les meilleures pratiques SEO : 
                    optimisation des performances, structure sémantique, métadonnées, et compatibilité mobile.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Comment mettre à jour mon site ?</h3>
                  <p className="text-gray-600">
                    Pour toute modification de contenu ou mise à jour de votre site, notre équipe reste à votre disposition. 
                    Contactez-nous pour vos besoins de modifications, nous les effectuerons rapidement et efficacement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note et Contact */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6 text-center mb-12">
            <p className="text-gray-600">
              Les tarifs peuvent varier selon la complexité du projet et les fonctionnalités souhaitées.
              Un devis gratuit et détaillé vous sera fourni après étude de votre projet.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Un projet web ?</h2>
            <p className="text-gray-600 mb-6">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
            </p>
            <a
              href="/devis/web"
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
    </div>
  );
} 