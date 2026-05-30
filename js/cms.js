function renderCMSLists() {
  renderCMSSkills();
  renderCMSProjects();
  renderCMSExperience();
}

function renderCMSSkills() {
  const d = AppState.getData();
  const list = document.getElementById('cmsSkillsList');
  list.innerHTML = d.skills.map((s, i) => `
    <div class="cms-skill-item">
      <span class="cms-item-name">${escapeHtml(s.name)} (${s.proficiency}%)</span>
      <button class="cms-item-delete" data-skill-index="${i}">&times;</button>
    </div>
  `).join('');
  list.querySelectorAll('.cms-item-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.skillIndex);
      const d = AppState.getData();
      d.skills.splice(idx, 1);
      AppState.setData(d);
      renderAll();
    });
  });
}

function renderCMSProjects() {
  const d = AppState.getData();
  const list = document.getElementById('cmsProjectsList');
  list.innerHTML = d.projects.map((p, i) => `
    <div class="cms-skill-item">
      <span class="cms-item-name">${escapeHtml(p.titleEn)}</span>
      <button class="cms-item-delete" data-project-index="${i}">&times;</button>
    </div>
  `).join('');
  list.querySelectorAll('.cms-item-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.projectIndex);
      const d = AppState.getData();
      d.projects.splice(idx, 1);
      AppState.setData(d);
      renderAll();
    });
  });
}

function renderCMSExperience() {
  const d = AppState.getData();
  const list = document.getElementById('cmsExperienceList');
  list.innerHTML = d.experience.map((exp, i) => `
    <div class="cms-skill-item">
      <span class="cms-item-name">${escapeHtml(exp.companyEn)} - ${escapeHtml(exp.roleEn)}</span>
      <button class="cms-item-delete" data-experience-index="${i}">&times;</button>
    </div>
  `).join('');
  list.querySelectorAll('.cms-item-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.experienceIndex);
      const d = AppState.getData();
      d.experience.splice(idx, 1);
      AppState.setData(d);
      renderAll();
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
    d.skills.push({ name, proficiency: prof, category: cat });
    AppState.setData(d);
    document.getElementById('cmsSkillName').value = '';
    document.getElementById('cmsSkillProf').value = '';
    renderAll();
    showToast('Skill added!', 'success');
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
    d.projects.push({
      id: 'proj-' + Date.now().toString(36),
      titleAr, titleEn, descAr, descEn, tags, glow, github, demo
    });
    AppState.setData(d);
    document.getElementById('cmsProjTitleAr').value = '';
    document.getElementById('cmsProjTitleEn').value = '';
    document.getElementById('cmsProjDescAr').value = '';
    document.getElementById('cmsProjDescEn').value = '';
    document.getElementById('cmsProjTags').value = '';
    renderAll();
    showToast('Project added!', 'success');
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
    d.experience.push({
      id: 'exp-' + Date.now().toString(36),
      companyAr, companyEn, roleAr, roleEn,
      period: periodAr, periodEn: periodEn,
      descAr, descEn
    });
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
    showToast('Experience added!', 'success');
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
    'cmsDegreeAr', 'cmsDegreeEn', 'cmsFocusAr', 'cmsFocusEn'];

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
      }
      AppState.save();
      renderHero();
      renderAbout();
      AppState.applyLang();
    });
  });

  document.getElementById('cmsChangePwd').addEventListener('click', () => {
    const oldPwd = document.getElementById('cmsCurrentPwd').value;
    const newPwd = document.getElementById('cmsNewPwd').value;
    if (!oldPwd || !newPwd) {
      showToast('Please fill both fields', 'error');
      return;
    }
    if (newPwd.length < 4) {
      showToast('Password must be at least 4 characters', 'error');
      return;
    }
    if (AUTH.changePassword(oldPwd, newPwd)) {
      document.getElementById('cmsCurrentPwd').value = '';
      document.getElementById('cmsNewPwd').value = '';
      showToast('Password updated successfully!', 'success');
    } else {
      showToast('Current password is incorrect', 'error');
    }
  });
}
