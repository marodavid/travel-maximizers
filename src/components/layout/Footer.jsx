/**
 * Footer Component - Footer global optimizado para SEO
 * 
 * Features:
 * - Semantic HTML con <footer>
 * - Links de contacto estructurados
 * - Schema.org ready (Organization markup)
 * - Información de contacto visible para SEO
 * - Responsive design
 * 
 * @param {Object} props
 * @param {Object} props.t - Traducciones del idioma actual
 * @param {Function} props.onContactClick - Callback para abrir formulario de contacto
 */
export default function Footer({ t, onContactClick }) {
  return (
    <footer 
      id="contacto" 
      className="bg-gray-900 text-white py-8 sm:py-12"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
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
          
          {/* Services Section */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
              {t.footer.services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </div>
          
          {/* Contact Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
              {/* Email */}
              <li className="flex items-center gap-2">
                <svg 
                  className="w-4 h-4 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <button 
                  onClick={onContactClick}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                  aria-label="Abrir formulario de contacto"
                >
                  travelmaximizers@gmail.com
                </button>
              </li>
              
              {/* Instagram */}
              <li className="flex items-center gap-2">
                <svg 
                  className="w-4 h-4 flex-shrink-0" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
                  aria-label="Visitar Instagram de Travel Maximizers"
                >
                  @travelmaximizers
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2025 Travel Maximizers. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}