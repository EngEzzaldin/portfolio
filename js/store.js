const STORAGE_KEY = 'portfolio_data';
const LANG_KEY = 'portfolio_lang';
const DATA_VERSION_KEY = '_portfolio_data_version';
const DATA_VERSION = 2;

const AppState = {
  data: null,
  lang: 'en',
  inbox: [],

  init() {
    this.lang = localStorage.getItem(LANG_KEY) || 'en';
    var savedVersion = parseInt(localStorage.getItem(DATA_VERSION_KEY)) || 0;
    if (savedVersion < DATA_VERSION) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(DATA_VERSION_KEY, DATA_VERSION.toString());
    }
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        this.data = JSON.parse(saved);
        this._patchMissing();
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
  },

  _patchMissing() {
    const defaults = INITIAL_DATA;
    if (!this.data.services) this.data.services = JSON.parse(JSON.stringify(defaults.services));
    if (!this.data.gallery) this.data.gallery = JSON.parse(JSON.stringify(defaults.gallery));
    if (!this.data.roadmap) this.data.roadmap = JSON.parse(JSON.stringify(defaults.roadmap));
    if (!this.data.contact.links) this.data.contact.links = JSON.parse(JSON.stringify(defaults.contact.links));
    if (!this.data.contact.locationAr) this.data.contact.locationAr = defaults.contact.locationAr;
    if (!this.data.contact.locationEn) this.data.contact.locationEn = defaults.contact.locationEn;
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
