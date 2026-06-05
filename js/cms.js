var _editExpIndex = -1;
var _editSkillIndex = -1;
var _editProjectIndex = -1;
var _editRmIndex = -1;

function renderCMSLists() {
  renderCMSSkills();
  renderCMSProjects();
  renderCMSExperience();
  renderCMSRoadmap();
  renderCMSContactLinks();
  renderCMSServices();
  renderCMSGallery();
}

function renderCMSSkills() {
  const d = AppState.getData();
  const list = document.getElementById('cmsSkillsList');
  list.innerHTML = d.skills.map((s, i) => `
    <div class="cms-skill-item">
      <span class="cms-item-name">${escapeHtml(s.name)} (${s.proficiency}%)</span>
      <span>
        <button class="cms-item-edit" data-skill-edit="${i}" title="Edit" style="background:none;border:none;color:var(--clr-accent);cursor:pointer;padding:2px 6px;font-size:0.8rem;">&#9998;</button>
        <button class="cms-item-delete" data-skill-del="${i}">&times;</button>
      </span>
    </div>
  `).join('');
  list.querySelectorAll('[data-skill-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.skillDel);
      const d = AppState.getData();
      d.skills.splice(idx, 1);
      AppState.setData(d);
      renderAll();
    });
  });
  list.querySelectorAll('[data-skill-edit]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.skillEdit);
      const s = AppState.getData().skills[idx];
      _editSkillIndex = idx;
      document.getElementById('cmsSkillName').value = s.name;
      document.getElementById('cmsSkillProf').value = s.proficiency;
      document.getElementById('cmsSkillCat').value = s.category;
      document.getElementById('cmsAddSkill').textContent = 'Update Skill';
      document.getElementById('cmsAddSkill').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function renderCMSProjects() {
  const d = AppState.getData();
  const list = document.getElementById('cmsProjectsList');
  list.innerHTML = d.projects.map((p, i) => `
    <div class="cms-skill-item">
      <span class="cms-item-name">${escapeHtml(p.titleEn)}</span>
      <span>
        <button class="cms-item-edit" data-proj-edit="${i}" title="Edit" style="background:none;border:none;color:var(--clr-accent);cursor:pointer;padding:2px 6px;font-size:0.8rem;">&#9998;</button>
        <button class="cms-item-delete" data-proj-del="${i}">&times;</button>
      </span>
    </div>
  `).join('');
  list.querySelectorAll('[data-proj-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.projDel);
      const d = AppState.getData();
      d.projects.splice(idx, 1);
      AppState.setData(d);
      renderAll();
    });
  });
  list.querySelectorAll('[data-proj-edit]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.projEdit);
      const p = AppState.getData().projects[idx];
      _editProjectIndex = idx;
      document.getElementById('cmsProjTitleAr').value = p.titleAr;
      document.getElementById('cmsProjTitleEn').value = p.titleEn;
      document.getElementById('cmsProjDescAr').value = p.descAr;
      document.getElementById('cmsProjDescEn').value = p.descEn;
      document.getElementById('cmsProjTags').value = (p.tags || []).join(', ');
      document.getElementById('cmsProjGlow').value = p.glow;
      document.getElementById('cmsProjGithub').value = p.github;
      document.getElementById('cmsProjDemo').value = p.demo;
      document.getElementById('cmsAddProject').textContent = 'Update Project';
      document.getElementById('cmsAddProject').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function renderCMSExperience() {
  const d = AppState.getData();
  const list = document.getElementById('cmsExperienceList');
  list.innerHTML = d.experience.map((exp, i) => `
    <div class="cms-skill-item">
      <span class="cms-item-name">${escapeHtml(exp.companyEn)} - ${escapeHtml(exp.roleEn)}</span>
      <span>
        <button class="cms-item-edit" data-exp-edit="${i}" title="Edit" style="background:none;border:none;color:var(--clr-accent);cursor:pointer;padding:2px 6px;font-size:0.8rem;">&#9998;</button>
        <button class="cms-item-delete" data-exp-del="${i}" title="Delete">&times;</button>
      </span>
    </div>
  `).join('');

  list.querySelectorAll('[data-exp-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.expDel);
      const d = AppState.getData();
      d.experience.splice(idx, 1);
      AppState.setData(d);
      renderAll();
    });
  });

  list.querySelectorAll('[data-exp-edit]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.expEdit);
      const exp = AppState.getData().experience[idx];
      _editExpIndex = idx;
      document.getElementById('cmsExpCompanyAr').value = exp.companyAr;
      document.getElementById('cmsExpCompanyEn').value = exp.companyEn;
      document.getElementById('cmsExpRoleAr').value = exp.roleAr;
      document.getElementById('cmsExpRoleEn').value = exp.roleEn;
      document.getElementById('cmsExpPeriodAr').value = exp.period;
      document.getElementById('cmsExpPeriodEn').value = exp.periodEn;
      document.getElementById('cmsExpDescAr').value = exp.descAr;
      document.getElementById('cmsExpDescEn').value = exp.descEn;
      document.getElementById('cmsAddExperience').textContent = 'Update Experience';
      document.getElementById('cmsAddExperience').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

document.getElementById('cmsLogout').addEventListener('click', () => {
  AUTH.logout();
  closeCMS();
  showToast('🔒 ' + t('cms.locked'), 'info');
});

function initCMS() {
  document.getElementById('cmsAddSkill').addEventListener('click', () => {
    const name = document.getElementById('cmsSkillName').value.trim();
    const prof = parseInt(document.getElementById('cmsSkillProf').value);
    const cat = document.getElementById('cmsSkillCat').value;
    if (!name || isNaN(prof) || prof < 0 || prof > 100) {
      showToast('Invalid skill data', 'error');
      return;
    }
    const d = AppState.getData();
    if (_editSkillIndex >= 0) {
      d.skills[_editSkillIndex] = { name, proficiency: prof, category: cat };
      _editSkillIndex = -1;
      document.getElementById('cmsAddSkill').textContent = '+ Add Skill';
      showToast('Skill updated!', 'success');
    } else {
      d.skills.push({ name, proficiency: prof, category: cat });
      showToast('Skill added!', 'success');
    }
    AppState.setData(d);
    document.getElementById('cmsSkillName').value = '';
    document.getElementById('cmsSkillProf').value = '';
    renderAll();
  });

  document.getElementById('cmsAddProject').addEventListener('click', () => {
    const titleAr = document.getElementById('cmsProjTitleAr').value.trim();
    const titleEn = document.getElementById('cmsProjTitleEn').value.trim();
    const descAr = document.getElementById('cmsProjDescAr').value.trim();
    const descEn = document.getElementById('cmsProjDescEn').value.trim();
    const tagsStr = document.getElementById('cmsProjTags').value.trim();
    const glow = document.getElementById('cmsProjGlow').value;
    const github = document.getElementById('cmsProjGithub').value.trim() || 'https://github.com/kzaldyn';
    const demo = document.getElementById('cmsProjDemo').value.trim() || '#';
    if (!titleAr || !titleEn || !descAr || !descEn) {
      showToast('Please fill all required fields', 'error');
      return;
    }
    const tags = tagsStr ? tagsStr.split(',').map(t => t.trim()).filter(Boolean) : [];
    const d = AppState.getData();
    if (_editProjectIndex >= 0) {
      d.projects[_editProjectIndex] = {
        id: d.projects[_editProjectIndex].id,
        titleAr, titleEn, descAr, descEn, tags, glow, github, demo
      };
      _editProjectIndex = -1;
      document.getElementById('cmsAddProject').textContent = '+ Add Project';
      showToast('Project updated!', 'success');
    } else {
      d.projects.push({
        id: 'proj-' + Date.now().toString(36),
        titleAr, titleEn, descAr, descEn, tags, glow, github, demo
      });
      showToast('Project added!', 'success');
    }
    AppState.setData(d);
    document.getElementById('cmsProjTitleAr').value = '';
    document.getElementById('cmsProjTitleEn').value = '';
    document.getElementById('cmsProjDescAr').value = '';
    document.getElementById('cmsProjDescEn').value = '';
    document.getElementById('cmsProjTags').value = '';
    renderAll();
  });

  document.getElementById('cmsAddExperience').addEventListener('click', () => {
    const companyAr = document.getElementById('cmsExpCompanyAr').value.trim();
    const companyEn = document.getElementById('cmsExpCompanyEn').value.trim();
    const roleAr = document.getElementById('cmsExpRoleAr').value.trim();
    const roleEn = document.getElementById('cmsExpRoleEn').value.trim();
    const periodAr = document.getElementById('cmsExpPeriodAr').value.trim();
    const periodEn = document.getElementById('cmsExpPeriodEn').value.trim();
    const descAr = document.getElementById('cmsExpDescAr').value.trim();
    const descEn = document.getElementById('cmsExpDescEn').value.trim();
    if (!companyAr || !companyEn || !roleAr || !roleEn) {
      showToast('Please fill required fields', 'error');
      return;
    }
    const d = AppState.getData();
    if (_editExpIndex >= 0) {
      d.experience[_editExpIndex] = {
        id: d.experience[_editExpIndex].id,
        companyAr, companyEn, roleAr, roleEn,
        period: periodAr, periodEn: periodEn,
        descAr, descEn
      };
      _editExpIndex = -1;
      document.getElementById('cmsAddExperience').textContent = '+ Add Experience';
      showToast('Experience updated!', 'success');
    } else {
      d.experience.push({
        id: 'exp-' + Date.now().toString(36),
        companyAr, companyEn, roleAr, roleEn,
        period: periodAr, periodEn: periodEn,
        descAr, descEn
      });
      showToast('Experience added!', 'success');
    }
    AppState.setData(d);
    document.getElementById('cmsExpCompanyAr').value = '';
    document.getElementById('cmsExpCompanyEn').value = '';
    document.getElementById('cmsExpRoleAr').value = '';
    document.getElementById('cmsExpRoleEn').value = '';
    document.getElementById('cmsExpPeriodAr').value = '';
    document.getElementById('cmsExpPeriodEn').value = '';
    document.getElementById('cmsExpDescAr').value = '';
    document.getElementById('cmsExpDescEn').value = '';
    renderAll();
  });

  document.getElementById('cmsExport').addEventListener('click', () => {
    const data = AppState.getData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-schema.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Schema exported!', 'success');
  });

  document.getElementById('cmsImport').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result);
          if (!data.basics || !data.about || !data.skills) {
            showToast('Invalid schema format', 'error');
            return;
          }
          AppState.setData(data);
          renderAll();
          showToast('Schema imported successfully!', 'success');
        } catch {
          showToast('Invalid JSON file', 'error');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  });

  document.getElementById('cmsPasteApply').addEventListener('click', () => {
    const text = document.getElementById('cmsPasteJson').value.trim();
    if (!text) {
      showToast('No JSON to apply', 'error');
      return;
    }
    try {
      const data = JSON.parse(text);
      if (!data.basics || !data.about || !data.skills) {
        showToast('Invalid schema format', 'error');
        return;
      }
      AppState.setData(data);
      renderAll();
      document.getElementById('cmsPasteJson').value = '';
      showToast('JSON applied!', 'success');
    } catch {
      showToast('Invalid JSON', 'error');
    }
  });

  document.getElementById('cmsRevert').addEventListener('click', () => {
    if (!confirm('Are you sure you want to revert to default data? This will clear all changes.')) return;
    AppState.setData(JSON.parse(JSON.stringify(INITIAL_DATA)));
    renderAll();
    showToast('Reverted to defaults', 'info');
  });

  const basicsFields = ['cmsNameAr', 'cmsNameEn', 'cmsTitleAr', 'cmsTitleEn',
    'cmsSubtitleAr', 'cmsSubtitleEn', 'cmsStatProjects', 'cmsStatExperience',
    'cmsStatModels', 'cmsStatCommits', 'cmsBioAr', 'cmsBioEn',
    'cmsDegreeAr', 'cmsDegreeEn', 'cmsFocusAr', 'cmsFocusEn',
    'cmsContactEmail', 'cmsContactLocAr', 'cmsContactLocEn'];

  basicsFields.forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      const d = AppState.getData();
      const val = document.getElementById(id).value;
      switch (id) {
        case 'cmsNameAr': d.basics.nameAr = val; break;
        case 'cmsNameEn': d.basics.nameEn = val; break;
        case 'cmsTitleAr': d.basics.titleAr = val; break;
        case 'cmsTitleEn': d.basics.titleEn = val; break;
        case 'cmsSubtitleAr': d.basics.subtitleAr = val; break;
        case 'cmsSubtitleEn': d.basics.subtitleEn = val; break;
        case 'cmsStatProjects': d.basics.stats.projects = val; break;
        case 'cmsStatExperience': d.basics.stats.experience = val; break;
        case 'cmsStatModels': d.basics.stats.models = val; break;
        case 'cmsStatCommits': d.basics.stats.commits = val; break;
        case 'cmsBioAr': d.about.bioAr = val; break;
        case 'cmsBioEn': d.about.bioEn = val; break;
        case 'cmsDegreeAr': d.about.degreeAr = val; break;
        case 'cmsDegreeEn': d.about.degreeEn = val; break;
        case 'cmsFocusAr': d.about.focusAr = val; break;
        case 'cmsFocusEn': d.about.focusEn = val; break;
        case 'cmsContactEmail': d.contact.email = val; break;
        case 'cmsContactLocAr': d.contact.locationAr = val; break;
        case 'cmsContactLocEn': d.contact.locationEn = val; break;
      }
      AppState.save();
      renderHero();
      renderAbout();
      renderContact();
      applyLang();
    });
  });

  document.getElementById('cmsChangePwd').addEventListener('click', function () {
    var username = document.getElementById('cmsChangeUser').value;
    var oldPwd = document.getElementById('cmsCurrentPwd').value;
    var newPwd = document.getElementById('cmsNewPwd').value;
    if (!username || !oldPwd || !newPwd) {
      showToast('Please fill all fields', 'error');
      return;
    }
    if (newPwd.length < 4) {
      showToast('Password must be at least 4 characters', 'error');
      return;
    }
    if (AUTH.changePassword(username, oldPwd, newPwd)) {
      document.getElementById('cmsCurrentPwd').value = '';
      document.getElementById('cmsNewPwd').value = '';
      showToast('Credentials updated successfully!', 'success');
    } else {
      showToast('Current username or password is incorrect', 'error');
    }
  });

  document.getElementById('cmsAddRoadmap').addEventListener('click', () => {
    const titleAr = document.getElementById('cmsRmTitleAr').value.trim();
    const titleEn = document.getElementById('cmsRmTitleEn').value.trim();
    const statusAr = document.getElementById('cmsRmStatusAr').value;
    const statusEn = document.getElementById('cmsRmStatusEn').value;
    const descAr = document.getElementById('cmsRmDescAr').value.trim();
    const descEn = document.getElementById('cmsRmDescEn').value.trim();
    if (!titleAr || !titleEn || !descAr || !descEn) {
      showToast('Please fill all fields', 'error');
      return;
    }
    const d = AppState.getData();
    if (_editRmIndex >= 0) {
      d.roadmap[_editRmIndex] = {
        id: d.roadmap[_editRmIndex].id,
        titleAr, titleEn, statusAr, statusEn, descAr, descEn
      };
      _editRmIndex = -1;
      document.getElementById('cmsAddRoadmap').textContent = '+ Add Roadmap Item';
      showToast('Roadmap item updated!', 'success');
    } else {
      d.roadmap.push({
        id: 'rm-' + Date.now().toString(36),
        titleAr, titleEn, statusAr, statusEn, descAr, descEn
      });
      showToast('Roadmap item added!', 'success');
    }
    AppState.setData(d);
    document.getElementById('cmsRmTitleAr').value = '';
    document.getElementById('cmsRmTitleEn').value = '';
    document.getElementById('cmsRmDescAr').value = '';
    document.getElementById('cmsRmDescEn').value = '';
    renderAll();
  });

  document.getElementById('cmsAddContactLink').addEventListener('click', () => {
    const label = document.getElementById('cmsContactLabel').value.trim();
    const url = document.getElementById('cmsContactLinkUrl').value.trim();
    const icon = document.getElementById('cmsContactIcon').value.trim() || '🔗';
    if (!label || !url) {
      showToast('Please fill label and URL', 'error');
      return;
    }
    const d = AppState.getData();
    if (!d.contact.links) d.contact.links = [];
    if (_editLinkIndex >= 0) {
      d.contact.links[_editLinkIndex] = { label, url, icon };
      _editLinkIndex = -1;
      document.getElementById('cmsAddContactLink').textContent = '+ Add Link';
      showToast('Contact link updated!', 'success');
    } else {
      d.contact.links.push({ label, url, icon });
      showToast('Contact link added!', 'success');
    }
    AppState.setData(d);
    document.getElementById('cmsContactLabel').value = '';
    document.getElementById('cmsContactLinkUrl').value = '';
    document.getElementById('cmsContactIcon').value = '';
    renderAll();
  });

  document.getElementById('cmsAddService').addEventListener('click', () => {
    const icon = document.getElementById('cmsServiceIcon').value.trim() || '⚙';
    const titleAr = document.getElementById('cmsServiceTitleAr').value.trim();
    const titleEn = document.getElementById('cmsServiceTitleEn').value.trim();
    const descAr = document.getElementById('cmsServiceDescAr').value.trim();
    const descEn = document.getElementById('cmsServiceDescEn').value.trim();
    if (!titleAr || !titleEn || !descAr || !descEn) {
      showToast('Please fill all fields', 'error');
      return;
    }
    const d = AppState.getData();
    if (!d.services) d.services = [];
    d.services.push({ id: 'svc-' + Date.now().toString(36), icon, titleAr, titleEn, descAr, descEn });
    AppState.setData(d);
    document.getElementById('cmsServiceIcon').value = '';
    document.getElementById('cmsServiceTitleAr').value = '';
    document.getElementById('cmsServiceTitleEn').value = '';
    document.getElementById('cmsServiceDescAr').value = '';
    document.getElementById('cmsServiceDescEn').value = '';
    renderAll();
    showToast('Service added!', 'success');
  });

  document.getElementById('cmsGalleryFileInput').addEventListener('change', function (e) {
    var file = e.target.files[0];
    if (!file) return;
    var preview = document.getElementById('cmsGalleryPreview');
    var previewImg = document.getElementById('cmsGalleryPreviewImg');
    var urlInput = document.getElementById('cmsGalleryImageUrl');
    var reader = new FileReader();
    reader.onload = function (ev) {
      urlInput.value = ev.target.result;
      previewImg.src = ev.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  });

  document.getElementById('cmsAddGallery').addEventListener('click', () => {
    const imageUrl = document.getElementById('cmsGalleryImageUrl').value.trim();
    const titleAr = document.getElementById('cmsGalleryTitleAr').value.trim();
    const titleEn = document.getElementById('cmsGalleryTitleEn').value.trim();
    const descAr = document.getElementById('cmsGalleryDescAr').value.trim();
    const descEn = document.getElementById('cmsGalleryDescEn').value.trim();
    if (!imageUrl || !titleAr || !titleEn) {
      showToast('Please fill image URL and title', 'error');
      return;
    }
    const d = AppState.getData();
    if (!d.gallery) d.gallery = [];
    d.gallery.push({ id: 'gal-' + Date.now().toString(36), imageUrl, titleAr, titleEn, descAr, descEn });
    AppState.setData(d);
    document.getElementById('cmsGalleryImageUrl').value = '';
    document.getElementById('cmsGalleryTitleAr').value = '';
    document.getElementById('cmsGalleryTitleEn').value = '';
    document.getElementById('cmsGalleryDescAr').value = '';
    document.getElementById('cmsGalleryDescEn').value = '';
    document.getElementById('cmsGalleryPreview').style.display = 'none';
    document.getElementById('cmsGalleryFileInput').value = '';
    renderAll();
    showToast('Gallery item added!', 'success');
  });
}

function renderCMSRoadmap() {
  const d = AppState.getData();
  const list = document.getElementById('cmsRoadmapList');
  if (!list) return;
  list.innerHTML = d.roadmap.map((item, i) => `
    <div class="cms-skill-item">
      <span class="cms-item-name">${escapeHtml(item.titleEn)} (${escapeHtml(item.statusEn)})</span>
      <span>
        <button class="cms-item-edit" data-rm-edit="${i}" title="Edit" style="background:none;border:none;color:var(--clr-accent);cursor:pointer;padding:2px 6px;font-size:0.8rem;">&#9998;</button>
        <button class="cms-item-delete" data-rm-del="${i}">&times;</button>
      </span>
    </div>
  `).join('');
  list.querySelectorAll('[data-rm-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.rmDel);
      const d = AppState.getData();
      d.roadmap.splice(idx, 1);
      AppState.setData(d);
      renderAll();
    });
  });
  list.querySelectorAll('[data-rm-edit]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.rmEdit);
      const item = AppState.getData().roadmap[idx];
      _editRmIndex = idx;
      document.getElementById('cmsRmTitleAr').value = item.titleAr;
      document.getElementById('cmsRmTitleEn').value = item.titleEn;
      document.getElementById('cmsRmStatusAr').value = item.statusAr;
      document.getElementById('cmsRmStatusEn').value = item.statusEn;
      document.getElementById('cmsRmDescAr').value = item.descAr;
      document.getElementById('cmsRmDescEn').value = item.descEn;
      document.getElementById('cmsAddRoadmap').textContent = 'Update Roadmap Item';
      document.getElementById('cmsAddRoadmap').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

var _editLinkIndex = -1;

function renderCMSContactLinks() {
  const d = AppState.getData();
  const list = document.getElementById('cmsContactLinksList');
  if (!list) return;
  list.innerHTML = (d.contact.links || []).map((link, i) => `
    <div class="cms-skill-item">
      <span class="cms-item-name">${escapeHtml(link.icon || '🔗')} ${escapeHtml(link.label)}</span>
      <span>
        <button class="cms-item-edit" data-link-edit="${i}" title="Edit" style="background:none;border:none;color:var(--clr-accent);cursor:pointer;padding:2px 6px;font-size:0.8rem;">&#9998;</button>
        <button class="cms-item-delete" data-contact-del="${i}">&times;</button>
      </span>
    </div>
  `).join('');
  list.querySelectorAll('[data-contact-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.contactDel);
      const d = AppState.getData();
      if (!d.contact.links) d.contact.links = [];
      d.contact.links.splice(idx, 1);
      AppState.setData(d);
      renderAll();
    });
  });
  list.querySelectorAll('[data-link-edit]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.linkEdit);
      const link = AppState.getData().contact.links[idx];
      _editLinkIndex = idx;
      document.getElementById('cmsContactLabel').value = link.label;
      document.getElementById('cmsContactIcon').value = link.icon || '';
      document.getElementById('cmsContactLinkUrl').value = link.url;
      document.getElementById('cmsAddContactLink').textContent = 'Update Link';
      document.getElementById('cmsAddContactLink').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function renderCMSServices() {
  const d = AppState.getData();
  const list = document.getElementById('cmsServicesList');
  if (!list) return;
  list.innerHTML = (d.services || []).map((s, i) => `
    <div class="cms-skill-item">
      <span class="cms-item-name">${escapeHtml(s.icon || '⚙')} ${escapeHtml(s.titleEn)}</span>
      <button class="cms-item-delete" data-service-del="${i}">&times;</button>
    </div>
  `).join('');
  list.querySelectorAll('[data-service-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.serviceDel);
      const d = AppState.getData();
      if (!d.services) d.services = [];
      d.services.splice(idx, 1);
      AppState.setData(d);
      renderAll();
    });
  });
}

function renderCMSGallery() {
  const d = AppState.getData();
  const list = document.getElementById('cmsGalleryList');
  if (!list) return;
  list.innerHTML = (d.gallery || []).map((item, i) => `
    <div class="cms-skill-item">
      <span class="cms-item-name">🖼 ${escapeHtml(item.titleEn)}</span>
      <button class="cms-item-delete" data-gallery-del="${i}">&times;</button>
    </div>
  `).join('');
  list.querySelectorAll('[data-gallery-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.galleryDel);
      const d = AppState.getData();
      if (!d.gallery) d.gallery = [];
      d.gallery.splice(idx, 1);
      AppState.setData(d);
      renderAll();
    });
  });
}
