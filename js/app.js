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

function initEvents() {
  document.getElementById('langToggle').addEventListener('click', function () {
    AppState.setLang(AppState.isRTL() ? 'en' : 'ar');
    renderAll();
  });

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
}

document.addEventListener('DOMContentLoaded', function () {
  AppState.init();
  renderAll();
  initEvents();
  initCMS();
  observeAnimations();
  setTimeout(function () { renderSkills(); }, 100);
});
