'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    type: '',
    pages: 1,
    features: [],
    budget: '',
    name: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      await emailjs.send(
        'service_otl5xrr',
        'template_1hu0i1c',
        {
          from_name: formData.name,
          from_email: formData.email,
          type: formData.type,
          pages: formData.pages,
          features: formData.features.join(', '),
          budget: formData.budget,
          message: formData.message,
        },
        'XLi7pzbuXZOJYsVM7'
      );
      
      setSubmitStatus('success');
      setFormData({
        type: '',
        pages: 1,
        features: [],
        budget: '',
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeatureChange = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  return (
    <main className="relative min-h-screen py-20">
      {/* Background décoratif */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/wave-top.svg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Devis Personnalisé
          </h1>
          <p className="text-xl text-gray-600">
            Décrivez votre projet et recevez une estimation adaptée à vos besoins
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Type de site */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-4">
                Type de site souhaité
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Starter', 'Business', 'Pro'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, type }))}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      formData.type === type
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-200 hover:border-blue-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Nombre de pages */}
            <div>
              <label htmlFor="pages" className="block text-lg font-medium text-gray-700 mb-2">
                Nombre de pages estimé
              </label>
              <input
                type="number"
                id="pages"
                name="pages"
                min="1"
                value={formData.pages}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Fonctionnalités souhaitées */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-4">
                Fonctionnalités souhaitées
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Design responsive',
                  'Animations avancées',
                  'SEO optimisé',
                  'Formulaire de contact',
                  'Blog intégré',
                  'E-commerce',
                  'Espace membre',
                  'Multilingue'
                ].map((feature) => (
                  <label
                    key={feature}
                    className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature)}
                      onChange={() => handleFeatureChange(feature)}
                      className="h-5 w-5 text-blue-600 rounded"
                    />
                    <span>{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-lg font-medium text-gray-700 mb-2">
                Budget approximatif
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sélectionnez une fourchette</option>
                <option value="< 500€">Moins de 500€</option>
                <option value="500-1000€">500€ - 1000€</option>
                <option value="1000-2000€">1000€ - 2000€</option>
                <option value="> 2000€">Plus de 2000€</option>
              </select>
            </div>

            {/* Informations de contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                Description du projet
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Décrivez votre projet en quelques mots..."
              />
            </div>

            {/* Bouton de soumission */}
            <div className="text-center space-y-4">
              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className={`inline-flex items-center px-8 py-4 text-lg font-medium text-white rounded-lg transition-colors ${
                  submitStatus === 'submitting'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {submitStatus === 'submitting' ? 'Envoi en cours...' : 'Demander mon devis'}
              </button>

              {/* Messages de statut */}
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 font-medium"
                >
                  Votre demande a été envoyée avec succès ! Nous vous contacterons rapidement.
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 font-medium"
                >
                  Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
} 