(function () {
  var SKILLS = [
    { id: 'product', label: 'Product and Strategy', items: ['Product strategy', 'Primary research', 'MVP scoping', 'Requirements', 'Prioritisation', 'Agile delivery', 'Market sizing', 'Competitive intelligence', 'GTM strategy'] },
    { id: 'data', label: 'Data and Analytics', items: ['SQL', 'Kibana', 'Meltwater', 'Root cause analysis', 'Process improvement', 'Excel (Advanced)', 'Power BI', 'Power Query', 'Tableau', 'Dashboarding'] },
    { id: 'tools', label: 'Tools and Collaboration', items: ['Python', 'JavaScript', 'Claude Code', 'Google Dialogflow', 'Jira', 'Confluence', 'Stakeholder management', 'Cross-functional work', 'Client feedback handling'] }
  ];
  var tabs = document.getElementById('tabs');
  var panel = document.getElementById('skillpanel');
  var chips = document.createElement('div'); chips.className = 'chips';
  panel.appendChild(chips);
  var tabEls = [];
  function selectTab(i) {
    var s = SKILLS[i];
    tabEls.forEach(function (t, j) { t.setAttribute('aria-selected', j === i ? 'true' : 'false'); t.tabIndex = j === i ? 0 : -1; });
    panel.setAttribute('aria-labelledby', 'tab-' + s.id);
    chips.textContent = '';
    s.items.forEach(function (name) {
      var c = document.createElement('span'); c.className = 'chip'; c.textContent = name; chips.appendChild(c);
    });
  }
  SKILLS.forEach(function (s, i) {
    var t = document.createElement('button');
    t.type = 'button'; t.className = 'tab'; t.id = 'tab-' + s.id; t.textContent = s.label;
    t.setAttribute('role', 'tab'); t.setAttribute('aria-controls', 'skillpanel');
    t.addEventListener('click', function () { selectTab(i); });
    t.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowRight') n = (i + 1) % SKILLS.length;
      if (e.key === 'ArrowLeft') n = (i - 1 + SKILLS.length) % SKILLS.length;
      if (n !== null) { e.preventDefault(); selectTab(n); tabEls[n].focus(); }
    });
    tabs.appendChild(t); tabEls.push(t);
  });
  selectTab(0);
})();
