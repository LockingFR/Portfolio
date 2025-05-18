import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | E-DInamic',
  description: 'Contactez E-DInamic pour vos projets web et informatiques. Nous sommes à votre écoute pour répondre à vos besoins.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 