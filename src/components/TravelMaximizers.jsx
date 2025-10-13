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
    about: {
      title: 'Quiénes Somos',
      subtitle: 'La historia detrás de Travel Maximizers',
      intro: 'Somos Laura y David',
      description1: 'Personas como tú, con trabajos de 8 horas al día, que aprovechan cada minuto libre para explorar el mundo.',
      description2: 'Hemos recorrido más de 60 países, no solo como turistas, sino viviendo cada experiencia al máximo. Conocemos los trucos, los secretos y las mejores formas de sacar el mayor provecho a cada viaje.',
      description3: '¿El resultado? Una pasión desbordante por ayudar a viajeros como tú a transformar sus vacaciones limitadas en aventuras extraordinarias.',
      cta: '¿Te ayudamos a planificar tu próximo viaje?',
      stats: {
        countries: '60+',
        countriesLabel: 'Países Visitados',
        experience: '15+',
        experienceLabel: 'Años Viajando',
        clients: '200+',
        clientsLabel: 'Viajeros Felices'
      }
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
    about: {
      title: 'About Us',
      subtitle: 'The story behind Travel Maximizers',
      intro: 'We are Laura and David',
      description1: 'People just like you, with 8-hour workdays, who make the most of every free moment to explore the world.',
      description2: 'We\'ve traveled to over 60 countries, not just as tourists, but truly living each experience to the fullest. We know the tricks, secrets, and best ways to maximize every journey.',
      description3: 'The result? An overflowing passion to help travelers like you transform your limited vacation time into extraordinary adventures.',
      cta: 'Shall we help you plan your next trip?',
      stats: {
        countries: '60+',
        countriesLabel: 'Countries Visited',
        experience: '15+',
        experienceLabel: 'Years Traveling',
        clients: '200+',
        clientsLabel: 'Happy Travelers'
      }
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
    about: {
      title: 'Über Uns',
      subtitle: 'Die Geschichte hinter Travel Maximizers',
      intro: 'Wir sind Laura und David',
      description1: 'Menschen wie Sie, mit 8-Stunden-Arbeitstagen, die jede freie Minute nutzen, um die Welt zu erkunden.',
      description2: 'Wir haben über 60 Länder bereist, nicht nur als Touristen, sondern jede Erfahrung in vollen Zügen gelebt. Wir kennen die Tricks, Geheimnisse und besten Wege, jede Reise zu maximieren.',
      description3: 'Das Ergebnis? Eine überwältigende Leidenschaft, Reisenden wie Ihnen zu helfen, ihre begrenzte Urlaubszeit in außergewöhnliche Abenteuer zu verwandeln.',
      cta: 'Sollen wir Ihnen bei der Planung Ihrer nächsten Reise helfen?',
      stats: {
        countries: '60+',
        countriesLabel: 'Besuchte Länder',
        experience: '15+',
        experienceLabel: 'Jahre Reisen',
        clients: '200+',
        clientsLabel: 'Glückliche Reisende'
      }
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
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const photos = [
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop'
  ];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

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
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                  Travel Maximizers
                </h1>
                {/* <p className="text-xs text-gray-500 mt-1 hidden lg:block">
                  {t.hero.tagline}
                </p> */}
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-emerald-600 transition-colors">{t.nav.home}</a>
              <a href="#nosotros" className="text-gray-700 hover:text-emerald-600 transition-colors">{t.nav.about}</a>
              <a href="#servicios" className="text-gray-700 hover:text-emerald-600 transition-colors">{t.nav.services}</a>
              <a href="#video" className="text-gray-700 hover:text-emerald-600 transition-colors">{t.nav.video}</a>
              <a href="#contacto" className="text-gray-700 hover:text-emerald-600 transition-colors">{t.nav.contact}</a>
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={toggleLangMenu}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Globe size={18} className="text-emerald-600" />
                  <span className="text-sm font-medium hidden sm:inline">{languages.find(l => l.code === language)?.flag}</span>
                  <span className="text-xs sm:text-sm font-medium">{language.toUpperCase()}</span>
                </button>

                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLang(lang.code)}
                        className={`w-full text-left px-4 py-2 hover:bg-emerald-50 transition-colors flex items-center gap-2 ${
                          language === lang.code ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700'
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
      <section id="inicio" className="pt-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.hero.title1}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent block">
                {t.hero.title2}
              </span>
            </h1>
            <div className="mb-4 sm:mb-6">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-emerald-600 italic px-4">
                "{t.hero.tagline}"
              </p>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all text-sm sm:text-base">
                {t.hero.cta1}
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-sm sm:text-base">
                {t.hero.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t.about.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <div className="order-2 lg:order-1">
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
                    {t.about.stats.clients}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {t.about.stats.clientsLabel}
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  {t.about.cta}
                </p>
                <button className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all">
                  {t.hero.cta1}
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                  <img 
                    src={photos[currentPhotoIndex]} 
                    alt={`Travel memory ${currentPhotoIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
                
                <button 
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                  aria-label="Previous photo"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                  aria-label="Next photo"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

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
                      aria-label={`Go to photo ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentPhotoIndex + 1} / {photos.length}
                </div>
              </div>

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
                  >
                    <img 
                      src={photo} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
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
            <div className="group relative bg-gradient-to-br from-emerald-500 to-teal-700 rounded-2xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
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
                
                <button className="w-full bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform group-hover:scale-105">
                  {t.hero.cta1}
                </button>
              </div>
            </div>

            {/* Advisory Card */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <div className="inline-block bg-emerald-500/20 backdrop-blur-sm px-4 py-1 rounded-full text-emerald-300 text-xs font-semibold mb-4">
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
                      <span className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-xs text-emerald-400">✓</span>
                      </span>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-700 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-800 transition-all shadow-lg hover:shadow-xl transform group-hover:scale-105">
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
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-full flex items-center justify-center text-white font-semibold text-sm">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            {t.cta.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-emerald-100 mb-6 sm:mb-8">
            {t.cta.description}
          </p>
          <button className="bg-white text-emerald-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all inline-flex items-center text-sm sm:text-base">
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
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                Travel Maximizers
              </h3>
              <p className="text-xs sm:text-sm text-emerald-300 italic mb-3 sm:mb-4">
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