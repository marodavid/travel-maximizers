import { Helmet } from 'react-helmet-async';

/**
 * SEOHead Component - Meta Tags Optimization
 * 
 * Implementa:
 * - Title & Description optimizados
 * - Open Graph (Facebook, LinkedIn)
 * - Twitter Cards
 * - Canonical URLs
 * - hreflang tags (multi-idioma)
 * - Mobile optimization
 * - Preconnect & DNS-prefetch
 * 
 * @param {Object} props
 * @param {string} props.language - Idioma actual (es, en, de)
 * @param {Object} props.translations - Objeto de traducciones
 * @param {string} props.canonicalUrl - URL canónica (opcional)
 */
export default function SEOHead({ language = 'es', translations, canonicalUrl }) {
  // Metadata por idioma
  const metadata = {
    es: {
      title: "Travel Maximizers | Asesoría de Viajes Personalizada y Planificación",
      description: "✈️ Especialistas en asesoría de viajes personalizada. Creamos itinerarios a medida para Tailandia, Jordania, Japón y más. ¡Maximiza tu presupuesto y vive experiencias únicas!",
      keywords: "asesoría de viajes, viajes personalizados, planificador de viajes, destinos exóticos, itinerarios a medida, vacaciones personalizadas, tailandia, jordania, japon, colombia",
      ogTitle: "Travel Maximizers | Tu Asesor de Viajes Experto",
      ogDescription: "Transforma tus vacaciones en aventuras extraordinarias con nuestra asesoría personalizada. Planificación detallada y destinos únicos.",
      locale: "es_ES"
    },
    en: {
      title: "Travel Maximizers | Personalized Travel Advisory & Planning",
      description: "✈️ Specialists in personalized travel advisory. We create custom itineraries for Thailand, Jordan, Japan, and more. Maximize your budget and live unique experiences!",
      keywords: "travel advisory, personalized travel, trip planner, exotic destinations, custom itineraries, personalized vacations, thailand, jordan, japan, colombia",
      ogTitle: "Travel Maximizers | Your Expert Travel Advisor",
      ogDescription: "Transform your vacations into extraordinary adventures with our personalized advisory. Detailed planning and unique destinations.",
      locale: "en_US"
    },
    de: {
      title: "Travel Maximizers | Personalisierte Reiseberatung & Planung",
      description: "✈️ Spezialisten für personalisierte Reiseberatung. Wir erstellen maßgeschneiderte Reiserouten für Thailand, Jordanien, Japan und mehr. Maximieren Sie Ihr Budget!",
      keywords: "reiseberatung, personalisierte reisen, reiseplanung, exotische reiseziele, maßgeschneiderte reiserouten, thailand, jordanien, japan, kolumbien",
      ogTitle: "Travel Maximizers | Ihr Experte für Reiseberatung",
      ogDescription: "Verwandeln Sie Ihren Urlaub in außergewöhnliche Abenteuer mit unserer personalisierten Beratung. Detaillierte Planung und einzigartige Reiseziele.",
      locale: "de_DE"
    }
  };

  const meta = metadata[language] || metadata.es;
  const baseUrl = "https://travelmaximizers.com"; // Confirmado en el plan
  const currentCanonical = canonicalUrl || `${baseUrl}${language === 'es' ? '/' : `/${language}`}`;

  // URLs alternativas para hreflang
  const alternateUrls = {
    es: `${baseUrl}/`,
    en: `${baseUrl}/en`,
    de: `${baseUrl}/de`,
    'x-default': `${baseUrl}/`
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={language} />
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentCanonical} />

      {/* hreflang Tags - Critical for multi-language SEO */}
      {Object.entries(alternateUrls).map(([lang, url]) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={url}
        />
      ))}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentCanonical} />
      <meta property="og:title" content={meta.ogTitle} />
      <meta property="og:description" content={meta.ogDescription} />
      <meta property="og:image" content={`${baseUrl}/images/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={meta.locale} />
      <meta property="og:site_name" content="Travel Maximizers" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentCanonical} />
      <meta name="twitter:title" content={meta.ogTitle} />
      <meta name="twitter:description" content={meta.ogDescription} />
      <meta name="twitter:image" content={`${baseUrl}/images/twitter-card.jpg`} />
      <meta name="twitter:creator" content="@travelmaximizers" />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#059669" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Geo Tags */}
      <meta name="geo.region" content="PA" />
      <meta name="geo.placename" content="Panama" />

      {/* Business Info */}
      <meta name="author" content="Travel Maximizers" />
      <meta name="contact" content="travelmaximizers@gmail.com" />

      {/* Robots & Crawling */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Performance Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Verification Tags (añadir cuando tengas los códigos) */}
      {/* <meta name="google-site-verification" content="tu-codigo-aqui" /> */}
      {/* <meta name="facebook-domain-verification" content="tu-codigo-aqui" /> */}
    </Helmet>
  );
}
