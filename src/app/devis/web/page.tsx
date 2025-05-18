export default function DevisWeb() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Demande de devis - Services Web</h1>

          <form className="bg-white shadow-lg rounded-lg p-8">
            {/* Informations personnelles */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Informations personnelles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="nom">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="prenom">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="telephone">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Type de projet */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Type de projet</h2>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="type_projet"
                      value="site_vitrine"
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Site Vitrine (à partir de 399€)</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="type_projet"
                      value="e_commerce"
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Site E-commerce (à partir de 799€)</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="type_projet"
                      value="sur_mesure"
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Projet Sur Mesure (sur devis)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Description du projet */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Description du projet</h2>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="description">
                  Décrivez votre projet en détail *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={6}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Fonctionnalités souhaitées, objectifs, références..."
                ></textarea>
              </div>
            </div>

            {/* Budget et délai */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Budget et délai</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="budget">
                    Budget estimé
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez une fourchette</option>
                    <option value="399-799">399€ - 799€</option>
                    <option value="800-1499">800€ - 1499€</option>
                    <option value="1500-2999">1500€ - 2999€</option>
                    <option value="3000+">3000€ et plus</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="delai">
                    Délai souhaité
                  </label>
                  <select
                    id="delai"
                    name="delai"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un délai</option>
                    <option value="1-2-mois">1-2 mois</option>
                    <option value="2-3-mois">2-3 mois</option>
                    <option value="3-6-mois">3-6 mois</option>
                    <option value="6-plus">6 mois et plus</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Bouton de soumission */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Envoyer la demande de devis
              </button>
              <p className="text-gray-500 text-sm mt-4">
                * Champs obligatoires
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 