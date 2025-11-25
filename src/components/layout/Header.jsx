import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

/**
 * Header Component - Navegación principal optimizada para SEO
 * 
 * Features:
 * - Navegación semántica con <header> y <nav>
 * - Selector de idioma integrado
 * - Menu móvil responsive
 * - Sticky positioning para mejor UX
 * - ARIA labels para accesibilidad
 * 
 * @param {Object} props
 * @param {Object} props.t - Traducciones del idioma actual
 * @param {string} props.language - Código del idioma actual ('es', 'en', 'de')
 * @param {Function} props.onLanguageChange - Callback para cambiar idioma
 */
export default function Header({ t, language, onLanguageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const handleLanguageChange = (code) => {
    onLanguageChange(code);
    setIsLangMenuOpen(false);
  };

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className="bg-white/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#inicio" aria-label="Travel Maximizers - Ir a inicio">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                Travel Maximizers
              </h1>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex space-x-6 lg:space-x-8"
            aria-label="Navegación principal"
          >
            <a 
              href="#inicio" 
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {t.nav.home}
            </a>
            <a 
              href="#nosotros" 
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {t.nav.about}
            </a>
            <a 
              href="#servicios" 
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {t.nav.services}
            </a>
            <a 
              href="#video" 
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {t.nav.video}
            </a>
            <a 
              href="#contacto" 
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLangMenu}
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label={`Idioma actual: ${languages.find(l => l.code === language)?.name}`}
                aria-expanded={isLangMenuOpen}
                aria-haspopup="true"
              >
                <Globe size={18} className="text-emerald-600" />
                <span className="text-sm font-medium hidden sm:inline">
                  {languages.find(l => l.code === language)?.flag}
                </span>
                <span className="text-xs sm:text-sm font-medium">
                  {language.toUpperCase()}
                </span>
              </button>

              {isLangMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-40 sm:w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  role="menu"
                  aria-label="Selector de idioma"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-2 hover:bg-emerald-50 transition-colors flex items-center gap-2 ${
                        language === lang.code 
                          ? 'bg-emerald-50 text-emerald-600' 
                          : 'text-gray-700'
                      }`}
                      role="menuitem"
                      aria-current={language === lang.code ? 'true' : 'false'}
                    >
                      <span className="text-lg" aria-hidden="true">
                        {lang.flag}
                      </span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className="text-gray-700 p-1"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t" role="navigation" aria-label="Navegación móvil">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#inicio" 
              onClick={handleMobileNavClick} 
              className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md transition-colors"
            >
              {t.nav.home}
            </a>
            <a 
              href="#nosotros" 
              onClick={handleMobileNavClick} 
              className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md transition-colors"
            >
              {t.nav.about}
            </a>
            <a 
              href="#servicios" 
              onClick={handleMobileNavClick} 
              className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md transition-colors"
            >
              {t.nav.services}
            </a>
            <a 
              href="#video" 
              onClick={handleMobileNavClick} 
              className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md transition-colors"
            >
              {t.nav.video}
            </a>
            <a 
              href="#contacto" 
              onClick={handleMobileNavClick} 
              className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md transition-colors"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}