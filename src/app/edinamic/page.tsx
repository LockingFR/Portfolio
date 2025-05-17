import Image from 'next/image';

export default function EDinamic() {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-6 py-12">
        {/* En-tête avec logo */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/logo.jpg"
            alt="E-DInamic Logo"
            width={200}
            height={200}
            className="rounded-lg shadow-soft mb-6"
            priority
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">E-DInamic</h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl">
            Solutions informatiques professionnelles pour entreprises et particuliers
          </p>
        </div>

        {/* Section Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-soft p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nos Services</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Réparation d'ordinateurs
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Montage PC sur mesure
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Maintenance préventive
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Récupération de données
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nos Engagements</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Service rapide et professionnel
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Devis gratuit et transparent
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Garantie sur nos interventions
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Conseil personnalisé
              </li>
            </ul>
          </div>
        </div>

        {/* Section Tarifs */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Nos Tarifs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Diagnostic */}
            <div className="bg-white rounded-xl shadow-soft p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Diagnostic</h3>
                <div className="text-primary-600 text-2xl font-bold">30€</div>
                <p className="text-gray-500 text-sm mt-1">Offert si réparation</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Analyse complète
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Devis détaillé
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Conseils personnalisés
                </li>
              </ul>
            </div>

            {/* Réparation */}
            <div className="bg-white rounded-xl shadow-soft p-8 hover:shadow-lg transition-shadow border-2 border-primary-600">
              <div className="text-center mb-6">
                <div className="bg-primary-50 text-primary-600 text-sm font-semibold py-1 px-3 rounded-full inline-block mb-2">
                  Plus populaire
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Réparation</h3>
                <div className="text-primary-600 text-2xl font-bold">À partir de 50€</div>
                <p className="text-gray-500 text-sm mt-1">Selon intervention</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Main d'œuvre incluse
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Garantie 3 mois
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Nettoyage inclus
                </li>
              </ul>
            </div>

            {/* Montage PC */}
            <div className="bg-white rounded-xl shadow-soft p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Montage PC</h3>
                <div className="text-primary-600 text-2xl font-bold">80€</div>
                <p className="text-gray-500 text-sm mt-1">Hors composants</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Conseil composants
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Assemblage complet
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tests & Optimisation
                </li>
              </ul>
            </div>
          </div>

          {/* Note supplémentaire */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-gray-600">
              Les tarifs peuvent varier selon la complexité de l'intervention et les pièces nécessaires.
              Un devis gratuit et détaillé vous sera fourni avant toute intervention.
            </p>
            <div className="mt-4">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              >
                Demander un devis
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Section Contact */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contactez-nous</h2>
          <p className="text-gray-600 mb-6">
            Pour toute demande de devis ou d'information, n'hésitez pas à nous contacter
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
          >
            Nous contacter
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
} 