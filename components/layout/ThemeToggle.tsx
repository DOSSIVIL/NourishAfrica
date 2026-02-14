'use client'

import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

type ThemeToggleProps = {
  className?: string
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false)

  // Vérifie le thème système au chargement
  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg 
        bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
        border border-gray-200/50 dark:border-gray-700/50
        hover:bg-white/80 dark:hover:bg-gray-800/80
        transition-all duration-300 hover:scale-110 active:scale-95
        group/theme ${className ?? ''}`}
      aria-label={`Passer en mode ${isDark ? 'clair' : 'sombre'}`}
    >
      {/* Animation du soleil/lune */}
      <div className="relative w-6 h-6">
        <Sun
          size={20}
          className={`absolute inset-0 m-auto transition-all duration-300
            ${isDark ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}
            text-amber-500`}
        />
        <Moon
          size={20}
          className={`absolute inset-0 m-auto transition-all duration-300
            ${isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}
            text-indigo-400`}
        />
      </div>
      
      {/* Effet de halo */}
      <div className="absolute inset-0 rounded-lg 
        bg-gradient-to-r from-amber-200/0 via-amber-100/0 to-amber-200/0
        dark:from-indigo-200/0 dark:via-indigo-100/0 dark:to-indigo-200/0
        group-hover/theme:from-amber-200/20 group-hover/theme:via-amber-100/20 group-hover/theme:to-amber-200/20
        dark:group-hover/theme:from-indigo-200/20 dark:group-hover/theme:via-indigo-100/20 dark:group-hover/theme:to-indigo-200/20
        transition-all duration-300" />
    </button>
  )
}