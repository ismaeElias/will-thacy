import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Felipa } from 'next/font/google'
import './globals.css'

const felipa = Felipa({
  weight: '400',  // Peso da fonte
  subsets: ['latin'],  // Subconjuntos de caracteres
  display: 'swap',  // Otimização de carregamento
})
  
export const metadata: Metadata = {
  title: 'Will & Thacy',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
