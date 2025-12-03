import { useState } from 'react';

/**
 * AboutSection Component - Quiénes somos con galería de fotos
 * 
 * SEO Features:
 * - H2 descriptivo con keywords
 * - Contenido rico en texto (historia de marca)
 * - Images con alt text apropiado
 * - Stats para aumentar credibilidad
 * - Schema.org ready (Organization/Person)
 * 
 * @param {Object} props
 * @param {Object} props.t - Traducciones del idioma actual
 * @param {Function} props.onContactClick - Callback para abrir formulario
 */
export default function AboutSection({ t, onContactClick }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  // Cargar fotos dinámicamente
  const imageModules = import.meta.glob('/src/assets/images/about-us/*.{jpg,jpeg,png,webp}', { eager: true });
  const photos = Object.values(imageModules).map(mod => mod.default);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section 
      id="nosotros" 
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            id="about-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <article>
              <h3 className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-4">
                {t.about.intro}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                {t.about.description1}
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                {t.about.description2}
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                {t.about.description3}
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                {t.about.description4}
              </p>
            </article>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1">
                  {t.about.stats.countries}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {t.about.stats.countriesLabel}
                </div>
              </div>
              <div className="text-center p-4 bg-teal-50 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-teal-700 mb-1">
                  {t.about.stats.experience}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {t.about.stats.experienceLabel}
                </div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1">
                  {t.about.stats.trips}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {t.about.stats.tripsLabel}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-left">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                {t.about.cta}
              </p>
              <button 
                onClick={onContactClick}
                className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                {t.hero.cta1}
              </button>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Photo */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <img 
                  src={photos[currentPhotoIndex]} 
                  alt={`Laura y David viajando - Foto ${currentPhotoIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                aria-label="Foto anterior"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                aria-label="Siguiente foto"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentPhotoIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Ir a foto ${index + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentPhotoIndex + 1} / {photos.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 grid grid-cols-7 gap-2">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden transition-all ${
                    index === currentPhotoIndex 
                      ? 'ring-2 ring-emerald-600 ring-offset-2' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Ver foto ${index + 1}`}
                >
                  <img 
                    src={photo} 
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}