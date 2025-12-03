import { ArrowRight } from 'lucide-react';

/**
 * CTASection Component - Call to Action final
 * 
 * SEO Features:
 * - Strong CTA con contraste
 * - Clear value proposition
 * - Acción clara y directa
 * 
 * @param {Object} props
 * @param {Object} props.t - Traducciones del idioma actual
 * @param {Function} props.onContactClick - Callback para abrir formulario
 */
export default function CTASection({ t, onContactClick }) {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-teal-700"
      aria-label="Llamada a la acción"
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
          {t.cta.title}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-emerald-100 mb-6 sm:mb-8">
          {t.cta.description}
        </p>
        <button 
          onClick={onContactClick}
          className="bg-white text-emerald-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all inline-flex items-center text-sm sm:text-base"
        >
          {t.cta.button}
          <ArrowRight className="ml-2" size={18} />
        </button>
      </div>
    </section>
  );
}