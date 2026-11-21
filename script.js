(function () {
  /* Skills tabs. Each item: [name, toConfirm] */
  var SKILLS = [
    { id: 'product', label: 'Product', items: [['Product strategy'], ['Primary research'], ['MVP scoping'], ['Requirements'], ['Prioritisation'], ['Agile delivery']] },
    { id: 'consulting', label: 'Consulting', items: [['Market sizing'], ['Competitive intelligence'], ['GTM strategy'], ['Root cause analysis'], ['Process improvement']] },
    { id: 'data', label: 'Data and analytics', items: [['SQL'], ['Kibana'], ['Meltwater'], ['Excel (Advanced)', true], ['Power BI', true], ['Power Query', true], ['Tableau', true], ['Dashboarding', true]] },
    { id: 'tools', label: 'Coding and tools', items: [['Python'], ['JavaScript'], ['Claude Code'], ['Google Dialogflow'], ['Jira', true], ['Confluence', true]] },
    { id: 'mgmt', label: 'Management', items: [['Stakeholder management'], ['Cross-functional work'], ['Client feedback handling']] }
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
    s.items.forEach(function (item) {
      var c = document.createElement('span');
      c.className = 'chip' + (item[1] ? ' tbc' : '');
      c.textContent = item[0];
      chips.appendChild(c);
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
