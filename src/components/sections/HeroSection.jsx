/**
 * HeroSection Component - Hero principal (Above the Fold)
 * 
 * SEO Features:
 * - H1 único y prominente con keywords
 * - Descripción clara del servicio
 * - CTAs visibles y accesibles
 * - Semantic HTML
 * - Schema.org Organization ready
 * 
 * @param {Object} props
 * @param {Object} props.t - Traducciones del idioma actual
 * @param {Function} props.onContactClick - Callback para abrir formulario
 */
export default function HeroSection({ t, onContactClick }) {
  return (
    <section 
      id="inicio" 
      className="pt-16 bg-gradient-to-br from-emerald-50 to-teal-50"
      aria-label="Hero principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          {/* H1 Principal - SEO Critical */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t.hero.title1}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent block">
              {t.hero.title2}
            </span>
          </h1>
          
          {/* Tagline */}
          <div className="mb-4 sm:mb-6">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-emerald-600 italic px-4">
              "{t.hero.tagline}"
            </p>
          </div>
          
          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            {t.hero.description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button 
              onClick={onContactClick}
              className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all text-sm sm:text-base"
              aria-label={t.hero.cta1}
            >
              {t.hero.cta1}
            </button>
            <a 
              href="#servicios"
              className="border-2 border-emerald-600 text-emerald-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-sm sm:text-base inline-block"
              aria-label={t.hero.cta2}
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}