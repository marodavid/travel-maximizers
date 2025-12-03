const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      destinations: 'Destinos',
      faq: 'FAQ',
      // video: 'Video',
      contact: 'Contacto'
    },
    about: {
      title: 'Quiénes Somos',
      subtitle: 'La historia detrás de Travel Maximizers',
      intro: 'Somos Laura y David',
      description1: 'Personas como tú, con trabajos de 8 horas al día, que aprovechan cada minuto libre para explorar el mundo.',
      description2: 'Hemos recorrido más de 60 países, no solo como turistas, sino viviendo cada experiencia al máximo. Conocemos los trucos, los secretos y las mejores formas de sacar el mayor provecho a cada viaje.',
      description3: 'Y desde hace un año, lo hacemos como familia de tres, con nuestra bebé descubriendo el mundo a nuestro lado, demostrando que tener hijos no frena la aventura, solo la transforma.',
      description4: '¿El resultado? Una pasión desbordante por ayudar a viajeros como tú a transformar sus vacaciones limitadas en aventuras extraordinarias.',
      cta: '¿Te ayudamos a planificar tu próximo viaje?',
      stats: {
        countries: '60+',
        countriesLabel: 'Países Visitados',
        experience: '15+',
        experienceLabel: 'Años Viajando',
        trips: '200+',
        tripsLabel: 'Viajes Disfrutados'
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
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Elige la opción perfecta para maximizar tu próxima aventura',
      
      guarantee: {
        title: 'Nuestra Garantía',
        description: 'Te ahorrarás más dinero y tiempo contratándonos que haciéndolo por tu cuenta. Si no quedas satisfecho, trabajaremos hasta que lo estés.'
      },
      
      advisory: {
        name: 'Asesoría',
        badge: 'Popular',
        tagline: 'Descubre tu destino como un local',
        
        // Pricing info
        price: '40',
        currency: '€',
        priceAlt: '$45',
        period: 'por sesión',
        
        // Description (emocional - de basicServices)
        description: '¿Necesitas un experto que te guíe? Agenda una sesión 1:1 con nosotros para descubrir los secretos de tu destino y tomar las mejores decisiones. ¡Maximiza tu presupuesto y vive una aventura épica e inolvidable!',
        
        // Features para display (resumidas)
        featuresTitle: 'Lo que incluye:',
        summaryFeatures: [
          'Sesión 1:1 personalizada de 60 minutos',
          'Guía experta del destino y secretos locales',
          'Consejos prácticos para maximizar tu presupuesto',
          'Recomendaciones únicas y soporte por email'
        ],
        
        cta: 'Reservar Asesoría'
      },
      
      consulting: {
        name: 'Consultoría',
        badge: 'Más Completo',
        tagline: 'Tu viaje perfecto, de principio a fin',
        
        // Pricing info
        price: '30',
        currency: '€',
        priceAlt: '$35',
        period: 'por noche de viaje',
        highlight: 'Ejemplo: Viaje de 10 noches = 300€ / $350',
        
        // Description
        description: '¡Deja que seamos tu mejor amigo organizador de viajes! Nos encargamos de vuelos, hoteles en ubicaciones premium y diseñamos un itinerario completamente personalizado. ¡Ahorra tiempo, dinero y evita el estrés con nuestra experiencia!',
        
        // Features para display (resumidas)
        featuresTitle: 'Todo incluido:',
        summaryFeatures: [
          'Búsqueda y reserva de vuelos optimizados',
          'Hoteles premium en ubicaciones estratégicas',
          'Itinerario personalizado completo día a día',
          'Experiencias únicas y soporte durante el viaje',
          'Ahorro garantizado vs. reservar por tu cuenta'
        ],
        
        cta: 'Comenzar Consultoría'
      },
      
      ctaSection: {
        title: '¿No estás seguro de qué plan elegir?',
        description: 'Agenda una consulta gratuita de 15 minutos y te ayudaremos a encontrar la mejor opción para tu viaje',
        button: 'Consulta Gratuita'
      }
    },
    video: {
      title: 'Descubre Cómo Maximizar tus Viajes',
      description: 'Conoce nuestra metodología y cómo podemos ayudarte a crear experiencias de viaje inolvidables'
    },
    suggestedDestinations: {
      title: 'Destinos Sugeridos',
      subtitle: 'Descubre algunos de los destinos más increíbles que hemos explorado y que podemos ayudarte a vivir',
      destinations: {
        italia: {
          name: 'Italia',
          description: 'Arte renacentista, gastronomía sublime y paisajes de ensueño. Desde Roma hasta la Toscana, Italia te cautivará con su historia milenaria y su belleza incomparable.'
        },
        jordania: {
          name: 'Jordania',
          description: 'Petra, Wadi Rum y el Mar Muerto. Un viaje en el tiempo a través de desiertos rojizos y antiguas civilizaciones que te dejarán sin aliento.'
        },
        tailandia: {
          name: 'Tailandia',
          description: 'Templos dorados, playas paradisíacas y una cultura fascinante. Bangkok, las islas del sur y el norte montañoso te esperan con experiencias únicas.'
        },
        marruecos: {
          name: 'Marruecos',
          description: 'Zocos coloridos, desiertos del Sahara y ciudades imperiales. Marruecos te envuelve con sus aromas, sabores y una hospitalidad inigualable.'
        },
        colombia: {
          name: 'Colombia',
          description: 'Desde Cartagena colonial hasta el Eje Cafetero. Diversidad natural, cultura vibrante y una alegría contagiosa que te hará enamorarte del país.'
        },
        panama: {
          name: 'Panamá',
          description: 'Canal interoceánico, playas caribeñas y selva tropical. Panamá combina modernidad y naturaleza en un destino compacto y fascinante.'
        },
        peru: {
          name: 'Perú',
          description: 'Machu Picchu, Cusco imperial y gastronomía de clase mundial. Perú te sorprende con civilizaciones antiguas, biodiversidad amazónica y sabores que conquistaron el mundo.'
        },
        mexico: {
          name: 'México',
          description: 'Ruinas mayas, playas de ensueño y gastronomía reconocida mundialmente. México ofrece color, tradición y una riqueza cultural inigualable.'
        },
        brasil: {
          name: 'Brasil',
          description: 'Amazonas, Cristo Redentor y playas de Copacabana. Brasil vibra con samba, fútbol y una naturaleza exuberante que te sorprenderá.'
        },
        croacia: {
          name: 'Croacia',
          description: 'Costa dálmata, islas paradisíacas y ciudades medievales. Croacia te conquista con sus aguas cristalinas y su patrimonio histórico único.'
        },
        austria: {
          name: 'Austria',
          description: 'Viena imperial, Alpes nevados y música clásica. Austria combina elegancia europea con naturaleza alpina en un escenario de cuento.'
        },
        japon: {
          name: 'Japón',
          description: 'Templos milenarios, tecnología futurista y naturaleza exuberante. Desde Tokio hasta Kioto, Japón fusiona tradición ancestral con modernidad extrema en una experiencia que desafía los sentidos.'
        },
        oktoberfest: {
          name: 'Oktoberfest',
          description: 'La fiesta más grande del mundo en Múnich. Vive la auténtica cultura bávara, cerveza tradicional y una atmósfera festiva incomparable.'
        }
      }
    },
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      quote1: 'Travel Maximizers transformó completamente nuestra experiencia de viaje. La planificación fue perfecta y descubrimos lugares increíbles.',
      customer1: 'Laura Astorga',
      logo1: 'LA',
      role1: 'Laura Astorga',
      quote2: '¡Increíble experiencia! Travel Maximizers entendió exactamente lo que queríamos desde el primer momento. Cada detalle del viaje estuvo perfectamente pensado y lograron que nuestras vacaciones fueran totalmente relajadas y sin estrés.',
      customer2: 'Juan y Sonia',
      logo2:'J&S',
      role2: 'Juan y Sonia',
      quote3: 'Gracias a Travel Maximizers vivimos un viaje inolvidable. No solo planificaron los traslados y hoteles, sino que nos recomendaron actividades únicas que nunca habríamos encontrado por nuestra cuenta. Se nota la pasión con la que trabajan.',
      customer3: 'Adrian y Catherine',
      logo3:'A&C',
      role3: 'Adrian y Catherine',
      quote4: 'Todo fue impecable: comunicación, organización y seguimiento. Nos sentimos acompañados en cada paso y disfrutamos de experiencias auténticas en cada destino. Sin duda, volveremos a confiar en ellos para nuestro próximo viaje.',
      customer4: 'Maria Oliveras',
      logo4: 'MA',
      role4: 'Maria Oliveras',
      quote5: 'Los chicos de Travel Maximizers superaron todas nuestras expectativas. Nos diseñaron un itinerario totalmente personalizado, equilibrando descanso, aventura y cultura. Sentimos que realmente aprovecharon al máximo nuestro tiempo de vacaciones.',
      customer5: 'Luisa Abad',
      logo5: 'LA',
      role5: 'Luisa Abad',      
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Encuentra respuestas a las preguntas más comunes sobre nuestra asesoría de viajes",
      ctaText: "¿Tienes más preguntas? Estamos aquí para ayudarte",
      ctaButton: "Contáctanos",
      
      q1: "¿Qué incluye la asesoría de viajes personalizada?",
      a1: "Nuestra asesoría de viajes incluye: recomendaciones personalizadas de destinos basadas en tus intereses, itinerario detallado día a día con horarios optimizados, sugerencias de alojamiento para todos los presupuestos, reservas de actividades y excursiones únicas, consejos de seguridad y vacunación, presupuesto detallado con opciones de ahorro, documentación necesaria (visas, seguros), y soporte 24/7 durante tu viaje por WhatsApp.",
      
      q2: "¿Cuánto cuesta contratar un asesor de viajes?",
      a2: "Ofrecemos dos opciones de asesoría: Asesoría Básica desde €299/persona (ideal para viajes de 7-14 días a un destino, incluye itinerario completo y recomendaciones) y Consultoría Premium desde €699/persona (para viajes complejos multi-destino, incluye planificación integral, reservas gestionadas, y soporte personalizado ilimitado). El precio final depende de la complejidad del viaje, número de destinos, y duración.",
      
      q3: "¿Para qué destinos ofrecen asesoría de viajes?",
      a3: "Somos expertos en destinos exóticos de todo el mundo: Asia (Tailandia, Japón, Vietnam), Oriente Medio (Jordania, Emiratos Árabes), América Latina (Colombia, Panamá, México, Brasil, Argentina), Europa (Italia, Croacia, Austria, Alemania), y África (Marruecos, Kenia). También diseñamos experiencias únicas como Oktoberfest en Munich, safaris africanos, y rutas de senderismo en Patagonia. Con más de 50 países visitados, adaptamos cada viaje a tus intereses.",
      
      q4: "¿Cuánto tiempo antes debo contratar la asesoría?",
      a4: "Recomendamos contratar la asesoría entre 2-4 meses antes de tu viaje para destinos internacionales. Esto permite: conseguir mejores precios en vuelos y alojamientos, gestionar visas y documentación necesaria, reservar actividades populares que se agotan rápido, planificar rutas detalladas sin prisas, y ajustar el presupuesto. Para destinos complejos (como Japón o Jordania) o viajes en temporada alta, lo ideal es 4-6 meses de anticipación.",
      
      q5: "¿La asesoría incluye las reservas de vuelos y hoteles?",
      a5: "Depende del paquete: En la Asesoría Básica, te proporcionamos todas las recomendaciones detalladas (mejores hoteles según tu presupuesto, opciones de vuelos, actividades imprescindibles) pero tú haces las reservas. En la Consultoría Premium, gestionamos todas las reservas por ti: vuelos, alojamientos, actividades, traslados, y seguros de viaje. También monitoreamos cambios de precios y disponibilidad.",
      
      q6: "¿Qué diferencia hay entre un asesor de viajes y una agencia tradicional?",
      a6: "Un asesor de viajes personalizado como Travel Maximizers ofrece: atención 100% personalizada (no paquetes genéricos), experiencias auténticas basadas en nuestra experiencia real en cada destino, itinerarios flexibles adaptados a tu ritmo y preferencias, recomendaciones honestas sin comisiones ocultas, soporte directo de viajeros expertos (no vendedores), y optimización de presupuesto (te ayudamos a ahorrar y maximizar experiencias). Las agencias tradicionales venden paquetes estándar con márgenes altos.",
      
      q7: "¿Puedo modificar el itinerario después de contratado?",
      a7: "¡Absolutamente! La asesoría incluye: 1 revisión completa del itinerario sin costo adicional, ajustes ilimitados durante la fase de planificación (antes del viaje), y modificaciones sobre la marcha durante tu viaje con soporte 24/7. Entendemos que los viajes son dinámicos y tus preferencias pueden cambiar. Nuestro objetivo es que tengas la mejor experiencia posible.",
      
      q8: "¿Cómo funciona el proceso de asesoría de viajes?",
      a8: "El proceso es simple: 1) Completas nuestro formulario con tus preferencias de viaje (destino deseado, presupuesto, intereses, fechas), 2) Programamos una videollamada inicial de 30-45 minutos para conocerte mejor, 3) Te enviamos una propuesta de itinerario en 3-5 días con todas las recomendaciones, 4) Hacemos ajustes hasta que esté perfecto, 5) Recibes tu guía de viaje completa con todos los detalles, y 6) Te damos soporte durante todo tu viaje por WhatsApp."
    },
    cta: {
      title: '¿Listo para maximizar tu próximo viaje?',
      description: 'Agenda una consulta gratuita y descubre cómo podemos transformar tu experiencia de viaje',
      button: 'Consulta Gratuita'
    },
    form: {
      title: 'Solicita tu Consulta Gratuita',
      subtitle: 'Cuéntanos sobre el viaje de tus sueños y te ayudaremos a hacerlo realidad',
      name: 'Nombre completo',
      namePlaceholder: 'Tu nombre', 
      email: 'Correo electrónico',
      emailPlaceholder: 'tu@email.com',
      whatsapp: 'WhatsApp (opcional)',
      whatsappPlaceholder: '+34 600 000 000',
      dream: 'Cuéntanos sobre tu viaje soñado',
      dreamPlaceholder: 'Destino deseado, fechas aproximadas, tipo de experiencias que buscas, presupuesto estimado...',
      submit: 'Enviar Solicitud',
      submitting: 'Enviando...',
      successMessage: '¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.',
      close: 'Cerrar'
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
      destinations: 'Destinations',
      faq: 'FAQ',
      // video: 'Video',
      // contact: 'Contact'
    },
    about: {
      title: 'About Us',
      subtitle: 'The story behind Travel Maximizers',
      intro: 'We are Laura and David',
      description1: 'People just like you, with 8-hour workdays, who make the most of every free moment to explore the world.',
      description2: 'We\'ve traveled to over 60 countries, not just as tourists, but truly living each experience to the fullest. We know the tricks, secrets, and best ways to maximize every journey.',
      description3: 'And for the past year, we\'ve been traveling as a family of three, with our baby discovering the world alongside us, proving that having children doesn\'t end the adventure—it simply transforms it.',
      description4: 'The result? An overflowing passion to help travelers like you transform your limited vacation time into extraordinary adventures.',
      cta: 'Shall we help you plan your next trip?',
      stats: {
        countries: '60+',
        countriesLabel: 'Countries Visited',
        experience: '15+',
        experienceLabel: 'Years Traveling',
        trips: '200+',
        tripsLabel: 'Enjoyed Trips'
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
    services: {
      title: 'Our Services',
      subtitle: 'Choose the perfect option to maximize your next adventure',
      
      guarantee: {
        title: 'Our Guarantee',
        description: "You'll save more money and time by hiring us than doing it yourself. If you're not satisfied, we'll work until you are."
      },
      
      advisory: {
        name: 'Advisory',
        badge: 'Popular',
        tagline: 'Discover your destination like a local',
        
        // Pricing info
        price: '45',
        currency: '$',
        priceAlt: '€40',
        period: 'per session',
        
        // Description (emotional - from basicServices)
        description: 'Need an expert to guide you? Book a 1:1 session with us to uncover your destination secrets and make the smartest decisions. Maximize your budget and live an epic, unforgettable adventure!',
        
        // Features for display (summarized)
        featuresTitle: 'What\'s included:',
        summaryFeatures: [
          'Personalized 1:1 session of 60 minutes',
          'Expert destination guide and local secrets',
          'Practical tips to maximize your budget',
          'Unique recommendations and email support'
        ],
        
        cta: 'Book Advisory'
      },
      
      consulting: {
        name: 'Consulting',
        badge: 'Most Complete',
        tagline: 'Your perfect trip, from start to finish',
        
        // Pricing info
        price: '35',
        currency: '$',
        priceAlt: '€30',
        period: 'per travel night',
        highlight: 'Example: 10-night trip = $350 / 300€',
        
        // Description (emotional - from basicServices)
        description: 'Let us be your ultimate travel organizer! We handle flights, hotels in premium locations, and design a completely personalized itinerary. Save time, money, and skip the stress with our expertise!',
        
        // Features for display (summarized)
        featuresTitle: 'All included:',
        summaryFeatures: [
          'Search and booking of optimized flights',
          'Premium hotels in strategic locations',
          'Complete personalized day-by-day itinerary',
          'Unique experiences and support during your trip',
          'Guaranteed savings vs. booking on your own'
        ],
        
        cta: 'Start Consulting'
      },
      
      ctaSection: {
        title: 'Not sure which plan to choose?',
        description: "Schedule a free 15-minute consultation and we'll help you find the best option for your trip",
        button: 'Free Consultation'
      }
    },
    video: {
      title: 'Discover How to Maximize Your Travels',
      description: 'Learn about our methodology and how we can help you create unforgettable travel experiences'
    },
    suggestedDestinations: {
      title: 'Suggested Destinations',
      subtitle: 'Discover some of the most incredible places we’ve explored and can help you experience',
      destinations: {
        italia: {
          name: 'Italy',
          description: 'Renaissance art, exquisite cuisine, and dreamlike landscapes. From Rome to Tuscany, Italy will captivate you with its ancient history and unmatched beauty.'
        },
        jordania: {
          name: 'Jordan',
          description: 'Petra, Wadi Rum, and the Dead Sea. A journey through time across red deserts and ancient civilizations that will take your breath away.'
        },
        tailandia: {
          name: 'Thailand',
          description: 'Golden temples, paradise beaches, and a fascinating culture. Bangkok, the southern islands, and the mountainous north await with unique experiences.'
        },
        marruecos: {
          name: 'Morocco',
          description: 'Colorful souks, Sahara deserts, and imperial cities. Morocco envelops you with its aromas, flavors, and unmatched hospitality.'
        },
        colombia: {
          name: 'Colombia',
          description: 'From colonial Cartagena to the Coffee Region. Natural diversity, vibrant culture, and contagious joy that will make you fall in love with the country.'
        },
        panama: {
          name: 'Panama',
          description: 'Interoceanic canal, Caribbean beaches, and tropical rainforest. Panama blends modernity and nature in a compact and fascinating destination.'
        },
        peru: {
          name: 'Peru',
          description: 'Machu Picchu, imperial Cusco and world-class gastronomy. Peru surprises you with ancient civilizations, Amazonian biodiversity and flavors that conquered the world.'
        },
        mexico: {
          name: 'Mexico',
          description: 'Mayan ruins, dream beaches, and world-famous cuisine. Mexico offers color, tradition, and unmatched cultural richness.'
        },
        brasil: {
          name: 'Brazil',
          description: 'Amazon rainforest, Christ the Redeemer, and Copacabana beaches. Brazil vibrates with samba, football, and exuberant nature that will amaze you.'
        },
        croacia: {
          name: 'Croatia',
          description: 'Dalmatian coast, paradise islands, and medieval cities. Croatia will win you over with its crystal-clear waters and unique historical heritage.'
        },
        austria: {
          name: 'Austria',
          description: 'Imperial Vienna, snowy Alps, and classical music. Austria combines European elegance with alpine nature in a fairytale setting.'
        },
        japon: {
          name: 'Japan',
          description: 'Ancient temples, futuristic technology and lush nature. From Tokyo to Kyoto, Japan merges ancestral tradition with extreme modernity in an experience that challenges the senses.'
        },
        oktoberfest: {
          name: 'Oktoberfest',
          description: 'The world’s largest festival in Munich. Experience authentic Bavarian culture, traditional beer, and an incomparable festive atmosphere.'
        }
      }
    },
    testimonials: {
      title: 'What our clients say',
      quote1: 'Travel Maximizers completely transformed our travel experience. The planning was perfect and we discovered incredible places.',
      customer1: 'Laura Astorga',
      role1: 'Young couple',
      quote2: 'Incredible experience! Travel Maximizers understood exactly what we wanted from the very beginning. Every detail of the trip was perfectly planned, and they made our vacation completely relaxing and stress-free.',
      customer2: 'John and Sonia',
      role2: 'John and Sonia',
      quote3: 'Thanks to Travel Maximizers we had an unforgettable trip. They not only arranged our transfers and hotels, but also recommended unique activities we would never have found on our own. You can really feel the passion in their work.',
      customer3: 'Adrian and Catherine',
      role3: 'Adrian and Catherine',
      quote4: 'Everything was flawless: communication, organization, and follow-up. We felt supported every step of the way and enjoyed authentic experiences in every destination. We’ll definitely trust them again for our next trip.',
      customer4: 'Maria Oliveras',
      role4: 'Maria Oliveras',
      quote5: 'The team at Travel Maximizers exceeded all our expectations. They created a fully customized itinerary, balancing relaxation, adventure, and culture. We truly felt that our vacation time was maximized to the fullest.',
      customer5: 'Luisa Abad',
      role5: 'Luisa Abad',
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to the most common questions about our travel advisory services",
      ctaText: "Have more questions? We're here to help you",
      ctaButton: "Contact Us",
      
      q1: "What does personalized travel advisory include?",
      a1: "Our travel advisory includes: personalized destination recommendations based on your interests, detailed day-by-day itinerary with optimized schedules, accommodation suggestions for all budgets, bookings for unique activities and excursions, safety and vaccination advice, detailed budget with money-saving options, necessary documentation (visas, insurance), and 24/7 WhatsApp support during your trip.",
      
      q2: "How much does it cost to hire a travel advisor?",
      a2: "We offer two advisory options: Basic Advisory from €299/person (ideal for 7-14 day trips to one destination, includes complete itinerary and recommendations) and Premium Consulting from €699/person (for complex multi-destination trips, includes comprehensive planning, managed bookings, and unlimited personalized support). Final price depends on trip complexity, number of destinations, and duration.",
      
      q3: "Which destinations do you provide travel advisory for?",
      a3: "We are experts in exotic destinations worldwide: Asia (Thailand, Japan, Vietnam), Middle East (Jordan, United Arab Emirates), Latin America (Colombia, Panama, Mexico, Brazil, Argentina), Europe (Italy, Croatia, Austria, Germany), and Africa (Morocco, Kenya). We also design unique experiences like Oktoberfest in Munich, African safaris, and Patagonia trekking routes. With over 50 countries visited, we adapt each trip to your interests.",
      
      q4: "How far in advance should I hire the advisory service?",
      a4: "We recommend hiring advisory services 2-4 months before your trip for international destinations. This allows: getting better prices on flights and accommodations, managing visas and necessary documentation, booking popular activities that sell out quickly, planning detailed routes without rushing, and adjusting the budget. For complex destinations (like Japan or Jordan) or peak season travel, 4-6 months advance notice is ideal.",
      
      q5: "Does the advisory include flight and hotel bookings?",
      a5: "It depends on the package: In Basic Advisory, we provide all detailed recommendations (best hotels according to your budget, flight options, must-do activities) but you make the bookings yourself. In Premium Consulting, we manage all bookings for you: flights, accommodations, activities, transfers, and travel insurance. We also monitor price changes and availability.",
      
      q6: "What's the difference between a travel advisor and a traditional agency?",
      a6: "A personalized travel advisor like Travel Maximizers offers: 100% personalized attention (no generic packages), authentic experiences based on our real experience in each destination, flexible itineraries adapted to your pace and preferences, honest recommendations without hidden commissions, direct support from expert travelers (not salespeople), and budget optimization (we help you save and maximize experiences). Traditional agencies sell standard packages with high margins.",
      
      q7: "Can I modify the itinerary after booking?",
      a7: "Absolutely! The advisory includes: 1 complete itinerary revision at no additional cost, unlimited adjustments during the planning phase (before the trip), and on-the-go modifications during your trip with 24/7 support. We understand that travel is dynamic and your preferences may change. Our goal is for you to have the best possible experience.",
      
      q8: "How does the travel advisory process work?",
      a8: "The process is simple: 1) You complete our form with your travel preferences (desired destination, budget, interests, dates), 2) We schedule an initial 30-45 minute video call to get to know you better, 3) We send you an itinerary proposal within 3-5 days with all recommendations, 4) We make adjustments until it's perfect, 5) You receive your complete travel guide with all details, and 6) We provide support throughout your entire trip via WhatsApp."
    },
    cta: {
      title: 'Ready to maximize your next trip?',
      description: 'Schedule a free consultation and discover how we can transform your travel experience',
      button: 'Free Consultation'
    },
    form: {
      title: 'Request Your Free Consultation',
      subtitle: 'Tell us about your dream trip and we\'ll help you make it a reality',
      name: 'Full name',
      namePlaceholder: 'Your name',
      email: 'Email address',
      emailPlaceholder: 'your@email.com',
      whatsapp: 'WhatsApp (optional)',
      whatsappPlaceholder: '+1 234 567 8900',
      dream: 'Tell us about your dream trip',
      dreamPlaceholder: 'Desired destination, approximate dates, type of experiences you\'re looking for, estimated budget...',
      submit: 'Submit Request',
      submitting: 'Sending...',
      successMessage: 'Thank you! We\'ve received your request. We\'ll contact you soon.',
      close: 'Close'
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
      destinations: 'Reiseziele',
      faq: 'FAQ',
      // video: 'Video',
      // contact: 'Kontakt'
    },
    about: {
      title: 'Über Uns',
      subtitle: 'Die Geschichte hinter Travel Maximizers',
      intro: 'Wir sind Laura und David',
      description1: 'Menschen wie Sie, mit 8-Stunden-Arbeitstagen, die jede freie Minute nutzen, um die Welt zu erkunden.',
      description2: 'Wir haben über 60 Länder bereist, nicht nur als Touristen, sondern jede Erfahrung in vollen Zügen gelebt. Wir kennen die Tricks, Geheimnisse und besten Wege, jede Reise zu maximieren.',
      description3: 'Und seit einem Jahr machen wir das zu dritt, mit unserem Baby an unserer Seite, das die Welt entdeckt, und beweisen damit, dass Kinder zu haben das Abenteuer nicht stoppt, sondern es nur verwandelt.',
      description4: 'Das Ergebnis? Eine überwältigende Leidenschaft, Reisenden wie Ihnen zu helfen, ihre begrenzte Urlaubszeit in außergewöhnliche Abenteuer zu verwandeln.',
      cta: 'Sollen wir Ihnen bei der Planung Ihrer nächsten Reise helfen?',
      stats: {
        countries: '60+',
        countriesLabel: 'Besuchte Länder',
        experience: '15+',
        experienceLabel: 'Jahre Reisen',
        trips: '200+',
        tripsLabel: 'Schöne Reisen'
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
    services: {
      title: 'Unsere Dienstleistungen',
      subtitle: 'Wähle die perfekte Option, um dein nächstes Abenteuer zu maximieren',
      
      guarantee: {
        title: 'Unsere Garantie',
        description: 'Du sparst mehr Geld und Zeit, wenn du uns beauftragst, als wenn du alles selbst machst. Wenn du nicht zufrieden bist, arbeiten wir weiter, bis du es bist.'
      },
      
      advisory: {
        name: 'Beratung',
        badge: 'Beliebt',
        tagline: 'Entdecke dein Reiseziel wie ein Einheimischer',
        
        // Pricing info
        price: '49',
        currency: '$',
        priceAlt: '€45',
        period: 'pro Sitzung',
        
        // Description (emotional - from basicServices)
        description: 'Brauchst du einen Experten, der dich führt? Buche eine 1:1-Sitzung mit uns, um die Geheimnisse deines Reiseziels zu entdecken und die klügsten Entscheidungen zu treffen. Maximiere dein Budget und erlebe ein episches, unvergessliches Abenteuer!',
        
        // Features for display (summarized)
        featuresTitle: 'Enthalten ist:',
        summaryFeatures: [
          'Personalisierte 1:1-Sitzung von 60 Minuten',
          'Expertenwissen über das Reiseziel und lokale Geheimtipps',
          'Praktische Tipps zur Maximierung deines Budgets',
          'Einzigartige Empfehlungen und E-Mail-Support'
        ],
        
        cta: 'Beratung buchen'
      },
      
      consulting: {
        name: 'Reiseplanung',
        badge: 'Am vollständigsten',
        tagline: 'Deine perfekte Reise – von Anfang bis Ende',
        
        // Pricing info
        price: '35',
        currency: '$',
        priceAlt: '€30',
        period: 'pro Reisennacht',
        highlight: 'Beispiel: 10-Nächte-Reise = $350 / 300€',
        
        // Description (emotional - from basicServices)
        description: 'Lass uns dein ultimativer Reiseorganisator sein! Wir kümmern uns um Flüge, Hotels in Premium-Lagen und erstellen einen vollständig personalisierten Reiseplan. Spare Zeit, Geld und vermeide Stress dank unserer Expertise!',
        
        // Features for display (summarized)
        featuresTitle: 'Alles inklusive:',
        summaryFeatures: [
          'Suche und Buchung optimierter Flüge',
          'Premium-Hotels in strategischen Lagen',
          'Vollständig personalisierter Tagesplan',
          'Einzigartige Erlebnisse und Unterstützung während der Reise',
          'Garantierte Ersparnis gegenüber einer eigenen Buchung'
        ],
        
        cta: 'Reiseplanung starten'
      },
      
      ctaSection: {
        title: 'Nicht sicher, welchen Plan du wählen sollst?',
        description: 'Vereinbare eine kostenlose 15-minütige Beratung und wir helfen dir, die beste Option für deine Reise zu finden',
        button: 'Kostenlose Beratung'
      }
    },
    video: {
      title: 'Entdecken Sie, wie Sie Ihre Reisen maximieren',
      description: 'Lernen Sie unsere Methodik kennen und wie wir Ihnen helfen können, unvergessliche Reiseerlebnisse zu schaffen'
    },
    suggestedDestinations: {
      title: 'Empfohlene Reiseziele',
      subtitle: 'Entdecke die unglaublichsten Orte, die wir bereist haben und die du mit uns erleben kannst',
      destinations: {
        italia: {
          name: 'Italien',
          description: 'Renaissancekunst, hervorragende Küche und traumhafte Landschaften. Von Rom bis in die Toskana – Italien begeistert mit seiner jahrtausendealten Geschichte und unvergleichlicher Schönheit.'
        },
        jordania: {
          name: 'Jordanien',
          description: 'Petra, Wadi Rum und das Tote Meer. Eine Reise durch die Zeit über rote Wüsten und alte Zivilisationen, die dich sprachlos machen wird.'
        },
        tailandia: {
          name: 'Thailand',
          description: 'Goldene Tempel, paradiesische Strände und eine faszinierende Kultur. Bangkok, die südlichen Inseln und das bergige Nordthailand erwarten dich mit einzigartigen Erlebnissen.'
        },
        marruecos: {
          name: 'Marokko',
          description: 'Bunte Souks, die Sahara und königliche Städte. Marokko verzaubert mit seinen Düften, Geschmäckern und seiner unvergleichlichen Gastfreundschaft.'
        },
        colombia: {
          name: 'Kolumbien',
          description: 'Von der kolonialen Stadt Cartagena bis zur Kaffeeregion. Natürliche Vielfalt, lebendige Kultur und ansteckende Lebensfreude werden dich in das Land verlieben lassen.'
        },
        panama: {
          name: 'Panama',
          description: 'Interozeanischer Kanal, karibische Strände und tropischer Regenwald. Panama vereint Modernität und Natur in einem kompakten, faszinierenden Reiseziel.'
        },
        peru: {
          name: 'Peru',
          description: 'Machu Picchu, imperiales Cusco und Weltklasse-Gastronomie. Peru überrascht Sie mit alten Zivilisationen, amazonischer Artenvielfalt und Aromen, die die Welt eroberten.'
        },
        mexico: {
          name: 'Mexiko',
          description: 'Maya-Ruinen, traumhafte Strände und weltweit berühmte Küche. Mexiko bietet Farbe, Tradition und einen unvergleichlichen kulturellen Reichtum.'
        },
        brasil: {
          name: 'Brasilien',
          description: 'Amazonas, Christusstatue und Copacabana-Strände. Brasilien pulsiert mit Samba, Fußball und einer üppigen Natur, die dich überraschen wird.'
        },
        croacia: {
          name: 'Kroatien',
          description: 'Dalmatinische Küste, paradiesische Inseln und mittelalterliche Städte. Kroatien begeistert mit kristallklarem Wasser und einzigartigem historischen Erbe.'
        },
        austria: {
          name: 'Österreich',
          description: 'Kaiserliches Wien, verschneite Alpen und klassische Musik. Österreich vereint europäische Eleganz mit alpiner Natur in einer märchenhaften Kulisse.'
        },
        japon: {
          name: 'Japan',
          description: 'Jahrtausendealte Tempel, futuristische Technologie und üppige Natur. Von Tokio bis Kyoto vereint Japan uralte Tradition mit extremer Moderne in einem Erlebnis, das die Sinne herausfordert.'
        },
        oktoberfest: {
          name: 'Oktoberfest',
          description: 'Das größte Volksfest der Welt in München. Erlebe echte bayerische Kultur, traditionelles Bier und eine unvergleichliche Feststimmung.'
        }
      }
    },
    testimonials: {
      title: 'Was unsere Kunden sagen',
      quote1: 'Travel Maximizers hat unser Reiseerlebnis komplett transformiert. Die Planung war perfekt und wir haben unglaubliche Orte entdeckt.',
      customer1: 'Laura Astorga',
      role1: 'Pareja joven',
      quote2: 'Unglaubliche Erfahrung! Travel Maximizers hat von Anfang an genau verstanden, was wir wollten. Jedes Detail der Reise war perfekt geplant, und unser Urlaub war völlig entspannt und stressfrei.',
      role2: 'John nd Sonia',
      customer2: 'John nd Sonia',
      quote3: 'Dank Travel Maximizers hatten wir eine unvergessliche Reise. Sie organisierten nicht nur Transfers und Hotels, sondern empfahlen auch einzigartige Aktivitäten, die wir selbst nie gefunden hätten. Man spürt wirklich die Leidenschaft in ihrer Arbeit.',
      customer3: 'Adrian und Catherine',
      role3: 'Adrian und Catherine',
      quote4: 'Alles war tadellos: Kommunikation, Organisation und Betreuung. Wir fühlten uns in jeder Phase gut begleitet und erlebten authentische Erfahrungen an jedem Reiseziel. Wir werden ihnen auf jeden Fall auch beim nächsten Mal vertrauen.',
      customer4: 'Maria Oliveras',
      role4: 'Maria Oliveras',
      quote5: 'Das Team von Travel Maximizers hat all unsere Erwartungen übertroffen. Sie stellten eine vollständig personalisierte Reiseroute zusammen, die Entspannung, Abenteuer und Kultur perfekt ausbalancierte. Wir hatten das Gefühl, dass unsere Urlaubszeit wirklich optimal genutzt wurde.',
      customer5: 'Luisa Abad',
      role5: 'Luisa Abad',
    },
    faq: {
      title: "Häufig gestellte Fragen",
      subtitle: "Finden Sie Antworten auf die häufigsten Fragen zu unseren Reiseberatungsdiensten",
      ctaText: "Haben Sie weitere Fragen? Wir sind hier, um Ihnen zu helfen",
      ctaButton: "Kontaktieren Sie uns",
      
      q1: "Was beinhaltet die personalisierte Reiseberatung?",
      a1: "Unsere Reiseberatung umfasst: personalisierte Zielempfehlungen basierend auf Ihren Interessen, detaillierte Tagesreiseroute mit optimierten Zeitplänen, Unterkunftsvorschläge für alle Budgets, Buchungen für einzigartige Aktivitäten und Ausflüge, Sicherheits- und Impfberatung, detailliertes Budget mit Sparoptionen, notwendige Dokumentation (Visa, Versicherungen), und 24/7 WhatsApp-Support während Ihrer Reise.",
      
      q2: "Wie viel kostet es, einen Reiseberater zu beauftragen?",
      a2: "Wir bieten zwei Beratungsoptionen an: Basisberatung ab 299€/Person (ideal für 7-14-tägige Reisen zu einem Ziel, beinhaltet vollständige Reiseroute und Empfehlungen) und Premium-Beratung ab 699€/Person (für komplexe Mehrzielsreisen, beinhaltet umfassende Planung, verwaltete Buchungen und unbegrenzte personalisierte Unterstützung). Der Endpreis hängt von der Komplexität der Reise, Anzahl der Ziele und Dauer ab.",
      
      q3: "Für welche Reiseziele bieten Sie Beratung an?",
      a3: "Wir sind Experten für exotische Reiseziele weltweit: Asien (Thailand, Japan, Vietnam), Naher Osten (Jordanien, Vereinigte Arabische Emirate), Lateinamerika (Kolumbien, Panama, Mexiko, Brasilien, Argentinien), Europa (Italien, Kroatien, Österreich, Deutschland) und Afrika (Marokko, Kenia). Wir gestalten auch einzigartige Erlebnisse wie Oktoberfest in München, afrikanische Safaris und Trekkingtouren in Patagonien. Mit über 50 besuchten Ländern passen wir jede Reise an Ihre Interessen an.",
      
      q4: "Wie weit im Voraus sollte ich die Beratung buchen?",
      a4: "Wir empfehlen, die Beratung 2-4 Monate vor Ihrer Reise für internationale Ziele zu buchen. Dies ermöglicht: bessere Preise für Flüge und Unterkünfte zu erhalten, Visa und notwendige Dokumentation zu verwalten, beliebte Aktivitäten zu buchen, die schnell ausverkauft sind, detaillierte Routen ohne Eile zu planen und das Budget anzupassen. Für komplexe Ziele (wie Japan oder Jordanien) oder Reisen in der Hochsaison sind 4-6 Monate Vorlauf ideal.",
      
      q5: "Beinhaltet die Beratung Flug- und Hotelbuchungen?",
      a5: "Es hängt vom Paket ab: Bei der Basisberatung geben wir Ihnen alle detaillierten Empfehlungen (beste Hotels nach Ihrem Budget, Flugoptionen, Must-Do-Aktivitäten), aber Sie nehmen die Buchungen selbst vor. Bei der Premium-Beratung verwalten wir alle Buchungen für Sie: Flüge, Unterkünfte, Aktivitäten, Transfers und Reiseversicherung. Wir überwachen auch Preisänderungen und Verfügbarkeit.",
      
      q6: "Was ist der Unterschied zwischen einem Reiseberater und einer traditionellen Agentur?",
      a6: "Ein personalisierter Reiseberater wie Travel Maximizers bietet: 100% personalisierte Betreuung (keine generischen Pakete), authentische Erlebnisse basierend auf unserer echten Erfahrung an jedem Ziel, flexible Reiserouten angepasst an Ihr Tempo und Ihre Vorlieben, ehrliche Empfehlungen ohne versteckte Provisionen, direkte Unterstützung von erfahrenen Reisenden (keine Verkäufer) und Budgetoptimierung (wir helfen Ihnen zu sparen und Erlebnisse zu maximieren). Traditionelle Agenturen verkaufen Standardpakete mit hohen Margen.",
      
      q7: "Kann ich die Reiseroute nach der Buchung ändern?",
      a7: "Absolut! Die Beratung beinhaltet: 1 vollständige Reiseroutenüberarbeitung ohne zusätzliche Kosten, unbegrenzte Anpassungen während der Planungsphase (vor der Reise) und spontane Änderungen während Ihrer Reise mit 24/7-Support. Wir verstehen, dass Reisen dynamisch sind und sich Ihre Vorlieben ändern können. Unser Ziel ist, dass Sie die bestmögliche Erfahrung haben.",
      
      q8: "Wie funktioniert der Reiseberatungsprozess?",
      a8: "Der Prozess ist einfach: 1) Sie füllen unser Formular mit Ihren Reisepräferenzen aus (gewünschtes Ziel, Budget, Interessen, Termine), 2) Wir planen ein erstes 30-45-minütiges Videogespräch, um Sie besser kennenzulernen, 3) Wir senden Ihnen innerhalb von 3-5 Tagen einen Reiseroutenvorschlag mit allen Empfehlungen, 4) Wir nehmen Anpassungen vor, bis es perfekt ist, 5) Sie erhalten Ihren vollständigen Reiseführer mit allen Details, und 6) Wir geben Ihnen während Ihrer gesamten Reise Support via WhatsApp."
    },
    cta: {
      title: 'Bereit, Ihre nächste Reise zu maximieren?',
      description: 'Vereinbaren Sie eine kostenlose Beratung und entdecken Sie, wie wir Ihr Reiseerlebnis transformieren können',
      button: 'Kostenlose Beratung'
    },
    form: {
      title: 'Fordern Sie Ihre Kostenlose Beratung An',
      subtitle: 'Erzählen Sie uns von Ihrer Traumreise und wir helfen Ihnen, sie Wirklichkeit werden zu lassen',
      name: 'Vollständiger Name',
      namePlaceholder: 'Ihr Name',
      email: 'E-Mail-Adresse',
      emailPlaceholder: 'ihre@email.de',
      whatsapp: 'WhatsApp (optional)',
      whatsappPlaceholder: '+49 123 456 7890',
      dream: 'Erzählen Sie uns von Ihrer Traumreise',
      dreamPlaceholder: 'Gewünschtes Reiseziel, ungefähre Daten, Art der Erlebnisse, die Sie suchen, geschätztes Budget...',
      submit: 'Anfrage Senden',
      submitting: 'Wird gesendet...',
      successMessage: 'Vielen Dank! Wir haben Ihre Anfrage erhalten. Wir werden Sie bald kontaktieren.',
      close: 'Schließen'
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

export default translations;