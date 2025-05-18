import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | GETS',
  description: 'Contactez GETS pour vos projets web et informatiques. Nous sommes à votre écoute pour répondre à vos besoins.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 