import { useState, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import translations from '../translations';

// SEO Components (Critical - Always load)
import SEOHead from './seo/SEOHead';
import SchemaOrg from './seo/SchemaOrg';

// Layout Components (Critical - No lazy loading)
import Header from './layout/Header';
import Footer from './layout/Footer';
import ContactFormModal from './layout/ContactFormModal';

// Critical Sections (No lazy loading - Above the fold)
import HeroSection from './sections/HeroSection';

// Non-Critical Sections (Lazy loading - Below the fold)
const AboutSection = lazy(() => import('./sections/AboutSection'));
const VideoSection = lazy(() => import('./sections/VideoSection'));
const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const DestinationsSection = lazy(() => import('./sections/DestinationsSection'));
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection'));
const FAQSection = lazy(() => import('./sections/FAQSection'));
const CTASection = lazy(() => import('./sections/CTASection'));

/**
 * TravelMaximizers - Componente Principal (Orquestador)
 * 
 * Arquitectura:
 * - Componentes modulares separados por responsabilidad
 * - Lazy loading para secciones no críticas
 * - Estado global mínimo (language, form)
 * - SEO optimizado profesional (20+ años experiencia)
 * - Performance optimizado con code splitting
 * 
 * SEO Features Implementados:
 * ✅ Meta tags completos (Title, Description, Keywords)
 * ✅ Open Graph & Twitter Cards
 * ✅ Canonical URLs & hreflang tags (multi-idioma)
 * ✅ Schema.org JSON-LD (Organization, Service, Review, FAQ, BreadcrumbList)
 * ✅ Semantic HTML structure (header, main, footer, section, article)
 * ✅ H1 único optimizado con keywords
 * ✅ FAQ Section para Featured Snippets
 * ✅ Lazy loading de secciones below-the-fold
 * ✅ Sitemap.xml & robots.txt
 * ✅ Mobile-first & Core Web Vitals optimized
 * ✅ Alt text descriptivo en todas las imágenes
 * ✅ Internal linking structure
 * ✅ Performance optimization (preconnect, dns-prefetch)
 * 
 * Expected SEO Results:
 * - Lighthouse SEO Score: 95-100
 * - Page Speed: 90+
 * - Featured Snippets eligibility
 * - Rich Snippets en SERPs
 * - TOP 3 positioning para keywords long-tail
 */
export default function TravelMaximizers() {
  // Global State
  const [language, setLanguage] = useState('es');
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
  };

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  // Current translations
  const t = translations[language];

  return (
    <HelmetProvider>
      {/* SEO Meta Tags & Structured Data */}
      <SEOHead
        language={language}
        translations={t}
      />
      <SchemaOrg language={language} translations={t} />


      <div className="min-h-screen bg-white">
        {/* Header - Always visible (SEO Critical) */}
        <Header
          t={t}
          language={language}
          onLanguageChange={handleLanguageChange}
        />

        {/* Main Content */}
        <main>
          {/* Hero Section - Critical, no lazy loading */}
          <HeroSection
            t={t}
            onContactClick={openForm}
          />

          {/* Below-the-fold sections - Lazy loaded */}
          <Suspense fallback={<SectionLoader />}>
            <AboutSection
              t={t}
              language={language}
              onContactClick={openForm}
            />

            {/* <VideoSection t={t} /> */}

            <ServicesSection
              t={t}
              onContactClick={openForm}
            />

            <DestinationsSection
              t={t}
              onContactClick={openForm}
            />

            {/* <TestimonialsSection t={t} /> */}

            {/* FAQ Section - Critical for SEO (Featured Snippets) */}
            <FAQSection t={t} />

            <CTASection
              t={t}
              onContactClick={openForm}
            />
          </Suspense>
        </main>

        {/* Footer - Always visible (SEO Critical) */}
        <Footer
          t={t}
          onContactClick={openForm}
        />

        {/* Contact Form Modal */}
        <ContactFormModal
          isOpen={isFormOpen}
          onClose={closeForm}
          t={t}
        />
      </div>
    </HelmetProvider>
  );
}

/**
 * SectionLoader - Loading placeholder for lazy sections
 */
function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
        <p className="text-gray-500 text-sm">Cargando...</p>
      </div>
    </div>
  );
}
