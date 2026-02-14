'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { 
  Menu, 
  X, 
  Globe,
  LogIn,
  UserPlus,
  ChevronDown
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState('fr')
  const [isLangOpen, setIsLangOpen] = useState(false)
  
  // Récupérer la route actuelle
  const pathname = usePathname()

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu langue au clic extérieur
  useEffect(() => {
    const handleClickOutside = () => setIsLangOpen(false)
    if (isLangOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isLangOpen])

  // Items de navigation
  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Notre Solution', href: '/solution' },
    { name: 'Contact', href: '/contact' },
  ]

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷', short: 'FR' },
    { code: 'en', name: 'English', flag: '🇬🇧', short: 'EN' }
  ]

  // Fonction pour vérifier si le lien est actif
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Effet de lumière ambiante derrière le header */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent dark:from-emerald-400/20 dark:via-teal-400/10 pointer-events-none z-40" />
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-white/30 dark:bg-gray-900/30' 
          : 'bg-white/20 dark:bg-gray-900/20'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(150%)',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(150%)',
      }}>
        
        {/* Bordure 3D avec reflets */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent blur-sm" />
        
        {/* Effet de réflexion 3D */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/5 dark:from-white/5 dark:to-white/0 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex h-24 items-center justify-between gap-6">
            
            {/* LOGO (AGRANDI 2.5X - TRÈS VISIBLE) */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <div className="relative w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44
                transition-all duration-500 group-hover:scale-110
                filter group-hover:brightness-110">
                <Image
                  src="/logo1.png"
                  alt="Logo NourishAfrica"
                  fill
                  priority
                  className="object-contain
                    drop-shadow-[0_8px_24px_rgba(16,185,129,0.4)]
                    group-hover:drop-shadow-[0_12px_36px_rgba(16,185,129,0.55)]
                    dark:drop-shadow-[0_10px_30px_rgba(52,211,153,0.5)]
                    dark:group-hover:drop-shadow-[0_16px_40px_rgba(52,211,153,0.65)]
                    transition-all duration-500"
                />
                {/* Halo lumineux autour du logo */}
                <div className="absolute inset-0 bg-gradient-radial from-emerald-400/20 via-transparent to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </Link>

            {/* Navigation Desktop - Effet Verre 3D avec Indicateur de Page Active */}
            <nav className="hidden lg:flex items-center justify-center flex-1 max-w-3xl mx-auto">
              <div className="relative flex items-center space-x-2 px-4 py-2.5 rounded-2xl
                bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl
                border border-white/30 dark:border-white/10
                shadow-[0_8px_32px_0_rgba(16,185,129,0.15)]
                dark:shadow-[0_8px_32px_0_rgba(52,211,153,0.2)]"
                style={{
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  transform: 'translateZ(0)',
                  perspective: '1000px',
                }}>
                
                {/* Reflet 3D supérieur */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent dark:from-white/10 rounded-t-2xl pointer-events-none" />
                
                {navItems.map((item) => {
                  const active = isActive(item.href)
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative px-5 py-2.5 text-sm font-semibold 
                        transition-all duration-300 rounded-xl
                        group/nav
                        ${active 
                          ? 'bg-gradient-to-r from-emerald-500/40 to-teal-500/40 text-emerald-700 dark:text-emerald-300 shadow-[0_4px_16px_rgba(16,185,129,0.3)]' 
                          : 'text-gray-800 dark:text-gray-100 hover:bg-white/40 dark:hover:bg-white/10 hover:text-emerald-600 dark:hover:text-emerald-400'
                        }`}
                      style={{
                        textShadow: active ? '0 2px 10px rgba(16,185,129,0.5)' : '0 2px 10px rgba(255,255,255,0.3)',
                      }}
                    >
                      {/* Effet de brillance pour page active */}
                      {active && (
                        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent rounded-xl pointer-events-none" />
                      )}
                      
                      {/* Texte */}
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Indicateur de page active (point lumineux) */}
                      {active && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 
                          shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse z-10" />
                      )}
                      
                      {/* Underline animé avec effet verre (seulement si non actif) */}
                      {!active && (
                        <span className="absolute inset-x-2 bottom-1 h-0.5 
                          bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 
                          scale-x-0 group-hover/nav:scale-x-100 
                          transition-transform duration-500 rounded-full
                          shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                      )}
                      
                      {/* Effet de brillance au survol (seulement si non actif) */}
                      {!active && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          opacity-0 group-hover/nav:opacity-100 
                          translate-x-[-100%] group-hover/nav:translate-x-[100%]
                          transition-all duration-700 rounded-xl pointer-events-none" />
                      )}
                    </Link>
                  )
                })}
              </div>
            </nav>

            {/* Actions - Effet Verre 3D */}
            <div className="flex items-center gap-3">
              
              {/* Sélecteur de langue - Verre 3D */}
              <div className="relative">
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsLangOpen(!isLangOpen)
                  }}
                  className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl 
                    bg-white/25 dark:bg-gray-800/25 backdrop-blur-xl
                    border border-white/40 dark:border-white/20
                    hover:bg-white/35 dark:hover:bg-gray-800/35
                    hover:border-emerald-400/50 dark:hover:border-emerald-500/50
                    shadow-[0_4px_16px_0_rgba(16,185,129,0.12)]
                    transition-all duration-300 group overflow-hidden"
                  style={{
                    backdropFilter: 'blur(16px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                  }}
                >
                  {/* Reflet 3D */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent dark:from-white/10 pointer-events-none" />
                  
                  <Globe size={18} className="text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors relative z-10" />
                  <span className="hidden sm:inline text-base relative z-10">
                    {languages.find(l => l.code === language)?.flag}
                  </span>
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-100 relative z-10">
                    {languages.find(l => l.code === language)?.short}
                  </span>
                  <ChevronDown size={16} className={`text-gray-600 dark:text-gray-400 transition-transform duration-300 relative z-10 ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown langue - Verre 3D cristallin */}
                <div className={`absolute right-0 top-full mt-3 w-52 
                  bg-white/30 dark:bg-gray-800/30 backdrop-blur-2xl
                  border border-white/40 dark:border-white/20
                  rounded-2xl shadow-[0_8px_32px_0_rgba(16,185,129,0.2)] overflow-hidden
                  transition-all duration-500 origin-top-right
                  ${isLangOpen ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-2'}`}
                  style={{
                    backdropFilter: 'blur(24px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                  }}
                >
                  {/* Reflet supérieur 3D */}
                  <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent dark:from-white/10 pointer-events-none rounded-t-2xl" />
                  
                  <div className="py-2 relative z-10">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code)
                          setIsLangOpen(false)
                        }}
                        className={`w-full px-5 py-3 text-left flex items-center gap-3
                          transition-all duration-300 relative group/lang
                          ${language === lang.code 
                            ? 'bg-emerald-500/30 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold' 
                            : 'text-gray-800 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-white/10'
                          }`}
                      >
                        {/* Effet de brillance au survol */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          opacity-0 group-hover/lang:opacity-100 
                          translate-x-[-100%] group-hover/lang:translate-x-[100%]
                          transition-all duration-700 pointer-events-none" />
                        
                        <span className="text-2xl relative z-10">{lang.flag}</span>
                        <span className="flex-1 relative z-10">{lang.name}</span>
                        {language === lang.code && (
                          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)] relative z-10 animate-pulse" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dark Mode Toggle */}
              <ThemeToggle />

              {/* Boutons Auth Desktop - Verre 3D */}
              <div className="hidden md:flex items-center gap-3">
                <Link
                  href="/auth/login"
                  className="relative px-5 py-2.5 text-sm font-semibold rounded-xl 
                    bg-[#D9763D]/90 backdrop-blur-xl
                    border-2 border-[#D9763D]/50
                    text-white
                    hover:bg-[#D9763D]/100
                    hover:border-[#E68A5A]/70
                    hover:text-white
                    shadow-[0_4px_16px_0_rgba(217,118,61,0.3)]
                    hover:shadow-[0_8px_24px_0_rgba(217,118,61,0.4)]
                    transition-all duration-300 hover:scale-105 active:scale-95
                    flex items-center gap-2 overflow-hidden group"
                  style={{
                    backdropFilter: 'blur(16px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                  }}
                >
                  {/* Reflet 3D */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                  
                  <LogIn size={16} className="relative z-10" />
                  <span className="relative z-10">Connexion</span>
                  
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                    opacity-0 group-hover:opacity-100 
                    translate-x-[-100%] group-hover:translate-x-[100%]
                    transition-all duration-700 pointer-events-none" />
                </Link>
                
                <Link
                  href="/auth/register"
                  className="relative px-5 py-2.5 text-sm font-bold rounded-xl
                    bg-gradient-to-r from-emerald-500/90 via-emerald-600/90 to-teal-500/90 
                    text-white backdrop-blur-xl
                    border border-white/30
                    shadow-[0_8px_24px_0_rgba(16,185,129,0.35)]
                    hover:shadow-[0_12px_32px_0_rgba(16,185,129,0.45)] 
                    hover:from-emerald-600 hover:via-emerald-700 hover:to-teal-600
                    transition-all duration-300 hover:scale-105 active:scale-95
                    flex items-center gap-2 overflow-hidden group"
                  style={{
                    backdropFilter: 'blur(16px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                  }}
                >
                  {/* Reflet 3D brillant */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent pointer-events-none" />
                  
                  <UserPlus size={16} className="relative z-10" />
                  <span className="relative z-10">Inscription</span>
                  
                  {/* Effet de brillance intense */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                    opacity-0 group-hover:opacity-100 
                    translate-x-[-100%] group-hover:translate-x-[100%]
                    transition-all duration-700 pointer-events-none" />
                </Link>
              </div>

              {/* Menu Mobile Button - Verre 3D */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative p-3 rounded-xl 
                  bg-white/25 dark:bg-gray-800/25 backdrop-blur-xl
                  border border-white/40 dark:border-white/20
                  text-gray-800 dark:text-gray-100
                  hover:bg-white/35 dark:hover:bg-white/10
                  hover:border-emerald-500/50 dark:hover:border-emerald-400/50
                  shadow-[0_4px_16px_0_rgba(16,185,129,0.12)]
                  transition-all duration-300 overflow-hidden group"
                style={{
                  backdropFilter: 'blur(16px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                }}
              >
                {/* Reflet 3D */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent dark:from-white/10 pointer-events-none" />
                
                <div className="relative z-10">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
              </button>
            </div>
          </div>

          {/* Menu Mobile - Verre 3D Cristallin avec Indicateur de Page Active */}
          <div className={`lg:hidden transition-all duration-700 ease-in-out ${
            isMenuOpen ? 'max-h-[700px] opacity-100 mb-6' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="mt-4 p-6 rounded-3xl 
              bg-white/25 dark:bg-gray-800/25 backdrop-blur-2xl
              border border-white/40 dark:border-white/20
              shadow-[0_16px_48px_0_rgba(16,185,129,0.25)]
              relative overflow-hidden"
              style={{
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              }}
            >
              {/* Reflet 3D supérieur */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent dark:from-white/10 rounded-t-3xl pointer-events-none" />
              
              {/* Halo lumineux */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-400/20 dark:bg-emerald-500/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-teal-400/20 dark:bg-teal-500/30 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                {/* Navigation mobile avec indicateur */}
                <div className="space-y-2 mb-6">
                  {navItems.map((item, index) => {
                    const active = isActive(item.href)
                    
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center justify-between px-5 py-4 rounded-xl font-semibold
                          transition-all duration-300 hover:scale-[1.02]
                          shadow-sm hover:shadow-md
                          group/mobile relative
                          ${active 
                            ? 'bg-gradient-to-r from-emerald-500/40 to-teal-500/40 text-emerald-700 dark:text-emerald-300 border-2 border-emerald-400/50' 
                            : 'text-gray-800 dark:text-gray-100 hover:bg-white/40 dark:hover:bg-white/15 hover:text-emerald-600 dark:hover:text-emerald-400 border border-transparent hover:border-white/30'
                          }`}
                        style={{ 
                          animationDelay: `${index * 50}ms`,
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        {/* Effet de brillance pour page active */}
                        {active && (
                          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-xl pointer-events-none" />
                        )}
                        
                        {/* Texte */}
                        <span className="relative z-10">{item.name}</span>
                        
                        {/* Indicateur de page active (point lumineux) */}
                        {active && (
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 
                            shadow-[0_0_12px_rgba(16,185,129,0.8)] animate-pulse relative z-10" />
                        )}
                        
                        {/* Effet de brillance au survol (seulement si non actif) */}
                        {!active && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                            opacity-0 group-hover/mobile:opacity-100 
                            translate-x-[-100%] group-hover/mobile:translate-x-[100%]
                            transition-all duration-700 rounded-xl pointer-events-none" />
                        )}
                      </Link>
                    )
                  })}
                </div>

                {/* Divider cristallin */}
                <div className="relative h-px mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent blur-sm" />
                </div>

                {/* Langues mobile */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wider">
                    Langue / Language
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`relative p-4 rounded-2xl text-center transition-all duration-300 overflow-hidden
                          ${language === lang.code 
                            ? 'bg-gradient-to-br from-emerald-500/80 to-teal-500/80 text-white shadow-[0_8px_24px_0_rgba(16,185,129,0.4)] scale-105 border-2 border-white/40' 
                            : 'bg-white/30 dark:bg-white/10 text-gray-800 dark:text-gray-200 hover:bg-white/40 dark:hover:bg-white/20 border border-white/30'
                          }`}
                        style={{
                          backdropFilter: 'blur(12px)',
                        }}
                      >
                        {/* Reflet 3D */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-2xl" />
                        
                        <div className="text-3xl mb-2 relative z-10">{lang.flag}</div>
                        <div className="text-sm font-bold relative z-10">{lang.name}</div>
                        
                        {language === lang.code && (
                          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Boutons auth mobile - Verre 3D */}
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/auth/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="relative px-4 py-4 rounded-xl text-center font-semibold
                      bg-[#D9763D]/90 backdrop-blur-xl
                      border-2 border-[#D9763D]/50
                      text-white
                      hover:bg-[#D9763D]/100
                      hover:border-[#E68A5A]/70
                      hover:text-white
                      shadow-[0_8px_24px_0_rgba(217,118,61,0.3)]
                      hover:shadow-[0_12px_32px_0_rgba(217,118,61,0.4)]
                      transition-all duration-300 
                      flex items-center justify-center gap-2 overflow-hidden group"
                    style={{
                      backdropFilter: 'blur(16px)',
                    }}
                  >
                    {/* Reflet 3D */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-xl" />
                    
                    <LogIn size={20} className="relative z-10" />
                    <span className="relative z-10">Connexion</span>
                  </Link>
                  
                  <Link
                    href="/auth/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="relative px-4 py-4 rounded-xl text-center font-bold
                      bg-gradient-to-r from-emerald-500/90 to-teal-500/90 
                      text-white backdrop-blur-xl
                      border border-white/40
                      shadow-[0_8px_24px_0_rgba(16,185,129,0.35)]
                      hover:shadow-[0_12px_32px_0_rgba(16,185,129,0.45)]
                      transition-all duration-300 
                      flex items-center justify-center gap-2 overflow-hidden group"
                    style={{
                      backdropFilter: 'blur(16px)',
                    }}
                  >
                    {/* Reflet 3D brillant */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent pointer-events-none rounded-xl" />
                    
                    <UserPlus size={20} className="relative z-10" />
                    <span className="relative z-10">Inscription</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}