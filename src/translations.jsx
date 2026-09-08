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
      title1: 'Tu viaje a medida,',
      title2: 'sin horas de búsqueda ni estrés',
      tagline: 'Para parejas y familias ocupadas que quieren aprovechar cada día de sus vacaciones',
      description: 'Diseñamos tu itinerario completo —vuelos, hoteles, traslados y experiencias— adaptado a tu tiempo, presupuesto y forma de viajar.',
      cta1: 'Solicita una llamada gratuita',
      cta2: 'Ver cómo funciona',
      trustSignals: ['60+ países visitados', '15 años viajando', 'Recomendaciones independientes', 'Soporte durante el viaje']
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
      consultButton: 'Consultar este destino',
      customButton: 'Cuéntanos tu plan',
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
        },
        mundo: {
          name: 'Elige tu destino',
          description: '¿Tienes un lugar en mente que no está aquí? Cuéntanos tu plan y nosotros nos encargamos de maximizar tu viaje en cualquier rincón del mundo.'
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
      logo2: 'J&S',
      role2: 'Juan y Sonia',
      quote3: 'Gracias a Travel Maximizers vivimos un viaje inolvidable. No solo planificaron los traslados y hoteles, sino que nos recomendaron actividades únicas que nunca habríamos encontrado por nuestra cuenta. Se nota la pasión con la que trabajan.',
      customer3: 'Adrian y Catherine',
      logo3: 'A&C',
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
      a1: "Nuestra asesoría de viajes personalizada incluye: recomendaciones expertas de destinos, itinerarios detallados día a día, selección de alojamientos con encanto, reserva de actividades únicas y soporte 24/7. Maximizamos tu tiempo y presupuesto para que vivas una experiencia auténtica y sin complicaciones.",

      q2: "¿Cuánto cuesta contratar un asesor de viajes?",
      a2: "Ofrecemos planes flexibles de consultoría de viajes: Asesoría de sesión única por €40/sesión y Consultoría integral desde €30/noche. Ahorrarás más en mejores hoteles y vuelos optimizados de lo que cuesta nuestra asesoría. Invertir en un experto es la mejor forma de garantizar el éxito de tu viaje.",

      q3: "¿Para qué destinos ofrecen asesoría de viajes?",
      a3: "Somos especialistas en destinos exóticos como Tailandia, Jordania, Japón, Marruecos, Colombia y el Sudeste Asiático. Con más de 60 países visitados, diseñamos itinerarios personalizados para cualquier rincón del mundo, adaptándonos a tus gustos y presupuesto.",

      q4: "¿Cuánto tiempo antes debo contratar la asesoría?",
      a4: "Recomendamos contactarnos con 2 a 6 meses de antelación. Esto nos permite asegurar disponibilidad en los mejores alojamientos premium y encontrar las tarifas aéreas más económicas para tu viaje personalizado.",

      q5: "¿La asesoría incluye las reservas de vuelos y hoteles?",
      a5: "En nuestra modalidad de Consultoría, nos encargamos de todo: búsqueda y reserva de vuelos optimizados, hoteles en ubicaciones estratégicas y actividades. Tú solo tienes que preocuparte de disfrutar. En la modalidad de Asesoría, te damos las mejores recomendaciones y tú realizas las reservas siguiendo nuestra guía experta.",

      q6: "¿Qué diferencia hay entre un asesor de viajes y una agencia tradicional?",
      a6: "A diferencia de las agencias tradicionales que venden paquetes cerrados, Travel Maximizers ofrece una planificación de viajes 100% a medida. No tenemos acuerdos con hoteles específicos, lo que nos permite recomendarte siempre lo mejor para TI. Somos viajeros expertos ayudando a otros viajeros.",

      q7: "¿Puedo modificar el itinerario después de contratado?",
      a7: "¡Claro! Tu viaje es tuyo. Durante la fase de planificación, ajustamos el itinerario tantas veces como sea necesario hasta que sea perfecto. Nuestro objetivo es que cada día de tus vacaciones sea exactamente como lo soñaste.",

      q8: "¿Cómo funciona el proceso de asesoría de viajes?",
      a8: "Es muy sencillo: 1) Solicitas una consulta gratuita inicial. 2) Analizamos tus gustos y presupuesto. 3) Diseñamos tu itinerario personalizado. 4) Te entregamos una guía detallada con todo lo necesario para maximizar tu experiencia."
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
      title1: 'Your tailor-made trip,',
      title2: 'without hours of research or stress',
      tagline: 'For busy couples and families who want to make every vacation day count',
      description: 'We design your complete itinerary —flights, hotels, transfers and experiences— around your time, budget and travel style.',
      cta1: 'Request a free call',
      cta2: 'See how it works',
      trustSignals: ['60+ countries visited', '15 years of travel', 'Independent recommendations', 'Support during your trip']
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
      consultButton: 'Consult this destination',
      customButton: 'Tell us your plan',
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
        },
        mundo: {
          name: 'Choose Your Destination',
          description: 'Have a place in mind that is not listed here? Tell us your plan, and we will take care of maximizing your experience in any corner of the world.'
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
      a1: "Our personalized travel advisory includes: expert destination recommendations, detailed day-by-day itineraries, selection of charming accommodations, booking of unique activities, and 24/7 support. We maximize your time and budget so you can enjoy an authentic and hassle-free experience.",

      q2: "How much does it cost to hire a travel advisor?",
      a2: "We offer flexible travel consulting plans: Single session advisory for €40/session and Comprehensive consulting starting from €30/night. You will save more on better hotels and optimized flights than the cost of our advisory. Investing in an expert is the best way to guarantee the success of your trip.",

      q3: "Which destinations do you provide travel advisory for?",
      a3: "We specialize in exotic destinations such as Thailand, Jordan, Japan, Morocco, Colombia, and Southeast Asia. With over 60 countries visited, we design personalized itineraries for any corner of the world, adapting to your tastes and budget.",

      q4: "How far in advance should I hire the advisory service?",
      a4: "We recommend contacting us 2 to 6 months in advance. This allows us to ensure availability in the best premium accommodations and find the most economical airfares for your personalized trip.",

      q5: "Does the advisory include flight and hotel bookings?",
      a5: "In our Consulting mode, we take care of everything: searching and booking optimized flights, hotels in strategic locations, and activities. You only need to worry about enjoying your trip. In the Advisory mode, we give you the best recommendations and you handle the bookings following our expert guide.",

      q6: "What's the difference between a travel advisor and a traditional agency?",
      a6: "Unlike traditional agencies that sell fixed packages, Travel Maximizers offers 100% tailor-made travel planning. We don't have agreements with specific hotels, which allows us to always recommend what's best for YOU. We are expert travelers helping other travelers.",

      q7: "Can I modify the itinerary after booking?",
      a7: "Of course! Your trip is yours. During the planning phase, we adjust the itinerary as many times as necessary until it's perfect. Our goal is for every day of your vacation to be exactly as you dreamed.",

      q8: "How does the travel advisory process work?",
      a8: "It's very simple: 1) You request an initial free consultation. 2) We analyze your tastes and budget. 3) We design your personalized itinerary. 4) We provide you with a detailed guide with everything you need to maximize your experience."
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
      title1: 'Ihre maßgeschneiderte Reise,',
      title2: 'ohne stundenlange Suche und Stress',
      tagline: 'Für vielbeschäftigte Paare und Familien, die jeden Urlaubstag optimal nutzen möchten',
      description: 'Wir planen Ihre komplette Reise —Flüge, Hotels, Transfers und Erlebnisse— passend zu Ihrer Zeit, Ihrem Budget und Ihrem Reisestil.',
      cta1: 'Kostenloses Gespräch anfragen',
      cta2: 'So funktioniert es',
      trustSignals: ['60+ bereiste Länder', '15 Jahre Reiseerfahrung', 'Unabhängige Empfehlungen', 'Betreuung während der Reise']
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
      consultButton: 'Anfrage zu diesem Ziel',
      customButton: 'Erzählen Sie uns Ihren Plan',
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
        },
        mundo: {
          name: 'Wunschziel wählen',
          description: 'Haben Sie einen Ort im Kopf, der hier nicht aufgeführt ist? Teilen Sie uns Ihren Plan mit, und wir kümmern uns darum, Ihr Erlebnis in jedem Winkel der Welt zu maximieren.'
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
      a1: "Unsere personalisierte Reiseberatung umfasst: Experten-Empfehlungen für Reiseziele, detaillierte Tagespläne, Auswahl charmanter Unterkünfte, Buchung einzigartiger Aktivitäten und 24/7-Support. Wir maximieren Ihre Zeit und Ihr Budget, damit Sie ein authentisches und stressfreies Erlebnis genießen können.",

      q2: "Wie viel kostet es, einen Reiseberater zu beauftragen?",
      a2: "Wir bieten flexible Reiseplanungsmodelle: Einzelsitzungs-Beratung für 40 €/Sitzung und umfassende Beratung ab 30 €/Nacht. Sie sparen bei besseren Hotels und optimierten Flügen mehr, als unsere Beratung kostet. In einen Experten zu investieren ist der beste Weg, um den Erfolg Ihrer Reise zu garantieren.",

      q3: "Für welche Reiseziele bieten Sie Beratung an?",
      a3: "Wir sind spezialisiert auf exotische Reiseziele wie Thailand, Jordanien, Japan, Marokko, Kolumbien und Südostasien. Mit über 60 besuchten Ländern entwerfen wir personalisierte Reiserouten für jeden Winkel der Welt, angepasst an Ihren Geschmack und Ihr Budget.",

      q4: "Wie weit im Voraus sollte ich die Beratung buchen?",
      a4: "Wir empfehlen, uns 2 bis 6 Monate im Voraus zu kontaktieren. Dies ermöglicht es uns, die Verfügbarkeit in den besten Premium-Unterkünften sicherzustellen und die günstigsten Flugtarife für Ihre personalisierte Reise zu finden.",

      q5: "Beinhaltet die Beratung Flug- und Hotelbuchungen?",
      a5: "In unserem Consulting-Modus kümmern wir uns um alles: Suche und Buchung optimierter Flüge, Hotels in strategischen Lagem und Aktivitäten. Sie müssen sich nur um das Genießen kümmern. Im Advisory-Modus geben wir Ihnen die besten Empfehlungen, und Sie nehmen die Buchungen gemäß unserem Expertenleitfaden vor.",

      q6: "Was ist der Unterschied zwischen einem Reiseberater und einer traditionellen Agentur?",
      a6: "Im Gegensatz zu traditionellen Reisebüros, die fertige Pakete verkaufen, bietet Travel Maximizers eine 100 % maßgeschneiderte Reiseplanung. Wir haben keine Verträge mit bestimmten Hotels, was es uns ermöglicht, Ihnen immer das Beste für SIE zu empfehlen. Wir sind erfahrene Reisende, die anderen Reisenden helfen.",

      q7: "Kann ich die Reiseroute nach der Buchung ändern?",
      a7: "Natürlich! Ihre Reise gehört Ihnen. Während der Planungsphase passen wir die Reiseroute so oft wie nötig an, bis sie perfekt ist. Unser Ziel ist es, dass jeder Tag Ihres Urlaubs genau so ist, wie Sie es sich erträumt haben.",

      q8: "Es ist ganz einfach: 1) Sie fordern eine kostenlose Erstberatung an. 2) Wir analysieren Ihren Geschmack und Ihr Budget. 3) Wir entwerfen Ihre personalisierte Reiseroute. 4) Wir übergeben Ihnen einen detaillierten Leitfaden mit allem, was Sie brauchen, um Ihr Erlebnis zu maximieren."
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