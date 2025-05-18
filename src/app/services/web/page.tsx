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

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
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
                Hébergement 1 an offert
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

        {/* Processus de création */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Notre Processus</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center relative z-10">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="hidden md:block absolute top-1/2 left-1/2 h-0.5 bg-blue-200 w-full transform -translate-y-1/2"></div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">1. Conception</h3>
              <p className="text-gray-600">Analyse de vos besoins et maquettage</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center relative z-10">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="hidden md:block absolute top-1/2 left-1/2 h-0.5 bg-blue-200 w-full transform -translate-y-1/2"></div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">2. Développement</h3>
              <p className="text-gray-600">Création de votre site sur mesure</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center relative z-10">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="hidden md:block absolute top-1/2 left-1/2 h-0.5 bg-blue-200 w-full transform -translate-y-1/2"></div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">3. Tests</h3>
              <p className="text-gray-600">Validation et optimisation</p>
            </div>
            <div className="text-center">
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