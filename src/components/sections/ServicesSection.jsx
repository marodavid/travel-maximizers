import { ArrowRight } from 'lucide-react';

/**
 * ServicesSection Component - Servicios y Pricing
 * 
 * SEO Features:
 * - H2 + H3 con keywords relevantes
 * - Pricing structured data ready
 * - Service schema markup ready
 * - Rich snippets optimization
 * - Clear value proposition
 * 
 * @param {Object} props
 * @param {Object} props.t - Traducciones del idioma actual
 * @param {Function} props.onContactClick - Callback para abrir formulario
 */
export default function ServicesSection({ t, onContactClick }) {
  return (
    <section 
      id="servicios" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-emerald-50 to-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Guarantee Banner */}
        <div className="max-w-5xl mx-auto bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 sm:p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="bg-emerald-600 rounded-full p-2 sm:p-3 flex-shrink-0">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {t.services.guarantee.title}
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">
                {t.services.guarantee.description}
              </p>
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          
          {/* Asesoría Card */}
          <article className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-emerald-300 transform hover:-translate-y-2">
            <div className="relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-400/10 to-teal-400/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative p-6 sm:p-8">
                {/* Badge and Title */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {t.services.advisory.name}
                    </h3>
                    <p className="text-sm font-semibold text-emerald-600">
                      {t.services.advisory.tagline}
                    </p>
                  </div>
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                    {t.services.advisory.badge}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                      {t.services.advisory.price}
                    </span>
                    <span className="text-2xl font-semibold text-emerald-600">
                      {t.services.advisory.currency}
                    </span>
                    <span className="text-gray-500 text-sm">
                      / {t.services.advisory.period}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {t.services.advisory.priceAlt} USD
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                  {t.services.advisory.description}
                </p>

                {/* Key Features - Summary */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                    {t.services.advisory.featuresTitle}
                  </h4>
                  <ul className="space-y-2">
                    {t.services.advisory.summaryFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span dangerouslySetInnerHTML={{ __html: feature }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={onContactClick}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-3 sm:py-4 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all text-sm sm:text-base"
                >
                  {t.services.advisory.cta}
                </button>
              </div>
            </div>
          </article>

          {/* Consultoría Card - Premium */}
          <article className="relative bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
            {/* Premium Badge */}
            <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 sm:px-6 py-2 rounded-bl-2xl font-bold text-xs sm:text-sm z-10">
              {t.services.consulting.badge}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mt-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mb-16"></div>

            <div className="relative p-6 sm:p-8 text-white">
              {/* Title */}
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  {t.services.consulting.name}
                </h3>
                <p className="text-sm font-semibold text-emerald-100">
                  {t.services.consulting.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-white/20">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl sm:text-5xl font-bold">
                    {t.services.consulting.price}
                  </span>
                  <span className="text-2xl font-semibold">
                    {t.services.consulting.currency}
                  </span>
                  <span className="text-emerald-100 text-sm">
                    / {t.services.consulting.period}
                  </span>
                </div>
                <p className="text-xs text-emerald-100 mb-2">
                  {t.services.consulting.priceAlt} USD
                </p>
                <p className="text-xs bg-white/20 inline-block px-3 py-1 rounded-full">
                  {t.services.consulting.highlight}
                </p>
              </div>

              {/* Description */}
              <p className="text-white/95 mb-6 text-sm sm:text-base leading-relaxed">
                {t.services.consulting.description}
              </p>

              {/* Key Features - Summary */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">
                  {t.services.consulting.featuresTitle}
                </h4>
                <ul className="space-y-2">
                  {t.services.consulting.summaryFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-white">
                      <svg className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={onContactClick}
                className="w-full bg-white text-emerald-600 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
              >
                {t.services.consulting.cta}
              </button>
            </div>
          </article>
        </div>

        {/* Bottom CTA Section */}
        <div className="max-w-4xl mx-auto text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 sm:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              {t.services.ctaSection.title}
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              {t.services.ctaSection.description}
            </p>
            <button
              onClick={onContactClick}
              className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all inline-flex items-center text-sm sm:text-base"
            >
              {t.services.ctaSection.button}
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}