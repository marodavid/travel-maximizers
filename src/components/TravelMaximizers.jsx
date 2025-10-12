import { useState } from 'react';
import { MapPin, Calendar, Users, Star, ArrowRight, Menu, X, Globe } from 'lucide-react';

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      video: 'Video',
      contact: 'Contacto'
    },
    hero: {
      title1: 'Maximiza tus',
      title2: 'Experiencias de Viaje',
      tagline: 'Tu solo viaja, nosotros te lo organizamos todo a medida',
      description: 'Consultoría personalizada para crear itinerarios únicos, optimizar presupuestos y descubrir experiencias auténticas que transformarán tu forma de viajar.',
      cta1: 'Consulta Gratuita',
      cta2: 'Ver Servicios'
    },
    basicServices: {
      title: 'Nuestros Servicios Básicos',
      subtitle: 'Elige la opción perfecta para tu próxima aventura',
      consulting: {
        title: 'Consultoría',
        description: '¡Deja que seamos tu mejor amigo organizador de viajes! Nos encargamos de vuelos, hoteles en ubicaciones premium y diseñamos un itinerario completamente personalizado. ¡Ahorra tiempo, dinero y evita el estrés con nuestra experiencia!',
        badge: 'Todo Incluido',
        features: ['Vuelos optimizados', 'Hoteles seleccionados', 'Itinerario personalizado', 'Ahorro garantizado']
      },
      advisory: {
        title: 'Asesoría',
        description: '¿Necesitas un experto que te guíe? Agenda una sesión 1:1 con nosotros para descubrir los secretos de tu destino y tomar las mejores decisiones. ¡Maximiza tu presupuesto y vive una aventura épica e inolvidable!',
        badge: 'Expertos a tu Lado',
        features: ['Sesión personalizada', 'Consejos de experto', 'Decisiones inteligentes', 'Máximo ahorro']
      }
    },
    video: {
      title: 'Descubre Cómo Maximizar tus Viajes',
      description: 'Conoce nuestra metodología y cómo podemos ayudarte a crear experiencias de viaje inolvidables'
    },
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      quote: 'Travel Maximizers transformó completamente nuestra experiencia de viaje. La planificación fue perfecta y descubrimos lugares increíbles.',
      role: 'Viajera frecuente'
    },
    cta: {
      title: '¿Listo para maximizar tu próximo viaje?',
      description: 'Agenda una consulta gratuita y descubre cómo podemos transformar tu experiencia de viaje',
      button: 'Consulta Gratuita'
    },
    footer: {
      tagline: 'Tu solo viaja, nosotros te lo organizamos todo a medida',
      description: 'Maximizamos tus experiencias de viaje con consultoría personalizada y planificación experta.',
      servicesTitle: 'Servicios',
      services: ['Planificación de Itinerarios', 'Gestión de Reservas', 'Asesoramiento Personalizado', 'Soporte 24/7'],
      contactTitle: 'Contacto',
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      video: 'Video',
      contact: 'Contact'
    },
    hero: {
      title1: 'Maximize your',
      title2: 'Travel Experiences',
      tagline: 'You just travel, we organize everything tailored for you',
      description: 'Personalized consulting to create unique itineraries, optimize budgets and discover authentic experiences that will transform your way of traveling.',
      cta1: 'Free Consultation',
      cta2: 'View Services'
    },
    basicServices: {
      title: 'Our Basic Services',
      subtitle: 'Choose the perfect option for your next adventure',
      consulting: {
        title: 'Consulting',
        description: 'Let us be your ultimate travel organizer! We handle flights, hotels in premium locations, and design a completely personalized itinerary. Save time, money, and skip the stress with our expertise!',
        badge: 'All Inclusive',
        features: ['Optimized flights', 'Curated hotels', 'Custom itinerary', 'Guaranteed savings']
      },
      advisory: {
        title: 'Advisory',
        description: 'Need an expert to guide you? Book a 1:1 session with us to uncover your destination secrets and make the smartest decisions. Maximize your budget and live an epic, unforgettable adventure!',
        badge: 'Experts by Your Side',
        features: ['Personal session', 'Expert advice', 'Smart decisions', 'Maximum savings']
      }
    },
    video: {
      title: 'Discover How to Maximize Your Travels',
      description: 'Learn about our methodology and how we can help you create unforgettable travel experiences'
    },
    testimonials: {
      title: 'What our clients say',
      quote: 'Travel Maximizers completely transformed our travel experience. The planning was perfect and we discovered incredible places.',
      role: 'Frequent traveler'
    },
    cta: {
      title: 'Ready to maximize your next trip?',
      description: 'Schedule a free consultation and discover how we can transform your travel experience',
      button: 'Free Consultation'
    },
    footer: {
      tagline: 'You just travel, we organize everything tailored for you',
      description: 'We maximize your travel experiences with personalized consulting and expert planning.',
      servicesTitle: 'Services',
      services: ['Itinerary Planning', 'Booking Management', 'Personalized Consulting', '24/7 Support'],
      contactTitle: 'Contact',
      rights: 'All rights reserved.'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      services: 'Dienstleistungen',
      video: 'Video',
      contact: 'Kontakt'
    },
    hero: {
      title1: 'Maximieren Sie Ihre',
      title2: 'Reiseerlebnisse',
      tagline: 'Sie reisen einfach, wir organisieren alles maßgeschneidert für Sie',
      description: 'Persönliche Beratung zur Erstellung einzigartiger Reiserouten, Optimierung von Budgets und Entdeckung authentischer Erlebnisse, die Ihre Art zu reisen transformieren werden.',
      cta1: 'Kostenlose Beratung',
      cta2: 'Dienstleistungen ansehen'
    },
    basicServices: {
      title: 'Unsere Basisdienstleistungen',
      subtitle: 'Wählen Sie die perfekte Option für Ihr nächstes Abenteuer',
      consulting: {
        title: 'Beratung',
        description: 'Lassen Sie uns Ihr ultimativer Reiseorganisator sein! Wir kümmern uns um Flüge, Hotels in Premium-Lagen und gestalten eine vollständig personalisierte Reiseroute. Sparen Sie Zeit, Geld und vermeiden Sie Stress mit unserer Expertise!',
        badge: 'Alles Inklusive',
        features: ['Optimierte Flüge', 'Ausgewählte Hotels', 'Maßgeschneiderter Reiseplan', 'Garantierte Ersparnis']
      },
      advisory: {
        title: 'Beratungsgespräch',
        description: 'Brauchen Sie einen Experten an Ihrer Seite? Buchen Sie eine 1:1-Sitzung mit uns, um die Geheimnisse Ihres Reiseziels zu entdecken und die klügsten Entscheidungen zu treffen. Maximieren Sie Ihr Budget und erleben Sie ein episches, unvergessliches Abenteuer!',
        badge: 'Experten an Ihrer Seite',
        features: ['Persönliche Sitzung', 'Expertenrat', 'Kluge Entscheidungen', 'Maximale Ersparnis']
      }
    },
    video: {
      title: 'Entdecken Sie, wie Sie Ihre Reisen maximieren',
      description: 'Lernen Sie unsere Methodik kennen und wie wir Ihnen helfen können, unvergessliche Reiseerlebnisse zu schaffen'
    },
    testimonials: {
      title: 'Was unsere Kunden sagen',
      quote: 'Travel Maximizers hat unser Reiseerlebnis komplett transformiert. Die Planung war perfekt und wir haben unglaubliche Orte entdeckt.',
      role: 'Vielreisende'
    },
    cta: {
      title: 'Bereit, Ihre nächste Reise zu maximieren?',
      description: 'Vereinbaren Sie eine kostenlose Beratung und entdecken Sie, wie wir Ihr Reiseerlebnis transformieren können',
      button: 'Kostenlose Beratung'
    },
    footer: {
      tagline: 'Sie reisen einfach, wir organisieren alles maßgeschneidert für Sie',
      description: 'Wir maximieren Ihre Reiseerlebnisse mit persönlicher Beratung und Expertenplanung.',
      servicesTitle: 'Dienstleistungen',
      services: ['Reiseroutenplanung', 'Buchungsverwaltung', 'Persönliche Beratung', '24/7 Support'],
      contactTitle: 'Kontakt',
      rights: 'Alle Rechte vorbehalten.'
    }
  }
};

export default function TravelMaximizers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const t = translations[language];

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  const changeLang = (code) => {
    setLanguage(code);
    setIsLangMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Travel Maximizers
                </h1>
                {/* <p className="text-xs text-gray-500 mt-1 hidden lg:block">
                  {t.hero.tagline}
                </p> */}
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-orange-600 transition-colors">{t.nav.home}</a>
              <a href="#servicios" className="text-gray-700 hover:text-orange-600 transition-colors">{t.nav.services}</a>
              <a href="#video" className="text-gray-700 hover:text-orange-600 transition-colors">{t.nav.video}</a>
              <a href="#contacto" className="text-gray-700 hover:text-orange-600 transition-colors">{t.nav.contact}</a>
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={toggleLangMenu}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Globe size={18} className="text-orange-600" />
                  <span className="text-sm font-medium hidden sm:inline">{languages.find(l => l.code === language)?.flag}</span>
                  <span className="text-xs sm:text-sm font-medium">{language.toUpperCase()}</span>
                </button>

                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLang(lang.code)}
                        className={`w-full text-left px-4 py-2 hover:bg-orange-50 transition-colors flex items-center gap-2 ${
                          language === lang.code ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-700 p-1">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#inicio" onClick={toggleMenu} className="block px-3 py-2 text-gray-700">{t.nav.home}</a>
              <a href="#servicios" onClick={toggleMenu} className="block px-3 py-2 text-gray-700">{t.nav.services}</a>
              <a href="#video" onClick={toggleMenu} className="block px-3 py-2 text-gray-700">{t.nav.video}</a>
              <a href="#contacto" onClick={toggleMenu} className="block px-3 py-2 text-gray-700">{t.nav.contact}</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.hero.title1}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block">
                {t.hero.title2}
              </span>
            </h1>
            <div className="mb-4 sm:mb-6">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-orange-600 italic px-4">
                "{t.hero.tagline}"
              </p>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all text-sm sm:text-base">
                {t.hero.cta1}
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-colors text-sm sm:text-base">
                {t.hero.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t.basicServices.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {t.basicServices.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Consulting Card */}
            <div className="group relative bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white text-xs font-semibold mb-4">
                  {t.basicServices.consulting.badge}
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {t.basicServices.consulting.title}
                </h3>
                
                <p className="text-white/90 text-sm sm:text-base mb-6 leading-relaxed">
                  {t.basicServices.consulting.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {t.basicServices.consulting.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white">
                      <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-xs">✓</span>
                      </span>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform group-hover:scale-105">
                  {t.hero.cta1}
                </button>
              </div>
            </div>

            {/* Advisory Card */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <div className="inline-block bg-orange-500/20 backdrop-blur-sm px-4 py-1 rounded-full text-orange-400 text-xs font-semibold mb-4">
                  {t.basicServices.advisory.badge}
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {t.basicServices.advisory.title}
                </h3>
                
                <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                  {t.basicServices.advisory.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {t.basicServices.advisory.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white">
                      <span className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-xs text-orange-400">✓</span>
                      </span>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl transform group-hover:scale-105">
                  {t.hero.cta1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              {t.video.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              {t.video.description}
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl bg-gray-100">
              <iframe
                src="https://www.youtube.com/embed/xz3OHTTXa0Y"
                title="Travel Maximizers"
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.testimonials.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 sm:p-6">
                <div className="flex mb-3 sm:mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="text-yellow-400 fill-current" size={18} />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  "{t.testimonials.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    M{i}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-sm sm:text-base">María Cliente {i}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{t.testimonials.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            {t.cta.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-orange-100 mb-6 sm:mb-8">
            {t.cta.description}
          </p>
          <button className="bg-white text-orange-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all inline-flex items-center text-sm sm:text-base">
            {t.cta.button}
            <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                Travel Maximizers
              </h3>
              <p className="text-xs sm:text-sm text-orange-300 italic mb-3 sm:mb-4">
                "{t.footer.tagline}"
              </p>
              <p className="text-sm sm:text-base text-gray-400">
                {t.footer.description}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t.footer.servicesTitle}</h4>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                {t.footer.services.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
            </div>
            
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t.footer.contactTitle}</h4>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li>info@travelmaximizers.com</li>
                <li>+34 123 456 789</li>
                <li>Madrid, España</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; 2025 Travel Maximizers. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}