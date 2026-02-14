'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  Mail, 
  Lock, 
  ArrowLeft, 
  Home,
  Eye,
  EyeOff,
  Sparkles
} from 'lucide-react'
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  // Masquer le header et footer sur la page de connexion
  useEffect(() => {
    // Masquer header et footer
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    const main = document.querySelector('main')
    
    if (header) header.style.display = 'none'
    if (footer) footer.style.display = 'none'
    if (main) main.style.paddingTop = '0'
    
    // Nettoyage au démontage
    return () => {
      if (header) header.style.display = ''
      if (footer) footer.style.display = ''
      if (main) main.style.paddingTop = ''
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation basique
    if (!formData.emailOrUsername || !formData.password) {
      alert('Veuillez remplir tous les champs')
      return
    }
    
    setIsLoading(true)
    
    try {
      // Simulation d'une connexion (à remplacer par un vrai appel API)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Ici, vous pouvez ajouter votre logique d'authentification réelle
      // Exemple : const response = await fetch('/api/auth/login', { ... })
      
      // Pour l'instant, on simule une connexion réussie
      console.log('Connexion réussie pour:', formData.emailOrUsername)
      
      // Redirection après connexion réussie
      // Décommentez la ligne suivante quand vous aurez une page dashboard
      // router.push('/dashboard')
      
      // Pour l'instant, on affiche juste un message
      alert('Connexion réussie ! (Cette fonctionnalité sera bientôt disponible)')
      
    } catch (error) {
      console.error('Erreur de connexion:', error)
      alert('Erreur lors de la connexion. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = (provider) => {
    console.log(`Connexion avec ${provider}`)
    // Ici, vous ajouterez la logique de connexion avec les réseaux sociaux
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center min-h-[600px]">
          
          {/* Carte glassmorphism */}
          <div className="w-full max-w-5xl backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 shadow-2xl rounded-3xl border border-white/20 dark:border-gray-700/30 overflow-hidden">
            
            {/* Bande décorative supérieure */}
            <div className="h-2 bg-gradient-to-r from-amber-700 via-orange-600 to-green-700"></div>
            
            <div className="grid lg:grid-cols-2 divide-x divide-gray-200/50 dark:divide-gray-700/50">
              
              {/* Partie Animation - Sans background animé */}
              <div className="flex flex-col items-center justify-center p-8 bg-white/40 dark:bg-gray-800/40">
                {/* Message de bienvenue */}
                <div className="relative w-full max-w-md mx-auto text-center mb-8">
                  <h1 className="text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                    Bienvenue
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    NourishAfrica
                  </p>
                </div>

                {/* Icône principale */}
                <div className="relative w-64 h-64">
                  <div className="relative w-full h-full">
                    <Image
                      src="/icone.png"
                      alt="NourishAfrica Icon"
                      fill
                      className="object-contain drop-shadow-xl"
                      priority
                    />
                  </div>
                </div>

                {/* Message de retour */}
                <div className="text-center space-y-4 mt-8">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Sparkles className="w-8 h-8 text-amber-500" />
                    <span className="text-3xl font-light text-gray-400">✦</span>
                    <Sparkles className="w-8 h-8 text-green-600" />
                  </div>

                  <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    Bon retour parmi nous
                  </h2>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Nous étions impatients de vous revoir
                  </p>
                </div>

                {/* Logo */}
                <div className="relative w-72 h-36 mt-8">
                  <div className="relative w-full h-full">
                    <Image
                      src="/logo1.png"
                      alt="NourishAfrica Logo"
                      fill
                      className="object-contain drop-shadow-lg"
                      priority
                    />
                  </div>
                </div>

                {/* Indicateurs visuels statiques */}
                <div className="flex gap-2 mt-4">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                </div>
              </div>

              {/* Partie Formulaire */}
              <div className="p-8 backdrop-blur-xl bg-white/50 dark:bg-gray-800/50">
                <div className="w-full max-w-md mx-auto">
                  
                  {/* Bouton retour/accueil */}
                  <div className="mb-6 flex justify-between items-center">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                        bg-white/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600
                        text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400
                        hover:border-amber-400 dark:hover:border-amber-500 hover:bg-amber-50/80 dark:hover:bg-amber-900/30
                        shadow-sm hover:shadow backdrop-blur-sm
                        transition-all duration-300 group"
                    >
                      <ArrowLeft className="w-4 h-4 hidden md:block group-hover:-translate-x-1 transition-transform" />
                      <Home className="w-4 h-4 md:hidden" />
                      <span className="text-sm font-medium">Retour</span>
                    </Link>
                    
                    {/* Indicateur de page */}
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium px-3 py-1 bg-white/50 dark:bg-gray-700/50 rounded-full backdrop-blur-sm">
                      Connexion
                    </span>
                  </div>

                  {/* Titre */}
                  <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                      Accédez à votre espace
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      Renseignez vos identifiants pour continuer
                    </p>
                  </div>

                  {/* Formulaire */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Champ Email/Username */}
                    <div className="relative">
                      <label htmlFor="emailOrUsername" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Email ou nom d'utilisateur
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 dark:text-blue-400">
                          <Mail className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          id="emailOrUsername"
                          name="emailOrUsername"
                          value={formData.emailOrUsername}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          placeholder="exemple@email.com"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl
                            bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm
                            border-2 border-gray-200 dark:border-gray-600
                            text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
                            focus:outline-none focus:border-green-500 dark:focus:border-green-400
                            focus:bg-white dark:focus:bg-gray-700 focus:shadow-lg
                            transition-all duration-300
                            hover:border-green-400 dark:hover:border-green-500"
                        />
                        {/* Barre d'animation au focus */}
                        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                          bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300
                          ${focusedField === 'email' ? 'w-11/12' : 'w-0'}`} />
                      </div>
                    </div>

                    {/* Champ Mot de passe */}
                    <div className="relative">
                      <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Mot de passe
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 dark:text-blue-400">
                          <Lock className="w-5 h-5" />
                        </div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('password')}
                          onBlur={() => setFocusedField(null)}
                          required
                          placeholder="••••••••"
                          className="w-full pl-12 pr-12 py-3.5 rounded-xl
                            bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm
                            border-2 border-gray-200 dark:border-gray-600
                            text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
                            focus:outline-none focus:border-green-500 dark:focus:border-green-400
                            focus:bg-white dark:focus:bg-gray-700 focus:shadow-lg
                            transition-all duration-300
                            hover:border-green-400 dark:hover:border-green-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2
                            p-1 rounded-lg text-gray-400 dark:text-gray-500
                            hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50/50 dark:hover:bg-green-900/30
                            transition-all duration-200"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                        {/* Barre d'animation au focus */}
                        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                          bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300
                          ${focusedField === 'password' ? 'w-11/12' : 'w-0'}`} />
                      </div>
                    </div>

                    {/* Mot de passe oublié */}
                    <div className="flex items-center justify-end">
                      <Link
                        href="/auth/forgot-password"
                        className="text-sm font-medium text-blue-600 dark:text-blue-400 
                          hover:text-blue-700 dark:hover:text-blue-300 hover:underline
                          transition-colors duration-200
                          flex items-center gap-1 group"
                      >
                        <span>Mot de passe oublié ?</span>
                        <ArrowLeft className="w-3 h-3 rotate-180 opacity-0 group-hover:opacity-100 transition-all" />
                      </Link>
                    </div>

                    {/* Bouton de connexion - Marron */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold text-white
                        bg-amber-700 hover:bg-amber-800
                        dark:bg-amber-800 dark:hover:bg-amber-900
                        shadow-md hover:shadow-lg
                        transition-all duration-300
                        transform hover:scale-[1.02] active:scale-[0.98]
                        disabled:opacity-50 disabled:cursor-not-allowed
                        relative overflow-hidden group"
                    >
                      {/* Effet de brillance */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                        opacity-0 group-hover:opacity-100 
                        translate-x-[-100%] group-hover:translate-x-[100%]
                        transition-all duration-700" />
                      
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Connexion...</span>
                          </>
                        ) : (
                          'Se connecter'
                        )}
                      </span>
                    </button>
                  </form>

                  {/* Séparateur "ou" */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-500 dark:text-gray-400">
                        ou
                      </span>
                    </div>
                  </div>

                  {/* Options de connexion sociale */}
                  <div className="grid grid-cols-4 gap-3 mt-4">
                    <button
                      onClick={() => handleSocialLogin('google')}
                      className="flex items-center justify-center p-3 rounded-xl
                        bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm
                        border border-gray-300 dark:border-gray-600
                        hover:border-orange-400 dark:hover:border-orange-500 
                        hover:bg-orange-50/50 dark:hover:bg-orange-900/30
                        hover:shadow-md hover:-translate-y-0.5
                        transition-all duration-200 group"
                      aria-label="Se connecter avec Google"
                    >
                      <FaGoogle className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
                    </button>
                    
                    <button
                      onClick={() => handleSocialLogin('facebook')}
                      className="flex items-center justify-center p-3 rounded-xl
                        bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm
                        border border-gray-300 dark:border-gray-600
                        hover:border-blue-600 dark:hover:border-blue-500 
                        hover:bg-blue-50/50 dark:hover:bg-blue-900/30
                        hover:shadow-md hover:-translate-y-0.5
                        transition-all duration-200 group"
                      aria-label="Se connecter avec Facebook"
                    >
                      <FaFacebookF className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                    </button>
                    
                    <button
                      onClick={() => handleSocialLogin('github')}
                      className="flex items-center justify-center p-3 rounded-xl
                        bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm
                        border border-gray-300 dark:border-gray-600
                        hover:border-gray-800 dark:hover:border-gray-400 
                        hover:bg-gray-100/50 dark:hover:bg-gray-600/30
                        hover:shadow-md hover:-translate-y-0.5
                        transition-all duration-200 group"
                      aria-label="Se connecter avec GitHub"
                    >
                      <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    </button>
                    
                    <button
                      onClick={() => handleSocialLogin('linkedin')}
                      className="flex items-center justify-center p-3 rounded-xl
                        bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm
                        border border-gray-300 dark:border-gray-600
                        hover:border-blue-700 dark:hover:border-blue-500 
                        hover:bg-blue-50/50 dark:hover:bg-blue-900/30
                        hover:shadow-md hover:-translate-y-0.5
                        transition-all duration-200 group"
                      aria-label="Se connecter avec LinkedIn"
                    >
                      <FaLinkedinIn className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-700 dark:group-hover:text-blue-400" />
                    </button>
                  </div>

                  {/* Lien vers inscription */}
                  <div className="text-center pt-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Nouveau sur NourishAfrica ?{' '}
                      <Link
                        href="/auth/register"
                        className="font-semibold text-blue-600 dark:text-blue-400 
                          hover:text-blue-700 dark:hover:text-blue-300 hover:underline
                          transition-colors duration-200
                          inline-flex items-center gap-1"
                      >
                        Créer un compte
                        <ArrowLeft className="w-3 h-3 rotate-180" />
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}