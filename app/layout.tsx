import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header, Footer } from '@/components/layout'
import { ThemeProvider } from '@/components/theme'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'NourishAfrica - Nutrition intelligente pour l\'Afrique',
  description: 'Combattons la malnutrition avec la technologie. Analyse IA, conseils nutritionnels, connexion avec des professionnels.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          <Header />
          
          {/* Contenu principal avec padding pour le header fixe */}
          <main className="pt-16 md:pt-20 min-h-screen">
            {children}
          </main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}