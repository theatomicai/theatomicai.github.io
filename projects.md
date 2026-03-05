---
layout: page
title: Case Studies
permalink: /projects
---

<main class="projects-page">
  <header class="projects-hero">
    <div class="container">
      <div class="projects-hero-inner">
        <span class="projects-kicker">Case Studies</span>
        <h1>Real systems. Real outcomes.</h1>
        <p>Explore architecture-level delivery across LLM applications, analytics, data engineering, and custom software platforms.</p>

        <div class="projects-hero-stats">
          <article class="projects-stat">
            <strong>4+</strong>
            <span>Case studies</span>
          </article>
          <article class="projects-stat">
            <strong>50k+</strong>
            <span>Messages processed</span>
          </article>
          <article class="projects-stat">
            <strong>Multi</strong>
            <span>Modal (text, voice, image)</span>
          </article>
        </div>

        <nav class="projects-filters" aria-label="Filter case studies">
          <button type="button" class="is-active" data-filter="all">All</button>
          <button type="button" data-filter="llm">LLM Applications</button>
          <button type="button" data-filter="analytics">AI Analytics</button>
          <button type="button" data-filter="data">Data Engineering</button>
          <button type="button" data-filter="platforms">Custom Platforms</button>
        </nav>
      </div>
    </div>
  </header>

  <section class="projects-list">
    <div class="container">
      <div class="projects-grid" id="projectsGrid">
        <article class="projects-card featured" data-category="llm">
          <a class="projects-card-link" href="{{ '/case-studies/mia' | relative_url }}">
            <div class="media">
              <img src="{{ '/assets/projects/mia/images/mia.jpeg' | relative_url }}" alt="Mia case study" loading="lazy">
              <div class="tag-row">
                <span class="tag tag-brand">Verified</span>
                <span class="tag">WhatsApp</span>
                <span class="tag">Multimodal</span>
              </div>
            </div>
            <div class="body">
              <h3>Mia WhatsApp AI Assistant</h3>
              <p>Conversational guidance for entrepreneurs through text, voice, and image interactions in Spanish.</p>
              <ul>
                <li>90% usefulness score</li>
                <li>50,000+ messages in 3 months</li>
                <li>4,000+ voice notes and 2,000+ images processed</li>
              </ul>
              <span class="cta">Read case study →</span>
            </div>
          </a>
        </article>

        <article class="projects-card" data-category="analytics data">
          <a class="projects-card-link" href="{{ '/case-studies/potenza' | relative_url }}">
            <div class="media">
              <img src="{{ '/assets/projects/mia/images/potenza.png' | relative_url }}" alt="Potenza case study" loading="lazy">
              <div class="tag-row">
                <span class="tag">Production</span>
                <span class="tag">Monitoring</span>
              </div>
            </div>
            <div class="body">
              <h3>Potenza Solar Intelligence</h3>
              <p>Data pipeline and anomaly detection stack to monitor solar operations with live dashboards.</p>
              <ul>
                <li>Unified pipeline from extraction to dashboard</li>
                <li>Incident visibility through anomaly alerts</li>
              </ul>
              <span class="cta">Read case study →</span>
            </div>
          </a>
        </article>

        <article class="projects-card" data-category="platforms">
          <a class="projects-card-link" href="{{ '/case-studies/custom-platforms' | relative_url }}">
            <div class="media">
              <img src="{{ '/assets/projects/mia/images/ortodonciasv1.png' | relative_url }}" alt="Custom platforms case study" loading="lazy">
              <div class="tag-row">
                <span class="tag">Enterprise</span>
                <span class="tag">Security</span>
              </div>
            </div>
            <div class="body">
              <h3>Custom Platforms for Clinics &amp; Energy</h3>
              <p>Secure operational systems for clinics and energy teams, tailored to domain workflows.</p>
              <ul>
                <li>Role-based operations and audit trails</li>
                <li>Scalable deployments across workflows</li>
              </ul>
              <span class="cta">Read case study →</span>
            </div>
          </a>
        </article>

        <article class="projects-card" data-category="data">
          <a class="projects-card-link" href="{{ '/contact' | relative_url }}">
            <div class="media">
              <img src="{{ '/assets/projects/mia/images/ITCILO_logo.png' | relative_url }}" alt="Just Transition Policy Gateway case study" loading="lazy">
              <div class="tag-row">
                <span class="tag">NLP</span>
                <span class="tag">Docs</span>
              </div>
            </div>
            <div class="body">
              <h3>Just Transition Policy Gateway</h3>
              <p>Multilingual policy analysis platform with document intelligence and structured exploration tools.</p>
              <ul>
                <li>Documented implementation scope</li>
                <li>Multilingual searchable policy database</li>
              </ul>
              <span class="cta">Request case details →</span>
            </div>
          </a>
        </article>
      </div>
    </div>
  </section>
</main>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.projects-filters button[data-filter]');
    const cards = document.querySelectorAll('.projects-grid .projects-card');
    if (!buttons.length || !cards.length) return;

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');

        buttons.forEach(function (btn) { btn.classList.remove('is-active'); });
        this.classList.add('is-active');

        cards.forEach(function (card) {
          const category = card.getAttribute('data-category') || '';
          const isMatch = filter === 'all' || category.split(' ').includes(filter);
          card.style.display = isMatch ? '' : 'none';
        });
      });
    });
  });
</script>
