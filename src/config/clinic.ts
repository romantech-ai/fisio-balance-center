export const clinic = {
  // === IDENTIDAD ===
  name: "BALANCE CENTER by C Fisioterapia",
  tagline: "Fisioterapia y Entrenamiento Personal en Badajoz",
  description: "BALANCE CENTER by C Fisioterapia es tu centro de fisioterapia avanzada y entrenamiento personal en Badajoz. Especialistas en INDIBA, NESA, pilates terapéutico y suelo pélvico. Carmen y Clara te ayudan a recuperar tu equilibrio.",

  // === PALETA (Teal/Turquesa del logo) ===
  colors: {
    primary: "#00B4C5",      // Teal principal del logo
    secondary: "#1A1A2E",    // Navy oscuro
    accent: "#7EDCE0",       // Teal claro
    neutral: "#F5FBFC",      // Fondo con tinte teal
  },

  // === CONTACTO ===
  phone: "624 89 71 24",
  whatsapp: "+34624897124",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros servicios de fisioterapia y entrenamiento.",
  email: "info@balancecenter.es",

  // === UBICACIÓN ===
  address: {
    street: "C. Hierbabuena, 2, local 15",
    city: "Badajoz",
    province: "Badajoz",
    postalCode: "06010",
    country: "España",
  },
  googleMapsUrl: "https://maps.google.com/?q=C.+Hierbabuena+2+local+15+06010+Badajoz",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.5!2d-6.9685!3d38.8765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dc601f1e8c8c7%3A0x0!2sC.+Hierbabuena%2C+2%2C+local+15%2C+06010+Badajoz!5e0!3m2!1ses!2ses!4v1",
  coordinates: { lat: 38.8765, lng: -6.9685 },

  // === HORARIOS ===
  schedule: [
    { days: "Lunes - Jueves", hours: "8:30 - 21:00" },
    { days: "Viernes", hours: "8:30 - 20:00" },
    { days: "Sábado - Domingo", hours: "Cerrado" },
  ],

  // === REDES SOCIALES ===
  social: {
    instagram: "https://www.instagram.com/c_fisioterapia_/",
    facebook: "https://www.facebook.com/cfisioterapiac/",
    linkedin: null as string | null,
    tiktok: null as string | null,
  },

  // === RESEÑAS GOOGLE ===
  reviews: {
    rating: 5.0,
    count: 64,
    url: "#",
    featured: [
      {
        author: "Cristina Fernández Raposo",
        rating: 5,
        text: "100% recomendable. Después de estar en diferentes fisios durante meses sin mejoría, acudí a Carmen y fue la mejor decisión. Gracias por tu cuidado, implicación y profesionalidad.",
        date: "hace 3 meses",
      },
      {
        author: "Carmen Romero Rodríguez",
        rating: 5,
        text: "Me encanta este centro de entrenamiento y fisioterapia. Los entrenamientos con Clara son fantásticos: divertidos, dinámicos y con un trato muy personalizado.",
        date: "hace 8 meses",
      },
      {
        author: "Adela Blanco Carrasco",
        rating: 5,
        text: "Quise probar el pilates terapéutico por un mes en enero y estamos en junio y ahí sigo. Clara es muy profesional, siempre pendiente para que la postura de los ejercicios sea la correcta. Lo recomiendo 100%.",
        date: "hace 8 meses",
      },
      {
        author: "Paz Negro",
        rating: 5,
        text: "Si buscas el mejor centro de Badajoz para tu salud, no busques más. Carmen y Clara son profesionales que te harán sentir como en casa: cercanas, enérgicas y muy profesionales.",
        date: "hace 8 meses",
      },
      {
        author: "L. Javier Perez Bazaga",
        rating: 5,
        text: "Balance Center trasciende la definición convencional de un gimnasio o una clínica de fisioterapia. Un centro donde la atención personalizada marca la diferencia.",
        date: "hace 8 meses",
      },
      {
        author: "Joaqui Maeso",
        rating: 5,
        text: "Estoy encantada tanto con Carmen, la fisio, como con Clara, nuestra profe de entreno y pilates terapéutico. Son las dos grandes profesionales cada una en su materia. Además son superagradables y muy simpáticas.",
        date: "hace 8 meses",
      },
    ],
  },

  // === SERVICIOS ===
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Tratamiento especializado en terapia manual osteoarticular, craneal y visceral. Abordaje integral para restaurar el equilibrio de tu cuerpo.",
      benefits: ["Alivio del dolor", "Mejora la movilidad", "Tratamiento personalizado"],
      icon: "Hand",
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Recuperación de lesiones deportivas y prevención. Tratamientos especializados para que vuelvas a tu máximo rendimiento.",
      benefits: ["Recuperación rápida", "Prevención de lesiones", "Vuelta al deporte"],
      icon: "Activity",
    },
    {
      id: "indiba",
      name: "INDIBA",
      description: "Radiofrecuencia INDIBA para regeneración tisular profunda. Tecnología de vanguardia para acelerar la recuperación y reducir el dolor.",
      benefits: ["Regeneración celular", "Reduce inflamación", "Acelera recuperación"],
      icon: "Zap",
    },
    {
      id: "nesa",
      name: "NESA",
      description: "Neuromodulación no invasiva del sistema nervioso con NESA X SIGNAL. Tratamiento del dolor crónico, trastornos del sueño y estrés.",
      benefits: ["Dolor crónico", "Mejora el sueño", "Reduce estrés y ansiedad"],
      icon: "Brain",
    },
    {
      id: "entrenamiento-personal",
      name: "Entrenamiento Personal",
      description: "Sesiones de entrenamiento personalizadas con Clara. Ejercicios dinámicos y divertidos adaptados a tu nivel y objetivos.",
      benefits: ["Sesiones a medida", "Motivación constante", "Resultados visibles"],
      icon: "Dumbbell",
    },
    {
      id: "pilates-terapeutico",
      name: "Pilates Terapéutico",
      description: "Pilates con enfoque terapéutico para rehabilitación y fortalecimiento. Control postural y trabajo de core con supervisión profesional.",
      benefits: ["Mejora postural", "Fortalecimiento", "Flexibilidad"],
      icon: "HeartPulse",
    },
    {
      id: "suelo-pelvico",
      name: "Suelo Pélvico",
      description: "Especialización en reeducación del suelo pélvico. Valoración y tratamiento integral con formación de experto internacional.",
      benefits: ["Valoración completa", "Tratamiento integral", "Experto certificado"],
      icon: "ShieldCheck",
    },
    {
      id: "rehabilitacion-postural",
      name: "Rehabilitación Postural",
      description: "Corrección postural y ergonomía para prevenir y tratar dolencias derivadas de malas posturas y hábitos posturales incorrectos.",
      benefits: ["Corrección postural", "Prevención del dolor", "Hábitos saludables"],
      icon: "PersonStanding",
    },
  ],

  // === PROCESO ===
  process: [
    {
      step: 1,
      title: "Contacta",
      description: "Llámanos o escríbenos por WhatsApp para pedir tu primera cita",
    },
    {
      step: 2,
      title: "Valoración",
      description: "Realizamos una valoración completa para entender tu situación y objetivos",
    },
    {
      step: 3,
      title: "Tratamiento",
      description: "Diseñamos un plan personalizado combinando fisioterapia y entrenamiento",
    },
    {
      step: 4,
      title: "Resultados",
      description: "Recupera tu equilibrio con un seguimiento cercano y profesional",
    },
  ],

  // === POR QUÉ ELEGIRNOS ===
  whyUs: [
    {
      title: "Tecnología INDIBA y NESA",
      description: "Equipamiento de última generación para tratamientos más efectivos y recuperación acelerada",
      icon: "Cpu",
    },
    {
      title: "Atención 100% Personalizada",
      description: "Cada paciente recibe un plan de tratamiento único adaptado a sus necesidades específicas",
      icon: "UserCheck",
    },
    {
      title: "Fisioterapia + Entrenamiento",
      description: "Equipo multidisciplinar que combina fisioterapia y entrenamiento personal para resultados completos",
      icon: "Users",
    },
    {
      title: "5 Estrellas en Google",
      description: "64 pacientes nos avalan con la máxima puntuación. Tu confianza es nuestra mejor carta de presentación",
      icon: "Star",
    },
  ],

  // === EQUIPO ===
  team: [
    {
      name: "Carmen",
      role: "Fisioterapeuta",
      image: "/images/team/carmen.jpg",
      bio: "Graduada en Fisioterapia con Máster en fisioterapia manual, osteoarticular, craneal y visceral. Experto internacional en suelo pélvico y sexología. Especialista en INDIBA y NESA.",
    },
    {
      name: "Clara",
      role: "Entrenadora Personal y Pilates",
      image: "/images/team/clara.jpg",
      bio: "Entrenadora personal especializada en pilates terapéutico. Sesiones dinámicas, divertidas y adaptadas a cada persona. Tu motivación para volver a disfrutar del deporte.",
    },
  ],

  // === GALERÍA ===
  gallery: [
    { src: "/images/gallery/1.webp", alt: "Interior de BALANCE CENTER" },
    { src: "/images/gallery/2.webp", alt: "Sala de fisioterapia" },
    { src: "/images/gallery/3.webp", alt: "Zona de entrenamiento" },
  ],

  // === FAQ ===
  faq: [
    {
      question: "¿Necesito cita previa?",
      answer: "Sí, trabajamos con cita previa para poder dedicarte el tiempo que mereces. Puedes reservar tu cita llamándonos al 624 89 71 24 o escribiéndonos por WhatsApp.",
    },
    {
      question: "¿Qué es INDIBA y para qué sirve?",
      answer: "INDIBA es un sistema de radiofrecuencia que genera una corriente eléctrica a través de los tejidos, estimulando la regeneración celular. Es muy eficaz para reducir dolor, inflamación y acelerar la recuperación de lesiones.",
    },
    {
      question: "¿Qué es la neuromodulación NESA?",
      answer: "NESA X SIGNAL es una tecnología de neuromodulación no invasiva que actúa sobre el sistema nervioso. Está indicada para dolor crónico, trastornos del sueño, estrés y ansiedad, con resultados demostrados científicamente.",
    },
    {
      question: "¿Necesito experiencia previa para el entrenamiento personal?",
      answer: "No, Clara adapta las sesiones a tu nivel y condición física. Da igual tu edad o si llevas años sin hacer deporte. Muchos de nuestros clientes empezaron desde cero y ahora disfrutan del ejercicio.",
    },
    {
      question: "¿Qué diferencia hay entre pilates normal y pilates terapéutico?",
      answer: "El pilates terapéutico tiene un enfoque rehabilitador. Clara supervisa la postura en cada ejercicio y adapta los movimientos a tu situación física, ideal para personas con dolencias o en proceso de recuperación.",
    },
    {
      question: "¿Cuándo debo acudir a fisioterapia de suelo pélvico?",
      answer: "Si tienes incontinencia, dolor pélvico, durante el embarazo o postparto, o cualquier disfunción del suelo pélvico. Carmen cuenta con formación de experto internacional en esta especialidad.",
    },
    {
      question: "¿Cuántas sesiones de fisioterapia necesitaré?",
      answer: "Depende de tu patología y situación personal. Tras la valoración inicial, te propondremos un plan de tratamiento con una estimación de sesiones. Nuestro objetivo es que mejores lo antes posible.",
    },
    {
      question: "¿Dónde estáis ubicados?",
      answer: "Estamos en C. Hierbabuena, 2, local 15, 06010 Badajoz, muy cerca del Hospital Materno-Infantil. Contamos con fácil acceso y aparcamiento en la zona.",
    },
  ],

  // === SEO ===
  seo: {
    titleTemplate: "%s | BALANCE CENTER by C Fisioterapia - Badajoz",
    defaultTitle: "BALANCE CENTER by C Fisioterapia | Fisioterapia y Entrenamiento Personal en Badajoz",
    defaultDescription: "Centro de fisioterapia avanzada y entrenamiento personal en Badajoz. Especialistas en INDIBA, NESA, pilates terapéutico y suelo pélvico. 5 estrellas en Google. Cita: 624 89 71 24.",
    keywords: [
      "fisioterapia Badajoz",
      "INDIBA Badajoz",
      "NESA fisioterapia",
      "entrenamiento personal Badajoz",
      "pilates terapéutico Badajoz",
      "suelo pélvico Badajoz",
      "fisioterapeuta Badajoz",
      "rehabilitación Badajoz",
      "Balance Center Badajoz",
      "C Fisioterapia Badajoz",
      "fisioterapia deportiva Badajoz",
      "fisioterapia manual Badajoz",
    ],
    ogImage: "/og-image.jpg",
  },

  // === LEGAL ===
  legal: {
    companyName: "BALANCE CENTER by C Fisioterapia",
    cif: "",
    registeredAddress: "C. Hierbabuena, 2, local 15, 06010 Badajoz",
  },
}

export type Clinic = typeof clinic
