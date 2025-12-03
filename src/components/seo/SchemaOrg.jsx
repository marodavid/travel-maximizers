import { Helmet } from 'react-helmet-async';

/**
 * SchemaOrg Component - Structured Data (JSON-LD)
 * 
 * Implementa Schema.org markup para:
 * - Organization
 * - LocalBusiness
 * - TravelAgency
 * - Service (Advisory & Consulting)
 * - Review/AggregateRating
 * - BreadcrumbList
 * - WebPage
 * 
 * Beneficios SEO:
 * - Rich Snippets en resultados de búsqueda
 * - Featured Snippets eligibility
 * - Knowledge Graph candidacy
 * - Higher CTR en SERPs
 * 
 * @param {Object} props
 * @param {string} props.language - Idioma actual
 */
export default function SchemaOrg({ language = 'es' }) {
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
      : "Personalized travel advisory to maximize your experience in exotic destinations worldwide",
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
      "latitude": "8.9833",
      "longitude": "-79.5167"
    },
    "sameAs": [
      "https://instagram.com/travelmaximizers",
      "https://facebook.com/travelmaximizers",
      "https://twitter.com/travelmaximizers"
    ],
    "founder": {
      "@type": "Person",
      "name": "Laura & David"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "8.9833",
        "longitude": "-79.5167"
      },
      "geoRadius": "20000000" // Global
    },
    "knowsAbout": [
      "Travel Planning",
      "Destination Advisory",
      "Exotic Travel",
      "Custom Itineraries",
      "Adventure Travel",
      "Cultural Tourism",
      "Luxury Travel",
      "Budget Travel"
    ]
  };

  // 2. Service Schema - Advisory
  const advisoryServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/#advisory-service`,
    "serviceType": "Travel Advisory Service",
    "name": language === 'es' ? "Asesoría de Viajes" : "Travel Advisory",
    "description": language === 'es'
      ? "Servicio de asesoría personalizada para planificar tu viaje ideal con recomendaciones expertas"
      : "Personalized advisory service to plan your ideal trip with expert recommendations",
    "provider": {
      "@id": `${baseUrl}/#organization`
    },
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `${baseUrl}/#servicios`,
      "priceValidUntil": "2025-12-31"
    },
    "category": "Travel Advisory",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Travel Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'es' ? "Asesoría de Viajes" : "Travel Advisory"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'es' ? "Consultoría Premium" : "Premium Consulting"
          }
        }
      ]
    }
  };

  // 3. Aggregate Rating Schema
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    "name": "Travel Maximizers",
    "image": `${baseUrl}/images/logo.png`,
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
        "datePublished": "2024-09-15",
        "reviewBody": language === 'es'
          ? "Laura y David nos diseñaron el itinerario perfecto para Tailandia. Cada detalle fue cuidadosamente pensado."
          : "Laura and David designed the perfect itinerary for Thailand. Every detail was carefully thought out.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael R."
        },
        "datePublished": "2024-08-22",
        "reviewBody": language === 'es'
          ? "La mejor inversión para nuestro viaje a Jordania. Conocimiento excepcional del destino."
          : "The best investment for our trip to Jordan. Exceptional knowledge of the destination.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ]
  };

  // 4. WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    "url": baseUrl,
    "name": "Travel Maximizers - Travel Advisory",
    "description": language === 'es'
      ? "Asesoría de viajes personalizada para destinos exóticos"
      : "Personalized travel advisory for exotic destinations",
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
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
        "name": language === 'es' ? "Servicios" : "Services",
        "item": `${baseUrl}/#servicios`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": language === 'es' ? "Destinos" : "Destinations",
        "item": `${baseUrl}/#destinos`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": language === 'es' ? "Contacto" : "Contact",
        "item": `${baseUrl}/#contacto`
      }
    ]
  };

  // 6. FAQPage Schema (para featured snippets)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": language === 'es' 
          ? "¿Qué incluye la asesoría de viajes?"
          : "What does travel advisory include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === 'es'
            ? "Nuestra asesoría incluye: recomendaciones personalizadas de destinos, itinerario detallado día a día, reservas de alojamiento y actividades, consejos de seguridad, presupuesto optimizado, y soporte 24/7 durante tu viaje."
            : "Our advisory includes: personalized destination recommendations, detailed day-by-day itinerary, accommodation and activity bookings, safety tips, optimized budget, and 24/7 support during your trip."
        }
      },
      {
        "@type": "Question",
        "name": language === 'es'
          ? "¿Cuánto cuesta la asesoría de viajes?"
          : "How much does travel advisory cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === 'es'
            ? "Ofrecemos dos opciones: Asesoría básica desde €299 y Consultoría Premium desde €699, adaptadas a la complejidad de tu viaje y necesidades específicas."
            : "We offer two options: Basic Advisory from €299 and Premium Consulting from €699, tailored to your trip complexity and specific needs."
        }
      },
      {
        "@type": "Question",
        "name": language === 'es'
          ? "¿En qué destinos son expertos?"
          : "Which destinations are you experts in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === 'es'
            ? "Somos especialistas en destinos exóticos de Asia (Tailandia, Japón), Oriente Medio (Jordania), América Latina (Colombia, Panamá, México, Brasil), Europa (Italia, Croacia, Austria) y experiencias únicas como Oktoberfest en Alemania."
            : "We specialize in exotic destinations in Asia (Thailand, Japan), Middle East (Jordan), Latin America (Colombia, Panama, Mexico, Brazil), Europe (Italy, Croatia, Austria), and unique experiences like Oktoberfest in Germany."
        }
      }
    ]
  };

  // Combinar todos los schemas
  const allSchemas = [
    organizationSchema,
    advisoryServiceSchema,
    aggregateRatingSchema,
    webPageSchema,
    breadcrumbSchema,
    faqSchema
  ];

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
