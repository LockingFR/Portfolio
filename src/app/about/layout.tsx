import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos | E-DInamic',
  description: 'Découvrez E-DInamic, votre partenaire technologique de confiance. Notre expertise au service de vos projets.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 