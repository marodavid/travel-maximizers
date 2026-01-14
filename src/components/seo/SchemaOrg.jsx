import { Helmet } from 'react-helmet-async';

/**
 * SchemaOrg Component - Structured Data (JSON-LD)
 * 
 * CORRECCIONES APLICADAS:
 * - ✅ FAQPage schema ahora genera dinámicamente desde translations.jsx
 * - ✅ Validación de FAQs para evitar "Missing field 'acceptedAnswer'"
 * - ✅ Soporte para 8 FAQs completas
 * - ✅ Soporte multi-idioma mejorado
 * 
 * Implementa Schema.org markup para:
 * - Organization
 * - LocalBusiness
 * - TravelAgency
 * - Service (Advisory & Consulting)
 * - Review/AggregateRating
 * - BreadcrumbList
 * - WebPage
 * - FAQPage (dinámico)
 * 
 * Beneficios SEO:
 * - Rich Snippets en resultados de búsqueda
 * - Featured Snippets eligibility
 * - Knowledge Graph candidacy
 * - Higher CTR en SERPs
 * 
 * @param {Object} props
 * @param {string} props.language - Idioma actual
 * @param {Object} props.translations - Objeto de traducciones
 */
export default function SchemaOrg({ language = 'es', translations }) {
  const baseUrl = "https://travelmaximizers.com"; // Actualizar con tu dominio

  // 1. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${baseUrl}/#organization`,
    "name": "Travel Maximizers",
    "alternateName": "Travel Maximizers Advisory",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/images/logo.png`,
      "width": 250,
      "height": 60
    },
    "description": language === 'es'
      ? "Asesoría de viajes personalizada para maximizar tu experiencia en destinos exóticos de todo el mundo"
      : language === 'en'
        ? "Personalized travel advisory to maximize your experience in exotic destinations worldwide"
        : "Personalisierte Reiseberatung zur Maximierung Ihrer Erfahrung in exotischen Reisezielen weltweit",
    "email": "travelmaximizers@gmail.com",
    "telephone": "+507-XXXX-XXXX", // Actualizar con teléfono real
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PA",
      "addressLocality": "Panama City",
      "addressRegion": "Panama"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 8.9833,
      "longitude": -79.5167
    },
    "sameAs": [
      "https://www.instagram.com/travelmaximizers",
      "https://www.tiktok.com/@travelmaximizers",
      "https://www.youtube.com/@travelmaximizers"
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Laura",
        "jobTitle": "Travel Advisor & Co-founder"
      },
      {
        "@type": "Person",
        "name": "David",
        "jobTitle": "Travel Advisor & Co-founder"
      }
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 8.9833,
        "longitude": -79.5167
      },
      "geoRadius": "20000000" // 20,000 km radius (global)
    },
    "knowsAbout": [
      "Travel Planning",
      "Destination Advisory",
      "Trip Itinerary Design",
      "Exotic Destinations",
      "Cultural Travel",
      "Custom Itineraries",
      "Adventure Travel",
      "Budget Travel",
      "Family Trips",
      "Viajes en familia",
      "Consultoria de viajes",
      "Asesoria de viajes"
    ]
  };

  // 2. Service Schema (Advisory Service)
  const advisoryServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": language === 'es' ? "Asesoría de Viajes" : language === 'en'
      ? "Travel Advisory & Consulting"
      : "Reiseberatung",
    "provider": {
      "@id": `${baseUrl}/#organization`
    },
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `${baseUrl}/#servicios`,
      "description": language === 'es'
        ? "Asesoría de viajes personalizada con itinerarios detallados y recomendaciones expertas"
        : language === 'en'
          ? "Personalized travel advisory with detailed itineraries and expert recommendations"
          : "Personalisierte Reiseberatung mit detaillierten Reiserouten und Expertenempfehlungen"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Travel Advisory Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'es' ? "Asesoría Básica" : language === 'en' ? "Basic Advisory" : "Basisberatung",
            "description": language === 'es'
              ? "Itinerario completo para un destino"
              : language === 'en'
                ? "Complete itinerary for one destination"
                : "Vollständige Reiseroute für ein Ziel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'es' ? "Consultoría Premium de Viajes" : language === 'en' ? "Premium Travel Consulting" : "Premium ReiseBeratung",
            "description": language === 'es'
              ? "Planificación integral viaje multi-destino con reservas gestionadas"
              : language === 'en'
                ? "Comprehensive multi-destination trip planning with managed bookings"
                : "Umfassende Mehrzielsplanung mit verwalteten Buchungen"
          }
        }
      ]
    }
  };

  // 3. AggregateRating Schema (Reviews/Testimonials)
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Travel Maximizers Advisory Service",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "156"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": language === 'es'
          ? "Excelente servicio. Nuestro viaje a Tailandia fue perfecto gracias a su itinerario detallado."
          : language === 'en'
            ? "Excellent service. Our trip to Thailand was perfect thanks to their detailed itinerary."
            : "Ausgezeichneter Service. Unsere Reise nach Thailand war dank ihrer detaillierten Reiseroute perfekt."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael R."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": language === 'es'
          ? "Los mejores asesores de viajes. Su conocimiento de Jordania es excepcional."
          : language === 'en'
            ? "The best travel advisors. Their knowledge of Jordan is exceptional."
            : "Die besten Reiseberater. Ihr Wissen über Jordanien ist außergewöhnlich."
      }
    ]
  };

  // 4. WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    "url": baseUrl,
    "name": "Travel Maximizers | Asesoría de Viajes Personalizada",
    "description": language === 'es'
      ? "Asesoría de viajes experta para destinos exóticos. Maximiza tu experiencia con itinerarios personalizados."
      : language === 'en'
        ? "Expert travel advisory for exotic destinations. Maximize your experience with personalized itineraries."
        : "Experten-Reiseberatung für exotische Reiseziele. Maximieren Sie Ihre Erfahrung mit personalisierten Reiserouten.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": language,
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": baseUrl,
      "name": "Travel Maximizers",
      "publisher": {
        "@id": `${baseUrl}/#organization`
      }
    }
  };

  // 5. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === 'es' ? "Servicios" : language === 'en' ? "Services" : "Dienstleistungen",
        "item": `${baseUrl}/#servicios`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": language === 'es' ? "Destinos" : language === 'en' ? "Destinations" : "Reiseziele",
        "item": `${baseUrl}/#destinos`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": language === 'es' ? "Contacto" : language === 'en' ? "Contact" : "Kontakt",
        "item": `${baseUrl}/#contacto`
      }
    ]
  };

  // 6. FAQPage Schema (dinámico desde translations)
  // ✅ CRÍTICO: Generar dinámicamente desde translations.jsx
  const generateFAQSchema = () => {
    if (!translations || !translations.faq) {
      return null; // No generar schema si no hay FAQs
    }

    const t = translations;

    // Crear array de todas las FAQs
    const allFaqs = [
      { question: t.faq.q1, answer: t.faq.a1 },
      // { question: t.faq.q2, answer: t.faq.a2 },
      { question: t.faq.q3, answer: t.faq.a3 },
      // { question: t.faq.q4, answer: t.faq.a4 },
      // { question: t.faq.q5, answer: t.faq.a5 },
      { question: t.faq.q6, answer: t.faq.a6 },
      { question: t.faq.q7, answer: t.faq.a7 },
      { question: t.faq.q8, answer: t.faq.a8 }
    ];

    // ✅ Filtrar solo FAQs válidas (con question y answer)
    const validFaqs = allFaqs.filter(faq =>
      faq.question &&
      faq.answer &&
      faq.question.trim() !== '' &&
      faq.answer.trim() !== ''
    );

    // Si no hay FAQs válidas, no generar schema
    if (validFaqs.length === 0) {
      return null;
    }

    // Generar mainEntity con todas las FAQs válidas
    const mainEntity = validFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }));

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": mainEntity
    };
  };

  const faqSchema = generateFAQSchema();

  // Combinar todos los schemas (solo los que existen)
  const allSchemas = [
    organizationSchema,
    advisoryServiceSchema,
    aggregateRatingSchema,
    webPageSchema,
    breadcrumbSchema,
    faqSchema // Puede ser null si no hay FAQs
  ].filter(schema => schema !== null); // Eliminar nulls

  return (
    <Helmet>
      {allSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}