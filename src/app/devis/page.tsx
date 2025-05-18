'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PageBackground from '../components/PageBackground'
import { useSearchParams } from 'next/navigation'

export default function Devis() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'maquette-starter',
    message: '',
  })

  useEffect(() => {
    const type = searchParams.get('type')
    if (type) {
      setFormData(prev => ({
        ...prev,
        projectType: type
      }))
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulaire soumis:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div 
      className="min-h-screen relative backdrop-blur-[2px]"
      style={{
        backgroundImage: 'url("/images/backgrounds/background2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative">
        <div className="container mx-auto px-6 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Demande de Devis
            </h1>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/5 rounded-2xl blur-xl" />
              <form onSubmit={handleSubmit} className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type de Projet
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <optgroup label="Maquettes Web">
                        <option value="maquette-starter">Maquette Starter (49€)</option>
                        <option value="maquette-standard">Maquette Standard (99€)</option>
                        <option value="maquette-pro">Maquette Pro (149€)</option>
                      </optgroup>
                      <optgroup label="Sites Web Clés en Main">
                        <option value="site-essentiel">Site Essentiel (150€)</option>
                        <option value="site-vitrine">Site Vitrine (300€)</option>
                        <option value="site-sur-mesure">Site Sur Mesure (Sur devis)</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Description du projet
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-300"
                  >
                    Envoyer la demande
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 