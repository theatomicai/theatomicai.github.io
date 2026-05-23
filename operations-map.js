(() => {
  const sections = document.querySelectorAll('[data-operations-map]');
  if (!sections.length) return;

  sections.forEach((section) => {
    const points = Array.from(section.querySelectorAll('[data-op-node]'));
    const cards = Array.from(section.querySelectorAll('[data-op-card]'));
    const paths = Array.from(section.querySelectorAll('[data-op-path]'));
    const panel = section.querySelector('[data-op-panel]');
    const eyebrow = panel && panel.querySelector('[data-op-eyebrow]');
    const title = panel && panel.querySelector('[data-op-title]');
    const meta = panel && panel.querySelector('[data-op-meta]');
    const body = panel && panel.querySelector('[data-op-body]');

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

      if (panel) {
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
})();
