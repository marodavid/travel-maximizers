import { useState } from 'react';

// Prefijo con los nombres, según idioma
const NAME_PREFIX = {
  es: 'Laura y David',
  en: 'Laura and David',
  de: 'Laura und David'
};

// Descripción de cada foto (a partir del slug del archivo: aboutUs-<slug>.ext), por idioma
const PHOTO_PHRASES = {
  Buceando: { es: 'buceando', en: 'diving', de: 'beim Tauchen' },
  Colombia: { es: 'en Colombia', en: 'in Colombia', de: 'in Kolumbien' },
  Colombia2: { es: 'en Colombia', en: 'in Colombia', de: 'in Kolumbien' },
  Colonia: { es: 'en Colonia, Alemania', en: 'in Cologne, Germany', de: 'in Köln, Deutschland' },
  Italia: { es: 'en Italia', en: 'in Italy', de: 'in Italien' },
  Izmir: { es: 'en Esmirna, Turquía', en: 'in Izmir, Turkey', de: 'in Izmir, Türkei' },
  Japan: { es: 'en Japón', en: 'in Japan', de: 'in Japan' },
  KualaLumpur: { es: 'en Kuala Lumpur', en: 'in Kuala Lumpur', de: 'in Kuala Lumpur' },
  MachuPicchu: { es: 'en Machu Picchu, Perú', en: 'at Machu Picchu, Peru', de: 'bei Machu Picchu, Peru' },
  Malta: { es: 'en Malta', en: 'in Malta', de: 'auf Malta' },
  Piramides: { es: 'en las pirámides de Egipto', en: 'at the pyramids of Egypt', de: 'bei den Pyramiden von Ägypten' },
  laVida: { es: 'disfrutando de la vida viajera', en: 'enjoying travel life', de: 'beim Genießen des Reiselebens' },
  laVida02: { es: 'disfrutando de la vida viajera', en: 'enjoying travel life', de: 'beim Genießen des Reiselebens' },
  luxemburgo: { es: 'en Luxemburgo', en: 'in Luxembourg', de: 'in Luxemburg' },
  panama: { es: 'en Panamá', en: 'in Panama', de: 'in Panama' },
  talandia: { es: 'en Tailandia', en: 'in Thailand', de: 'in Thailand' },
  tulipanes: { es: 'entre los tulipanes de Holanda', en: 'among the tulip fields of Holland', de: 'zwischen den Tulpenfeldern Hollands' },
  vinos: { es: 'en una cata de vinos', en: 'at a wine tasting', de: 'bei einer Weinprobe' }
};

function getPhotoAlt(path, language) {
  const lang = PHOTO_PHRASES[Object.keys(PHOTO_PHRASES).find(slug =>
    path.includes(`aboutUs-${slug}.`)
  )]?.[language];
  const namePrefix = NAME_PREFIX[language] || NAME_PREFIX.es;
  return lang ? `${namePrefix} ${lang}` : namePrefix;
}

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
 * @param {string} props.language - Idioma actual ('es' | 'en' | 'de')
 * @param {Function} props.onContactClick - Callback para abrir formulario
 */
export default function AboutSection({ t, language = 'es', onContactClick }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Cargar fotos dinámicamente
  const imageModules = import.meta.glob('/src/assets/images/about-us/*.{jpg,jpeg,png,webp}', { eager: true });
  const photos = Object.entries(imageModules)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([path, mod]) => ({
      src: mod.default,
      alt: getPhotoAlt(path, language)
    }));

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
                  src={photos[currentPhotoIndex].src}
                  alt={photos[currentPhotoIndex].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  loading={currentPhotoIndex === 0 ? 'eager' : 'lazy'}
                  fetchPriority={currentPhotoIndex === 0 ? 'high' : 'auto'}
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
                  aria-label={photo.alt}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
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