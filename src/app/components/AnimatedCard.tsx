'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface AnimatedCardProps {
  href?: string
  icon?: React.ReactNode
  title: string
  description: string
  features?: string[]
  className?: string
  delay?: number
}

export default function AnimatedCard({
  href,
  icon,
  title,
  description,
  features,
  className = '',
  delay = 0
}: AnimatedCardProps) {
  const Card = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 ${className}`}
    >
      <div className="p-8">
        {icon && (
          <motion.div 
            initial={{ opacity: 0.6, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.3,
              delay: delay + 0.2,
              ease: "easeOut"
            }}
            className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6"
          >
            {icon}
          </motion.div>
        )}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-2 text-gray-600">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + index * 0.1 }}
                className="flex items-center"
              >
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        <Card />
      </Link>
    )
  }

  return <Card />
} 