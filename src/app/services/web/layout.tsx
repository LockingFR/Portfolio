import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services Web | GETS',
  description: 'Des solutions web modernes et performantes pour votre entreprise. Du site vitrine à l\'application sur mesure.',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 