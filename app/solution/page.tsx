'use client'

import { 
  Camera,
  Users,
  Brain,
  Sparkles,
  Shield,
  Zap,
  Smartphone,
  Globe,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Star
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function SolutionPage() {
  const [activeTab, setActiveTab] = useState('nutriscan')

  // Features principales
  const features = [
    {
      id: 'nutriscan',
      icon: <Camera className="w-6 h-6" />,
      title: "NutriScan IA",
      subtitle: "Analyse nutritionnelle instantanée",
      description: "Photographiez vos repas et obtenez une analyse détaillée en temps réel grâce à notre IA.",
      image: "/camera.png",
      color: "blue",
      details: [
        "Reconnaissance automatique des aliments",
        "Calcul des apports nutritionnels",
        "Détection des déséquilibres",
        "Suggestions d'amélioration",
        "Historique de vos repas"
      ],
      stats: [
        { label: "Précision", value: "95%" },
        { label: "Repas analysés", value: "+10k" }
      ]
    },
    {
      id: 'experts',
      icon: <Users className="w-6 h-6" />,
      title: "Consultation experts",
      subtitle: "Accompagnement personnalisé",
      description: "Connectez-vous avec des nutritionnistes certifiés pour un suivi sur mesure.",
      image: "/IA.png",
      color: "orange",
      details: [
        "Nutritionnistes certifiés",
        "Consultations virtuelles",
        "Suivi personnalisé",
        "Programmes adaptés",
        "Questions-réponses illimitées"
      ],
      stats: [
        { label: "Experts", value: "+50" },
        { label: "Satisfaction", value: "4.9/5" }
      ]
    }
  ]

  // Avantages
  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Instantané",
      description: "Analyse en quelques secondes"
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "IA avancée",
      description: "Apprentissage continu"
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Accessible",
      description: "Sur tous vos appareils"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Locale",
      description: "Adaptée à l'Afrique"
    }
  ]

  // Comment ça marche
  const steps = [
    {
      number: "01",
      title: "Téléchargez l'application",
      description: "Inscrivez-vous gratuitement en quelques clics",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Photographiez vos repas",
      description: "Utilisez NutriScan pour analyser votre assiette",
      icon: <Camera className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Recevez des conseils",
      description: "Obtenez des recommandations personnalisées",
      icon: <Brain className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Consultez des experts",
      description: "Échangez avec des nutritionnistes si besoin",
      icon: <Users className="w-6 h-6" />
    }
  ]

  const currentFeature = features.find(f => f.id === activeTab) || features[0]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20">
      {/* Effet de fond amélioré */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-orange-50/40 dark:from-blue-950/20 dark:via-gray-900 dark:to-orange-950/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200/20 dark:bg-orange-600/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero section améliorée */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-2 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Notre solution innovante</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-orange-600 dark:text-orange-500">L'IA au service</span>{' '}
            <span className="text-blue-600">de votre</span>
            <br />
            <span className="text-gray-800 dark:text-white">santé nutritionnelle</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Une double approche qui combine la puissance de l'intelligence artificielle 
            et l'expertise humaine pour une nutrition optimale.
          </p>
        </div>

        {/* Avantages rapides avec animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-24">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                {benefit.icon}
              </div>
              <div className="font-semibold text-gray-800 dark:text-white text-sm mb-1">
                {benefit.title}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>

        {/* Tabs pour les deux solutions - Design amélioré */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-inner">
              <button
                onClick={() => setActiveTab('nutriscan')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'nutriscan'
                    ? 'bg-white dark:bg-gray-700 text-blue-600 shadow-lg scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600'
                }`}
              >
                <Camera className="w-5 h-5" />
                <span>NutriScan IA</span>
              </button>
              <button
                onClick={() => setActiveTab('experts')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'experts'
                    ? 'bg-white dark:bg-gray-700 text-orange-600 shadow-lg scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-orange-600'
                }`}
              >
                <Users className="w-5 h-5" />
                <span>Plateforme Experts</span>
              </button>
            </div>
          </div>

          {/* Contenu des tabs avec images */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Texte */}
              <div className="space-y-6 order-2 md:order-1">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                  activeTab === 'nutriscan' 
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                    : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                }`}>
                  {currentFeature.icon}
                  <span className="text-sm font-medium">{currentFeature.title}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
                  {activeTab === 'nutriscan' 
                    ? 'Analysez vos repas en un clin d\'œil' 
                    : 'Connectez-vous avec des nutritionnistes certifiés'}
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {currentFeature.description}
                </p>

                <ul className="space-y-4">
                  {currentFeature.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110 ${
                        activeTab === 'nutriscan' ? 'text-blue-600' : 'text-orange-600'
                      }`} />
                      <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="flex gap-6 pt-4">
                  {currentFeature.stats.map((stat, index) => (
                    <div key={index} className="flex-1">
                      <div className={`text-2xl font-bold mb-1 ${
                        activeTab === 'nutriscan' ? 'text-blue-600' : 'text-orange-600'
                      }`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link
                    href="/auth/register"
                    className={`inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      activeTab === 'nutriscan'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                        : 'bg-gradient-to-r from-orange-600 to-orange-700 text-white'
                    }`}
                  >
                    {activeTab === 'nutriscan' ? 'Essayer NutriScan' : 'Trouver un nutritionniste'}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Image avec effet */}
              <div className="relative order-1 md:order-2">
                <div className={`relative aspect-square rounded-3xl overflow-hidden shadow-2xl ${
                  activeTab === 'nutriscan'
                    ? 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30'
                    : 'bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30'
                }`}>
                  <Image
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    fill
                    className="object-contain p-8 transform transition-transform duration-500 hover:scale-110"
                    priority
                  />
                  
                  {/* Cercles décoratifs */}
                  <div className={`absolute -top-4 -left-4 w-24 h-24 rounded-full blur-2xl opacity-50 ${
                    activeTab === 'nutriscan' ? 'bg-blue-400' : 'bg-orange-400'
                  }`} />
                  <div className={`absolute -bottom-4 -right-4 w-32 h-32 rounded-full blur-2xl opacity-50 ${
                    activeTab === 'nutriscan' ? 'bg-blue-500' : 'bg-orange-500'
                  }`} />
                </div>

                {/* Badge flottant */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl border border-gray-200 dark:border-gray-700 animate-float">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className={`w-5 h-5 ${
                      activeTab === 'nutriscan' ? 'text-blue-600' : 'text-orange-600'
                    }`} />
                    <span className="text-lg font-bold text-gray-800 dark:text-white">
                      {activeTab === 'nutriscan' ? '2000+' : '50+'}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {activeTab === 'nutriscan' ? 'repas analysés/jour' : 'experts disponibles'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comment ça marche - Design amélioré */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-orange-600 dark:text-orange-500">Comment</span>{' '}
              <span className="text-blue-600">ça marche ?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Commencez votre voyage vers une meilleure santé nutritionnelle en quelques étapes simples
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-100 dark:border-gray-700 p-8 text-center hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 group h-full">
                  {/* Icône */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  
                  {/* Numéro */}
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600/20 to-orange-600/20 mb-4">
                    {step.number}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Flèche entre les étapes */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 text-blue-400 dark:text-blue-600 z-10">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies - Design amélioré */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-3xl p-12 md:p-16 text-white mb-24 overflow-hidden">
          {/* Effet de fond */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies de pointe</h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Notre solution s'appuie sur les dernières avancées en intelligence artificielle 
                et en analyse d'images pour une précision optimale.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Vision par ordinateur avancée</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Base de données nutritionnelles africaines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Apprentissage continu et amélioration</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Brain className="w-10 h-10" />, label: "Deep Learning" },
                { icon: <Camera className="w-10 h-10" />, label: "Computer Vision" },
                { icon: <Zap className="w-10 h-10" />, label: "Real-time" },
                { icon: <Shield className="w-10 h-10" />, label: "Sécurisé" }
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  <div className="mb-3 flex justify-center">
                    {tech.icon}
                  </div>
                  <div className="font-bold text-lg">{tech.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Final - Design amélioré */}
        <div className="text-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 md:p-16 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Prêt à transformer votre alimentation ?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Rejoignez des milliers d'utilisateurs qui améliorent déjà leur santé 
            nutritionnelle avec NourishAfrica.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/auth/register"
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
            >
              <span className="flex items-center gap-2 justify-center">
                Commencer gratuitement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-bold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300 hover:scale-105 text-lg"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}