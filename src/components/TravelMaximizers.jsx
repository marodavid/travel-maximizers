import { useState, lazy, Suspense } from 'react';
import translations from '../translations';

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
const CTASection = lazy(() => import('./sections/CTASection'));

/**
 * TravelMaximizers - Componente Principal (Orquestador)
 * 
 * Arquitectura:
 * - Componentes modulares separados por responsabilidad
 * - Lazy loading para secciones no críticas
 * - Estado global mínimo (language, form)
 * - SEO optimizado con semantic HTML
 * - Performance optimizado con code splitting
 * 
 * SEO Features:
 * - Semantic HTML structure (header, main, footer)
 * - H1 único en HeroSection
 * - Lazy loading de secciones below-the-fold
 * - Structured data ready
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
            onContactClick={openForm}
          />

           <VideoSection t={t} /> 

          <ServicesSection 
            t={t}
            onContactClick={openForm}
          />

          <DestinationsSection t={t} />

          <TestimonialsSection t={t} /> 

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