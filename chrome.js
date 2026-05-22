/* Shared nav + footer chrome — injected on every sub-page.
   Pass current page id via <body data-page="platforms"> etc. */
(() => {
  const cur = document.body.dataset.page || '';

  const navHTML = `
  <nav class="nav">
    <div class="wrap nav-inner">
      <a class="nav-brand" href="index.html">
        <img class="nav-mark" src="assets/logo-atomicw.png" alt="" aria-hidden="true" />
        <span class="nav-name"><b>Atomic</b> AI</span>
      </a>
      <div class="nav-links">
        <a href="index.html"     ${cur==='home'?'class="cur"':''}>Home</a>
        <a href="platforms.html" ${cur==='platforms'?'class="cur"':''}>Platforms</a>
        <a href="projects.html"  ${cur==='projects'?'class="cur"':''}>Projects</a>
        <a href="about.html"     ${cur==='about'?'class="cur"':''}>About</a>
        <a href="contact.html"   ${cur==='contact'?'class="cur"':''}>Contact</a>
      </div>
      <div class="nav-right">
        <span class="nav-locale">EN · ES &nbsp;/&nbsp; SJO · SAL · TGU</span>
        <a class="nav-cta" href="contact.html">Start a project <span class="arrow"></span></a>
      </div>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span class="nt-bar"></span>
        <span class="nt-bar"></span>
        <span class="nt-bar"></span>
      </button>
    </div>
    <div class="nav-mobile" aria-hidden="true">
      <a href="index.html"     ${cur==='home'?'class="cur"':''}>Home</a>
      <a href="platforms.html" ${cur==='platforms'?'class="cur"':''}>Platforms</a>
      <a href="projects.html"  ${cur==='projects'?'class="cur"':''}>Projects</a>
      <a href="about.html"     ${cur==='about'?'class="cur"':''}>About</a>
      <a href="contact.html"   ${cur==='contact'?'class="cur"':''}>Contact</a>
      <div class="nm-foot">
        <span class="mono">EN · ES &nbsp;/&nbsp; SJO · SAL · TGU</span>
        <a class="nav-cta" href="contact.html">Start a project <span class="arrow"></span></a>
      </div>
    </div>
  </nav>`;

  const footerHTML = `
  <footer class="foot">
    <div class="wrap">
      <div class="foot-grid">
        <div class="brand-blk">
          <div class="name"><img class="mk" src="assets/logo-atomicw-white.png" alt="" aria-hidden="true" />Atomic <span class="it">AI</span></div>
          <p>Human-centered AI infrastructure for institutions and enterprises. Headquartered in San Salvador, with deployments across Central America. Bilingual by default.</p>
        </div>
        <div>
          <h5>Platforms</h5>
          <ul>
            <li><a href="platforms.html#mentor">Mentor Systems</a></li>
            <li><a href="platforms.html#knowledge">Institutional Knowledge</a></li>
            <li><a href="platforms.html#operational">Operational Intelligence</a></li>
            <li><a href="platforms.html#learning">AI Learning</a></li>
            <li><a href="platforms.html#retrieval">Semantic Retrieval</a></li>
            <li><a href="platforms.html#workflows">Enterprise Workflows</a></li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="about.html#partners">Partners</a></li>
            <li><a href="about.html#careers">Careers — open</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li><a href="mailto:contact@theatomic.ai">contact@theatomic.ai</a></li>
            <li>San Salvador · SV</li>
            <li>San José · CR</li>
            <li>Tegucigalpa · HN</li>
          </ul>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 ATOMIC AI · ALL RIGHTS RESERVED</span>
        <span>v 4.2.1 · BUILD 2026.05.21</span>
        <span>EN · ES</span>
      </div>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // mobile nav toggle
  const nav = document.querySelector('.nav');
  const toggle = nav && nav.querySelector('.nav-toggle');
  const panel = nav && nav.querySelector('.nav-mobile');
  if (toggle && panel) {
    const setOpen = (open) => {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.style.overflow = open ? 'hidden' : '';
    };
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    window.addEventListener('resize', () => { if (window.innerWidth > 880) setOpen(false); });
  }

  // reveal-on-scroll
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  els.forEach(el => io.observe(el));
})();
