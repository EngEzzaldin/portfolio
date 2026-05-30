const AUTH = (function () {
  const PASSWORD_KEY = '_portfolio_pwd';
  const USERNAME_KEY = '_portfolio_user';
  const SESSION_KEY = '_portfolio_session';
  const DEFAULT_USERNAME = 'admin';
  const DEFAULT_PASSWORD = 'ezdev2024';
  const SESSION_TTL = 24 * 60 * 60 * 1000; // 24h

  function _init() {
    if (!localStorage.getItem(PASSWORD_KEY)) {
      _setPassword(DEFAULT_PASSWORD);
    }
    if (!localStorage.getItem(USERNAME_KEY)) {
      localStorage.setItem(USERNAME_KEY, DEFAULT_USERNAME);
    }
  }

  function _getStoredUsername() {
    return localStorage.getItem(USERNAME_KEY) || DEFAULT_USERNAME;
  }

  function _hash(str) {
    var hash = 0;
    if (str.length === 0) return hash.toString(36);
    for (var i = 0; i < str.length; i++) {
      var chr = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash.toString(36);
  }

  function _getStoredPassword() {
    return localStorage.getItem(PASSWORD_KEY) || _hash(DEFAULT_PASSWORD);
  }

  function _setPassword(pwd) {
    localStorage.setItem(PASSWORD_KEY, _hash(pwd));
  }

  function isAuthenticated() {
    try {
      var raw = sessionStorage.getItem(SESSION_KEY);
      if (!raw) return false;
      var data = JSON.parse(raw);
      if (!data.authenticated) return false;
      if (Date.now() - data.timestamp > SESSION_TTL) {
        sessionStorage.removeItem(SESSION_KEY);
        return false;
      }
      return true;
    } catch { return false; }
  }

  function login(username, password) {
    if (username !== _getStoredUsername()) return false;
    if (_hash(password) !== _getStoredPassword()) return false;
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({
      authenticated: true,
      timestamp: Date.now(),
      user: username
    }));
    return true;
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
  }

  function changePassword(username, oldPwd, newPwd) {
    if (username !== _getStoredUsername()) return false;
    if (_hash(oldPwd) !== _getStoredPassword()) return false;
    if (!newPwd || newPwd.length < 4) return false;
    _setPassword(newPwd);
    return true;
  }

  function getLastLogin() {
    try {
      var raw = sessionStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch { return null; }
  }

  function guard() {
    if (isAuthenticated()) return true;
    showAuthModal();
    return false;
  }

  _init();

  return { isAuthenticated, login, logout, changePassword, getLastLogin, guard };
})();

function showAuthModal() {
  var modal = document.getElementById('authModal');
  var overlay = document.getElementById('authOverlay');
  var userInput = document.getElementById('authUsername');
  var pwdInput = document.getElementById('authPassword');
  var error = document.getElementById('authError');
  var submitBtn = document.getElementById('authSubmit');
  var cancelBtn = document.getElementById('authCancel');

  userInput.value = '';
  pwdInput.value = '';
  error.style.display = 'none';
  modal.classList.add('open');
  overlay.classList.add('open');
  setTimeout(function () { userInput.focus(); }, 100);

  function onLogin() {
    if (AUTH.login(userInput.value, pwdInput.value)) {
      modal.classList.remove('open');
      overlay.classList.remove('open');
      var toggle = document.getElementById('cmsToggle');
      if (toggle) toggle.click();
    } else {
      error.style.display = 'block';
      pwdInput.value = '';
      pwdInput.focus();
    }
  }

  function onCancel() {
    modal.classList.remove('open');
    overlay.classList.remove('open');
  }

  submitBtn.onclick = onLogin;
  cancelBtn.onclick = onCancel;
  pwdInput.onkeydown = function (e) {
    if (e.key === 'Enter') onLogin();
    if (e.key === 'Escape') onCancel();
  };
  overlay.onclick = onCancel;
}
