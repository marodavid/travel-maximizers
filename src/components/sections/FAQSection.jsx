import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * FAQSection Component - Preguntas Frecuentes
 * 
 * Beneficios SEO:
 * - Featured Snippets eligibility (Google Position 0)
 * - "People Also Ask" optimization
 * - Aumenta tiempo en página
 * - Reduce bounce rate
 * - Long-tail keywords optimization
 * - Schema.org FAQPage (ya incluido en SchemaOrg component)
 * 
 * @param {Object} props
 * @param {Object} props.t - Traducciones del idioma actual desde translations.jsx
 * 
 * IMPORTANTE: Este componente requiere que agregues la sección "faq" en translations.jsx
 * con las propiedades: title, subtitle, ctaText, ctaButton, q1-q8, a1-a8
 */
export default function FAQSection({ t }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQs optimizadas para SEO con keywords long-tail
  // Todas las preguntas y respuestas vienen de translations.jsx
  const faqs = [
    {
      question: t.faq?.q1,
      answer: t.faq?.a1
    },
    // {
    //   question: t.faq?.q2,
    //   answer: t.faq?.a2
    // },
    {
      question: t.faq?.q3,
      answer: t.faq?.a3
    },
    // {
    //   question: t.faq?.q4,
    //   answer: t.faq?.a4
    // },
    // {
    //   question: t.faq?.q5,
    //   answer: t.faq?.a5
    // },
    {
      question: t.faq?.q6,
      answer: t.faq?.a6
    },
    {
      question: t.faq?.q7,
      answer: t.faq?.a7
    },
    {
      question: t.faq?.q8,
      answer: t.faq?.a8
    }
  ];

  return (
    <section 
      id="faq"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            {t.faq?.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t.faq?.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <article 
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-start gap-4 hover:bg-gray-50 transition-colors duration-150 rounded-lg"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 
                  className="text-base sm:text-lg font-semibold text-gray-900 pr-4 flex-1"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <span className="flex-shrink-0 text-emerald-600">
                  {openIndex === index ? (
                    <ChevronUp size={24} aria-hidden="true" />
                  ) : (
                    <ChevronDown size={24} aria-hidden="true" />
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div 
                  id={`faq-answer-${index}`}
                  className="px-5 sm:px-6 pb-4 sm:pb-5 pt-0"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p 
                    className="text-sm sm:text-base text-gray-700 leading-relaxed"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            {t.faq?.ctaText}
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all text-sm sm:text-base"
          >
            {t.faq?.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}