import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-DInamic | L\'entreprise',
  description: 'Découvrez E-DInamic, votre partenaire informatique à Saint-Malo. Services de réparation, montage PC et solutions web professionnelles.',
}

export default function EDinamic() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        {/* Section Hero */}
        <div className="flex flex-col items-center justify-center h-[30vh]">
          <Image
            src="/new-logo.png"
            alt="Logo"
            width={400}
            height={100}
            className="w-80 object-contain mb-8"
            priority
          />
          <p className="text-2xl text-center">
            <span className="text-blue-600">Solutions</span> informatiques professionnelles pour entreprises et particuliers
          </p>
        </div>

        {/* Section Histoire */}
        <div className="mt-24 bg-white rounded-xl shadow-md p-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Notre Histoire</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-6">
              Passionné d'informatique depuis mon plus jeune âge, j'ai créé E-DInamic pour offrir des solutions informatiques personnalisées et professionnelles. Notre expertise s'étend de la réparation d'ordinateurs au montage de PC sur mesure.
            </p>
            <p className="mb-6">
              Avec plus de 5 ans d'expérience dans le domaine, nous nous engageons à fournir un service de qualité, transparent et adapté à vos besoins spécifiques. Notre approche combine expertise technique et service client personnalisé.
            </p>
            <p className="mb-6">
              Basés à Saint-Malo, nous intervenons dans toute la région pour accompagner nos clients dans leurs projets informatiques, qu'il s'agisse de particuliers ou de professionnels.
            </p>
          </div>
        </div>

        {/* Section Expertise */}
        <div className="mt-24 bg-white rounded-xl shadow-md p-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Notre Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hardware</h3>
              <p className="text-gray-600">Diagnostic, réparation et optimisation de tous types d'ordinateurs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Software</h3>
              <p className="text-gray-600">Installation, configuration et dépannage de systèmes et logiciels</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimisation</h3>
              <p className="text-gray-600">Solutions sur mesure pour maximiser les performances</p>
            </div>
          </div>
        </div>

        {/* Section Services et Engagements */}
        <div className="grid md:grid-cols-2 gap-12 mt-24">
          <div className="bg-white rounded-xl shadow-md p-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Nos Services</h2>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Réparation d'ordinateurs
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Montage PC sur mesure
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Maintenance préventive
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Récupération de données
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Installation de systèmes
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Solutions de sauvegarde
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Nos Engagements</h2>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Service rapide et professionnel
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Devis gratuit et transparent
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Garantie sur nos interventions
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Conseil personnalisé
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Suivi après intervention
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Disponibilité et réactivité
              </li>
            </ul>
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
              <h3 className="text-lg font-medium text-gray-800 mb-2">1. Diagnostic</h3>
              <p className="text-gray-600">Analyse approfondie de votre besoin</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center relative z-10">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-400"></div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">2. Devis</h3>
              <p className="text-gray-600">Proposition détaillée et transparente</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center relative z-10">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-400"></div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">3. Intervention</h3>
              <p className="text-gray-600">Réalisation professionnelle</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center relative z-10">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">4. Suivi</h3>
              <p className="text-gray-600">Accompagnement continu</p>
            </div>
          </div>
        </div>

        {/* Section Contact */}
        <div className="mt-24 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Un projet ? Une question ?</h2>
            <p className="text-gray-600 mb-6">
              Contactez-nous pour discuter de vos besoins et obtenir un diagnostic personnalisé
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Nous contacter
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