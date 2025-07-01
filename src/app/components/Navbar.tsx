'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Pages qui nécessitent un fond bleu pour la navbar
  const blueBackgroundPages = ['/about'];
  const needsBlueBackground = blueBackgroundPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (pricingRef.current && !pricingRef.current.contains(event.target as Node)) {
        setIsPricingOpen(false);
      }
      if (socialRef.current && !socialRef.current.contains(event.target as Node)) {
        setIsSocialOpen(false);
      }
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled 
          ? 'bg-white/90 shadow-lg' 
          : pathname === '/about'
            ? 'bg-blue-600/95 shadow-[0_15px_40px_-15px_rgba(37,99,235,0.3)]'
            : 'bg-gradient-to-r from-blue-600/95 to-blue-700/95 shadow-[0_15px_40px_-15px_rgba(37,99,235,0.3)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/new-logo.png"
                  alt="Logo"
                  width={200}
                  height={50}
                  priority
                  className="transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:ml-6 sm:space-x-8">
              <Link 
                href="/edinamic" 
                className={`flex items-center h-16 px-1 text-sm font-medium border-b-2 transition-all duration-300 ${
                  pathname === '/edinamic'
                    ? isScrolled
                      ? 'text-blue-600 border-blue-600'
                      : 'text-white border-white'
                    : isScrolled 
                      ? 'text-gray-900 hover:text-blue-600 border-transparent hover:border-blue-600' 
                      : 'text-white hover:text-white/80 border-transparent hover:border-white'
                }`}
              >
                L'entreprise
              </Link>

              <div ref={pricingRef} className="relative">
                <button
                  onClick={() => setIsPricingOpen(!isPricingOpen)}
                  className={`flex items-center h-16 px-1 text-sm font-medium border-b-2 transition-all duration-300 ${
                    isPricingOpen
                      ? isScrolled
                        ? 'text-blue-600 border-blue-600'
                        : 'text-white border-white'
                      : isScrolled
                        ? 'text-gray-900 hover:text-blue-600 border-transparent hover:border-blue-600'
                        : 'text-white hover:text-white/80 border-transparent hover:border-white'
                  }`}
                >
                  <span>Services</span>
                  <svg
                    className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                      isPricingOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Menu déroulant */}
                {isPricingOpen && (
                  <div className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {/* Services Informatiques */}
                        <div>
                          <h3 className="text-base font-medium text-gray-900 mb-3">Services Informatiques</h3>
                          <div className="space-y-4">
                            <Link
                              href="/services/reparation-montage-pc"
                              className="block px-4 py-3 hover:bg-blue-50/50 transition-colors"
                              onClick={() => setIsPricingOpen(false)}
                            >
                              <div className="font-medium text-gray-900">
                                Réparation & Montage PC
                              </div>
                              <div className="text-sm text-gray-500">
                                Service professionnel à Saint-Malo
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Services Web */}
                        <div>
                          <h3 className="text-base font-medium text-gray-900 mb-3">Services Web</h3>
                          <div className="space-y-4">
                            <Link
                              href="/services/web"
                              className="block px-4 py-3 hover:bg-blue-50/50 transition-colors"
                              onClick={() => setIsPricingOpen(false)}
                            >
                              <div className="font-medium text-gray-900">
                                Création de Sites Web
                              </div>
                              <div className="text-sm text-gray-500">
                                Sites vitrines et e-commerce sur mesure
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/about" 
                className={`flex items-center h-16 px-1 text-sm font-medium border-b-2 transition-all duration-300 ${
                  pathname === '/about'
                    ? isScrolled
                      ? 'text-blue-600 border-blue-600'
                      : 'text-white border-white'
                    : isScrolled 
                      ? 'text-gray-900 hover:text-blue-600 border-transparent hover:border-blue-600' 
                      : 'text-white hover:text-white/80 border-transparent hover:border-white'
                }`}
              >
                Mon Profil
              </Link>
            </div>
          </div>

          {/* Partie droite avec réseaux sociaux et mentions légales */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/nikolaz_vsn_"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center transition-colors ${
                  isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-white/80'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/nikolaz-voisson"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center transition-colors ${
                  isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-white/80'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            <Link 
              href="/legal" 
              className={`flex items-center h-16 px-1 text-sm font-medium border-b-2 transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-blue-600 border-transparent hover:border-blue-600' 
                  : 'text-white hover:text-white/80 border-transparent hover:border-white'
              }`}
            >
              Mentions Légales
            </Link>

            <Link 
              href="/contact"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Menu mobile */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } hover:bg-gray-100/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors`}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden bg-white/90 backdrop-blur-sm"
          >
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/edinamic"
                className={`block px-3 py-2 text-base font-medium ${
                  pathname === '/edinamic'
                    ? 'text-blue-600 bg-blue-50/50'
                    : 'text-gray-900 hover:bg-blue-50/50'
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                L'entreprise
              </Link>

              {/* Services Informatiques */}
              <Link
                href="/services/reparation-montage-pc"
                className={`block px-3 py-2 text-base font-medium ${
                  pathname === '/services/reparation-montage-pc'
                    ? 'text-blue-600 bg-blue-50/50'
                    : 'text-gray-900 hover:bg-blue-50/50'
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Réparation & Montage PC
              </Link>

              {/* Services Web */}
              <Link
                href="/services#web"
                className={`block px-3 py-2 text-base font-medium ${
                  pathname === '/services'
                    ? 'text-blue-600 bg-blue-50/50'
                    : 'text-gray-900 hover:bg-blue-50/50'
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Création Web
              </Link>

              <Link
                href="/about"
                className={`block px-3 py-2 text-base font-medium ${
                  pathname === '/about'
                    ? 'text-blue-600 bg-blue-50/50'
                    : 'text-gray-900 hover:bg-blue-50/50'
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Mon Profil
              </Link>

              <Link
                href="/contact"
                className={`block px-3 py-2 text-base font-medium ${
                  pathname === '/contact'
                    ? 'text-blue-600 bg-blue-50/50'
                    : 'text-gray-900 hover:bg-blue-50/50'
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/legal"
                className={`block px-3 py-2 text-base font-medium ${
                  pathname === '/legal'
                    ? 'text-blue-600 bg-blue-50/50'
                    : 'text-gray-900 hover:bg-blue-50/50'
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Mentions Légales
              </Link>

              <a
                href="https://www.instagram.com/nikolaz_vsn_"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-blue-50/50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}