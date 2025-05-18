export default function Legal() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mentions Légales</h1>
          <p className="text-lg text-gray-600">Informations légales et conditions d'utilisation</p>
        </div>

        {/* Contenu principal */}
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Identité */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Identité</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>Raison sociale :</strong> E-DInamic</p>
              <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
              <p><strong>Propriétaire :</strong> Nikolaz Voisson</p>
              <p><strong>Adresse :</strong> Rennes, France</p>
              <p><strong>Email :</strong> contact@nikolazvoisson.com</p>
              <p><strong>SIRET :</strong> 93315288600018</p>
            </div>
          </section>

          {/* Hébergement */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Hébergement</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133 Walnut, CA 91789, USA</p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Propriété intellectuelle</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </div>
          </section>

          {/* Protection des données */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Protection des données personnelles</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Vous pouvez exercer ce droit en nous contactant par email.
              </p>
              <p>
                Les informations recueillies sur ce site sont utilisées uniquement dans le cadre de votre demande et ne sont en aucun cas communiquées à des tiers.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Politique de cookies</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de traçage n'est utilisé.
              </p>
            </div>
          </section>

          {/* Mise à jour */}
          <section className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-gray-600">
              Ces mentions légales peuvent être modifiées à tout moment. Dernière mise à jour : {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 