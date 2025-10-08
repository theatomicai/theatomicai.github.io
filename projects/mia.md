---
permalink: /mia
layout: null
---
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Mia — Mentora de Negocios en WhatsApp (Honduras)</title>
<meta name="description" content="Mia es una mentora 24/7 en WhatsApp que ayuda a microempresarios y microempresarias a mejorar marketing, precios, finanzas y más — basada en SIYB de la OIT." />
<style>
  /* ----- Reset (scoped) ----- */
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  img, svg { display: block; max-width: 100%; height: auto; }
  audio, video { width: 100%; }

  /* ----- Tema claro (paleta brillante) ----- */
  :root {
    --bg: #faf6ee;            /* arena cálida */
    --panel: #ffffff;          /* tarjetas en claro */
    --ink: #1f2937;            /* slate-800 */
    --muted: #5b6570;          /* slate-500 */
    --brandA: #25d366;         /* verde WhatsApp */
    --brandB: #ffb703;         /* ámbar cálido */
    --brandC: #0ea5a3;         /* teal acento */
    --shadow: 0 10px 30px rgba(31,41,55,.12);
    --radius: 16px;
  }
  body {
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji";
    color: var(--ink);
    background:
      radial-gradient(800px 500px at 90% -5%, rgba(37,211,102,.20), transparent 60%),
      radial-gradient(600px 400px at -10% 0%, rgba(255,183,3,.20), transparent 55%),
      var(--bg);
    line-height: 1.6;
  }
  a { color: var(--brandC); text-decoration: none; }
  a:hover { text-decoration: underline; }

  /* ----- Layout helpers ----- */
  .wrap { width: min(1120px, 92vw); margin: 0 auto; }
  .section { padding: 50px 0; }
  .grid { display: grid; gap: 24px; }
  @media (min-width: 900px) { .grid.cols-2 { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1100px) { .grid.cols-3 { grid-template-columns: repeat(3, 1fr); } }

  /* ----- Superficies ----- */
  .card {
    background: #fff;
    border: 1px solid rgba(17,24,39,.08);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 24px;
    color: var(--ink);
  }
  .pill {
    display: inline-flex; align-items: center; gap: 8px;
    background: linear-gradient(90deg, rgba(37,211,102,.18), rgba(255,183,3,.18));
    border: 1px solid rgba(17,24,39,.08);
    padding: 8px 14px; border-radius: 999px; font-weight: 600; letter-spacing: .2px; color: var(--ink);
  }

  /* ----- Encabezado / Hero ----- */
  header.hero { padding: 96px 0 48px; position: relative; overflow: hidden; background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,183,3,.08) 100%); }
  .brand {
    font-weight: 800; letter-spacing: .3px; font-size: clamp(28px, 3.6vw, 42px);
    line-height: 1.15;
    background: linear-gradient(90deg, var(--brandA), var(--brandB));
    -webkit-background-clip: text; background-clip: text; color: transparent;
    margin: 12px 0 0;
  }
  .sub { color: var(--muted); font-size: clamp(16px, 1.8vw, 18px); max-width: 70ch; }
  .cta-row { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 24px; }
  .btn { display: inline-flex; align-items: center; gap: 10px; border-radius: 12px; padding: 12px 16px; border: 1px solid rgba(17,24,39,.12); font-weight: 700; }
  .btn.primary { background: linear-gradient(90deg, var(--brandA), var(--brandB)); color: #ffffff; border: none; }
  .btn.ghost { background: rgba(255,255,255,.9); color: var(--ink); }

  .hero-grid { display: grid; gap: 28px; align-items: center; }
  @media (min-width: 980px) { .hero-grid { grid-template-columns: 1.2fr .8fr; } }
  .hero-img { border-radius: 20px; border: 1px solid rgba(17,24,39,.08); box-shadow: var(--shadow); overflow: hidden; background:#fff; }

  /* ----- Audio panel ----- */
  .audio-panel h5 { margin: 0 0 6px; font-size: 15px; letter-spacing: .2px; }
  .caption { color: var(--muted); font-size: 14px; margin-top: 10px; }

  /* ----- Lista de capacidades ----- */
  .feat { display: flex; gap: 14px; align-items: flex-start; }
  .feat .dot { width: 10px; height: 10px; border-radius: 999px; background: var(--brandA); margin-top: 8px; flex: none; }

  /* ----- Testimonios ----- */
  blockquote { margin: 0; font-size: 18px; color: var(--ink); }
  .quote { border-left: 3px solid var(--brandA); padding-left: 16px; }
  .who { color: var(--muted); font-size: 14px; margin-top: 10px; }

  /* ----- Galería WhatsApp ----- */
  .gallery { display: grid; gap: 16px; }
  @media (min-width: 780px) { .gallery { grid-template-columns: repeat(3, 1fr); } }
  .shot { border-radius: 16px; border: 1px solid rgba(17,24,39,.08); box-shadow: var(--shadow); overflow: hidden; background:#fff; }

  /* ----- Video vertical (9:16) ----- */
  .video-portrait { position: relative; width: 100%; padding-top: 177.78%; border-radius: 18px; overflow: hidden; border: 1px solid rgba(17,24,39,.08); box-shadow: var(--shadow); background:#000; }
  .video-portrait > video, .video-portrait > iframe { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }

  /* ----- Footer ----- */
  footer { padding: 44px 0 72px; color: var(--muted); font-size: 14px; }

  /* ----- Headings ----- */
  h1, h2, h3 { margin: 10px 0 12px; }
  h2 { font-size: clamp(24px, 2.6vw, 32px); }
  h3 { font-size: clamp(20px, 2vw, 24px); color: var(--muted); }

  /* ----- Utils ----- */
  .mt-8{ margin-top: 8px; } .mt-12{ margin-top: 12px; } .mt-16{ margin-top: 16px; } .mt-24{ margin-top: 24px; }
  .center { text-align: center; }

  /* Wrapper limpio para video vertical */
  .mia-video {
      width: 100%;
      /* angosto en desktop, full en móvil */
      max-width: clamp(300px, 32vw, 440px);
      margin-inline: auto;
      border-radius: 18px;
      overflow: hidden;
      border: 1px solid rgba(17,24,39,.08);
      box-shadow: var(--shadow);
      background: #000;
  }

  /* El video ocupa el ancho del wrapper, sin recortes */
  .mia-video > video {
      display: block;
      width: 100%;
      height: auto;          /* mantiene proporción natural 9:16 */
      /* si quieres reservar espacio antes de cargar, puedes fijar: */
      aspect-ratio: 9 / 16;
  }

  /* ----- Footer con logos ----- */
  footer {
    border-top: 1px solid rgba(17,24,39,.08);
  }

  .footer-logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(12px, 2.4vw, 28px);
    flex-wrap: wrap;
    margin-bottom: 14px;
  }

  .footer-logos a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 4px 6px;
    border-radius: 10px;
    transition: transform .18s ease, filter .18s ease, opacity .18s ease;
  }

  .footer-logos img {
    display: block;
    <!-- height: clamp(22px, 2.8vw, 38px);  /* controla la altura visual */ -->
    height: 8rem;  /* controla la altura visual */
    max-width: 220px;
    width: auto;
    object-fit: contain;
    filter: grayscale(10%);
    opacity: .95;
  }

  .footer-logos a:hover img {
    filter: none;
    opacity: 1;
    transform: translateY(-1px);
  }

  /* Nota de footer más discreta */
  .footer-note {
  color: var(--muted);
  font-size: 14px;
  }

  .logo-ccit img { height: 40px; }

  .footer-logos{
    display:flex; gap:3rem; justify-content:center; align-items:flex-start; flex-wrap:wrap;
    text-align:center;
  }
  .footer-logos a.logo-item{
    display:inline-flex; flex-direction:column; align-items:center; text-decoration:none;
  }
  .footer-logos .logo-caption{
    margin:0 0 .5rem 0; font-weight:600; line-height:1.2;
    color:#1db6a6; /* opcional para ese verde agua */
  }
  .footer-logos img{ height:5rem; max-width:12rem; object-fit:contain; }
  .footer-logos img.actemp{ height:7rem; max-width:20rem; } /* ACT/EMP más grande */

</style>

<body>
  <!-- HERO -->
  <header class="hero">
    <div class="wrap hero-grid">
      <div>
        <span class="pill">Asesoría • WhatsApp • 24/7 • Honduras</span>
        <h1 class="brand">Mia: Mentora con Inteligencia Artificial para Microempresas</h1>
        <p class="sub mt-12">
        Acompañamiento práctico basado en <a href="https://www.ilo.org/publications/siyb-implementation-guide">Inicie y Mejore su Negocio (IMESUN)</a> de la OIT y el Programa Formaliza Tu Negocio de CCIT—directo en WhatsApp, al acceso de los emprendedores.</p>
        <div class="cta-row">
          <a class="btn primary" href="#conversaciones">Escuchar ejemplo real</a>
          <a class="btn ghost" href="#capacidades">¿Qué puede hacer Mia?</a>
        </div>
      </div>
      <div class="hero-img">
        <!-- Ilustración destacada -->
        <img src="{{ '/assets/projects/mia/images/mia.jpeg' | relative_url }}" alt="Mia, asesora de negocios"/>
      </div>
    </div>
  </header>

  <!-- ILUSTRACIONES (2 piezas) -->
  <section class="section">
    <div class="wrap">
      <h2 class="text-3xl md:text-5xl font-bold">Conoce a Mia</h2>
      <p class="mt-8" style="font-size: 1.1rem; line-height: 1.6;">
        Los empresarios y empresarias pueden conversar con Mia en tiempo real, por voz, texto o imágenes. Una forma práctica y cercana de recibir orientación personalizada para hacer crecer su negocio.
      </p>
      <div class="card mt-16" style="font-size: 1.1rem; line-height: 1.5;">
        <em>“Ana, calculemos tu punto de equilibrio juntas. ¿Cuáles son tus costos fijos del mes?”</em>
      </div>
      <div class="grid cols-2 mt-16">
        <figure class="card">
          <img src="{{ '/assets/projects/mia/images/mia-whatsapp-ejemplo-5.jpeg' | relative_url }}" alt="Ilustración: Mia, asesora" />
          <figcaption class="caption mt-8">Mia respondiendo con notas de voz.</figcaption>
        </figure>
        <figure class="card">
          <img src="{{ '/assets/projects/mia/images/mia-whatsapp-ejemplo-1.jpeg' | relative_url }}" alt="Ilustración: Mia con interface de WhatsApp" />
          <figcaption class="caption mt-8">Los empresarios y empresarias pueden compartir notas a mano.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- CONVERSACIONES (Audio) -->
  <section id="conversaciones" class="section">
    <div class="wrap">
      <h2>Conversaciones Reales</h2>
      <p class="mt-8" style="font-size: 1.1rem; line-height: 1.6;"> 
        Una de las funciones favoritas de los empresarios y empresarias es que Mia <strong>responde con notas de voz</strong>: una forma más cercana, natural y al ritmo de cada conversación.
      </p>
      <div class="grid cols-2 mt-16">
        <div class="card audio-panel">
          <h5>Nota de voz del emprendedor</h5>
          <audio controls>
            <source src="{{ '/assets/projects/mia/audios/empresario1.mp3' | relative_url }}" type="audio/mpeg" />
          </audio>
          <p class="caption">Consulta de un empresario sobre cómo poner precio a productos hechos a mano.</p>
        </div>
        <div class="card audio-panel">
          <h5>Respuesta de Mia</h5>
          <audio controls>
            <source src="{{ '/assets/projects/mia/audios/mia_responde1.mp3' | relative_url }}" type="audio/mpeg" />
          </audio>
          <p class="caption">Mia le explica el costo, el margen del producto y realiza una verificación rápida del punto de equilibrio.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CAPACIDADES -->
  <section id="capacidades" class="section">
    <div class="wrap">
      <h2>¿Qué puede hacer Mia?</h2>
      <p class="mt-8" style="font-size: 1.1rem; line-height: 1.6;">Mia acompaña al empresario (a) identificando oportunidades reales de mejora, adaptadas a su perfil y ritmo. Es como tener una mentora de alto nivel siempre a tu lado. Estos son los temas principales en los que Mia brinda asesoría empresarial, con base en la metodología IMESUN y las guías legales de la CCIT:</p>

      <div class="grid cols-3 mt-16">
        <div class="card feat"><span class="dot"></span><div><strong>Marketing</strong><br><span class="caption">Clientes, mensajes y promos simples que mueven producto.</span></div></div>
        <div class="card feat"><span class="dot"></span><div><strong>Costos y Precios</strong><br><span class="caption">Conoce tus costos, define márgenes y cobra con seguridad.</span></div></div>
        <div class="card feat"><span class="dot"></span><div><strong>Gestión Financiera</strong><br><span class="caption">Flujo de caja y registros básicos para mejores decisiones.</span></div></div>
        <div class="card feat"><span class="dot"></span><div><strong>Plan de Negocio</strong><br><span class="caption">De la idea a la acción—planes cortos que sí se usan.</span></div></div>
        <div class="card feat"><span class="dot"></span><div><strong>Inventario</strong><br><span class="caption">Qué comprar, cuándo reponer y cuánto mantener.</span></div></div>
        <div class="card feat"><span class="dot"></span><div><strong>Personas y Roles</strong><br><span class="caption">Tareas claras, incentivos simples y mejoras de productividad </span></div></div>

        <div class="card feat"><span class="dot"></span><div><strong>Legal</strong><br><span class="caption">Apoyo en la formalización de negocios con base al contexto legal de Honduras.</span></div></div>
      </div>
    </div>
  </section>

  <!-- POR QUÉ IMPORTA -->
  <section class="section">
    <div class="wrap">
        <h2>¿Por qué Mia?</h2>
        <p class="mt-8">
        La mayoría de microempresas en la economía informal no tienen acceso a formación empresarial de alto nivel. 
        <strong>Mia</strong> ofrece una solución inovadora, escalable, de bajo costo y alta calidad, brindando asesoría en tiempo real y según las necesidades de cada empresario y empresaria.  
        Su <strong>apoyo continuo</strong>, <strong>lógica personalizada</strong> y <strong>estrategia financiera</strong> generan confianza y resultados sostenibles a gran escala.
        </p>

        <div class="grid cols-3 mt-16">
        <div class="card">
            <strong>Siempre activa</strong><br>
            <span class="caption">Disponible día y noche dentro de WhatsApp. Sin nuevas apps ni complicaciones para los empresarios y empresarias.</span>
        </div>
        <div class="card">
            <strong>Con contexto</strong><br>
            <span class="caption">Recuerda el historial y adapta la guía al perfil y ritmo de cada persona.</span>
        </div>
        <div class="card">
            <strong>En acción</strong><br>
            <span class="caption">Propone pasos cortos, prácticos y medibles que impulsan el progreso real.</span>
        </div>
        </div>

  <!-- GALERÍA: CAPTURAS WHATSAPP (5) -->
  <section class="section">
    <div class="wrap">
      <h2>¿Cómo se ve en WhatsApp?</h2>
      <p class="mt-8">Algunos ejemplos reales de interacción (texto, voz e imágenes).</p>
      <div class="gallery mt-16">
        <figure class="shot"><img src="{{ '/assets/projects/mia/images/mia-whatsapp-ejemplo-0.jpeg' | relative_url }}" alt="Chat 1 con Mia" /></figure>
        <figure class="shot"><img src="{{ '/assets/projects/mia/images/mia-whatsapp-ejemplo-1.jpeg' | relative_url }}" alt="Chat 2 con Mia" /></figure>
        <figure class="shot"><img src="{{ '/assets/projects/mia/images/mia-whatsapp-ejemplo-2.jpeg' | relative_url }}" alt="Chat 3 con Mia" /></figure>
        <figure class="shot"><img src="{{ '/assets/projects/mia/images/mia-whatsapp-ejemplo-3.jpeg' | relative_url }}" alt="Chat 4 con Mia" /></figure>
        <figure class="shot"><img src="{{ '/assets/projects/mia/images/mia-whatsapp-ejemplo-4.jpeg' | relative_url }}" alt="Chat 5 con Mia" /></figure>
        <figure class="shot"><img src="{{ '/assets/projects/mia/images/mia-whatsapp-ejemplo-5.jpeg' | relative_url }}" alt="Chat 6 con Mia" /></figure>
      </div>
    </div>
  </section>

  <!-- VIDEO VERTICAL (PROMO/DEMO) -->
  <section class="section">
    <div class="wrap">
      <h2>Vídeo: Mia en acción</h2>
      <p class="mt-8">Demostración corta de Mia resolviendo dudas dentro del chat.</p>
      <div class="mia-video">
        <video controls playsinline poster="{{ '/assets/projects/mia/images/mia.jpeg' | relative_url }}">
            <source src="{{ '/assets/projects/mia/videos/promoting-mia.mp4' | relative_url }}" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>

  <!-- TESTIMONIOS -->
  <section class="section">
    <div class="wrap">
      <h2>¿Qué opinan los empresarios y empresarias?</h2>
      ¡El 90% de los empresarios que han utilizado a Mia consideran que es útil para su negocio!
      <div class="grid cols-2 mt-16">
        <div class="card">
          <blockquote class="quote">“Gracias Mia. Ahora sí entiendo cuánto debo cobrar para no perder.”</blockquote>
          <div class="who">Emprendedora — Honduras</div>
        </div>
        <div class="card">
          <blockquote class="quote">“Mia me ha ayudado muchísimo… no solo con el plan de negocios, también a conseguir clientes y sacar mis costos.”</blockquote>
          <div class="who">Emprendedora — Honduras</div>
        </div>
        <div class="card">
          <blockquote class="quote">“Estoy feliz con Mia. ¡Se ha vuelto mi mejor amiga en el negocio!”</blockquote>
          <div class="who">Emprendedora — Honduras</div>
        </div>
                <div class="card">
          <blockquote class="quote">“¡Mia me ha ayudado a tener mis finanzas en orden!”</blockquote>
          <div class="who">Emprendedora — Honduras</div>
        </div>
      </div>
    </div>
  </section>

  <!-- DETRÁS DE CÁMARAS / CTA -->
  <section class="section">
    <div class="wrap">
      <h2>Midiendo impacto</h2>
      <p class="mt-8 text-2xl md:text-3xl leading-relaxed">
        En solo tres meses, Mia ha recibido más de <strong>50,000 mensajes</strong>, <strong>4,000 audios</strong> y <strong>2,000 fotos</strong>—cada uno una historia de aprendizaje y mejora!
        <br><br>
        Estamos analizando cómo <strong>Mia</strong> impulsa el crecimiento real de los negocios: mejora los <strong>ingresos</strong>, la <strong>confianza al fijar precios</strong> y los <strong>hábitos financieros</strong> de los empresarios. Muy pronto compartiremos los resultados de este impacto.
      </p>      
      <div class="card mt-16">
        <div class="grid cols-2">
          <div>
            <h3>¿Colaboramos?</h3>
            <p class="mt-8">Si querés explorar un piloto o entender mejor cómo funciona Mia, conversemos.</p>
          </div>
          <div>
            <div class="cta-row">
              <a class="btn primary" href="mailto:contact@theatomic.ai">Escribir al equipo</a>
              <a class="btn ghost" href="https://wa.me/50378443781">Chatear (demo)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<footer class="wrap center">
  <nav class="footer-logos" aria-label="Aliados y organizadores">
    <a href="https://ccit.hn" target="_blank" rel="noopener" class="logo-item">
      <span class="logo-caption">Implementado por</span>
      <img src="{{ '/assets/projects/mia/images/ccit.png' | relative_url }}" alt="CCIT — Cámara de Comercio e Industria de Tegucigalpa"  style="height: 10rem; max-width: 25rem !important;">
    </a>

    <a href="https://www.ilo.org" target="_blank" rel="noopener" class="logo-item">
      <span class="logo-caption">Financiado por</span>
      <img class="actemp" src="{{ '/assets/projects/mia/images/actemp.png' | relative_url }}" alt="OIT — ACT/EMP" style="height: 10rem; max-width: 25rem !important;">
    </a>

    <a href="https://theatomic.ai" target="_blank" rel="noopener" class="logo-item">
      <span class="logo-caption">Desarrollado por</span>
      <img src="{{ '/assets/img/logos/logo_light_blue.png' | relative_url }}" alt="Atomic AI" style="height: 10rem; max-width: 25rem !important;">
    </a>
  </nav>

  <small class="footer-note">© <span id="y"></span> Mia - MentorIA CCIT Honduras</small>
</footer>

  <script>
    document.getElementById('y').textContent = new Date().getFullYear();
  </script>