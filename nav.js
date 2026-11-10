/* New Bright: the site's shared navigation text (menu and footer lists).
   Every page keeps its own copy in its own script; this file only translates the links that all five pages share. */
(() => {
  'use strict';
  const D = {
    'menu.home': ['Home', 'الرئيسية'],
    'menu.flavors': ['Flavors', 'النكهات'],
    'menu.company': ['The company', 'الشركة'],
    'menu.label': ['White label', 'علامتك الخاصة'],
    'menu.contact': ['Contact', 'تواصل معنا'],
    'menu.quote': ['Request a quote', 'اطلب عرض سعر'],
  };
  const root = document.documentElement;
  const apply = () => {
    const i = root.lang === 'ar' ? 1 : 0;
    document.querySelectorAll('[data-nav]').forEach((el) => { const v = D[el.dataset.nav]; if (v && el.textContent !== v[i]) el.textContent = v[i]; });
  };
  new MutationObserver(apply).observe(root, { attributes: true, attributeFilter: ['lang'] });
  apply();
})();
