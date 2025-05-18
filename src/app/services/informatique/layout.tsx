import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services Informatiques | E-DInamic',
  description: 'Des solutions complètes pour tous vos besoins en informatique. Diagnostic, réparation et optimisation de vos équipements.',
}

export default function InformatiqueLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 