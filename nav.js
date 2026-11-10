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
    'foot.phone': ['Phone', 'الهاتف'],
    'foot.email': ['Email', 'البريد الإلكتروني'],
    'foot.address': ['Address', 'العنوان'],
    'foot.addr': ['Al Mousa Complex, Building C, King Faisal Road, Al Khobar, Eastern Province, P.O. Box 2269, Saudi Arabia', 'مجمع الموسى، مبنى C، طريق الملك فيصل، الخبر، المنطقة الشرقية، ص.ب 2269، المملكة العربية السعودية'],
    'mq.pause': ['Pause the moving text', 'إيقاف النص المتحرك'],
    'mq.play': ['Play the moving text', 'تشغيل النص المتحرك'],
  };
  const ICON = { pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>', play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l11 7-11 7z"/></svg>' };
  const root = document.documentElement;
  const apply = () => {
    const i = root.lang === 'ar' ? 1 : 0;
    document.querySelectorAll('[data-nav]').forEach((el) => { const v = D[el.dataset.nav]; if (v && el.textContent !== v[i]) el.textContent = v[i]; });
  };
  // the moving strips: anyone can stop them (WCAG 2.2.2)
  const strips = [...document.querySelectorAll('.co-marq, .ct-marq')];
  const mq = strips.map((box) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'mq-btn';
    box.appendChild(b);
    b.addEventListener('click', () => { box.classList.toggle('is-paused'); paint(); });
    return { box, b };
  });
  function paint() {
    const i = root.lang === 'ar' ? 1 : 0;
    mq.forEach(({ box, b }) => { const on = box.classList.contains('is-paused'); b.innerHTML = on ? ICON.play : ICON.pause; b.setAttribute('aria-label', D[on ? 'mq.play' : 'mq.pause'][i]); });
  }
  new MutationObserver(paint).observe(root, { attributes: true, attributeFilter: ['lang'] });
  paint();
  new MutationObserver(apply).observe(root, { attributes: true, attributeFilter: ['lang'] });
  apply();
})();
