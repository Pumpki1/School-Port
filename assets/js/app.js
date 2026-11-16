// ============================================================
//  app.js : builds every page from data/content.js
//  (navigation, footer, page transitions, and page content)
// ============================================================
(function () {
  const S = window.SITE;
  const P = S.profile;
  const page = document.body.dataset.page;
  const app = document.getElementById('app');

  // ---------- helpers ----------
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const isPH = (s) => typeof s === 'string' && s.trim().startsWith('[PLACEHOLDER]');
  const t = (s) => (isPH(s) ? '<span class="ph" title="Placeholder">' + esc(s) + '</span>' : esc(s));

  const ICONS = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    ext:   '<path d="M7 17L17 7M8 7h9v9"/>',
    doc:   '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/>',
    link:  '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
    img:   '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5-5-8 9"/>',
    play:  '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9.5l5 2.5-5 2.5z"/>',
    mail:  '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'
  };
  const icon = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + ICONS[n] + '</svg>';

  // ---------- shared shell: navigation and footer ----------
  const NAV = [
    ['index', 'Home', 'index.html'],
    ['about', 'About Me', 'about.html'],
    ['works', 'Relevant Works', 'works.html'],
    ['achievements', 'Achievements', 'achievements.html'],
    ['contacts', 'Contacts', 'contacts.html']
  ];

  function buildShell() {
    const links = NAV.map((n) =>
      '<li><a href="' + n[2] + '" class="' + (n[0] === page ? 'active' : '') + '"' +
      (n[0] === page ? ' aria-current="page"' : '') + '>' + n[1] + '</a></li>').join('');

    const nav = document.createElement('header');
    nav.className = 'nav';
    nav.id = 'nav';
    nav.innerHTML =
      '<a href="index.html" class="nav-brand"><span class="nav-logo">' + esc(P.shortName) + '</span>' +
      '<span class="nav-tag">School Portfolio</span></a>' +
      '<ul class="nav-links">' + links + '</ul>' +
      '<button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">' +
      '<span></span><span></span></button>';
    document.body.prepend(nav);

    const foot = document.createElement('footer');
    foot.className = 'footer';
    foot.innerHTML = '<p>' + esc(P.name) + ' &middot; ' + esc(P.school) + ' &middot; ' + esc(P.program) + '</p>' +
      '<p>&copy; ' + new Date().getFullYear() + '. All rights reserved.</p>';
    document.body.appendChild(foot);

    // mobile menu
    const toggle = nav.querySelector('.nav-toggle');
    const setOpen = (open) => {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    nav.querySelectorAll('.nav-links a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 860) setOpen(false); });

    // shadow under the bar once the page scrolls
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // fade out before leaving the page
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a || reduce) return;
      const href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || a.target === '_blank' || a.hasAttribute('download')) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      e.preventDefault();
      document.body.classList.add('leaving');
      setTimeout(() => { window.location.href = a.href; }, 260);
    });
    window.addEventListener('pageshow', (e) => { if (e.persisted) document.body.classList.remove('leaving'); });
  }

  // ---------- Home ----------
  function renderHome() {
    const nArt = S.courses.reduce((n, c) => n + c.artifacts.length, 0);
    const rows = [
      ['about.html', 'About Me', 'Background, education, skills, and goals.', 'Profile'],
      ['works.html', 'Relevant Works', 'Course artifacts with reflections on student outcomes and personal goals.',
        S.courses.length + ' Courses &middot; ' + nArt + ' Artifacts'],
      ['achievements.html', 'Achievements', 'Competitions, certificates, and recognitions.', S.achievements.length + ' Items'],
      ['contacts.html', 'Contacts', 'Email, Facebook, LinkedIn, and GitHub.', 'Get in touch']
    ].map((r) =>
      '<a class="explore-row" href="' + r[0] + '"><div><h2 class="explore-title">' + r[1] + '</h2>' +
      '<p class="explore-desc">' + r[2] + '</p></div>' +
      '<div class="explore-meta"><span>' + r[3] + '</span>' + icon('arrow') + '</div></a>').join('');

    app.innerHTML =
      '<section class="hero">' +
        '<div class="hero-copy">' +
          '<div class="kicker rise">School Portfolio</div>' +
          '<h1 class="hero-name rise rise-1">' + esc(P.name) + '</h1>' +
          '<p class="hero-tag rise rise-1">&ldquo;' + esc(P.tagline) + '&rdquo;</p>' +
          '<p class="hero-lead rise rise-1">' + esc(P.program) + ' student at ' + esc(P.school) + '</p>' +
          '<p class="hero-text rise rise-2">' + t(P.intro) + '</p>' +
          '<div class="hero-actions rise rise-2">' +
            '<a class="btn btn-solid" href="works.html">View Relevant Works ' + icon('arrow') + '</a>' +
            '<a class="btn btn-ghost" href="about.html">About Me</a>' +
          '</div>' +
        '</div>' +
        '<div class="portrait rise rise-2">' +
          '<img class="portrait-img" src="' + esc(P.photo) + '" alt="' + esc(P.name) + '" />' +
          '<p class="portrait-cap">' + esc(P.year) + ' &middot; Graduating ' + esc(P.graduation) + '</p>' +
        '</div>' +
      '</section>' +
      '<section class="sheet explore rise rise-3">' + rows + '</section>';
  }

  // ---------- About ----------
  function renderAbout() {
    const A = S.about;
    const bio = A.bio.map((p) => '<p>' + t(p) + '</p>').join('');

    const edu = A.education.map((e) =>
      '<div class="edu' + (e.current ? ' current' : '') + '">' +
        '<div class="edu-level">' + t(e.level) + '</div>' +
        '<div><div class="edu-school">' + t(e.school) + '</div>' +
        (e.place ? '<div class="edu-place">' + t(e.place) + '</div>' : '') +
        (e.note ? '<div class="edu-note">' + t(e.note) + '</div>' : '') + '</div>' +
      '</div>').join('');

    const skills = A.skills.map((s) =>
      '<div class="row"><div class="row-label">' + t(s.label) + '</div><div class="row-text">' + t(s.items) + '</div></div>').join('');

    const inv = (A.involvements || []).map((i) =>
      '<div class="row"><div class="row-label">' + t(i.title) + '</div><div class="row-text">' + t(i.role) +
      '<div class="row-sub">' + t(i.period) + '</div></div></div>').join('');

    const goalList = (arr) => '<ul class="goal-list">' + arr.map((g) => '<li>' + t(g) + '</li>').join('') + '</ul>';

    const fact = (label, value) =>
      '<div class="id-fact"><div class="id-label">' + label + '</div><div class="id-value">' + value + '</div></div>';
    const link = (href, text) => '<a href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(text) + '</a>';

    app.innerHTML =
      '<header class="page-head rise"><div class="kicker">Profile</div>' +
        '<h1 class="page-title">About Me</h1>' +
        '<p class="page-sub">Background, education, skills, and goals.</p></header>' +
      '<div class="about-layout">' +
        '<div class="sheet rise rise-1">' +
          '<section class="block"><h2 class="block-title">Who I Am</h2><div class="prose">' + bio + '</div></section>' +
          '<section class="block"><h2 class="block-title">Educational Background</h2><div class="edu-list">' + edu + '</div></section>' +
          '<section class="block"><h2 class="block-title">Technical Skills</h2><div class="rows">' + skills + '</div></section>' +
          '<section class="block"><h2 class="block-title">Academic Goals</h2>' + goalList(A.academicGoals) + '</section>' +
          '<section class="block"><h2 class="block-title">Personal Goals</h2>' + goalList(A.personalGoals) + '</section>' +
          (inv ? '<section class="block"><h2 class="block-title">Curricular Involvements</h2><div class="rows">' + inv + '</div></section>' : '') +
        '</div>' +
        '<aside class="id-card rise rise-2">' +
          '<img class="id-photo" src="' + esc(P.photo) + '" alt="' + esc(P.name) + '" />' +
          '<div class="id-name">' + esc(P.name) + '</div>' +
          '<div class="id-role">' + esc(P.program) + '</div>' +
          '<div class="id-facts">' +
            fact('School', esc(P.school)) +
            fact('Year Level', esc(P.year)) +
            (P.section ? fact('Section', esc(P.section)) : '') +
            fact('Expected Graduation', esc(P.graduation)) +
            fact('Location', esc(P.location)) +
            fact('Email', link('mailto:' + P.email, P.email)) +
            (P.email2 ? fact('Personal Email', link('mailto:' + P.email2, P.email2)) : '') +
            fact('Facebook', link(P.facebook, 'khen.m.ilao')) +
            fact('LinkedIn', link(P.linkedin, 'Khen Ilao')) +
            fact('GitHub', link(P.github, 'Pumpki1')) +
          '</div>' +
        '</aside>' +
      '</div>';
  }

  // ---------- shared file frame (artifacts and achievements) ----------
  const LABELS = { pdf: 'PDF Document', img: 'Image', video: 'Video', link: 'External Link' };
  const ICON_OF = { pdf: 'doc', img: 'img', video: 'play', link: 'link' };

  function frameHTML(a, type, off) {
    const label = LABELS[type] || 'File';
    const ico = ICON_OF[type] || 'doc';
    const href = esc(a.file);
    if (off) {
      return '<div class="frame empty">' + icon(ico) + '<span class="frame-label">' + label + '<br>placeholder</span></div>';
    }
    const miss = 'onerror="this.replaceWith(document.createTextNode(\'Image not found\'))"';
    if (type === 'img') {
      return '<a class="frame" href="' + href + '" target="_blank" rel="noopener"><img src="' + href +
        '" alt="' + esc(a.title) + '" loading="lazy" ' + miss + ' /></a>';
    }
    if (a.thumb) {
      return '<a class="frame" href="' + href + '" target="_blank" rel="noopener"><img src="' + esc(a.thumb) +
        '" alt="Preview of ' + esc(a.title) + '" loading="lazy" ' + miss + ' /></a>';
    }
    return '<a class="frame" href="' + href + '" target="_blank" rel="noopener">' + icon(ico) +
      '<span class="frame-label">' + label + '</span></a>';
  }

  // ---------- Relevant Works ----------
  function artifactHTML(a, n) {
    const type = (a.type || 'pdf').toLowerCase();
    const off = !a.file || isPH(a.file);
    const label = LABELS[type] || 'File';
    const href = esc(a.file);
    const cta = a.cta || (type === 'video' ? 'Watch Video' : type === 'link' ? 'Open Link' : 'View File');

    const action = off
      ? '<button class="btn btn-solid" type="button" disabled>' + esc(cta) + '</button>'
      : '<a class="btn btn-solid" href="' + href + '" target="_blank" rel="noopener">' + esc(cta) + ' ' + icon('ext') + '</a>';

    return '<article class="artifact">' +
      '<div>' + frameHTML(a, type, off) + '</div>' +
      '<div>' +
        '<div class="type-tag">Artifact ' + (n + 1) + ' &middot; ' + label + '</div>' +
        '<h3 class="artifact-title">' + t(a.title) + '</h3>' +
        '<p class="artifact-desc">' + t(a.description) + '</p>' +
        '<div class="notes">' +
          '<div class="note"><div class="note-label">CpE Student Outcomes</div><div class="note-text">' + t(a.outcomes) + '</div></div>' +
          '<div class="note"><div class="note-label">Personal Goals</div><div class="note-text">' + t(a.goals) + '</div></div>' +
        '</div>' +
        action +
      '</div></article>';
  }

  function renderWorks() {
    const idOf = (c, i) => c.id || ('course-' + (i + 1));

    const index = S.courses.map((c, i) =>
      '<a class="ci' + (i === 0 ? ' on' : '') + '" href="#' + idOf(c, i) + '" data-id="' + idOf(c, i) + '">' +
      '<span class="ci-code">' + t(c.code) + '</span><span class="ci-count">' + c.artifacts.length + '</span>' +
      '<span class="ci-title">' + t(c.title) + '</span></a>').join('');

    const courses = S.courses.map((c, i) =>
      '<section class="course" id="' + idOf(c, i) + '">' +
        '<div class="kicker">' + t(c.code) + '</div>' +
        '<h2 class="course-title">' + t(c.title) + '</h2>' +
        '<p class="course-desc">' + t(c.description) + '</p>' +
        c.artifacts.map(artifactHTML).join('') +
      '</section>').join('');

    app.innerHTML =
      '<header class="page-head rise"><div class="kicker">Academic Output</div>' +
        '<h1 class="page-title">Relevant Works</h1>' +
        '<p class="page-sub">' + esc(S.worksIntro) + '</p></header>' +
      '<div class="works-layout">' +
        '<nav class="course-index rise rise-1" aria-label="Courses"><div class="ci-head">Courses</div><div class="ci-list">' + index + '</div></nav>' +
        '<div class="sheet rise rise-2">' + courses + '</div>' +
      '</div>';

    // highlight the course that is currently in view
    const items = document.querySelectorAll('.ci');
    const secs = document.querySelectorAll('.course');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            items.forEach((el) => el.classList.toggle('on', el.dataset.id === en.target.id));
          }
        });
      }, { rootMargin: '-25% 0px -65% 0px' });
      secs.forEach((s) => io.observe(s));
    }
    items.forEach((el) => el.addEventListener('click', () => {
      items.forEach((x) => x.classList.toggle('on', x === el));
    }));
  }

   // ---------- Achievements ----------
  function renderAchievements() {
    const TABS = [
      ['certification', 'Certifications'],
      ['award', 'Awards'],
      ['seminar', 'Seminars and Fieldtrips']
    ];
    const catOf = (a) => a.category || 'certification';

    const cardOf = (a) => {
      const type = (a.type || 'img').toLowerCase();
      const off = !a.file || isPH(a.file);
      return '<article>' + frameHTML(a, type, off) +
        '<div class="ach-issuer">' + t(a.issuer) + '</div>' +
        '<h3 class="ach-title">' + t(a.title) + '</h3>' +
        '<div class="ach-date">' + t(a.date) + '</div></article>';
    };

    const buttons = TABS.map((tb, i) =>
      '<button class="tab-btn' + (i === 0 ? ' on' : '') + '" type="button" data-tab="' + tb[0] + '">' + tb[1] +
      '<span class="tab-count">' + S.achievements.filter((a) => catOf(a) === tb[0]).length + '</span></button>').join('');

    const panels = TABS.map((tb, i) =>
      '<div class="tab-panel' + (i === 0 ? ' on' : '') + '" data-panel="' + tb[0] + '"><div class="ach-grid">' +
      S.achievements.filter((a) => catOf(a) === tb[0]).map(cardOf).join('') + '</div></div>').join('');

    app.innerHTML =
      '<header class="page-head rise"><div class="kicker">Recognition</div>' +
        '<h1 class="page-title">Achievements</h1>' +
        '<p class="page-sub">Competitions, certificates, and recognitions earned during my studies.</p></header>' +
      '<div class="sheet rise rise-1"><div class="tabs">' + buttons + '</div>' + panels + '</div>';

    const btns = document.querySelectorAll('.tab-btn');
    const pans = document.querySelectorAll('.tab-panel');
    btns.forEach((b) => b.addEventListener('click', () => {
      btns.forEach((x) => x.classList.toggle('on', x === b));
      pans.forEach((x) => x.classList.toggle('on', x.dataset.panel === b.dataset.tab));
    }));
  }

  // ---------- Contacts ----------
  function renderContacts() {
    const item = (label, href, text, ico) =>
      '<div class="row"><div class="row-label">' + label + '</div><div class="row-text contact-text">' + icon(ico) +
      '<a href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(text) + '</a></div></div>';

    const rows =
      item('School Email', 'mailto:' + P.email, P.email, 'mail') +
      (P.email2 ? item('Personal Email', 'mailto:' + P.email2, P.email2, 'mail') : '') +
      item('Facebook', P.facebook, 'facebook.com/khen.m.ilao', 'link') +
      item('LinkedIn', P.linkedin, 'https://www.linkedin.com/in/khen-mhar-ilao-534572423', 'link') +
      item('GitHub', P.github, 'github.com/Pumpki1', 'link');

    app.innerHTML =
      '<header class="page-head rise"><div class="kicker">Get in Touch</div>' +
        '<h1 class="page-title">Contacts</h1>' +
        '<p class="page-sub">' + esc(S.contact.intro) + '</p></header>' +
      '<div class="sheet rise rise-1"><div class="rows">' + rows + '</div></div>';
  }

  // ---------- go ----------
  buildShell();
  const views = { index: renderHome, about: renderAbout, works: renderWorks, achievements: renderAchievements, contacts: renderContacts };
  (views[page] || renderHome)();
})();
