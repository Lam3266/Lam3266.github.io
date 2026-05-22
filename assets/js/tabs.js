(function () {
  'use strict';

  var tabs = document.querySelectorAll('.tab');
  var cards = document.querySelectorAll('[data-category]');

  function setTab(value) {
    tabs.forEach(function (t) {
      t.classList.toggle('active', t.dataset.tab === value);
    });
    cards.forEach(function (card) {
      var cats = card.dataset.category ? card.dataset.category.split(' ') : [];
      card.style.display = (value === 'all' || cats.indexOf(value) !== -1) ? '' : 'none';
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () { setTab(tab.dataset.tab); });
  });

  // Expose pour les CTAs hero
  window.setTab = setTab;

  // Liens avec data-goto-tab déclenchent l'onglet correspondant
  document.querySelectorAll('[data-goto-tab]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      setTab(el.dataset.gotoTab);
      var target = document.getElementById('projets');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // État initial
  setTab('all');
})();
