'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-soft fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-primary-600">NikolazVoisson</span>
          </Link>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
              Accueil
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
              Mon Profil
            </Link>
            <Link href="/edinamic" className="text-gray-600 hover:text-primary-600 transition-colors">
              E-DInamic
            </Link>
            <Link href="/contact" 
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors">
              Contact
            </Link>
          </div>

          {/* Hamburger Menu - Mobile */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6 text-gray-600" 
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
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" 
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
              <Link href="/about" 
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}>
                Mon Profil
              </Link>
              <Link href="/edinamic" 
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}>
                E-DInamic
              </Link>
              <Link href="/contact" 
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors w-fit"
                    onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 