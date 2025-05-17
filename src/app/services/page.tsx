export default function Services() {
  const services = [
    {
      category: "Réparation d'Ordinateurs",
      items: [
        { name: "Diagnostic complet", price: "30€" },
        { name: "Nettoyage physique et optimisation", price: "50€" },
        { name: "Réinstallation système d'exploitation", price: "60€" },
        { name: "Récupération de données", price: "à partir de 70€" },
        { name: "Réparation matérielle", price: "sur devis" }
      ]
    },
    {
      category: "Montage PC sur Mesure",
      items: [
        { name: "Conseil et configuration", price: "gratuit" },
        { name: "Montage PC complet", price: "80€" },
        { name: "Installation système et logiciels", price: "inclus" },
        { name: "Test et validation", price: "inclus" }
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Services & Tarifs</h1>
        
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">{service.category}</h2>
              <div className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-800">{item.name}</span>
                    <span className="text-blue-600 font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Informations Importantes</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Les prix indiqués sont TTC</li>
            <li>• Déplacement possible sur devis</li>
            <li>• Devis gratuit pour toute intervention</li>
            <li>• Paiement par CB, espèces ou virement</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 