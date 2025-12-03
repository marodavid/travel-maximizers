import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';

import { translations } from '../translations.js'; 
import { routeMap } from '../routeMap.js'; 

export default function VideoPage() {
  const { lang } = useParams();
  const currentLang = ['es', 'en', 'de'].includes(lang) ? lang : 'es';
  
  const t = translations[currentLang]; 

  const routeKey = 'video';
  // Asumimos que has añadido la key 'video' a routeMap.js con slugs y metadatos.
  const data = routeMap[routeKey][currentLang]; 

  // URL del video (deberías tener esto en translations.js si fuese dinámico,
  // pero lo ponemos aquí como un placeholder)
  const videoUrl = "https://www.youtube.com/embed/55Q2c8J0bCY"; 

  // 1. Construir URLs Canónicas y Hreflang
  const canonicalUrl = `https://travelmaximzers.com/${currentLang}/${data.slug}`;
  const hreflang_es = `https://travelmaximzers.com/es/${routeMap.video.es.slug}`;
  const hreflang_en = `https://travelmaximzers.com/en/${routeMap.video.en.slug}`;
  const hreflang_de = `https://travelmaximzers.com/de/${routeMap.video.de.slug}`;

  const title = data.title || `${t.nav.video} | Travel Maximizers`; 
  const metaDescription = data.metaDescription || `Mira el video de introducción de Travel Maximizers.`;

  return (
    <>
      {/* ETIQUETAS SEO CON HELMET */}
      <Helmet>
        <html lang={currentLang} />
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        
        <link rel="canonical" href={canonicalUrl} />
        
        <link rel="alternate" hreflang="es" href={hreflang_es} />
        <link rel="alternate" hreflang="en" href={hreflang_en} />
        <link rel="alternate" hreflang="de" href={hreflang_de} />
        <link rel="alternate" hreflang="x-default" href={hreflang_es} />
      </Helmet>

      {/* CONTENIDO DE LA PÁGINA */}
      <div className="pt-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              {t.videoPage.title || t.nav.video}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.videoPage.subtitle || 'Descubre la filosofía de viaje de Laura y David.'}
            </p>
          </div>

          {/* Contenedor Responsivo para Video de YouTube */}
          <div className="relative w-full overflow-hidden rounded-xl shadow-2xl" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700">
              {t.videoPage.cta || '¿Listo para maximizar tu próximo viaje?'}
            </p>
            <Link 
              to={`/${currentLang}/${routeMap.contact[currentLang].slug}`}
              className="inline-block mt-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all text-base"
            >
              {t.header.cta}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}