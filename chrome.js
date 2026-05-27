(() => {
  const ROUTES = new Set(['home', 'platforms', 'projects', 'about', 'contact']);
  const NAV_ITEMS = [
    ['home', 'Home', './'],
    ['platforms', 'Platforms', 'platforms.html'],
    ['projects', 'Projects', 'projects.html'],
    ['about', 'About', 'about.html'],
    ['contact', 'Contact', 'contact.html'],
  ];

  const pageCache = new Map();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const bootId = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  let revealObserver = null;
  let isBound = false;
  let navToken = 0;

  const htmlToElement = (html) => {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
  };

  const getBasename = (pathname) => {
    const clean = pathname.replace(/\/+$/, '');
    return clean.slice(clean.lastIndexOf('/') + 1);
  };

  const pageFromUrl = (url) => {
    const file = getBasename(url.pathname);
    if (!file || file === 'index.html') return 'home';
    if (!file.endsWith('.html')) return '';
    const page = file.slice(0, -5);
    return ROUTES.has(page) ? page : '';
  };

  const currentPage = () => {
    const fromBody = document.body.dataset.page;
    return ROUTES.has(fromBody) ? fromBody : pageFromUrl(new URL(window.location.href));
  };

  const cacheKey = (url) => `${url.origin}${url.pathname}${url.search}`;

  const isRoutable = (url) => {
    if (url.origin !== window.location.origin) return false;
    return Boolean(pageFromUrl(url));
  };

  const normalizeIndexUrl = () => {
    if (!window.location.pathname.endsWith('/index.html')) return;
    const clean = new URL('./', window.location.href);
    window.history.replaceState({ page: 'home' }, document.title, clean.pathname + clean.search + clean.hash);
  };

  const navHTML = (page) => {
    const link = ([id, label, href]) => {
      const active = id === page;
      return `<a href="${href}"${active ? ' class="cur" aria-current="page"' : ''}>${label}</a>`;
    };

    return `
      <nav class="nav" data-app-chrome="true" data-screen-label="Nav">
        <div class="wrap nav-inner">
          <a class="nav-brand" href="./">
            <img class="nav-mark" src="assets/logo-atomicw.png" alt="" aria-hidden="true" />
            <span class="nav-name"><b>Atomic</b> AI</span>
          </a>
          <div class="nav-links">
            ${NAV_ITEMS.map(link).join('')}
          </div>
          <div class="nav-right">
            <a class="nav-cta" href="contact.html">Start a project <span class="arrow"></span></a>
          </div>
          <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false">
            <span class="nt-bar"></span>
            <span class="nt-bar"></span>
            <span class="nt-bar"></span>
          </button>
        </div>
        <div class="nav-mobile" aria-hidden="true">
          ${NAV_ITEMS.map(link).join('')}
          <div class="nm-foot">
            <a class="nav-cta" href="contact.html">Start a project <span class="arrow"></span></a>
          </div>
        </div>
      </nav>`;
  };

  const footerHTML = `
    <footer class="foot" data-app-chrome="true">
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
              <li><a href="about.html#careers">Careers &mdash; open</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:contact@theatomic.ai">contact@theatomic.ai</a></li>
              <li>Office &middot; San Salvador &middot; SV</li>
            </ul>
          </div>
        </div>
        <div class="foot-bottom">
          <span>&copy; 2026 ATOMIC AI &middot; ALL RIGHTS RESERVED</span>
          <span>v 4.2.1 &middot; BUILD 2026.05.21</span>
        </div>
      </div>
    </footer>`;

  const getMain = () => document.querySelector('[data-page-root]') || document.getElementById('site-main');

  const ensureMain = () => {
    let main = getMain();
    if (main) return main;

    main = document.createElement('main');
    main.id = 'site-main';
    main.className = 'site-main';
    main.setAttribute('data-page-root', '');
    main.dataset.page = currentPage();

    const movable = Array.from(document.body.children).filter((child) => {
      return !child.matches('.grain, .nav, .foot, script');
    });
    movable.forEach((child) => main.appendChild(child));

    const firstScript = document.body.querySelector('script');
    document.body.insertBefore(main, firstScript || null);
    return main;
  };

  const renderChrome = () => {
    const page = currentPage() || 'home';
    const main = ensureMain();

    if (!document.querySelector('.grain')) {
      document.body.insertBefore(htmlToElement('<div class="grain" aria-hidden="true"></div>'), document.body.firstChild);
    }

    const nextNav = htmlToElement(navHTML(page));
    const oldNav = document.querySelector('.nav');
    if (oldNav) oldNav.replaceWith(nextNav);
    else document.body.insertBefore(nextNav, main);

    const nextFooter = htmlToElement(footerHTML);
    const oldFooter = document.querySelector('.foot');
    if (oldFooter) oldFooter.replaceWith(nextFooter);
    else document.body.insertBefore(nextFooter, document.body.querySelector('script') || null);

    updateNavState(page);
    updateNavBorder();
  };

  const updateNavState = (page) => {
    document.querySelectorAll('.nav-links > a, .nav-mobile > a').forEach((anchor) => {
      const anchorPage = pageFromUrl(new URL(anchor.getAttribute('href'), window.location.href));
      const active = anchorPage === page;
      anchor.classList.toggle('cur', active);
      if (active) anchor.setAttribute('aria-current', 'page');
      else anchor.removeAttribute('aria-current');
    });
  };

  const closeMobileNav = () => {
    const nav = document.querySelector('.nav');
    const toggle = nav && nav.querySelector('.nav-toggle');
    const panel = nav && nav.querySelector('.nav-mobile');
    if (!nav || !toggle || !panel) return;
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const setMobileNav = (open) => {
    const nav = document.querySelector('.nav');
    const toggle = nav && nav.querySelector('.nav-toggle');
    const panel = nav && nav.querySelector('.nav-mobile');
    if (!nav || !toggle || !panel) return;
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    panel.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.style.overflow = open ? 'hidden' : '';
  };

  const updateNavBorder = () => {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    nav.style.borderBottomColor = window.scrollY > 8 ? 'rgba(15,27,51,0.22)' : 'rgba(15,27,51,0.14)';
  };

  const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

  const loadPage = async (url) => {
    const key = cacheKey(url);
    if (pageCache.has(key)) return pageCache.get(key);

    const request = fetch(url.href, {
      headers: { 'X-Atomic-Navigation': 'partial' },
      credentials: 'same-origin',
    }).then((response) => {
      if (!response.ok) throw new Error(`Navigation failed: ${response.status}`);
      return response.text();
    });

    pageCache.set(key, request);
    return request;
  };

  const extractMain = (doc, url) => {
    const root = doc.querySelector('[data-page-root]') || doc.getElementById('site-main');
    const page = (root && root.dataset.page) || doc.body.dataset.page || pageFromUrl(url);
    if (root) return { page, root };

    const fallback = doc.createElement('main');
    fallback.id = 'site-main';
    fallback.className = 'site-main';
    fallback.setAttribute('data-page-root', '');
    fallback.dataset.page = page;

    Array.from(doc.body.children).forEach((child) => {
      if (!child.matches('.grain, .nav, .foot, script')) fallback.appendChild(child.cloneNode(true));
    });

    return { page, root: fallback };
  };

  const setDocumentFromPage = async (html, url) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const { page, root } = extractMain(doc, url);
    const oldMain = ensureMain();
    const nextMain = document.importNode(root, true);

    nextMain.id = 'site-main';
    nextMain.classList.add('site-main', 'is-swapping');
    nextMain.setAttribute('data-page-root', '');
    nextMain.dataset.page = page;

    oldMain.classList.add('is-swapping');
    if (!reduceMotion) await wait(130);

    document.title = doc.title || document.title;
    document.body.dataset.page = page;
    oldMain.replaceWith(nextMain);
    renderChrome();
    initPage(nextMain);

    requestAnimationFrame(() => nextMain.classList.remove('is-swapping'));
  };

  const scrollToHash = (hash) => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    const target = document.getElementById(id);
    if (!target) return;

    requestAnimationFrame(() => {
      target.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  };

  const navigate = async (href, options = {}) => {
    const push = options.push !== false;
    const url = new URL(href, window.location.href);
    const nextPage = pageFromUrl(url);
    const activePage = currentPage();

    if (!isRoutable(url)) {
      window.location.href = url.href;
      return;
    }

    closeMobileNav();

    if (nextPage === activePage) {
      if (push) window.history.pushState({ page: nextPage }, '', url.pathname + url.search + url.hash);
      updateNavState(nextPage);
      scrollToHash(url.hash);
      return;
    }

    const token = ++navToken;
    document.body.classList.add('is-routing');

    try {
      const html = await loadPage(url);
      if (token !== navToken) return;
      await setDocumentFromPage(html, url);
      if (push) window.history.pushState({ page: nextPage }, '', url.pathname + url.search + url.hash);
      scrollToHash(url.hash);
    } catch (error) {
      console.warn(error);
      window.location.href = url.href;
    } finally {
      if (token === navToken) document.body.classList.remove('is-routing');
    }
  };

  const prefetch = (href) => {
    const url = new URL(href, window.location.href);
    if (!isRoutable(url) || pageFromUrl(url) === currentPage()) return;
    loadPage(url).catch(() => {});
  };

  const initReveal = (root = document) => {
    if (revealObserver) revealObserver.disconnect();

    const els = Array.from(root.querySelectorAll('.reveal'));
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    els.forEach((el) => revealObserver.observe(el));
  };

  const initTicker = (root = document) => {
    const ticker = root.querySelector('#ticker');
    if (!ticker || ticker.dataset.ready === 'true') return;

    const items = [
      ['LIVE', 'Mia &mdash; Mentor System', 'TGU &middot; HN'],
      ['LIVE', 'Potenza &mdash; Solar Ops', 'SAL &middot; SV'],
      ['LIVE', 'Ortodoncia &mdash; Clinical Ops', 'SAL &middot; SV'],
      ['DEPLOY', 'ACTEMP Knowledge Portal', 'LATAM &middot; ILO'],
      ['LIVE', 'Custom Software &mdash; Clinics', 'SAL &middot; SV'],
      ['READY', 'AI Literacy &mdash; Training', 'LATAM'],
      ['INDEX', 'Semantic Layer &middot; v4.2.1', 'global'],
      ['OBS', 'Stream OK &mdash; 14,892 ev/s', 'observer'],
    ];

    const html = items.map(([tag, body, geo]) => `
      <span class="t-item">
        <span class="tag">&#9679; ${tag}</span>
        <span>${body}</span>
        <span class="geo">${geo}</span>
      </span>`).join('');

    ticker.innerHTML = html + html;
    ticker.dataset.ready = 'true';
  };

  const initProjectGrid = (root = document) => {
    const grid = root.querySelector('#proj-inv-grid');
    if (!grid || grid.dataset.ready === 'true') return;

    const colors = { ok: '#6BBF7A33', md: '#D9A441cc', hi: '#2A6FDBcc' };
    const states = Array.from({ length: 38 }, (_, index) => {
      if (index === 13) return 'hi';
      if (index === 21) return 'md';
      return 'ok';
    });

    grid.innerHTML = states.map((state) => {
      return `<span style="display:block;height:14px;border:1px solid rgba(232,228,221,0.18);background:${colors[state]};"></span>`;
    }).join('');
    grid.dataset.ready = 'true';
  };

  const initOperationsMaps = (root = document) => {
    root.querySelectorAll('[data-operations-map]').forEach((section) => {
      if (section.dataset.operationsMapReady === 'true') return;
      section.dataset.operationsMapReady = 'true';

      const points = Array.from(section.querySelectorAll('[data-op-node]'));
      const cards = Array.from(section.querySelectorAll('[data-op-card]'));
      const paths = Array.from(section.querySelectorAll('[data-op-path]'));
      const panel = section.querySelector('[data-op-panel]');
      const eyebrow = panel && panel.querySelector('[data-op-eyebrow]');
      const title = panel && panel.querySelector('[data-op-title]');
      const meta = panel && panel.querySelector('[data-op-meta]');
      const body = panel && panel.querySelector('[data-op-body]');

      if (!points.length || !cards.length) return;

      const setActive = (id) => {
        const activePoint = points.find((point) => point.dataset.opNode === id);
        const activeCard = cards.find((card) => card.dataset.opCard === id);
        if (!activePoint || !activeCard) return;

        points.forEach((point) => {
          const active = point === activePoint;
          point.classList.toggle('is-active', active);
          point.setAttribute('aria-pressed', active ? 'true' : 'false');
        });

        cards.forEach((card) => card.classList.toggle('is-active', card === activeCard));
        paths.forEach((path) => {
          const related = path.dataset.opPath.split(' ').includes(id);
          path.classList.toggle('is-active', related);
        });

        if (panel && eyebrow && title && meta && body) {
          eyebrow.textContent = `${activeCard.dataset.state} / ${activeCard.dataset.region}`;
          title.textContent = activeCard.dataset.title;
          meta.textContent = activeCard.dataset.meta;
          body.textContent = activeCard.dataset.body;
        }
      };

      points.forEach((point) => {
        point.addEventListener('mouseenter', () => setActive(point.dataset.opNode));
        point.addEventListener('focus', () => setActive(point.dataset.opNode));
        point.addEventListener('click', () => setActive(point.dataset.opNode));
      });

      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => setActive(card.dataset.opCard));
        card.addEventListener('focus', () => setActive(card.dataset.opCard));
        card.addEventListener('click', () => setActive(card.dataset.opCard));
      });

      setActive(section.dataset.defaultNode || points[0].dataset.opNode);
    });
  };

  const initHeroMark = (root = document) => {
    root.querySelectorAll('.hero-mark-stack').forEach((stack) => {
      if (stack.dataset.heroMarkReady === 'true') return;
      stack.dataset.heroMarkReady = 'true';

      if (reduceMotion) {
        stack.classList.add('is-final');
        return;
      }

      const finalMark = stack.querySelector('.hero-mark-final');
      const revealFinal = () => {
        if (stack.isConnected) stack.classList.add('is-final');
      };

      window.setTimeout(() => {
        if (!finalMark || finalMark.complete || typeof finalMark.decode !== 'function') {
          revealFinal();
          return;
        }

        finalMark.decode().then(revealFinal).catch(revealFinal);
      }, 7600);
    });
  };

  const initPage = (root = document) => {
    initReveal(root);
    initTicker(root);
    initProjectGrid(root);
    initOperationsMaps(root);
    initHeroMark(root);
  };

  const bindShell = () => {
    if (isBound) return;
    isBound = true;

    document.addEventListener('click', (event) => {
      const toggle = event.target.closest('.nav-toggle');
      if (toggle) {
        event.preventDefault();
        const nav = document.querySelector('.nav');
        setMobileNav(!(nav && nav.classList.contains('open')));
        return;
      }

      const link = event.target.closest('a[href]');
      if (!link || event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.target && link.target !== '_self') return;
      if (link.hasAttribute('download')) return;

      const url = new URL(link.getAttribute('href'), window.location.href);
      if (!isRoutable(url)) return;

      event.preventDefault();
      navigate(url.href);
    });

    document.addEventListener('pointerenter', (event) => {
      const link = event.target.closest && event.target.closest('a[href]');
      if (link) prefetch(link.getAttribute('href'));
    }, true);

    document.addEventListener('focusin', (event) => {
      const link = event.target.closest && event.target.closest('a[href]');
      if (link) prefetch(link.getAttribute('href'));
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 880) closeMobileNav();
    });

    window.addEventListener('scroll', updateNavBorder, { passive: true });

    window.addEventListener('popstate', () => {
      navigate(window.location.href, { push: false });
    });
  };

  const boot = () => {
    normalizeIndexUrl();
    document.documentElement.dataset.atomicBootId = bootId;
    document.body.dataset.page = currentPage() || 'home';
    renderChrome();
    bindShell();
    initPage(getMain() || document);

    requestAnimationFrame(() => {
      document.body.classList.add('page-ready');
      scrollToHash(window.location.hash);
    });
  };

  window.AtomicAIChrome = {
    bootId,
    navigate,
    initPage,
  };

  boot();
})();
