function renderHero() {
  const d = AppState.getData();
  const lang = AppState.getLang();
  document.getElementById('heroName').textContent = lang === 'ar' ? d.basics.nameAr : d.basics.nameEn;
  document.getElementById('heroTitle').textContent = lang === 'ar' ? d.basics.titleAr : d.basics.titleEn;
  document.getElementById('heroSubtitle').textContent = lang === 'ar' ? d.basics.subtitleAr : d.basics.subtitleEn;
  document.getElementById('statProjects').textContent = d.basics.stats.projects;
  document.getElementById('statExperience').textContent = d.basics.stats.experience;
  document.getElementById('statModels').textContent = d.basics.stats.models;
  document.getElementById('statCommits').textContent = d.basics.stats.commits;
}

function renderAbout() {
  const d = AppState.getData();
  const lang = AppState.getLang();
  document.getElementById('aboutBio').textContent = lang === 'ar' ? d.about.bioAr : d.about.bioEn;
  document.getElementById('aboutDegree').textContent = lang === 'ar' ? d.about.degreeAr : d.about.degreeEn;
  document.getElementById('aboutFocus').textContent = lang === 'ar' ? d.about.focusAr : d.about.focusEn;
}

function renderSkills() {
  const d = AppState.getData();
  const grid = document.getElementById('techGrid');
  const activeFilter = document.querySelector('.tech-filter-btn.active');
  const filter = activeFilter ? activeFilter.dataset.filter : 'all';
  const search = document.getElementById('techSearch').value.toLowerCase().trim();
  let skills = d.skills;
  if (filter !== 'all') skills = skills.filter(function (s) { return s.category === filter; });
  if (search) skills = skills.filter(function (s) { return s.name.toLowerCase().includes(search); });
  grid.innerHTML = skills.map(function (s) {
    return '<div class="tech-item">' +
      '<div class="tech-item-header">' +
        '<span class="tech-item-name">' + escapeHtml(s.name) + '</span>' +
        '<span class="tech-item-proficiency">' + s.proficiency + '%</span>' +
      '</div>' +
      '<div class="tech-bar">' +
        '<div class="tech-bar-fill" style="width:' + s.proficiency + '%"></div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function renderProjects() {
  const d = AppState.getData();
  const lang = AppState.getLang();
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = d.projects.map(function (p) {
    return '<div class="project-card ' + p.glow + '-border">' +
      '<div class="project-glow ' + p.glow + '"></div>' +
      '<div class="project-content">' +
        '<div class="project-tags">' +
          p.tags.map(function (t) { return '<span class="project-tag">' + escapeHtml(t) + '</span>'; }).join('') +
        '</div>' +
        '<div class="project-title">' + (lang === 'ar' ? escapeHtml(p.titleAr) : escapeHtml(p.titleEn)) + '</div>' +
        '<div class="project-desc">' + (lang === 'ar' ? escapeHtml(p.descAr) : escapeHtml(p.descEn)) + '</div>' +
        '<div class="project-links">' +
          '<a href="' + escapeHtml(p.github) + '" target="_blank" rel="noopener" class="project-link">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> GitHub</a>' +
          '<a href="' + escapeHtml(p.demo) + '" target="_blank" rel="noopener" class="project-link">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg> Live Demo</a>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function renderTimeline() {
  const d = AppState.getData();
  const lang = AppState.getLang();
  const el = document.getElementById('timeline');
  el.innerHTML = d.experience.map(function (exp) {
    return '<div class="timeline-item">' +
      '<div class="timeline-dot"></div>' +
      '<div class="timeline-content">' +
        '<span class="timeline-period">' + (lang === 'ar' ? exp.period : exp.periodEn) + '</span>' +
        '<div class="timeline-company">' + (lang === 'ar' ? escapeHtml(exp.companyAr) : escapeHtml(exp.companyEn)) + '</div>' +
        '<div class="timeline-role">' + (lang === 'ar' ? escapeHtml(exp.roleAr) : escapeHtml(exp.roleEn)) + '</div>' +
        '<div class="timeline-desc">' + (lang === 'ar' ? escapeHtml(exp.descAr) : escapeHtml(exp.descEn)) + '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function renderRoadmap() {
  const d = AppState.getData();
  const lang = AppState.getLang();
  const grid = document.getElementById('roadmapGrid');
  var statusMap = {
    'Active Deployment': { class: 'active', en: 'Active Deployment', ar: 'فعال وتطبيقي' },
    'Active Learning': { class: 'learning', en: 'Active Learning', ar: 'قيد التعلم والتدريب' },
    'Deep Research': { class: 'research', en: 'Deep Research', ar: 'بحث مستفيض ودراسة' }
  };
  grid.innerHTML = d.roadmap.map(function (item) {
    var s = statusMap[item.statusEn] || statusMap['Active Learning'];
    return '<div class="roadmap-card">' +
      '<div class="roadmap-status ' + s.class + '">' +
        '<span class="roadmap-status-dot"></span> ' + (lang === 'ar' ? item.statusAr : item.statusEn) +
      '</div>' +
      '<div class="roadmap-title">' + (lang === 'ar' ? escapeHtml(item.titleAr) : escapeHtml(item.titleEn)) + '</div>' +
      '<div class="roadmap-desc">' + (lang === 'ar' ? escapeHtml(item.descAr) : escapeHtml(item.descEn)) + '</div>' +
    '</div>';
  }).join('');
}

function renderContact() {
  const d = AppState.getData();
  const lang = AppState.getLang();
  document.getElementById('contactEmail').textContent = d.contact.email;
  document.getElementById('contactLocation').textContent = lang === 'ar' ? d.contact.locationAr : d.contact.locationEn;
  document.getElementById('contactGithub').textContent = d.contact.github;
  document.getElementById('contactGithub').href = d.contact.github;
  document.getElementById('contactLinkedin').textContent = d.contact.linkedin;
  document.getElementById('contactLinkedin').href = d.contact.linkedin;
}

function renderInbox() {
  const inbox = AppState.getInbox();
  const list = document.getElementById('inboxList');
  const count = document.getElementById('inboxCount');
  count.textContent = inbox.length + ' message' + (inbox.length !== 1 ? 's' : '');
  if (inbox.length === 0) {
    list.innerHTML = '<div class="inbox-empty">' + t('inbox.empty') + '</div>';
    return;
  }
  list.innerHTML = inbox.map(function (msg) {
    return '<div class="inbox-item">' +
      '<div class="inbox-item-content">' +
        '<div class="inbox-item-sender">' + escapeHtml(msg.sender) + ' &lt;' + escapeHtml(msg.email) + '&gt;</div>' +
        '<div class="inbox-item-subject">' + escapeHtml(msg.subject) + '</div>' +
        '<div class="inbox-item-message">' + escapeHtml(msg.message) + '</div>' +
        '<div style="font-size:0.7rem;color:var(--clr-text-muted);margin-top:4px;">' + formatDate(msg.timestamp) + '</div>' +
      '</div>' +
      '<button class="inbox-item-delete" data-msg-id="' + msg.id + '" aria-label="Delete message">&times;</button>' +
    '</div>';
  }).join('');
  list.querySelectorAll('.inbox-item-delete').forEach(function (btn) {
    btn.addEventListener('click', function () {
      AppState.deleteMessage(btn.dataset.msgId);
      renderInbox();
    });
  });
}

function renderCMSFields() {
  const d = AppState.getData();
  document.getElementById('cmsNameAr').value = d.basics.nameAr;
  document.getElementById('cmsNameEn').value = d.basics.nameEn;
  document.getElementById('cmsTitleAr').value = d.basics.titleAr;
  document.getElementById('cmsTitleEn').value = d.basics.titleEn;
  document.getElementById('cmsSubtitleAr').value = d.basics.subtitleAr;
  document.getElementById('cmsSubtitleEn').value = d.basics.subtitleEn;
  document.getElementById('cmsStatProjects').value = d.basics.stats.projects;
  document.getElementById('cmsStatExperience').value = d.basics.stats.experience;
  document.getElementById('cmsStatModels').value = d.basics.stats.models;
  document.getElementById('cmsStatCommits').value = d.basics.stats.commits;
  document.getElementById('cmsBioAr').value = d.about.bioAr;
  document.getElementById('cmsBioEn').value = d.about.bioEn;
  document.getElementById('cmsDegreeAr').value = d.about.degreeAr;
  document.getElementById('cmsDegreeEn').value = d.about.degreeEn;
  document.getElementById('cmsFocusAr').value = d.about.focusAr;
  document.getElementById('cmsFocusEn').value = d.about.focusEn;
  var ce = document.getElementById('cmsContactEmail');
  if (ce) ce.value = d.contact.email;
  var cla = document.getElementById('cmsContactLocAr');
  if (cla) cla.value = d.contact.locationAr;
  var cle = document.getElementById('cmsContactLocEn');
  if (cle) cle.value = d.contact.locationEn;
  var cg = document.getElementById('cmsContactGithub');
  if (cg) cg.value = d.contact.github;
  var cl = document.getElementById('cmsContactLinkedin');
  if (cl) cl.value = d.contact.linkedin;
}

function applyLang() {
  document.documentElement.lang = AppState.getLang();
  document.documentElement.dir = AppState.isRTL() ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', AppState.isRTL());
  var langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = AppState.isRTL() ? 'EN' : 'AR';
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
}

function renderAll() {
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderRoadmap();
  renderContact();
  renderInbox();
  renderCMSFields();
  applyLang();
}

function observeAnimations() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-on-view').forEach(function (el) { observer.observe(el); });
}
