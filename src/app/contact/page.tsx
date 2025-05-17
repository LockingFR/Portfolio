'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

// Initialisation d'EmailJS
emailjs.init('XLi7pzbuXZOJYsVM7')

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    try {
      await emailjs.send(
        'service_otl5xrr',
        'template_1hu0i1c',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'XLi7pzbuXZOJYsVM7'
      )

      setStatus({ submitting: false, submitted: true, error: null })
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: null })
      }, 5000)

    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: 'Une erreur est survenue. Veuillez réessayer.' })
    }
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact</h1>
        
        {/* Informations de contact */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-soft p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Coordonnées</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 rounded-lg p-2">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Téléphone</h3>
                  <a href="tel:0780687630" className="text-primary-600 hover:text-primary-700">
                    07 80 68 76 30
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 rounded-lg p-2">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <a href="mailto:contact@nikolazvoisson.com" className="text-primary-600 hover:text-primary-700">
                    contact@nikolazvoisson.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 rounded-lg p-2">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Zone d'intervention</h3>
                  <p className="text-gray-600">
                    Saint-Malo et ses alentours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white rounded-xl shadow-soft p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Envoyez-moi un message</h2>
            
            {status.submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-600">
                  Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            )}

            {status.error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600">{status.error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={status.submitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={status.submitting}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  disabled={status.submitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  disabled={status.submitting}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer le message'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Carte ou informations supplémentaires */}
        <div className="bg-white rounded-xl shadow-soft p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Disponibilités</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Étant actuellement en alternance, mes disponibilités sont flexibles. Je m'adapte à vos besoins et nous conviendrons ensemble d'un créneau qui vous convient.
            </p>
            <div className="bg-primary-50 rounded-lg p-4">
              <p className="text-primary-800">
                N'hésitez pas à me contacter par téléphone ou email pour discuter de votre projet et fixer un rendez-vous.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 