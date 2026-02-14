import Link from 'next/link'
import Image from 'next/image'
import { 
  Heart, 
  Github, 
  Linkedin,
  ArrowUpRight
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'NourishAfrica',
      links: [
        { name: 'À propos', href: '/about' },
        { name: 'Notre mission', href: '/mission' },
        { name: 'Impact', href: '/impact' },
        { name: 'Carrières', href: '/careers' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'NutriScan IA', href: '/scan' },
        { name: 'Professionnels', href: '/professionals' },
        { name: 'API Nutrition', href: '/api' },
        { name: 'Entreprises', href: '/business' },
      ]
    },
    {
      title: 'Ressources',
      links: [
        { name: 'Blog Nutrition', href: '/blog' },
        { name: 'Guides santé', href: '/guides' },
        { name: 'Recettes africaines', href: '/recipes' },
        { name: 'Documentation', href: '/docs' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Centre d\'aide', href: '/help' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact', href: '/contact' },
        { name: 'Statut service', href: '/status' },
      ]
    }
  ]

  const socialLinks = [
    { 
      icon: <Github size={22} />, 
      href: 'https://github.com/nourishafrica', 
      label: 'GitHub',
      color: 'hover:bg-gray-800'
    },
    { 
      icon: <Linkedin size={22} />, 
      href: 'https://linkedin.com/company/nourishafrica', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-700'
    },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-emerald-950 via-gray-900 to-teal-950 text-white overflow-hidden">
      
      {/* Effets de fond décoratifs améliorés */}
      <div className="absolute inset-0">
        {/* Ligne supérieure lumineuse */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
        
        {/* Grille de points subtile */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Dégradé radial central */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />
      </div>
      
      {/* Effets de lumière flottants */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] animate-pulse hidden lg:block" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] hidden lg:block" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        
        {/* Section principale - Réorganisée pour mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12 lg:mb-16">
          
          {/* Logo et Description - Toujours en premier sur mobile */}
          <div className="lg:col-span-4">
            {/* Logo avec icône et texte - Design amélioré */}
            <div className="mb-8">
              <Link href="/" className="flex flex-col sm:flex-row items-center sm:items-start lg:flex-row gap-4 lg:gap-6 group">
                {/* Icône agrandie avec conteneur */}
                <div className="relative mb-3 sm:mb-0">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 transition-all duration-300 group-hover:scale-105">
                    <Image
                      src="/icone.png"
                      alt="NourishAfrica Icon"
                      fill
                      className="object-contain drop-shadow-[0_4px_20px_rgba(16,185,129,0.4)]
                        group-hover:drop-shadow-[0_6px_30px_rgba(16,185,129,0.6)]
                        transition-all duration-300"
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
                      priority
                    />
                  </div>
                  
                  {/* Effet de halo autour de l'icône */}
                  <div className="absolute inset-0 -z-10 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Logo texte */}
                <div className="relative">
                  <div className="relative w-64 h-16 sm:w-72 sm:h-18 lg:w-80 lg:h-20 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src="/logo1.png"
                      alt="NourishAfrica Logo"
                      fill
                      className="object-contain drop-shadow-[0_4px_20px_rgba(16,185,129,0.4)]
                        group-hover:drop-shadow-[0_6px_30px_rgba(16,185,129,0.6)]
                        transition-all duration-300"
                      sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                      priority
                    />
                  </div>
                 
                </div>
              </Link>
            </div>
            
            {/* Mission Statement - Position stratégique */}
            <div className="mb-8 lg:mb-10">
              <p className="text-gray-300 text-base leading-relaxed hidden sm:block">
                Nous transformons la santé nutritionnelle en Afrique grâce à l'intelligence 
                artificielle et la technologie mobile. Notre plateforme révolutionne 
                l'accès à l'éducation nutritionnelle.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed sm:hidden">
                Transformons la santé nutritionnelle en Afrique par l'IA et la technologie mobile.
              </p>
            </div>
            
            {/* Réseaux sociaux - Design amélioré */}
            <div>
              <div className="text-sm font-semibold text-emerald-400/80 uppercase tracking-wider mb-4 flex items-center gap-2">
                <div className="h-px w-8 bg-gradient-to-r from-emerald-500/50 to-transparent" />
                Nos Réseaux
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`relative group/social p-3.5 rounded-xl 
                      bg-white/5 backdrop-blur-sm
                      border border-emerald-500/20
                      ${social.color}
                      transition-all duration-300 
                      hover:translate-y-[-2px] hover:border-emerald-500/40
                      hover:shadow-[0_8px_32px_0_rgba(16,185,129,0.2)]`}
                  >
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity rounded-xl" />
                    
                    {/* Icône */}
                    <div className="relative z-10 text-gray-400 group-hover/social:text-emerald-400 transition-colors duration-300">
                      {social.icon}
                    </div>
                    
                    {/* Tooltip invisible pour accessibilité */}
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links - Réorganisée pour mobile */}
          <div className="lg:col-span-8 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {footerSections.map((section) => (
                <div key={section.title} className="space-y-5">
                  {/* Titre avec barre verte en dessous */}
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight mb-2">
                      {section.title}
                    </h3>
                    {/* Petite barre verte décorative */}
                    <div className="h-0.5 w-12 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
                  </div>
                  
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="group/link flex items-center text-sm text-gray-400 hover:text-emerald-400 transition-all duration-300"
                        >
                          <div className="relative overflow-hidden">
                            <span className="relative z-10 group-hover/link:translate-x-1 transition-transform duration-300 inline-block">
                              {link.name}
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-emerald-500/0 via-emerald-400/50 to-emerald-500/0 
                                         transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
                          </div>
                          <ArrowUpRight 
                            size={12} 
                            className="ml-1.5 opacity-0 group-hover/link:opacity-100 -translate-x-1 group-hover/link:translate-x-0 transition-all duration-300" 
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Séparateur élégant avec effet lumineux */}
        <div className="relative h-px my-8 lg:my-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent blur-sm" />
        </div>

        {/* Footer inférieur - Réorganisé pour mobile */}
        <div className="pt-6 lg:pt-8">
          <div className="flex flex-col gap-6">
            
            {/* Liens légaux - Centré sur mobile */}
            <div className="order-1">
              <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 text-xs lg:text-sm">
                <Link 
                  href="/terms" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 px-2 py-1 lg:px-3 lg:py-1.5 rounded-lg hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20"
                >
                  Conditions
                </Link>
                <div className="w-px h-3 lg:h-4 bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
                <Link 
                  href="/privacy" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 px-2 py-1 lg:px-3 lg:py-1.5 rounded-lg hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20"
                >
                  Confidentialité
                </Link>
                <div className="w-px h-3 lg:h-4 bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
                <Link 
                  href="/cookies" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 px-2 py-1 lg:px-3 lg:py-1.5 rounded-lg hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20"
                >
                  Cookies
                </Link>
                <div className="w-px h-3 lg:h-4 bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
                <Link 
                  href="/accessibility" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 px-2 py-1 lg:px-3 lg:py-1.5 rounded-lg hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20"
                >
                  Accessibilité
                </Link>
              </div>
            </div>

            {/* Copyright et Version */}
            <div className="order-2 flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright */}
              <div className="flex items-center gap-3 text-gray-400">
                <div className="relative">
                  <Heart 
                    size={16} 
                    className="text-emerald-500 fill-current" 
                  />
                  <div className="absolute inset-0 bg-emerald-500/30 blur-md rounded-full animate-pulse" />
                </div>
                <div className="text-xs lg:text-sm text-center md:text-left">
                  <span className="font-medium">© {currentYear} NourishAfrica.</span>
                  <span className="text-gray-500 ml-1 lg:ml-2">Tous droits réservés.</span>
                </div>
              </div>

              {/* Version et localisation */}
              <div className="text-xs text-gray-500 flex items-center gap-2 mt-2 md:mt-0">
                <div className="px-2 py-1 bg-emerald-500/10 rounded-md border border-emerald-500/20">
                  <span className="text-emerald-400 font-mono">v1.0.0</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Yaoundé, Cameroun</span>
                <span className="sm:hidden">YC</span>
              </div>
            </div>

            {/* Mentions légales */}
            <div className="order-3 text-center mt-2 lg:mt-4">
              <p className="text-xs text-gray-600 leading-relaxed max-w-3xl mx-auto">
                NourishAfrica est une plateforme d'intelligence nutritionnelle. 
                Nos conseils sont fournis à titre informatif et ne remplacent pas 
                l'avis d'un professionnel de santé. 
                <Link 
                  href="/disclaimer" 
                  className="text-emerald-500 hover:text-emerald-400 ml-1 transition-colors inline-flex items-center gap-1"
                >
                  Voir les avertissements
                  <ArrowUpRight size={10} />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}