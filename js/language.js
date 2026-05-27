// Language Translation System
(function() {
    'use strict';

    // Translation data
    const translations = {
        en: {
            'header.title': 'Atomic AI',
            'header.subtitle': 'Transforming businesses, one atomic innovation at a time.',
            'header.button': 'Find Out More',
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.services': 'Services',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            'about.label': 'Innovation',
            'about.subtitle': 'Transforming businesses through intelligent innovation',
            'about.title': 'AI Solutions Built for You',
            'about.description': 'At Atomic AI, our vision is to empower businesses and organizations to harness the full potential of artificial intelligence. We go beyond one-size-fits-all solutions, crafting bespoke AI systems that seamlessly integrate state-of-the-art generative models with traditional machine learning. Our approach is not just about innovation—it\'s about delivering scalable, reliable, and tailored AI solutions that drive real impact. With Atomic AI, you don\'t just adopt AI—you unlock its true power to transform your business.',
            'about.button': 'Reach out!',
            'about.partnerships.title': 'Our Partnerships',
            'about.partnerships.description': 'We work in collaboration with leading organizations on innovation and development projects across regions.',
            'about.partnerships.note': 'We collaborate on innovation and technological development projects across regions.',
            'mission.title': 'Our Mission',
            'mission.description': 'To drive technological innovation through intelligent solutions that optimize processes, elevate decision-making, and make artificial intelligence accessible, ethical, and practical for businesses of all sizes.',
            'vision.title': 'Our Vision',
            'vision.description': 'To become a trusted partner in custom AI development—recognized for helping organizations adopt reliable, scalable, and meaningful systems with real-world impact.',
            'objectives.label': 'Mission, Vision & Objectives',
            'objectives.main-title': 'Building the Future of AI',
            'objectives.main-subtitle': 'One objective at a time, one innovation at a time.',
            'objectives.subtitle': 'Building the future of AI, one objective at a time.',
            'objectives.title': 'Our Objectives',
            'objectives.empower.title': '1. Empower Organizations',
            'objectives.empower.description': 'Enable companies to leverage AI to improve productivity, operational clarity, and strategic decision-making.',
            'objectives.scalable.title': '2. Develop Scalable AI Solutions',
            'objectives.scalable.description': 'Build systems capable of growing from thousands to millions of users without compromising security or performance.',
            'objectives.ecosystem.title': '3. Strengthen The Digital Ecosystem',
            'objectives.ecosystem.description': 'Contribute to technological development across deployment contexts through innovation, education, and high-value partnerships.',
            'services.title': 'Our Services',
            'services.intro': 'Discover how our AI solutions can transform your business. Explore each service to learn more.',
            'services.explore': 'Learn more',
            'services.view-all': 'View All Services',
            'services.get-started': 'Get Started',
            'services.what-we-offer': 'What We Offer:',
            'services.title-badge': 'What We Offer',
            'services.page-title': 'Our Services',
            'services.page-intro': 'We design, build, and deploy advanced AI solutions that transform how businesses operate. From custom AI development to data engineering and training programs, we provide end-to-end services tailored to your needs.',
            'services.custom-ai.title': 'Custom AI Development',
            'services.custom-ai.description': 'Intelligent copilots, chatbots, decision-support tools, predictive systems, and fully customized AI implementations tailored to your workflows.',
            'services.custom-ai.short': 'Intelligent copilots, chatbots, and AI systems tailored to your needs.',
            'services.custom-ai.feature1': 'Intelligent conversational assistants and chatbots',
            'services.custom-ai.feature2': 'Decision-support systems powered by machine learning',
            'services.custom-ai.feature3': 'Predictive analytics and forecasting models',
            'services.custom-ai.feature4': 'Fully customized AI solutions for your specific needs',
            'services.etl.title': 'ETL & Data Engineering',
            'services.etl.description': 'Historical data extraction, real-time pipelines, normalization, validation, and optimized databases for large-scale analytics.',
            'services.etl.short': 'Real-time pipelines and optimized databases for large-scale analytics.',
            'services.etl.feature1': 'Historical data extraction and migration',
            'services.etl.feature2': 'Real-time data pipelines and streaming',
            'services.etl.feature3': 'Data normalization and validation',
            'services.etl.feature4': 'Optimized databases for large-scale analytics',
            'services.dashboards.title': 'Dashboards & Analytics',
            'services.dashboards.description': 'High-performance dashboards for monitoring operations, detecting anomalies, and supporting executive decision-making.',
            'services.dashboards.short': 'High-performance dashboards for monitoring and decision-making.',
            'services.dashboards.feature1': 'Real-time operational dashboards',
            'services.dashboards.feature2': 'Anomaly detection and alerting systems',
            'services.dashboards.feature3': 'Executive-level analytics and reporting',
            'services.dashboards.feature4': 'Custom visualizations and interactive reports',
            'services.software.title': 'Custom Software Solutions',
            'services.software.description': 'Tailor-made systems for various industries, including dental clinics, energy generation, logistics, education platforms, and more.',
            'services.software.short': 'Tailor-made systems for various industries and workflows.',
            'services.software.feature1': 'Healthcare and clinic management systems',
            'services.software.feature2': 'Energy and utilities management platforms',
            'services.software.feature3': 'Inventory and logistics management',
            'services.software.feature4': 'Education and learning platforms',
            'services.training.title': 'Training & AI Literacy',
            'services.training.description': 'Workshops, strategic consulting, and capacity-building programs to help teams adopt AI responsibly and effectively.',
            'services.training.short': 'Workshops and programs to help teams adopt AI effectively.',
            'services.training.feature1': 'AI literacy workshops and training programs',
            'services.training.feature2': 'Strategic AI consulting and roadmap development',
            'services.training.feature3': 'Capacity-building for technical teams',
            'services.training.feature4': 'Ethical AI implementation guidance',
            'services.cta.title': 'Ready to Transform?',
            'services.cta.description': 'Let\'s discuss how we can help your business grow.',
            'services.cta-section.title': 'Ready to Transform Your Business?',
            'services.cta-section.description': 'Let\'s discuss how our AI solutions can help your organization grow and thrive in the digital age.',
            'services.cta-section.button': 'Get In Touch',
            'projects.featured.title': 'Featured Projects',
            'projects.page.label': 'Our Work',
            'projects.page.title': 'Featured Projects',
            'projects.page.description': 'Explore AI systems built for real organizations across markets. Each project represents our commitment to delivering practical technology with measurable impact.',
            'projects.mia.title': 'Mia – AI Mentor for Entrepreneurs',
            'projects.mia.description': 'Conversational AI assistant implemented in Honduras and Costa Rica, supporting entrepreneurs 24/7 through WhatsApp with personalized guidance, voice, images, and contextual responses.',
            'projects.mia.category': 'AI Assistant',
            'projects.mia.feature1': '24/7 WhatsApp support',
            'projects.mia.feature2': 'Voice and image processing',
            'projects.mia.feature3': 'Personalized guidance for entrepreneurs',
            'projects.mia.feature4': 'Active in Honduras & Costa Rica',
            'projects.potenza.title': 'Potenza – ETL & Solar Intelligence Dashboard',
            'projects.potenza.description': 'End-to-end data engineering solution: historical extraction, real-time pipelines, unified database, anomaly detection, and operational dashboard for solar plant performance.',
            'projects.potenza.category': 'Data Engineering',
            'projects.potenza.feature1': 'Historical data extraction',
            'projects.potenza.feature2': 'Real-time data pipelines',
            'projects.potenza.feature3': 'Anomaly detection system',
            'projects.potenza.feature4': 'Operational performance dashboard',
            'projects.custom.title': 'Custom Software for Clinics & Energy',
            'projects.custom.description': 'Tailor-made systems for dental clinics, energy operations, inventory management, and administrative workflows—fully optimized for scalability and security.',
            'projects.custom.category': 'Custom Software',
            'projects.custom.feature1': 'Healthcare management systems',
            'projects.custom.feature2': 'Energy operations platforms',
            'projects.custom.feature3': 'Inventory & logistics management',
            'projects.custom.feature4': 'Scalable & secure architecture',
            'projects.learn-more': 'Learn More',
            'projects.contact-us': 'Contact Us',
            'projects.view-all': 'View All Projects',
            'contact.title': 'Let\'s Get In Touch',
            'contact.description': 'Ready to explore how AI can transform your operations? Send us a message and let\'s build the future together.',
            'contact.cta.button': 'Send Us a Message',
            'contact.cta.note': 'We typically respond within 24-48 hours',
            'contact.page.badge': 'Get In Touch',
            'contact.page.title': 'Let\'s Build Something Amazing Together',
            'contact.page.description': 'Ready to explore how AI can transform your operations? We\'re here to help. Send us a message and let\'s discuss how we can bring your vision to life.',
            'contact.form.name.label': 'Your Name',
            'contact.form.name.placeholder': 'Enter your full name',
            'contact.form.email.label': 'Your Email',
            'contact.form.email.placeholder': 'your.email@example.com',
            'contact.form.company.label': 'Company (Optional)',
            'contact.form.company.placeholder': 'Your company name',
            'contact.form.subject.label': 'Subject',
            'contact.form.subject.option.default': 'Select a topic...',
            'contact.form.subject.option.custom-ai': 'Custom AI Development',
            'contact.form.subject.option.etl': 'ETL & Data Engineering',
            'contact.form.subject.option.dashboards': 'Dashboards & Analytics',
            'contact.form.subject.option.software': 'Custom Software Solutions',
            'contact.form.subject.option.training': 'Training & AI Literacy',
            'contact.form.subject.option.general': 'General Inquiry',
            'contact.form.message.label': 'Your Message',
            'contact.form.message.placeholder': 'Tell us about your project or inquiry...',
            'contact.form.submit': 'Send Message',
            'contact.info.email.title': 'Email Us',
            'contact.info.email.value': 'contact@theatomic.ai',
            'contact.info.response.title': 'Response Time',
            'contact.info.response.value': 'We typically respond within 24-48 hours',
            'contact.info.location.title': 'Location',
            'contact.info.location.value': 'El Salvador, Central America',
            'footer.tagline': 'Transforming businesses, one atomic innovation at a time.',
            'footer.explore': 'Explore',
            'footer.company': 'Company',
            'footer.mission': 'Mission & Vision',
            'footer.connect': 'Connect',
            'footer.rights': 'All rights reserved.',
            'footer.privacy': 'Privacy Policy',
            'footer.terms': 'Terms of Use',
        },
        es: {
            'header.title': 'Atomic AI',
            'header.subtitle': 'Transformando negocios, una innovación atómica a la vez.',
            'header.button': 'Saber Más',
            'nav.home': 'Inicio',
            'nav.about': 'Acerca de',
            'nav.services': 'Servicios',
            'nav.projects': 'Proyectos',
            'nav.contact': 'Contacto',
            'about.label': 'Innovación',
            'about.subtitle': 'Transformando negocios a través de innovación inteligente',
            'about.title': 'Soluciones de IA Hechas para Ti',
            'about.description': 'En Atomic AI, nuestra visión es empoderar a empresas y organizaciones para aprovechar todo el potencial de la inteligencia artificial. Vamos más allá de soluciones genéricas, creando sistemas de IA personalizados que integran perfectamente modelos generativos de última generación con aprendizaje automático tradicional. Nuestro enfoque no se trata solo de innovación—se trata de entregar soluciones de IA escalables, confiables y personalizadas que generen un impacto real. Con Atomic AI, no solo adoptas IA—desbloqueas su verdadero poder para transformar tu negocio.',
            'about.button': '¡Contáctanos!',
            'about.partnerships.title': 'Nuestras Colaboraciones',
            'about.partnerships.description': 'Trabajamos en colaboración con organizaciones líderes en proyectos de innovación y desarrollo en distintas regiones.',
            'about.partnerships.note': 'Colaboramos en proyectos de innovación y desarrollo tecnológico en distintas regiones.',
            'mission.title': 'Nuestra Misión',
            'mission.description': 'Impulsar la innovación tecnológica a través de soluciones inteligentes que optimicen procesos, eleven la toma de decisiones y hagan la inteligencia artificial accesible, ética y práctica para empresas de todos los tamaños.',
            'vision.title': 'Nuestra Visión',
            'vision.description': 'Convertirnos en un socio confiable en desarrollo de IA personalizada, apoyando a organizaciones con sistemas confiables, escalables y significativos con impacto real.',
            'objectives.label': 'Misión, Visión y Objetivos',
            'objectives.main-title': 'Construyendo el Futuro de la IA',
            'objectives.main-subtitle': 'Un objetivo a la vez, una innovación a la vez.',
            'objectives.subtitle': 'Construyendo el futuro de la IA, un objetivo a la vez.',
            'objectives.title': 'Nuestros Objetivos',
            'objectives.empower.title': '1. Empoderar Organizaciones',
            'objectives.empower.description': 'Permitir que las empresas aprovechen la IA para mejorar la productividad, la claridad operativa y la toma de decisiones estratégicas.',
            'objectives.scalable.title': '2. Desarrollar Soluciones de IA Escalables',
            'objectives.scalable.description': 'Construir sistemas capaces de crecer de miles a millones de usuarios sin comprometer la seguridad o el rendimiento.',
            'objectives.ecosystem.title': '3. Fortalecer el Ecosistema Digital',
            'objectives.ecosystem.description': 'Contribuir al desarrollo tecnológico en distintos contextos de despliegue a través de innovación, educación y asociaciones de alto valor.',
            'services.title': 'Nuestros Servicios',
            'services.intro': 'Descubre cómo nuestras soluciones de IA pueden transformar tu negocio. Explora cada servicio para conocer más.',
            'services.explore': 'Saber más',
            'services.view-all': 'Ver Todos los Servicios',
            'services.get-started': 'Comenzar',
            'services.what-we-offer': 'Lo que Ofrecemos:',
            'services.title-badge': 'Lo que Ofrecemos',
            'services.page-title': 'Nuestros Servicios',
            'services.page-intro': 'Diseñamos, construimos e implementamos soluciones avanzadas de IA que transforman la forma en que operan las empresas. Desde desarrollo de IA personalizado hasta ingeniería de datos y programas de capacitación, proporcionamos servicios integrales adaptados a tus necesidades.',
            'services.custom-ai.title': 'Desarrollo de IA Personalizado',
            'services.custom-ai.description': 'Copilotos inteligentes, chatbots, herramientas de apoyo a decisiones, sistemas predictivos e implementaciones de IA completamente personalizadas adaptadas a tus flujos de trabajo.',
            'services.custom-ai.short': 'Copilotos inteligentes, chatbots y sistemas de IA adaptados a tus necesidades.',
            'services.custom-ai.feature1': 'Asistentes conversacionales inteligentes y chatbots',
            'services.custom-ai.feature2': 'Sistemas de apoyo a decisiones impulsados por aprendizaje automático',
            'services.custom-ai.feature3': 'Análisis predictivo y modelos de pronóstico',
            'services.custom-ai.feature4': 'Soluciones de IA completamente personalizadas para tus necesidades específicas',
            'services.etl.title': 'ETL e Ingeniería de Datos',
            'services.etl.description': 'Extracción de datos históricos, pipelines en tiempo real, normalización, validación y bases de datos optimizadas para análisis a gran escala.',
            'services.etl.short': 'Pipelines en tiempo real y bases de datos optimizadas para análisis a gran escala.',
            'services.etl.feature1': 'Extracción y migración de datos históricos',
            'services.etl.feature2': 'Pipelines de datos en tiempo real y streaming',
            'services.etl.feature3': 'Normalización y validación de datos',
            'services.etl.feature4': 'Bases de datos optimizadas para análisis a gran escala',
            'services.dashboards.title': 'Dashboards y Análisis',
            'services.dashboards.description': 'Dashboards de alto rendimiento para monitorear operaciones, detectar anomalías y apoyar la toma de decisiones ejecutivas.',
            'services.dashboards.short': 'Dashboards de alto rendimiento para monitoreo y toma de decisiones.',
            'services.dashboards.feature1': 'Dashboards operativos en tiempo real',
            'services.dashboards.feature2': 'Sistemas de detección de anomalías y alertas',
            'services.dashboards.feature3': 'Análisis e informes a nivel ejecutivo',
            'services.dashboards.feature4': 'Visualizaciones personalizadas e informes interactivos',
            'services.software.title': 'Soluciones de Software Personalizado',
            'services.software.description': 'Sistemas hechos a medida para diversas industrias, incluyendo clínicas dentales, generación de energía, logística, plataformas educativas y más.',
            'services.software.short': 'Sistemas hechos a medida para diversas industrias y flujos de trabajo.',
            'services.software.feature1': 'Sistemas de gestión de salud y clínicas',
            'services.software.feature2': 'Plataformas de gestión de energía y servicios públicos',
            'services.software.feature3': 'Gestión de inventario y logística',
            'services.software.feature4': 'Plataformas educativas y de aprendizaje',
            'services.training.title': 'Capacitación y Alfabetización en IA',
            'services.training.description': 'Talleres, consultoría estratégica y programas de desarrollo de capacidades para ayudar a los equipos a adoptar IA de manera responsable y efectiva.',
            'services.training.short': 'Talleres y programas para ayudar a los equipos a adoptar IA efectivamente.',
            'services.training.feature1': 'Talleres y programas de capacitación en alfabetización de IA',
            'services.training.feature2': 'Consultoría estratégica de IA y desarrollo de hojas de ruta',
            'services.training.feature3': 'Desarrollo de capacidades para equipos técnicos',
            'services.training.feature4': 'Orientación para implementación ética de IA',
            'services.cta.title': '¿Listo para Transformar?',
            'services.cta.description': 'Hablemos sobre cómo podemos ayudar a tu negocio a crecer.',
            'services.cta-section.title': '¿Listo para Transformar tu Negocio?',
            'services.cta-section.description': 'Hablemos sobre cómo nuestras soluciones de IA pueden ayudar a tu organización a crecer y prosperar en la era digital.',
            'services.cta-section.button': 'Contáctanos',
            'projects.featured.title': 'Proyectos Destacados',
            'projects.page.label': 'Nuestro Trabajo',
            'projects.page.title': 'Proyectos Destacados',
            'projects.page.description': 'Explora sistemas de IA construidos para organizaciones reales en distintos mercados. Cada proyecto representa nuestro compromiso de entregar tecnología práctica con impacto medible.',
            'projects.mia.title': 'Mia – Mentor de IA para Emprendedores',
            'projects.mia.description': 'Asistente de IA conversacional implementado en Honduras y Costa Rica, apoyando a emprendedores 24/7 a través de WhatsApp con orientación personalizada, voz, imágenes y respuestas contextuales.',
            'projects.mia.category': 'Asistente de IA',
            'projects.mia.feature1': 'Soporte 24/7 por WhatsApp',
            'projects.mia.feature2': 'Procesamiento de voz e imágenes',
            'projects.mia.feature3': 'Orientación personalizada para emprendedores',
            'projects.mia.feature4': 'Activo en Honduras y Costa Rica',
            'projects.potenza.title': 'Potenza – ETL y Dashboard de Inteligencia Solar',
            'projects.potenza.description': 'Solución integral de ingeniería de datos: extracción histórica, pipelines en tiempo real, base de datos unificada, detección de anomalías y dashboard operacional para el rendimiento de plantas solares.',
            'projects.potenza.category': 'Ingeniería de Datos',
            'projects.potenza.feature1': 'Extracción de datos históricos',
            'projects.potenza.feature2': 'Pipelines de datos en tiempo real',
            'projects.potenza.feature3': 'Sistema de detección de anomalías',
            'projects.potenza.feature4': 'Dashboard de rendimiento operacional',
            'projects.custom.title': 'Software Personalizado para Clínicas y Energía',
            'projects.custom.description': 'Sistemas hechos a medida para clínicas dentales, operaciones energéticas, gestión de inventario y flujos de trabajo administrativos—totalmente optimizados para escalabilidad y seguridad.',
            'projects.custom.category': 'Software Personalizado',
            'projects.custom.feature1': 'Sistemas de gestión de salud',
            'projects.custom.feature2': 'Plataformas de operaciones energéticas',
            'projects.custom.feature3': 'Gestión de inventario y logística',
            'projects.custom.feature4': 'Arquitectura escalable y segura',
            'projects.learn-more': 'Saber Más',
            'projects.contact-us': 'Contáctanos',
            'projects.view-all': 'Ver Todos los Proyectos',
            'contact.title': '¡Pongámonos en Contacto!',
            'contact.description': '¿Listo para explorar cómo la IA puede transformar tus operaciones? Envíanos un mensaje y construyamos el futuro juntos.',
            'contact.cta.button': 'Envíanos un Mensaje',
            'contact.cta.note': 'Normalmente respondemos en 24-48 horas',
            'contact.page.badge': 'Contáctanos',
            'contact.page.title': 'Construyamos Algo Increíble Juntos',
            'contact.page.description': '¿Listo para explorar cómo la IA puede transformar tus operaciones? Estamos aquí para ayudar. Envíanos un mensaje y hablemos sobre cómo podemos hacer realidad tu visión.',
            'contact.form.name.label': 'Tu Nombre',
            'contact.form.name.placeholder': 'Ingresa tu nombre completo',
            'contact.form.email.label': 'Tu Correo',
            'contact.form.email.placeholder': 'tu.correo@ejemplo.com',
            'contact.form.company.label': 'Empresa (Opcional)',
            'contact.form.company.placeholder': 'Nombre de tu empresa',
            'contact.form.subject.label': 'Asunto',
            'contact.form.subject.option.default': 'Selecciona un tema...',
            'contact.form.subject.option.custom-ai': 'Desarrollo de IA Personalizado',
            'contact.form.subject.option.etl': 'ETL e Ingeniería de Datos',
            'contact.form.subject.option.dashboards': 'Dashboards y Análisis',
            'contact.form.subject.option.software': 'Soluciones de Software Personalizado',
            'contact.form.subject.option.training': 'Capacitación y Alfabetización en IA',
            'contact.form.subject.option.general': 'Consulta General',
            'contact.form.message.label': 'Tu Mensaje',
            'contact.form.message.placeholder': 'Cuéntanos sobre tu proyecto o consulta...',
            'contact.form.submit': 'Enviar Mensaje',
            'contact.info.email.title': 'Escríbenos',
            'contact.info.email.value': 'contact@theatomic.ai',
            'contact.info.response.title': 'Tiempo de Respuesta',
            'contact.info.response.value': 'Normalmente respondemos en 24-48 horas',
            'contact.info.location.title': 'Ubicación',
            'contact.info.location.value': 'El Salvador, Centroamérica',
            'footer.tagline': 'Transformando negocios, una innovación atómica a la vez.',
            'footer.explore': 'Explorar',
            'footer.company': 'Empresa',
            'footer.mission': 'Misión y Visión',
            'footer.connect': 'Conectar',
            'footer.rights': 'Todos los derechos reservados.',
            'footer.privacy': 'Política de Privacidad',
            'footer.terms': 'Términos de Uso',
        },
        fr: {
            'header.title': 'Atomic AI',
            'header.subtitle': 'Transformer les entreprises, une innovation atomique à la fois.',
            'header.button': 'En Savoir Plus',
            'nav.home': 'Accueil',
            'nav.about': 'À Propos',
            'nav.services': 'Services',
            'nav.projects': 'Projets',
            'nav.contact': 'Contact',
            'about.label': 'Innovation',
            'about.subtitle': 'Transformer les entreprises grâce à l\'innovation intelligente',
            'about.title': 'Solutions IA Conçues pour Vous',
            'about.description': 'Chez Atomic AI, notre vision est d\'autonomiser les entreprises et les organisations pour exploiter tout le potentiel de l\'intelligence artificielle. Nous allons au-delà des solutions universelles, créant des systèmes IA sur mesure qui intègrent parfaitement les modèles génératifs de pointe avec l\'apprentissage automatique traditionnel. Notre approche ne se limite pas à l\'innovation—il s\'agit de fournir des solutions IA évolutives, fiables et personnalisées qui génèrent un impact réel. Avec Atomic AI, vous n\'adoptez pas seulement l\'IA—vous débloquez son véritable pouvoir pour transformer votre entreprise.',
            'about.button': 'Contactez-nous!',
            'about.partnerships.title': 'Nos Partenariats',
            'about.partnerships.description': 'Nous travaillons en collaboration avec des organisations de premier plan sur des projets d\'innovation et de développement dans plusieurs régions.',
            'about.partnerships.note': 'Nous collaborons sur des projets d\'innovation et de développement technologique dans plusieurs régions.',
            'mission.title': 'Notre Mission',
            'mission.description': 'Mener l\'innovation technologique grâce à des solutions intelligentes qui optimisent les processus, améliorent la prise de décision et rendent l\'intelligence artificielle accessible, éthique et pratique pour les entreprises de toutes tailles.',
            'vision.title': 'Notre Vision',
            'vision.description': 'Devenir un partenaire de confiance dans le développement d\'IA personnalisée, en aidant les organisations à adopter des systèmes fiables, évolutifs et utiles avec un impact réel.',
            'objectives.label': 'Mission, Vision et Objectifs',
            'objectives.main-title': 'Construire l\'Avenir de l\'IA',
            'objectives.main-subtitle': 'Un objectif à la fois, une innovation à la fois.',
            'objectives.subtitle': 'Construire l\'avenir de l\'IA, un objectif à la fois.',
            'objectives.title': 'Nos Objectifs',
            'objectives.empower.title': '1. Autonomiser les Organisations',
            'objectives.empower.description': 'Permettre aux entreprises d\'exploiter l\'IA pour améliorer la productivité, la clarté opérationnelle et la prise de décision stratégique.',
            'objectives.scalable.title': '2. Développer des Solutions IA Évolutives',
            'objectives.scalable.description': 'Construire des systèmes capables de passer de milliers à des millions d\'utilisateurs sans compromettre la sécurité ou les performances.',
            'objectives.ecosystem.title': '3. Renforcer l\'Écosystème Numérique',
            'objectives.ecosystem.description': 'Contribuer au développement technologique dans différents contextes de déploiement grâce à l\'innovation, l\'éducation et des partenariats à haute valeur ajoutée.',
            'services.title': 'Nos Services',
            'services.intro': 'Découvrez comment nos solutions IA peuvent transformer votre entreprise. Explorez chaque service pour en savoir plus.',
            'services.explore': 'En savoir plus',
            'services.view-all': 'Voir Tous les Services',
            'services.get-started': 'Commencer',
            'services.what-we-offer': 'Ce que Nous Offrons:',
            'services.title-badge': 'Ce que Nous Offrons',
            'services.page-title': 'Nos Services',
            'services.page-intro': 'Nous concevons, construisons et déployons des solutions IA avancées qui transforment la façon dont les entreprises fonctionnent. Du développement IA personnalisé à l\'ingénierie des données et aux programmes de formation, nous fournissons des services complets adaptés à vos besoins.',
            'services.custom-ai.title': 'Développement IA Personnalisé',
            'services.custom-ai.description': 'Copilotes intelligents, chatbots, outils d\'aide à la décision, systèmes prédictifs et implémentations IA entièrement personnalisées adaptées à vos flux de travail.',
            'services.custom-ai.short': 'Copilotes intelligents, chatbots et systèmes IA adaptés à vos besoins.',
            'services.custom-ai.feature1': 'Assistants conversationnels intelligents et chatbots',
            'services.custom-ai.feature2': 'Systèmes d\'aide à la décision alimentés par l\'apprentissage automatique',
            'services.custom-ai.feature3': 'Analyses prédictives et modèles de prévision',
            'services.custom-ai.feature4': 'Solutions IA entièrement personnalisées pour vos besoins spécifiques',
            'services.etl.title': 'ETL et Ingénierie des Données',
            'services.etl.description': 'Extraction de données historiques, pipelines en temps réel, normalisation, validation et bases de données optimisées pour l\'analyse à grande échelle.',
            'services.etl.short': 'Pipelines en temps réel et bases de données optimisées pour l\'analyse à grande échelle.',
            'services.etl.feature1': 'Extraction et migration de données historiques',
            'services.etl.feature2': 'Pipelines de données en temps réel et streaming',
            'services.etl.feature3': 'Normalisation et validation des données',
            'services.etl.feature4': 'Bases de données optimisées pour l\'analyse à grande échelle',
            'services.dashboards.title': 'Tableaux de Bord et Analyses',
            'services.dashboards.description': 'Tableaux de bord haute performance pour surveiller les opérations, détecter les anomalies et soutenir la prise de décision exécutive.',
            'services.dashboards.short': 'Tableaux de bord haute performance pour la surveillance et la prise de décision.',
            'services.dashboards.feature1': 'Tableaux de bord opérationnels en temps réel',
            'services.dashboards.feature2': 'Systèmes de détection d\'anomalies et d\'alerte',
            'services.dashboards.feature3': 'Analyses et rapports au niveau exécutif',
            'services.dashboards.feature4': 'Visualisations personnalisées et rapports interactifs',
            'services.software.title': 'Solutions Logicielles Personnalisées',
            'services.software.description': 'Systèmes sur mesure pour diverses industries, y compris les cliniques dentaires, la production d\'énergie, la logistique, les plateformes éducatives et plus encore.',
            'services.software.short': 'Systèmes sur mesure pour diverses industries et flux de travail.',
            'services.software.feature1': 'Systèmes de gestion de santé et de cliniques',
            'services.software.feature2': 'Plateformes de gestion de l\'énergie et des services publics',
            'services.software.feature3': 'Gestion des stocks et de la logistique',
            'services.software.feature4': 'Plateformes éducatives et d\'apprentissage',
            'services.training.title': 'Formation et Alphabétisation IA',
            'services.training.description': 'Ateliers, conseil stratégique et programmes de renforcement des capacités pour aider les équipes à adopter l\'IA de manière responsable et efficace.',
            'services.training.short': 'Ateliers et programmes pour aider les équipes à adopter l\'IA efficacement.',
            'services.training.feature1': 'Ateliers d\'alphabétisation IA et programmes de formation',
            'services.training.feature2': 'Conseil stratégique IA et développement de feuilles de route',
            'services.training.feature3': 'Renforcement des capacités pour les équipes techniques',
            'services.training.feature4': 'Conseils pour la mise en œuvre éthique de l\'IA',
            'services.cta.title': 'Prêt à Transformer?',
            'services.cta.description': 'Discutons de la façon dont nous pouvons aider votre entreprise à croître.',
            'services.cta-section.title': 'Prêt à Transformer Votre Entreprise?',
            'services.cta-section.description': 'Discutons de la façon dont nos solutions IA peuvent aider votre organisation à croître et à prospérer à l\'ère numérique.',
            'services.cta-section.button': 'Nous Contacter',
            'projects.featured.title': 'Projets en Vedette',
            'projects.page.label': 'Notre Travail',
            'projects.page.title': 'Projets en Vedette',
            'projects.page.description': 'Explorez des systèmes d\'IA conçus pour des organisations réelles dans plusieurs marchés. Chaque projet reflète notre engagement à fournir une technologie pratique avec un impact mesurable.',
            'projects.mia.title': 'Mia – Mentor IA pour Entrepreneurs',
            'projects.mia.description': 'Assistant IA conversationnel implémenté au Honduras et au Costa Rica, soutenant les entrepreneurs 24/7 via WhatsApp avec des conseils personnalisés, voix, images et réponses contextuelles.',
            'projects.mia.category': 'Assistant IA',
            'projects.mia.feature1': 'Support WhatsApp 24/7',
            'projects.mia.feature2': 'Traitement de la voix et des images',
            'projects.mia.feature3': 'Conseils personnalisés pour entrepreneurs',
            'projects.mia.feature4': 'Actif au Honduras et au Costa Rica',
            'projects.potenza.title': 'Potenza – ETL et Tableau de Bord d\'Intelligence Solaire',
            'projects.potenza.description': 'Solution complète d\'ingénierie des données: extraction historique, pipelines en temps réel, base de données unifiée, détection d\'anomalies et tableau de bord opérationnel pour les performances des centrales solaires.',
            'projects.potenza.category': 'Ingénierie des Données',
            'projects.potenza.feature1': 'Extraction de données historiques',
            'projects.potenza.feature2': 'Pipelines de données en temps réel',
            'projects.potenza.feature3': 'Système de détection d\'anomalies',
            'projects.potenza.feature4': 'Tableau de bord de performance opérationnelle',
            'projects.custom.title': 'Logiciel Personnalisé pour Cliniques et Énergie',
            'projects.custom.description': 'Systèmes sur mesure pour les cliniques dentaires, les opérations énergétiques, la gestion des stocks et les flux de travail administratifs—entièrement optimisés pour l\'évolutivité et la sécurité.',
            'projects.custom.category': 'Logiciel Personnalisé',
            'projects.custom.feature1': 'Systèmes de gestion de la santé',
            'projects.custom.feature2': 'Plateformes d\'opérations énergétiques',
            'projects.custom.feature3': 'Gestion des stocks et logistique',
            'projects.custom.feature4': 'Architecture évolutive et sécurisée',
            'projects.learn-more': 'En Savoir Plus',
            'projects.contact-us': 'Nous Contacter',
            'projects.view-all': 'Voir Tous les Projets',
            'contact.title': 'Restons en Contact',
            'contact.description': 'Prêt à explorer comment l\'IA peut transformer vos opérations? Envoyez-nous un message et construisons l\'avenir ensemble.',
            'contact.cta.button': 'Envoyez-nous un Message',
            'contact.cta.note': 'Nous répondons généralement dans les 24-48 heures',
            'contact.page.badge': 'Contactez-nous',
            'contact.page.title': 'Construisons Quelque Chose d\'Incroyable Ensemble',
            'contact.page.description': 'Prêt à explorer comment l\'IA peut transformer vos opérations? Nous sommes là pour vous aider. Envoyez-nous un message et discutons de la façon dont nous pouvons concrétiser votre vision.',
            'contact.form.name.label': 'Votre Nom',
            'contact.form.name.placeholder': 'Entrez votre nom complet',
            'contact.form.email.label': 'Votre Email',
            'contact.form.email.placeholder': 'votre.email@exemple.com',
            'contact.form.company.label': 'Entreprise (Optionnel)',
            'contact.form.company.placeholder': 'Nom de votre entreprise',
            'contact.form.subject.label': 'Sujet',
            'contact.form.subject.option.default': 'Sélectionnez un sujet...',
            'contact.form.subject.option.custom-ai': 'Développement IA Personnalisé',
            'contact.form.subject.option.etl': 'ETL et Ingénierie des Données',
            'contact.form.subject.option.dashboards': 'Tableaux de Bord et Analyses',
            'contact.form.subject.option.software': 'Solutions Logicielles Personnalisées',
            'contact.form.subject.option.training': 'Formation et Alphabétisation IA',
            'contact.form.subject.option.general': 'Demande Générale',
            'contact.form.message.label': 'Votre Message',
            'contact.form.message.placeholder': 'Parlez-nous de votre projet ou demande...',
            'contact.form.submit': 'Envoyer le Message',
            'contact.info.email.title': 'Écrivez-nous',
            'contact.info.email.value': 'contact@theatomic.ai',
            'contact.info.response.title': 'Délai de Réponse',
            'contact.info.response.value': 'Nous répondons généralement dans les 24-48 heures',
            'contact.info.location.title': 'Localisation',
            'contact.info.location.value': 'El Salvador, Amérique Centrale',
            'footer.tagline': 'Transformer les entreprises, une innovation atomique à la fois.',
            'footer.explore': 'Explorer',
            'footer.company': 'Entreprise',
            'footer.mission': 'Mission et Vision',
            'footer.connect': 'Se Connecter',
            'footer.rights': 'Tous droits réservés.',
            'footer.privacy': 'Politique de Confidentialité',
            'footer.terms': 'Conditions d\'Utilisation',
        }
    };

    // Language configuration
    const langConfig = {
        en: { code: 'EN', flag: '🇬🇧', name: 'English' },
        es: { code: 'ES', flag: '🇪🇸', name: 'Español' },
        fr: { code: 'FR', flag: '🇫🇷', name: 'Français' }
    };

    // Get current language from localStorage or default to 'en'
    function getCurrentLanguage() {
        return localStorage.getItem('preferredLanguage') || 'en';
    }

    // Set current language
    function setCurrentLanguage(lang) {
        localStorage.setItem('preferredLanguage', lang);
        document.documentElement.lang = lang;
        
        // Update current language indicator
        const currentLangEl = document.getElementById('currentLang');
        if (currentLangEl && langConfig[lang]) {
            currentLangEl.textContent = langConfig[lang].code;
        }
        
        // Update active state in dropdown
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(function(option) {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            }
        });
    }

    // Translate all elements with data-translate attribute
    function translatePage(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(function(element) {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                // Use innerHTML if translation contains HTML tags, otherwise use textContent
                const translation = translations[lang][key];
                if (translation.includes('<') && translation.includes('>')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Translate placeholders
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(function(element) {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Translate select options
        const selectOptions = document.querySelectorAll('option[data-translate-key]');
        selectOptions.forEach(function(option) {
            const key = option.getAttribute('data-translate-key');
            if (key && translations[lang] && translations[lang][key]) {
                option.textContent = translations[lang][key];
            }
        });
    }

    // Initialize language system
    function initLanguage() {
        const currentLang = getCurrentLanguage();
        setCurrentLanguage(currentLang);
        translatePage(currentLang);
    }

    // Language selector functionality
    function initLanguageSelector() {
        // Try to find the language selector - could be in brand-container or navbar
        const langBtn = document.getElementById('langBtn');
        const langDropdown = document.getElementById('langDropdown');
        const langSelector = document.querySelector('.language-selector, .brand-lang-selector');
        const langOptions = document.querySelectorAll('.lang-option');

        if (!langBtn || !langDropdown || !langSelector) return;

        // Toggle dropdown - prevent default and stop propagation
        langBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // Toggle show class
            const isShowing = langDropdown.classList.contains('show');
            if (isShowing) {
                langDropdown.classList.remove('show');
            } else {
                // Close any other open dropdowns first
                document.querySelectorAll('.lang-dropdown.show').forEach(function(dropdown) {
                    dropdown.classList.remove('show');
                });
                langDropdown.classList.add('show');
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            // Check if click is outside both button and dropdown
            if (langSelector && !langSelector.contains(e.target)) {
                langDropdown.classList.remove('show');
            }
        });

        // Prevent dropdown from closing when clicking inside it
        langDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // Handle language selection
        langOptions.forEach(function(option) {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedLang = this.getAttribute('data-lang');
                setCurrentLanguage(selectedLang);
                translatePage(selectedLang);
                
                // Dispatch custom event for language change
                const event = new CustomEvent('languageChanged', { detail: { lang: selectedLang } });
                document.dispatchEvent(event);
                
                langDropdown.classList.remove('show');
                
                // Close mobile menu if open (Bootstrap collapse)
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('in')) {
                    const navbarToggle = document.querySelector('.navbar-toggle');
                    if (navbarToggle) {
                        navbarToggle.click();
                    }
                }
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initLanguage();
            initLanguageSelector();
        });
    } else {
        initLanguage();
        initLanguageSelector();
    }

})();
