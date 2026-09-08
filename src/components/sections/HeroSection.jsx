/**
 * Hero principal focused on a clear audience, outcome and next step.
 */
export default function HeroSection({ t, onContactClick }) {
  return (
    <section
      id="inicio"
      className="pt-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50"
      aria-label="Hero principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="text-center max-w-5xl mx-auto">
          <p className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm mb-6">
            {t.hero.tagline}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-950 mb-6">
            {t.hero.title1}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent block mt-1">
              {t.hero.title2}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={onContactClick}
              className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-7 sm:px-9 py-3.5 rounded-full font-semibold shadow-lg shadow-emerald-700/15 hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm sm:text-base"
              aria-label={t.hero.cta1}
            >
              {t.hero.cta1}
            </button>
            <a
              href="#servicios"
              className="border-2 border-emerald-600 bg-white/70 text-emerald-700 px-7 sm:px-9 py-3.5 rounded-full font-semibold hover:bg-emerald-50 transition-colors text-sm sm:text-base inline-block"
              aria-label={t.hero.cta2}
            >
              {t.hero.cta2}
            </a>
          </div>

          <ul className="mt-10 pt-7 border-t border-emerald-100 grid grid-cols-2 lg:grid-cols-4 gap-4 text-left" aria-label="Razones para confiar en Travel Maximizers">
            {t.hero.trustSignals.map((signal) => (
              <li key={signal} className="flex items-start gap-2 text-sm sm:text-base font-medium text-gray-700">
                <svg className="w-5 h-5 text-emerald-600 flex-none mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 011.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
