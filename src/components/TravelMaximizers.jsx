import { useState } from 'react';
import { MapPin, Calendar, Users, Star, ArrowRight, Menu, X, Globe } from 'lucide-react';
import Slider from "react-slick";
import translations from './translations';


const settingsTestimonalSlider = {
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4500,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const destinationKeys = [
    "italia",
    "jordania",
    "tailandia",
    "marruecos",
    "colombia",
    "panama",
    "mexico",
    "brasil",
    "croacia",
    "austria",
    "japon",
    "oktoberfest",
  ];

  const videoUrl = "https://www.youtube.com/embed/55Q2c8J0bCY"; 

export default function TravelMaximizers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    dream: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const imageModules = import.meta.glob('/src/assets/images/about-us/*.{jpg,jpeg,png,webp}', { eager: true });
  const photos = Object.values(imageModules).map(mod => mod.default);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => {
    setIsFormOpen(false);
    setSubmitMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Configuración de EmailJS
      const serviceID = 'service_jj938fo'; // Reemplazar con tu Service ID
      const templateID = 'template_682geyg'; // Reemplazar con tu Template ID
      const publicKey = 'NoLb_T8VJzvbVkLvt'; // Reemplazar con tu Public Key

      // Parámetros del template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        whatsapp: formData.whatsapp || 'No proporcionado',
        dream_trip: formData.dream,
        to_email: 'travelmaximizers@gmail.com',
        reply_to: formData.email
      };

      // Enviar email usando EmailJS
      const response = await window.emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSubmitMessage(t.form.successMessage);
        setFormData({ name: '', email: '', whatsapp: '', dream: '' });
        
        // Cerrar el modal después de 3 segundos
        setTimeout(() => {
          closeForm();
        }, 3000);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitMessage(t.form.errorMessage || 'Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
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
              <button 
                onClick={openForm}
                className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all text-sm sm:text-base"
              >
                {t.hero.cta1}
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-sm sm:text-base">
                {t.hero.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t.form.title}</h3>
                  <p className="text-emerald-100 text-sm">{t.form.subtitle}</p>
                </div>
                <button 
                  onClick={closeForm}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {submitMessage && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg">
                  {submitMessage}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.form.name} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder={t.form.namePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.form.email} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder={t.form.emailPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.form.whatsapp}
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder={t.form.whatsappPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="dream" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.form.dream} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="dream"
                  name="dream"
                  value={formData.dream}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder={t.form.dreamPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? t.form.submitting : t.form.submit}
                </button>
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                >
                  {t.form.close}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* About Us Section */}
      <section id="nosotros" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t.about.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
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
                    {t.about.stats.trips}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {t.about.stats.tripsLabel}
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  {t.about.cta}
                </p>
                <button 
                  onClick={openForm}
                  className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
                  >
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
      
       {/* Services & Pricing Section */}
      <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
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
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-emerald-300 transform hover:-translate-y-2">
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
                    onClick={openForm}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-3 sm:py-4 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all text-sm sm:text-base"
                  >
                    {t.services.advisory.cta}
                  </button>
                </div>
              </div>
            </div>

            {/* Consultoría Card - Premium */}
            <div className="relative bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
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
                  onClick={openForm}
                  className="w-full bg-white text-emerald-600 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                >
                  {t.services.consulting.cta}
                </button>
              </div>
            </div>
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
                onClick={openForm}
                className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all inline-flex items-center text-sm sm:text-base"
              >
                {t.services.ctaSection.button}
                <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

     
      {/* Destinos Sugeridos */}   
      <section id="suggested-destinations" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          {/* Encabezado */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                {t.suggestedDestinations.title}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t.suggestedDestinations.subtitle}
              </p>
            </div>
          </div>

          {/* Tarjetas */}
          <div className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-7xl">
            {destinationKeys.map((key) => {
              const dest = t.suggestedDestinations.destinations[key];
              if (!dest) return null;

              const imageUrl = `/src/assets/images/destinations/${key}.jpg`;

              return (
                <div key={key} className="group h-96 w-full [perspective:1000px]">
                  <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    {/* Front */}
                    <div className="absolute inset-0">
                      <img
                        src={imageUrl}
                        alt={dest.name}
                        loading="lazy"
                        className="h-full w-full rounded-xl object-cover shadow-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/40 p-6">
                        <h3 className="text-2xl font-bold text-white font-headline text-center">
                          {dest.name}
                        </h3>
                      </div>
                    </div>

                    {/* Back */}
                    <div
                      className="absolute inset-0 h-full w-full rounded-xl bg-cover bg-center p-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${imageUrl})`,
                      }}
                    >
                      <div className="flex min-h-full flex-col items-center justify-center">
                        <h3 className="text-2xl font-bold font-headline text-white">
                          {dest.name}
                        </h3>
                        <p className="mt-4 text-base text-gray-200">
                          {dest.description}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* FIN Destinos Sugeridos */}

      {/* Testimonials */}
      <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.testimonials.title}
            </h2>
          </div>

          <Slider {...settingsTestimonalSlider}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="px-3">
                <div className="bg-gray-50 rounded-xl p-5 sm:p-6 shadow-sm transition-transform hover:-translate-y-1 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex mb-3 sm:mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="text-yellow-400 fill-current"
                          size={18}
                        />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                      "{t.testimonials[`quote${i}`]}"
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {t.testimonials[`logo${i}`]}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-sm sm:text-base">
                        {t.testimonials[`customer${i}`]}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {t.testimonials.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
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
          <button 
            onClick={openForm}
            className="bg-white text-emerald-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all inline-flex items-center text-sm sm:text-base"
            >
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
                <li className="flex items-center gap-2">
                  <svg 
                    className="w-4 h-4 flex-shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <button 
                    onClick={openForm}
                    className="hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    travelmaximizers@gmail.com
                  </button>
                </li>
                <li className="flex items-center gap-2">
                  <svg 
                    className="w-4 h-4 flex-shrink-0" 
                    viewBox="0 0 24 24"
                  >
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#f09433'}} />
                        <stop offset="25%" style={{stopColor: '#e6683c'}} />
                        <stop offset="50%" style={{stopColor: '#dc2743'}} />
                        <stop offset="75%" style={{stopColor: '#cc2366'}} />
                        <stop offset="100%" style={{stopColor: '#bc1888'}} />
                      </linearGradient>
                    </defs>
                    <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <a 
                    href="https://instagram.com/travelmaximizers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200"
                  >
                    @travelmaximizers
                  </a>
                </li>
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