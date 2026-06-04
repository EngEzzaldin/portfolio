const STORAGE_KEY = 'portfolio_data';
const LANG_KEY = 'portfolio_lang';

function deepMerge(target, source) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      if (!target.hasOwnProperty(key)) {
        target[key] = JSON.parse(JSON.stringify(source[key]));
      } else if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
        deepMerge(target[key], source[key]);
      }
    }
  }
  return target;
}

const AppState = {
  data: null,
  lang: 'en',
  inbox: [],

  init() {
    this.lang = localStorage.getItem(LANG_KEY) || 'en';
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        this.data = JSON.parse(saved);
        deepMerge(this.data, INITIAL_DATA);
      }
      catch { this.data = JSON.parse(JSON.stringify(INITIAL_DATA)); }
    } else {
      this.data = JSON.parse(JSON.stringify(INITIAL_DATA));
    }
    this.save();
    const inboxSaved = localStorage.getItem('portfolio_inbox');
    if (inboxSaved) {
      try { this.inbox = JSON.parse(inboxSaved); }
      catch { this.inbox = []; }
    }
  },

  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    localStorage.setItem('portfolio_inbox', JSON.stringify(this.inbox));
  },

  getData() { return this.data; },

  setData(newData) {
    this.data = newData;
    this.save();
  },

  getLang() { return this.lang; },

  setLang(lang) {
    this.lang = lang;
    localStorage.setItem(LANG_KEY, lang);
  },

  isRTL() { return this.lang === 'ar'; },

  getInbox() { return this.inbox; },

  addMessage(msg) {
    this.inbox.unshift({
      id: Date.now().toString(36),
      sender: msg.name,
      email: msg.email,
      subject: msg.subject,
      message: msg.body,
      timestamp: Date.now()
    });
    this.save();
  },

  deleteMessage(id) {
    this.inbox = this.inbox.filter(m => m.id !== id);
    this.save();
  }
};

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatDate(timestamp) {
  return new Date(timestamp).toLocaleString();
}

function showToast(message, type) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'toast toast-' + type + ' show';
  setTimeout(function () { toast.classList.remove('show'); }, 3000);
}
