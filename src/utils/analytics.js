import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-S0HZXMM5J4';

/**
 * Inicializar Google Analytics
 * Llamar una sola vez al cargar la aplicación
 */
export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID, {
    gaOptions: {
      siteSpeedSampleRate: 100, // Medir velocidad del sitio
    },
    gtagOptions: {
      anonymize_ip: true, // Anonimizar IPs (GDPR compliance)
    }
  });
  
  console.log('Google Analytics inicializado');
};

/**
 * Trackear pageviews (vistas de página)
 * Se llama automáticamente, pero puedes usarlo manualmente
 */
export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
  console.log(`GA Pageview: ${path}`);
};

// ============================================
// EVENTOS PERSONALIZADOS
// ============================================

/**
 * 1. CLICK EN CTA (Call-to-Action)
 * Trackear cuando usuarios hacen click en botones principales
 */
export const trackCTAClick = (ctaName, ctaLocation) => {
  ReactGA.event({
    category: 'CTA',
    action: 'Click',
    label: `${ctaName} - ${ctaLocation}`,
  });
  console.log(`GA Event: CTA Click - ${ctaName} from ${ctaLocation}`);
};

/**
 * 2. APERTURA DE FORMULARIO DE CONTACTO
 */
export const trackContactFormOpen = (source) => {
  ReactGA.event({
    category: 'Contact',
    action: 'Open Form',
    label: source, // De dónde se abrió (Hero, CTA Section, Footer, etc.)
  });
  console.log(`GA Event: Contact form opened from ${source}`);
};

/**
 * 3. ENVÍO DE FORMULARIO DE CONTACTO
 */
export const trackContactFormSubmit = (formData) => {
  ReactGA.event({
    category: 'Contact',
    action: 'Submit Form',
    label: formData.destination || 'General',
    value: 1, // Peso del evento (conversión)
  });
  console.log(`GA Event: Contact form submitted - ${formData.destination}`);
};

/**
 * 4. CLICK EN DESTINO
 * Trackear interés en destinos específicos
 */
export const trackDestinationClick = (destinationName, action = 'Click') => {
  ReactGA.event({
    category: 'Destination',
    action: action, // 'Click', 'View More', 'Card Flip', etc.
    label: destinationName,
  });
  console.log(`GA Event: Destination ${action} - ${destinationName}`);
};

/**
 * 5. CAMBIO DE IDIOMA
 * Trackear preferencias de idioma de usuarios
 */
export const trackLanguageChange = (fromLang, toLang) => {
  ReactGA.event({
    category: 'Language',
    action: 'Change',
    label: `${fromLang} → ${toLang}`,
  });
  console.log(`GA Event: Language changed from ${fromLang} to ${toLang}`);
};

/**
 * 6. INTERACCIÓN CON FAQ
 * Trackear qué preguntas interesan más
 */
export const trackFAQClick = (questionNumber, questionText) => {
  ReactGA.event({
    category: 'FAQ',
    action: 'Expand Question',
    label: `Q${questionNumber}: ${questionText.substring(0, 50)}...`,
  });
  console.log(`GA Event: FAQ expanded - Q${questionNumber}`);
};

/**
 * 7. REPRODUCCIÓN DE VIDEO
 */
export const trackVideoPlay = (videoTitle, videoSource) => {
  ReactGA.event({
    category: 'Video',
    action: 'Play',
    label: `${videoTitle} (${videoSource})`,
  });
  console.log(`GA Event: Video played - ${videoTitle}`);
};

/**
 * 8. CLICK EN REDES SOCIALES
 */
export const trackSocialClick = (platform, location) => {
  ReactGA.event({
    category: 'Social',
    action: 'Click',
    label: `${platform} - ${location}`, // Instagram - Footer, etc.
  });
  console.log(`GA Event: Social click - ${platform} from ${location}`);
};

/**
 * 9. SCROLL PROFUNDIDAD
 * Medir engagement (cuánto scrollean los usuarios)
 */
export const trackScrollDepth = (percentage) => {
  ReactGA.event({
    category: 'Engagement',
    action: 'Scroll Depth',
    label: `${percentage}%`,
    value: percentage,
    nonInteraction: true, // No afecta bounce rate
  });
  console.log(`GA Event: Scrolled ${percentage}%`);
};

/**
 * 10. TIEMPO EN PÁGINA
 * Medir cuánto tiempo pasan en secciones específicas
 */
export const trackTimeOnSection = (sectionName, seconds) => {
  ReactGA.event({
    category: 'Engagement',
    action: 'Time on Section',
    label: sectionName,
    value: Math.round(seconds),
    nonInteraction: true,
  });
  console.log(`GA Event: ${seconds}s on ${sectionName}`);
};

/**
 * 11. CLICK EN BOTÓN DE SERVICIOS
 */
export const trackServiceClick = (serviceName, serviceType) => {
  ReactGA.event({
    category: 'Services',
    action: 'Click',
    label: `${serviceName} - ${serviceType}`, // "Asesoría Básica - €299"
  });
  console.log(`GA Event: Service clicked - ${serviceName}`);
};

/**
 * 12. NAVEGACIÓN INTERNA
 * Trackear clicks en menú de navegación
 */
export const trackNavigation = (menuItem, fromSection) => {
  ReactGA.event({
    category: 'Navigation',
    action: 'Menu Click',
    label: `${menuItem} from ${fromSection}`,
  });
  console.log(`GA Event: Navigation - ${menuItem}`);
};

/**
 * 13. ERROR EN FORMULARIO
 * Identificar problemas en el formulario
 */
export const trackFormError = (errorType, errorMessage) => {
  ReactGA.event({
    category: 'Error',
    action: 'Form Validation',
    label: `${errorType}: ${errorMessage}`,
  });
  console.log(`GA Event: Form error - ${errorType}`);
};

/**
 * 14. OUTBOUND LINKS
 * Trackear clicks a enlaces externos
 */
export const trackOutboundLink = (url, label) => {
  ReactGA.event({
    category: 'Outbound',
    action: 'Click',
    label: `${label} → ${url}`,
  });
  console.log(`GA Event: Outbound link - ${url}`);
};

// ============================================
// EVENTOS DE CONVERSIÓN (IMPORTANTES)
// ============================================

/**
 * CONVERSIÓN: Usuario completó formulario de contacto
 * Este es tu objetivo principal
 */
export const trackConversion = (conversionType, value) => {
  ReactGA.event({
    category: 'Conversion',
    action: conversionType, // 'Lead Generated', 'Consultation Requested', etc.
    label: 'Travel Maximizers',
    value: value || 1,
  });
  console.log(`GA Event: CONVERSION - ${conversionType}`);
};

/**
 * MICRO-CONVERSIÓN: Acciones que indican interés
 */
export const trackMicroConversion = (actionType) => {
  ReactGA.event({
    category: 'Micro Conversion',
    action: actionType, // 'Watched Video', 'Read 3+ FAQs', 'Viewed 3+ Destinations'
    label: 'Engagement',
  });
  console.log(`GA Event: Micro Conversion - ${actionType}`);
};

// ============================================
// HELPER: Remover datos sensibles antes de enviar
// ============================================
export const sanitizeData = (data) => {
  // Nunca enviar emails, teléfonos, o datos personales completos
  const sanitized = { ...data };
  if (sanitized.email) delete sanitized.email;
  if (sanitized.phone) delete sanitized.phone;
  if (sanitized.name) sanitized.name = 'User'; // Anonimizar
  return sanitized;
};