// app/(routes)/contact/page.tsx
'use client'

import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  User,
  Globe,
  Clock,
  CheckCircle
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      details: "+237 695 54 10 23",
      subDetails: "Lun-Ven, 9h-18h",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "nourishafrica@gmail.com",
      subDetails: "Réponse sous 24h",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      details: "Yaounde , Cameroun",
      subDetails: "Mendong , Centre ",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/30"
    }
  ]

  const quickFaqs = [
    "Comment fonctionne NutriScan IA ?",
    "Les consultations sont-elles gratuites ?",
    "Puis-je devenir nutritionniste partenaire ?"
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20">
      {/* Effet de fond léger */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-white to-amber-50/30 dark:from-emerald-950/20 dark:via-gray-900 dark:to-amber-950/20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête de page */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/90 backdrop-blur-sm px-6 py-2 mb-6 shadow-sm">
            <MessageSquare className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-gray-700">Nous Vous Suivons</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-amber-700">Contactez</span>{' '}
            <span className="text-emerald-600">NourishAfrica</span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Une question ? Besoin d'accompagnement ? Notre équipe est là pour vous aider 
            à améliorer votre santé nutritionnelle grâce à l'IA.
          </p>
        </div>

        {/* Message de succès */}
        {isSubmitted && (
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in-down">
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <p className="text-emerald-800 dark:text-emerald-200">
                Message envoyé avec succès ! Notre équipe vous répondra dans les plus brefs délais.
              </p>
            </div>
          </div>
        )}

        {/* Grille principale */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Colonne gauche - Infos */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${info.bgColor} flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      {info.details}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {info.subDetails}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Horaires */}
            <div className="bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-amber-950/30 dark:to-emerald-950/30 rounded-2xl border border-amber-200/50 dark:border-amber-800/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-gray-800 dark:text-white">Horaires d'ouverture</h3>
              </div>
              
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-medium">09h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-medium">10h00 - 14h00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Formulaire */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-3xl border border-gray-200 dark:border-gray-700 p-8 shadow-xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                      placeholder="Jean Kouassi"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Adresse email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                      placeholder="jean.kouassi@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sujet
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 appearance-none"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="information">Demande d'information</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="support">Support technique</option>
                      <option value="nutritionniste">Devenir nutritionniste partenaire</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 resize-none"
                    placeholder="Décrivez votre demande en quelques mots..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700" />
                  
                  <div className="relative flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}