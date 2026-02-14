import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <span className="text-2xl">🧠</span>
              <span className="text-sm font-medium">L'IA au service de la Nutrition Africaine</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Maîtrisez ce que vous consommez{' '}
                <span className="text-orange-400">au quotidien</span>
              </h1>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-orange-400">
                grâce à l'analyse et aux conseils{' '}
                <span className="text-white">prodigués par l'IA.</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
              La nutrition est au cœur de notre santé, mais il est difficile de connaître 
              la valeur nutritionnelle de nos aliments locaux. Nous vous présentons{' '}
              <span className="font-semibold text-white">NurishAfrica</span>, une solution 
              innovante à ce problème.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                En savoir plus
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full border-2 border-white transition-all duration-300 transform hover:scale-105">
                S'inscrire
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 7H7v6h6V7z" />
                    <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">IA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Technologie nouvelle</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Analyse & conseil</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4a1 1 0 011-1h3zm-1 2v1h-1V5h1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Scan</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image with Glass Effect */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl p-8">
              {/* Glass morphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              
              {/* Image placeholder - Replace with your actual image */}
              <div className="relative z-10 bg-white/90 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-center h-64">
                  

                  <Image 
                    src="/icone.png" 
                    alt="NurishAfrica" 
                    width={400} 
                    height={400}
                    className="object-contain"
                  />
                  
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;