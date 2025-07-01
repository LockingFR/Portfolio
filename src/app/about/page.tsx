'use client'

import Image from 'next/image';
import PageBackground from '../components/PageBackground';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const ProgressBar = ({ score, max, color, label }: { score: number, max: number, color: string, label?: string }) => (
  <div className="w-full">
    <div className="flex justify-between items-center mb-1">
      <span className="text-xs text-gray-500 font-semibold">{label}</span>
      <span className="text-xs text-gray-500 font-semibold">{score}/{max}</span>
    </div>
    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${(score / max) * 100}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${color} rounded-full`}
      />
    </div>
  </div>
);

const LevelBadge = ({ level }: { level: string }) => (
  <span className="inline-block ml-2 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold align-middle">{level}</span>
);

const ExperienceBar = ({ percent, color, label }: { percent: number, color: string, label: string }) => (
  <div className="w-full mt-3">
    <div className="flex justify-between items-center mb-1">
      <span className="text-xs text-gray-500 font-semibold">{label}</span>
      <span className="text-xs text-gray-500 font-semibold">{percent}%</span>
    </div>
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`h-full ${color} rounded-full`}
      />
    </div>
  </div>
);

const TIMELINE_THEME = {
  professional: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-500',
    line: 'bg-blue-300',
    shadow: 'shadow-blue-200',
    glow: 'shadow-[0_0_16px_2px_rgba(59,130,246,0.25)]',
    icon: '🏢',
    bar: 'bg-blue-500',
  },
  education: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-500',
    line: 'bg-purple-300',
    shadow: 'shadow-purple-200',
    glow: 'shadow-[0_0_16px_2px_rgba(168,85,247,0.25)]',
    icon: '🎓',
    bar: 'bg-purple-500',
  },
  certification: {
    bg: 'bg-green-50',
    text: 'text-green-600',
    border: 'border-green-500',
    line: 'bg-green-300',
    shadow: 'shadow-green-200',
    glow: 'shadow-[0_0_16px_2px_rgba(34,197,94,0.25)]',
    icon: '🏅',
    bar: 'bg-green-500',
  },
  experience: {
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    border: 'border-orange-500',
    line: 'bg-orange-300',
    shadow: 'shadow-orange-200',
    glow: 'shadow-[0_0_16px_2px_rgba(251,146,60,0.25)]',
    icon: '🤝',
    bar: 'bg-orange-500',
  },
};

const TimelineItem = ({
  year,
  title,
  description,
  theme,
  side,
  delay,
}: {
  year: string,
  title: string,
  description: string | React.ReactNode,
  theme: keyof typeof TIMELINE_THEME,
  side: 'left' | 'right',
  delay: number,
}) => {
  const colors = TIMELINE_THEME[theme];
  return (
    <motion.div
      className={`relative flex flex-col md:flex-row ${side === 'left' ? 'md:justify-end' : 'md:justify-start'} items-center gap-4 md:gap-8 w-full`}
      initial={{ opacity: 0, x: side === 'left' ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {side === 'left' && (
        <div className="w-full md:w-1/2 text-right flex flex-col items-end">
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: `0 0 24px 4px rgba(59,130,246,0.10)` }}
            className={`${colors.bg} p-4 md:p-6 rounded-xl shadow-lg ${colors.shadow} transition-all duration-300 group relative cursor-pointer max-w-lg`}
          >
            <motion.div
              className="absolute -top-7 right-4 text-3xl md:text-4xl drop-shadow-lg"
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {colors.icon}
            </motion.div>
            <span className={`inline-block mb-2 text-xs font-semibold px-3 py-1 rounded-full bg-white/80 ${colors.text}`}>{year}</span>
            <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
            <div className="text-gray-600 text-sm md:text-base">{description}</div>
          </motion.div>
        </div>
      )}
      <div className="flex flex-col items-center z-10">
        <motion.div
          className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-4 ${colors.border} bg-white flex items-center justify-center text-xl md:text-2xl ${colors.glow}`}
          whileHover={{ scale: 1.2 }}
        >
          {colors.icon}
        </motion.div>
        <div className={`w-2 md:w-3 h-24 md:h-32 ${colors.line} rounded-full`} />
      </div>
      {side === 'right' && (
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: `0 0 24px 4px rgba(59,130,246,0.10)` }}
            className={`${colors.bg} p-4 md:p-6 rounded-xl shadow-lg ${colors.shadow} transition-all duration-300 group relative cursor-pointer max-w-lg`}
          >
            <motion.div
              className="absolute -top-7 left-4 text-3xl md:text-4xl drop-shadow-lg"
              whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {colors.icon}
            </motion.div>
            <span className={`inline-block mb-2 text-xs font-semibold px-3 py-1 rounded-full bg-white/80 ${colors.text}`}>{year}</span>
            <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
            <div className="text-gray-600 text-sm md:text-base">{description}</div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const steps = [
  {
    year: '2024 - Présent',
    title: "E-DInamic - Fondateur",
    icon: '🏢',
    color: 'from-blue-400 to-blue-600',
    shadow: 'shadow-blue-200',
    description: "Services d'automatisation (RPA), d'informatisation et support informatique pour TPE/PME. Spécialisation en EDI EDIFACT pour le secteur logistique et transport.",
    details: "Missions : gestion de projet, relation client, développement de solutions sur-mesure, accompagnement digital."
  },
  {
    year: '2023 - Présent',
    title: "BTS GPME en Alternance",
    icon: '🎓',
    color: 'from-purple-400 to-purple-600',
    shadow: 'shadow-purple-200',
    description: "Formation en Gestion de la PME en alternance. Alternant au SIP (Service des Impôts des Particuliers).",
    details: "Compétences : gestion administrative, relation client, organisation, bureautique avancée."
  },
  {
    year: '2023',
    title: "Baccalauréat Général",
    icon: '🎓',
    color: 'from-purple-400 to-purple-600',
    shadow: 'shadow-purple-200',
    description: "Mention Passable (12,25/20). Spécialités : NSI (Numérique et Sciences Informatiques) et AMC (Anglais Monde Contemporain).",
    details: "Projet de fin d'année : création d'un site web éducatif."
  },
  {
    year: '2023',
    title: "Service Civique",
    icon: '🤝',
    color: 'from-orange-400 to-orange-500',
    shadow: 'shadow-orange-200',
    description: "Centre des impôts de Saint-Malo. Accueil et accompagnement des usagers.",
    details: "Développement du sens du service public, gestion de situations variées."
  }
];

const ToeicGauge = ({ label, score, max, delay }: { label: string, score: number, max: number, delay: number }) => {
  const [displayScore, setDisplayScore] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayScore(Math.floor(progress * score));
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplayScore(score);
    }
    const timeout = setTimeout(() => requestAnimationFrame(animate), delay);
    return () => { clearTimeout(timeout); };
  }, [score, delay]);
  return (
    <div className="w-full mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-semibold text-gray-700">{label}</span>
        <span className="text-xs font-semibold text-gray-700">{displayScore}/{max}</span>
      </div>
      <div className="relative w-full h-5 rounded-full bg-gray-200 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(score / max) * 100}%` }}
          transition={{ duration: 1, delay: delay / 1000, ease: 'easeOut' }}
          className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-md`}
        />
      </div>
    </div>
  );
};

export default function About() {
  return (
    <PageBackground>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow pt-[80px]">
          <div className="container mx-auto px-2 md:px-6 py-12">
            <motion.div className="max-w-5xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Mon Profil</h1>
              {/* Présentation */}
              <motion.div className="grid md:grid-cols-[300px_1fr] gap-8 mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg group bg-white">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Nikolaz Voisson</h2>
                    <p className="text-lg text-blue-600 font-semibold mb-4">Entrepreneur & Développeur</p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Passionné par l'informatique et l'automatisation, je mets mes compétences au service des entreprises pour optimiser leurs processus et améliorer leur efficacité opérationnelle. Mon expertise s'étend de l'EDI EDIFACT au développement web, en passant par le support IT et l'automatisation RPA.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">🎯 Objectifs</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          Accompagnement digital des TPE/PME
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          Innovation technologique
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          Excellence opérationnelle
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">💡 Expertise</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Automatisation RPA
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          EDI EDIFACT
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Développement Web
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">Automatisation</span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-200">EDI EDIFACT</span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-200">Support IT</span>
                    <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors duration-200">Développement Web</span>
                    <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium hover:bg-red-200 transition-colors duration-200">Gestion de Projet</span>
                    <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors duration-200">Relation Client</span>
                  </div>
                </div>
              </motion.div>

              {/* Statistiques */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold text-blue-600 mb-2">885</div>
                  <div className="text-gray-600">Score TOEIC</div>
                  <div className="text-sm text-gray-500">Niveau B2 - Avancé</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                  <div className="text-sm text-gray-500">En développement</div>
                </div>
              </motion.div>

              {/* Timeline titre */}
              <motion.h2 
                className="text-3xl font-bold text-gray-800 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Mon Parcours
              </motion.h2>

              {/* Timeline Webflow-like améliorée */}
              <div className="relative py-20">
                {/* Ligne centrale épaisse avec effet gradient */}
                <div className="absolute left-1/2 top-0 bottom-0 w-3 md:w-4 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 rounded-full -translate-x-1/2 z-0" />
                <div className="flex flex-col gap-32 md:gap-28">
                  {steps.map((item, idx) => (
                    <TimelineItem
                      key={item.title}
                      year={item.year}
                      title={item.title}
                      description={
                        <>
                          <div className="text-gray-700 text-base mb-1">{item.description}</div>
                          <div className="text-gray-500 text-sm">{item.details}</div>
                        </>
                      }
                      theme={
                        item.title.includes("E-DInamic") ? "professional" :
                        item.title.includes("BTS") || item.title.includes("Baccalauréat") ? "education" :
                        item.title.includes("Service Civique") ? "experience" : "certification"
                      }
                      side={idx % 2 === 0 ? 'left' : 'right'}
                      delay={idx * 0.2}
                    />
                  ))}
                  {/* TOEIC spécial */}
                  <TimelineItem
                    year="2021"
                    title="TOEIC - Score 885/990"
                    description={
                      <>
                        <div className="text-gray-700 text-base mb-1">Certification en anglais professionnel.</div>
                        <div className="text-sm text-green-700 mb-2">Niveau B2 (avancé) – Très bonne compréhension écrite et orale.</div>
                        <ToeicGauge label="Compréhension Orale" score={445} max={495} delay={200} />
                        <ToeicGauge label="Compréhension Écrite" score={440} max={495} delay={1200} />
                        <div className="mt-2 text-xs text-gray-500">Test passé en 2021 – Score global : 885/990</div>
                      </>
                    }
                    theme="certification"
                    side="left"
                    delay={0.8}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </PageBackground>
  );
} 