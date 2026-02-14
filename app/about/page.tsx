'use client'

import { 
  Heart, 
  Target, 
  Eye, 
  Users, 
  Award, 
  Globe2,
  TrendingUp,
  Shield,
  Sparkles,
  ChevronRight
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  // Statistiques clés
  const stats = [
    { value: '+10K', label: 'Utilisateurs actifs', icon: <Users className="w-5 h-5" /> },
    { value: '+50', label: 'Nutritionnistes partenaires', icon: <Award className="w-5 h-5" /> },
    { value: '24/7', label: 'Disponibilité', icon: <Globe2 className="w-5 h-5" /> },
    { value: '98%', label: 'Satisfaction', icon: <Heart className="w-5 h-5" /> }
  ]

  // Valeurs
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Santé pour tous",
      description: "Démocratiser l'accès à une nutrition de qualité en Afrique"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Innovation responsable",
      description: "Utiliser l'IA de manière éthique pour le bien-être"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Communauté",
      description: "Créer un pont entre experts et population"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Impact durable",
      description: "Des solutions ancrées dans les réalités locales"
    }
  ]

  // Équipe clé
  const team = [
    {
      name: "Dr. Amadou Koné",
      role: "Nutritionniste en chef",
      bio: "15 ans d'expérience en santé publique en Afrique de l'Ouest",
      image: "/team/team1.jpg" // À remplacer
    },
    {
      name: "Fatou Diallo",
      role: "Directrice Innovation IA",
      bio: "Experte en intelligence artificielle appliquée à la santé",
      image: "/team/team2.jpg" // À remplacer
    },
    {
      name: "Jean-Marc Kouassi",
      role: "Lead Developer",
      bio: "Passionné par les solutions tech pour l'impact social",
      image: "/team/team3.jpg" // À remplacer
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20">
      {/* Effet de fond */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-white to-amber-50/30 dark:from-emerald-950/20 dark:via-gray-900 dark:to-amber-950/20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 backdrop-blur-sm px-6 py-2 mb-6 shadow-sm">
            <Heart className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700">Notre mission</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-amber-700">Révolutionner</span>{' '}
            <span className="text-emerald-600">la nutrition</span>
            <br />
            <span className="text-gray-800 dark:text-white">en Afrique grâce à l'IA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            NourishAfrica est né d'un constat simple : l'accès à des conseils nutritionnels 
            de qualité reste un privilège. Nous utilisons la technologie pour changer cela.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="text-emerald-600 dark:text-emerald-400 mb-2 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Histoire */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-amber-700">Notre</span>{' '}
              <span className="text-emerald-600">histoire</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                <span className="font-semibold text-emerald-600">NourishAfrica</span> est née en 2023, 
                d'une rencontre entre professionnels de santé et experts en intelligence artificielle, 
                tous animés par la même conviction : la technologie peut être un puissant levier pour 
                améliorer la santé publique en Afrique.
              </p>
              
              <p>
                Face au constat alarmant de la double charge de la malnutrition (dénutrition et obésité) 
                qui touche le continent, nous avons décidé d'agir. Notre solution combine le meilleur 
                de l'IA pour l'analyse nutritionnelle et l'expertise humaine de nutritionnistes certifiés.
              </p>
              
              <p>
                Aujourd'hui, c'est plus de <span className="font-semibold text-emerald-600">10 000 utilisateurs</span> 
                qui bénéficient déjà de nos services, et nous ne comptons pas nous arrêter là.
              </p>
            </div>

            <div className="pt-4">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Rejoindre l'aventure
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder pour image - remplacez par votre image */}
              <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-amber-400 flex items-center justify-center">
                <span className="text-6xl">🌍</span>
              </div>
            </div>
            
            {/* Badge flottant */}
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold">2023 - 2024</div>
                  <div className="text-xs text-gray-500">Lancement officiel</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-3xl p-8 border border-emerald-200/50 dark:border-emerald-800/50">
            <div className="w-14 h-14 bg-emerald-600/20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Notre Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Démocratiser l'accès à une nutrition de qualité en Afrique en utilisant 
              l'intelligence artificielle comme pont entre les populations et les experts.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-3xl p-8 border border-amber-200/50 dark:border-amber-800/50">
            <div className="w-14 h-14 bg-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Notre Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Un continent africain où chaque individu a les moyens de maîtriser sa santé 
              nutritionnelle, soutenu par une technologie innovante et accessible.
            </p>
          </div>
        </div>

        {/* Valeurs */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-amber-700">Nos</span>{' '}
              <span className="text-emerald-600">valeurs</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Des principes forts qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:rotate-6 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Équipe */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-amber-700">L'équipe</span>{' '}
              <span className="text-emerald-600">derrière NourishAfrica</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Des passionnés unis par une même mission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-4 rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-emerald-100 to-amber-100 dark:from-gray-800 dark:to-gray-700">
                  {/* Placeholder pour photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à transformer votre santé ?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Rejoignez des milliers d'utilisateurs qui améliorent déjà leur alimentation 
            grâce à NourishAfrica.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/auth/register"
              className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Créer un compte gratuit
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              Contacter l'équipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}