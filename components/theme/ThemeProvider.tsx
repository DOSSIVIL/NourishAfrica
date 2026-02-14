'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ReactNode } from 'react'

type ThemeProviderProps = {
  children: ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={false}
      storageKey="nourish-africa-theme"
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
