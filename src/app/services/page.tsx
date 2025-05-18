'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageBackground from '../components/PageBackground';

export default function Services() {
  return (
    <PageBackground>
      {/* Section Services avec cartes flottantes */}
      <section className="py-32 md:py-40 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-blue-50/30 to-gray-50">
          <Image
            src="/images/gets.png"
            alt="Background Pattern"
            fill
            className="object-cover opacity-5"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Des solutions sur mesure pour optimiser votre infrastructure informatique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Réparation PC",
                description: "Diagnostic et réparation de vos ordinateurs, optimisation des performances et maintenance préventive",
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                href: "/services/informatique"
              },
              {
                title: "Montage PC",
                description: "Assemblage sur mesure de votre ordinateur selon vos besoins et votre budget, avec des composants soigneusement sélectionnés",
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                href: "/services/informatique"
              },
              {
                title: "Création de Sites Web",
                description: "Conception et développement de sites web modernes, responsifs et personnalisés pour votre entreprise ou projet personnel",
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                href: "/services/web"
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                <Link href={service.href} className="block">
                  <div className="absolute inset-0 bg-blue-400/5 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <div className="mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                    <p className="text-base md:text-lg text-gray-600">{service.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageBackground>
  );
} 