const AUTH = (function () {
  const PASSWORD_KEY = '_portfolio_pwd';
  const SESSION_KEY = '_portfolio_session';
  const DEFAULT_PASSWORD = 'ezdev2024';

  function _init() {
    if (!localStorage.getItem(PASSWORD_KEY)) {
      localStorage.setItem(PASSWORD_KEY, DEFAULT_PASSWORD);
    }
  }

  function _getStoredPassword() {
    return localStorage.getItem(PASSWORD_KEY) || DEFAULT_PASSWORD;
  }

  function isAuthenticated() {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  }

  function login(password) {
    if (password === _getStoredPassword()) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      return true;
    }
    return false;
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
  }

  function changePassword(oldPwd, newPwd) {
    if (oldPwd !== _getStoredPassword()) return false;
    if (!newPwd || newPwd.length < 4) return false;
    localStorage.setItem(PASSWORD_KEY, newPwd);
    return true;
  }

  function guard() {
    if (isAuthenticated()) return true;
    showAuthModal();
    return false;
  }

  _init();

  return { isAuthenticated, login, logout, changePassword, guard };
})();

function showAuthModal() {
  const modal = document.getElementById('authModal');
  const overlay = document.getElementById('authOverlay');
  const input = document.getElementById('authPassword');
  const error = document.getElementById('authError');
  const submitBtn = document.getElementById('authSubmit');
  const cancelBtn = document.getElementById('authCancel');

  input.value = '';
  error.style.display = 'none';
  modal.classList.add('open');
  overlay.classList.add('open');
  setTimeout(() => input.focus(), 100);

  function onLogin() {
    const pwd = input.value;
    if (AUTH.login(pwd)) {
      modal.classList.remove('open');
      overlay.classList.remove('open');
      document.getElementById('cmsToggle').click();
    } else {
      error.style.display = 'block';
      input.value = '';
      input.focus();
    }
  }

  function onCancel() {
    modal.classList.remove('open');
    overlay.classList.remove('open');
  }

  submitBtn.onclick = onLogin;
  cancelBtn.onclick = onCancel;
  input.onkeydown = (e) => {
    if (e.key === 'Enter') onLogin();
    if (e.key === 'Escape') onCancel();
  };
  overlay.onclick = onCancel;
}
