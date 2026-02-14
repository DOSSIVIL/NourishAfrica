'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

type ThemeToggleProps = {
  className?: string
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Éviter le flash de contenu non stylé
  useEffect(() => {
    setMounted(true)
  }, [])

  // Déterminer si on est en mode sombre
  const isDark = resolvedTheme === 'dark' || theme === 'dark'

  const toggleTheme = () => {
    if (isDark) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  // Ne rien afficher jusqu'à ce que le composant soit monté
  if (!mounted) {
    return (
      <button
        className={`relative p-2 rounded-lg 
          bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
          border border-gray-200/50 dark:border-gray-700/50
          transition-all duration-300
          group/theme ${className ?? ''}`}
        aria-label="Changer de thème"
      >
        <div className="relative w-6 h-6">
          <Sun size={20} className="text-gray-400" />
        </div>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2.5 rounded-xl 
        bg-white/25 dark:bg-gray-800/25 backdrop-blur-xl
        border border-white/40 dark:border-white/20
        hover:bg-white/35 dark:hover:bg-gray-800/35
        hover:border-emerald-400/50 dark:hover:border-emerald-500/50
        shadow-[0_4px_16px_0_rgba(16,185,129,0.12)]
        transition-all duration-300 hover:scale-110 active:scale-95
        group/theme ${className ?? ''}`}
      aria-label={`Passer en mode ${isDark ? 'clair' : 'sombre'}`}
      title={`Basculer vers le mode ${isDark ? 'clair' : 'sombre'}`}
    >
      {/* Reflet 3D */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent dark:from-white/10 pointer-events-none rounded-xl" />
      
      {/* Animation du soleil/lune */}
      <div className="relative w-6 h-6 z-10">
        <Sun
          size={20}
          className={`absolute inset-0 m-auto transition-all duration-500 ease-in-out
            ${isDark 
              ? 'rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'}
            text-amber-500 dark:text-amber-400`}
        />
        <Moon
          size={20}
          className={`absolute inset-0 m-auto transition-all duration-500 ease-in-out
            ${isDark 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'}
            text-indigo-400 dark:text-indigo-300`}
        />
      </div>
      
      {/* Effet de halo au survol */}
      <div className="absolute inset-0 rounded-xl 
        bg-gradient-to-r from-amber-200/0 via-amber-100/0 to-amber-200/0
        dark:from-indigo-200/0 dark:via-indigo-100/0 dark:to-indigo-200/0
        group-hover/theme:from-amber-200/30 group-hover/theme:via-amber-100/30 group-hover/theme:to-amber-200/30
        dark:group-hover/theme:from-indigo-200/30 dark:group-hover/theme:via-indigo-100/30 dark:group-hover/theme:to-indigo-200/30
        transition-all duration-300 pointer-events-none" />
      
      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
        opacity-0 group-hover/theme:opacity-100 
        translate-x-[-100%] group-hover/theme:translate-x-[100%]
        transition-all duration-700 pointer-events-none rounded-xl" />
    </button>
  )
}
