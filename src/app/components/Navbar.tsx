'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm' 
          : 'bg-gradient-to-r from-blue-900/90 to-blue-800/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo avec animation */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.span 
              className={`text-2xl font-bold font-poppins ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              whileHover={{ scale: 1.02 }}
            >
              NikolazVoisson
            </motion.span>
          </Link>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
              }`}
            >
              Accueil
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
              }`}
            >
              Mon Profil
            </Link>
            <Link 
              href="/edinamic" 
              className={`transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
              }`}
            >
              E-DInamic
            </Link>
            
            {/* Menu réseaux sociaux */}
            <div className="relative">
              <button 
                onClick={() => setIsSocialOpen(!isSocialOpen)}
                className={`flex items-center space-x-1 transition-colors ${
                  isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
              >
                <span>Réseaux</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isSocialOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
                  >
                    <a 
                      href="https://www.instagram.com/nikolazvoisson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/nikolaz-voisson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/contact" 
              className={`px-6 py-2 text-sm font-medium rounded-lg ${
                isScrolled 
                  ? 'bg-gradient-to-r from-primary-600 to-blue-500 text-white' 
                  : 'bg-white text-blue-900'
              } hover:opacity-90 transition-opacity`}
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Menu - Mobile */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className={`w-6 h-6 ${isScrolled ? 'text-gray-600' : 'text-white'}`}
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`transition-colors ${
                  isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/about" 
                className={`transition-colors ${
                  isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Mon Profil
              </Link>
              <Link 
                href="/edinamic" 
                className={`transition-colors ${
                  isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                E-DInamic
              </Link>
              <div className="flex items-center space-x-4 pt-2">
                <a 
                  href="https://www.instagram.com/nikolazvoisson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 transition-colors ${
                    isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/nikolaz-voisson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 transition-colors ${
                    isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
              <Link 
                href="/contact" 
                className={`px-6 py-2 text-sm font-medium rounded-lg w-fit ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-primary-600 to-blue-500 text-white' 
                    : 'bg-white text-blue-900'
                } hover:opacity-90 transition-opacity`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
} 