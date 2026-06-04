function closeCMS() {
  document.getElementById('cmsOverlay').classList.remove('open');
  document.getElementById('cmsDrawer').classList.remove('open');
  document.body.classList.remove('cms-open');
}

function openCMS() {
  document.getElementById('cmsOverlay').classList.add('open');
  document.getElementById('cmsDrawer').classList.add('open');
  document.body.classList.add('cms-open');
  renderCMSFields();
  renderCMSLists();
}

function toggleTheme() {
  var body = document.body;
  var icon = document.getElementById('themeIcon');
  body.classList.toggle('light-mode');
  var isLight = body.classList.contains('light-mode');
  localStorage.setItem('_portfolio_theme', isLight ? 'light' : 'dark');
  if (icon) icon.textContent = isLight ? '☀️' : '🌙';
}

function applySavedTheme() {
  var saved = localStorage.getItem('_portfolio_theme');
  var icon = document.getElementById('themeIcon');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
    if (icon) icon.textContent = '☀️';
  } else {
    if (icon) icon.textContent = '🌙';
  }
}

function initEvents() {
  document.getElementById('langToggle').addEventListener('click', function () {
    AppState.setLang(AppState.isRTL() ? 'en' : 'ar');
    renderAll();
  });

  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  document.getElementById('cmsToggle').addEventListener('click', function () {
    if (AUTH.isAuthenticated()) { openCMS(); }
    else { AUTH.guard(); }
  });

  document.getElementById('cmsClose').addEventListener('click', closeCMS);
  document.getElementById('cmsOverlay').addEventListener('click', closeCMS);

  document.getElementById('techSearch').addEventListener('input', renderSkills);
  document.getElementById('techFilters').addEventListener('click', function (e) {
    if (e.target.classList.contains('tech-filter-btn')) {
      document.querySelectorAll('.tech-filter-btn').forEach(function (b) { b.classList.remove('active'); });
      e.target.classList.add('active');
      renderSkills();
    }
  });

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('senderName').value.trim();
    var email = document.getElementById('senderEmail').value.trim();
    var subject = document.getElementById('messageSubject').value.trim();
    var body = document.getElementById('messageBody').value.trim();
    if (!name || !email || !subject || !body) {
      showToast('Please fill all fields', 'error');
      return;
    }
    AppState.addMessage({ name: name, email: email, subject: subject, body: body });
    renderInbox();
    e.target.reset();
    showToast('Message sent successfully!', 'success');
  });

  var lbClose = document.getElementById('galleryModalClose');
  var lb = document.getElementById('galleryModal');
  if (lbClose && lb) {
    lbClose.addEventListener('click', function () { closeGalleryModal(lb); });
    lb.addEventListener('click', function (e) {
      if (e.target === lb) closeGalleryModal(lb);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeGalleryModal(lb);
    });
  }
}

function closeGalleryModal(el) {
  el.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
  AppState.init();
  applySavedTheme();
  renderAll();
  initEvents();
  initCMS();
  observeAnimations();
  setTimeout(function () { renderSkills(); }, 100);
});
