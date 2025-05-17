'use client';

import { motion } from 'framer-motion';

export default function LoadingDots() {
  const text = "E-DInamic";

  return (
    <div className="fixed inset-0 z-50">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-900/90"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div className="w-full h-full bg-[url('/images/background.png')] bg-cover opacity-40" />
          </motion.div>
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [-3, 3, -3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-12 md:-top-20 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-400/20 blur-lg" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-4 md:mb-6 tracking-tight font-poppins">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto font-light"
            >
              Solutions d'automatisation et support informatique
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 