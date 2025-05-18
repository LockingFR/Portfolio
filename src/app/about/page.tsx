'use client'

import Image from 'next/image';
import PageBackground from '../components/PageBackground';

export default function About() {
  return (
    <PageBackground>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow pt-[80px]">
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Mon Profil
              </h1>
              
              {/* Présentation */}
              <div className="grid md:grid-cols-[300px_1fr] gap-8 mb-12">
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg group bg-white">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/pictures/profile2.JPEG"
                    alt="Nikolaz Voisson"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                    quality={95}
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nikolaz Voisson</h2>
                  <p className="text-gray-600 mb-6">
                    Passionné par l'informatique et l'automatisation, je mets mes compétences au service des entreprises 
                    pour optimiser leurs processus et améliorer leur efficacité opérationnelle.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Automatisation</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">EDI EDIFACT</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Support IT</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Développement Web</span>
                  </div>
                </div>
              </div>

              {/* Compétences */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-12 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8">Compétences</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      Matériel
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Montage PC sur mesure</li>
                      <li>• Diagnostic et réparation</li>
                      <li>• Optimisation performances</li>
                      <li>• Installation périphériques</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      Logiciel
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Développement web</li>
                      <li>• Automatisation (RPA)</li>
                      <li>• EDI EDIFACT</li>
                      <li>• Support technique</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Parcours */}
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8">Parcours</h2>
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute -left-2 top-0 w-5 h-5 bg-white border-4 border-blue-500 rounded-full"></div>
                    <div>
                      <h3 className="text-blue-600 font-medium">2024 - Présent</h3>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">E-DInamic - Fondateur</h4>
                      <p className="text-gray-600">
                        Services d'automatisation (RPA), d'informatisation et support informatique pour TPE/PME.
                        Spécialisation en EDI EDIFACT pour le secteur logistique et transport.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageBackground>
  );
} 