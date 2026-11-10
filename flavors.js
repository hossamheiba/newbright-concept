/* New Bright: the Flavors page. Vanilla JS. Shares only styles.css with the home concept. */
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const FL = ['plain', 'vegetables', 'chicken', 'beef'];

/* ───────────── Copy: from the New Bright Company Profile and Brand Guideline (2026) ───────────── */
const T = {
  en: {
    skip: 'Skip to content', menu: 'Menu', 'cta.quote': 'Request a quote', 'menu.tag': 'Chinese Noodles · Pancit Canton', 'made.by': 'Al Rammah Factory, Al Khobar',
    'menu.home': 'Home',
    'ch.hero': 'Flavor range', 'ch.intro': 'Company overview', 'ch.idea': 'Product concept', 'ch.made': 'Manufacturing', 'ch.label': 'White label', 'ch.partners': 'Partnerships',
    'hero.cta2': 'Partnerships',
    'f.plain.name': 'Plain', 'f.vegetables.name': 'Vegetables', 'f.chicken.name': 'Chicken', 'f.beef.name': 'Beef',
    'fl.nav.top': 'Flavor range', 'fl.nav.plain': 'Plain', 'fl.nav.vegetables': 'Vegetables', 'fl.nav.chicken': 'Chicken', 'fl.nav.beef': 'Beef', 'fl.nav.range': 'Mild to rich', 'fl.nav.ways': 'Everyday versatility', 'fl.nav.close': 'Contact Us',
    'fl.eyebrow': 'Flavor range', 'fl.title': 'Four Flavors. One Distinctive Noodle Experience.',
    'fl.sub': 'The range moves from mild and versatile to rich and savory, giving consumers clear choices without changing the brand’s signature built-in flavor concept.',
    'fl.go': 'Meet the flavors',
    'fl.moment': 'A Taste of Good Moment', 'fl.built': 'Flavor built in', 'fl.ing': 'Ingredients', 'fl.profile': 'Flavor profile', 'fl.bestfor': 'Best for', 'fl.benefit': 'Brand benefit', 'fl.net': 'Net pack',
    'fl.plain.mood': 'Mild & Versatile', 'fl.vegetables.mood': 'Fresh & Vibrant', 'fl.chicken.mood': 'Savory & Comforting', 'fl.beef.mood': 'Rich & Satisfying',
    'fl.plain.desc': 'A simple and versatile option designed for those who enjoy a clean and mild taste. It is easy to enjoy on its own or customize with your favorite ingredients.',
    'fl.vegetables.desc': 'A fresh and vibrant flavor inspired by the goodness of vegetables. It brings a lighter, more refreshing taste while keeping the meal rich and enjoyable.',
    'fl.chicken.desc': 'A warm and familiar flavor crafted for everyday enjoyment. It delivers a savory and comforting taste that makes every meal simple and satisfying.',
    'fl.beef.desc': 'A richer and bolder flavor created for a deeper, more satisfying taste experience. It brings a full-bodied savory character that stands out in every bite.',
    'fl.plain.profile': 'Mild, simple, and versatile.', 'fl.vegetables.profile': 'Fresh, balanced, and vibrant.', 'fl.chicken.profile': 'Savory, balanced, and comforting.', 'fl.beef.profile': 'Rich, bold, and satisfying.',
    'fl.plain.bestfor': 'Perfect as a base for personal recipes and custom meal ideas.', 'fl.vegetables.bestfor': 'Great for lighter meals and a more refreshing noodle experience.',
    'fl.chicken.bestfor': 'Ideal for quick meals, family lunches, and everyday moments.', 'fl.beef.bestfor': 'Perfect for stronger taste preferences and fuller meal moments.',
    'fl.plain.benefit': 'Delivers a clean, easy noodle experience with the same New Bright quality.', 'fl.vegetables.benefit': 'Offers a flavorful and simple meal with the same built-in New Bright convenience.',
    'fl.chicken.benefit': 'Flavor is built directly into the noodles for a simple and convenient preparation.', 'fl.beef.benefit': 'Combines bold flavor with the brand’s simple built-in preparation concept.',
    'fl.plain.ing': 'Flour|Vegetable Oil|Salt|Water|Sodium Bicarbonate|Saffron Yolk',
    'fl.vegetables.ing': 'Flour|Garlic|Onion|Coriander|Green Colour|Sodium Bicarbonate|Oil|Maggi Vegetables|Flavor Enhancer|Salt|Water',
    'fl.chicken.ing': 'Flour|Garlic|Onion|Coriander|Chicken Spices|Chicken Powder|Salt|Sodium Bicarbonate|Saffron Yolk|Water|Oil',
    'fl.beef.ing': 'Flour|Garlic|Onion|Coriander|Green Colour|Meat Powder Roast|Salt|Sodium Bicarbonate|Water|Oil',
    'fl.plain.best': 'Custom sauces|Personal recipes|Different proteins|Creative noodle dishes|Consumers who prefer a milder base',
    'fl.vegetables.best': 'Vegetable-based dishes|Lighter noodle combinations|Fresh toppings|Colorful customized meals',
    'fl.chicken.best': 'Everyday meals|Chicken-based recipes|Vegetable combinations|Familiar savory flavors',
    'fl.beef.best': 'Rich noodle dishes|Beef combinations|Full-flavored sauces|Stronger savory preferences',
    'fs.title': 'From mild and versatile to rich and savory', 'fs.lead': 'Clear choices without changing the brand’s signature built-in flavor concept.', 'fs.s': 'Mild & Versatile', 'fs.e': 'Rich & Savory', 'fs.aria': 'Choose a flavor on the scale', 'fs.drag': 'Drag',
    'fw.title': 'Everyday Versatility', 'fw.lead': 'New Bright is designed to work as more than a fixed noodle recipe. Its built-in flavor creates a ready foundation, while the final meal remains open to individual taste.',
    'fw.1': 'Enjoy it as a simple noodle dish.', 'fw.2': 'Pair it with a favorite sauce.', 'fw.3': 'Add fresh or cooked vegetables.', 'fw.4': 'Add chicken, beef, seafood or another preferred protein.', 'fw.5': 'Finish with herbs, spices or toppings.', 'fw.6': 'Use the plain variety for original recipes.',
    'fw.end': 'One noodle range. Many ways to make it your own.', 'fw.prev': 'Previous', 'fw.next': 'Next',
    'close.eyebrow': 'Contact Us', 'close.title': 'Flavor in every strand', 'close.sub': 'Four Flavors. One Distinctive Noodle Experience', 'close.cta2': 'Flavor range',
    'c.phone': 'Phone', 'c.email': 'Email', 'c.address': 'Address', 'c.addr': 'Al Mousa Complex, Building C, King Faisal Road, Al Khobar, Eastern Province, P.O. Box 2269, Saudi Arabia',
    'foot.say': 'Flavor in every strand', 'foot.explore': 'Explore', 'foot.business': 'Contact Us', 'foot.flavors': 'The four flavors', 'foot.top': 'Back to top',
    'foot.fine': 'Design concept. Content from the New Bright Company Profile and Brand Guideline (2026).',
    'soc.label': 'New Bright on social media', 'soc.open': 'Show social media accounts', 'soc.close': 'Hide social media accounts', 'soc.tab': '(opens in a new tab)',
    'fact.5.l': 'Net pack'
  },
  ar: {
    skip: 'تخطَّ إلى المحتوى', menu: 'القائمة', 'cta.quote': 'اطلب عرض سعر', 'menu.tag': 'مكرونة صينية · بانسيت كانتون', 'made.by': 'مصنع الرماح، الخبر',
    'menu.home': 'الرئيسية',
    'ch.hero': 'تشكيلة النكهات', 'ch.intro': 'نبذة عن الشركة', 'ch.idea': 'فكرة المنتج', 'ch.made': 'التصنيع', 'ch.label': 'علامتك الخاصة', 'ch.partners': 'الشراكات',
    'hero.cta2': 'الشراكات',
    'f.plain.name': 'سادة', 'f.vegetables.name': 'خضار', 'f.chicken.name': 'دجاج', 'f.beef.name': 'لحم',
    'fl.nav.top': 'تشكيلة النكهات', 'fl.nav.plain': 'سادة', 'fl.nav.vegetables': 'خضار', 'fl.nav.chicken': 'دجاج', 'fl.nav.beef': 'لحم', 'fl.nav.range': 'من الهادئ إلى الغني', 'fl.nav.ways': 'تنوّع الاستخدام', 'fl.nav.close': 'تواصل معنا',
    'fl.eyebrow': 'تشكيلة النكهات', 'fl.title': 'أربع نكهات. تجربة نودلز واحدة مميزة.',
    'fl.sub': 'تتدرّج التشكيلة من الخفيف متعدد الاستخدامات إلى الغني الشهي، فتمنح المستهلك خيارات واضحة دون أن تتغيّر فكرة العلامة: النكهة داخل النودلز.',
    'fl.go': 'تعرّف على النكهات',
    'fl.moment': 'مذاق لحظة جميلة', 'fl.built': 'نكهة مدمجة', 'fl.ing': 'المكوّنات', 'fl.profile': 'طابع النكهة', 'fl.bestfor': 'مناسبة لـ', 'fl.benefit': 'ميزة العلامة', 'fl.net': 'وزن صافٍ',
    'fl.plain.mood': 'هادئة ومتعددة الاستخدامات', 'fl.vegetables.mood': 'منعشة ونابضة بالحياة', 'fl.chicken.mood': 'شهية ومريحة', 'fl.beef.mood': 'غنية ومُشبِعة',
    'fl.plain.desc': 'خيار بسيط ومتعدد الاستخدامات لمن يحبون الطعم النظيف والهادئ، يسهل الاستمتاع به كما هو أو تخصيصه بمكوّناتك المفضلة.',
    'fl.vegetables.desc': 'نكهة منعشة ونابضة بالحياة مستوحاة من خير الخضار، تمنح مذاقًا أخف وأكثر انتعاشًا مع بقاء الوجبة غنية وممتعة.',
    'fl.chicken.desc': 'نكهة دافئة ومألوفة صُنعت للاستمتاع اليومي، تقدّم طعمًا شهيًا ومريحًا يجعل كل وجبة بسيطة ومُشبِعة.',
    'fl.beef.desc': 'نكهة أغنى وأجرأ لتجربة طعم أعمق وأكثر إشباعًا، بطابع شهي كامل القوام يميّز كل لقمة.',
    'fl.plain.profile': 'هادئة وبسيطة ومتعددة الاستخدامات.', 'fl.vegetables.profile': 'منعشة ومتوازنة ونابضة بالحياة.', 'fl.chicken.profile': 'شهية ومتوازنة ومريحة.', 'fl.beef.profile': 'غنية وجريئة ومُشبِعة.',
    'fl.plain.bestfor': 'مثالية كقاعدة للوصفات الشخصية وأفكار الوجبات المخصصة.', 'fl.vegetables.bestfor': 'رائعة للوجبات الأخف وتجربة نودلز أكثر انتعاشًا.',
    'fl.chicken.bestfor': 'مثالية للوجبات السريعة وغداء العائلة ولحظات كل يوم.', 'fl.beef.bestfor': 'مثالية لمن يفضّلون الطعم الأقوى ولحظات الوجبات الأشبع.',
    'fl.plain.benefit': 'تقدّم تجربة نودلز نظيفة وسهلة بجودة نيو برايت نفسها.', 'fl.vegetables.benefit': 'تقدّم وجبة شهية وبسيطة بنفس راحة نيو برايت المدمجة.',
    'fl.chicken.benefit': 'النكهة مدمجة مباشرة في النودلز لتحضير بسيط ومريح.', 'fl.beef.benefit': 'تجمع بين النكهة الجريئة وفكرة التحضير البسيط المدمجة في العلامة.',
    'fl.plain.ing': 'دقيق|زيت نباتي|ملح|ماء|بيكربونات الصوديوم|صفار الزعفران',
    'fl.vegetables.ing': 'دقيق|ثوم|بصل|كزبرة|ملوّن أخضر|بيكربونات الصوديوم|زيت|خضار ماجي|معزّز نكهة|ملح|ماء',
    'fl.chicken.ing': 'دقيق|ثوم|بصل|كزبرة|توابل الدجاج|مسحوق الدجاج|ملح|بيكربونات الصوديوم|صفار الزعفران|ماء|زيت',
    'fl.beef.ing': 'دقيق|ثوم|بصل|كزبرة|ملوّن أخضر|مسحوق لحم محمّص|ملح|بيكربونات الصوديوم|ماء|زيت',
    'fl.plain.best': 'صلصات مخصصة|وصفات شخصية|بروتينات مختلفة|أطباق نودلز مبتكرة|لمن يفضّلون قاعدة أهدأ',
    'fl.vegetables.best': 'أطباق الخضار|تركيبات نودلز أخف|إضافات طازجة|وجبات ملوّنة مخصصة',
    'fl.chicken.best': 'وجبات كل يوم|وصفات الدجاج|تركيبات الخضار|نكهات شهية مألوفة',
    'fl.beef.best': 'أطباق نودلز غنية|تركيبات اللحم|صلصات كاملة النكهة|تفضيلات شهية أقوى',
    'fs.title': 'من الهادئ متعدد الاستخدامات إلى الغني الشهي', 'fs.lead': 'خيارات واضحة دون أن تتغيّر فكرة العلامة: النكهة مدمجة في النودلز.', 'fs.s': 'هادئة ومتعددة الاستخدامات', 'fs.e': 'غنية وشهية', 'fs.aria': 'اختر نكهة على المقياس', 'fs.drag': 'اسحب',
    'fw.title': 'تنوّع الاستخدام', 'fw.lead': 'صُممت نيو برايت لتكون أكثر من وصفة نودلز ثابتة: نكهتها المدمجة أساس جاهز، ويبقى الطبق النهائي مفتوحًا للذوق الفردي.',
    'fw.1': 'استمتع بها كطبق نودلز بسيط.', 'fw.2': 'قدّمها مع صلصتك المفضلة.', 'fw.3': 'أضف خضارًا طازجة أو مطبوخة.', 'fw.4': 'أضف دجاجًا أو لحمًا أو مأكولات بحرية أو أي بروتين تفضّله.', 'fw.5': 'أنهِها بالأعشاب أو التوابل أو الإضافات.', 'fw.6': 'استخدم النكهة السادة للوصفات الأصلية.',
    'fw.end': 'تشكيلة نودلز واحدة. طرق كثيرة لتجعلها خاصة بك.', 'fw.prev': 'السابق', 'fw.next': 'التالي',
    'close.eyebrow': 'تواصل معنا', 'close.title': 'نكهة في كل خصلة', 'close.sub': 'أربع نكهات. تجربة نودلز واحدة مميزة', 'close.cta2': 'تشكيلة النكهات',
    'c.phone': 'الهاتف', 'c.email': 'البريد الإلكتروني', 'c.address': 'العنوان', 'c.addr': 'مجمع الموسى، مبنى C، طريق الملك فيصل، الخبر، المنطقة الشرقية، ص.ب 2269، المملكة العربية السعودية',
    'foot.say': 'نكهة في كل خصلة', 'foot.explore': 'استكشف', 'foot.business': 'تواصل معنا', 'foot.flavors': 'النكهات الأربع', 'foot.top': 'للأعلى',
    'foot.fine': 'فكرة تصميم. المحتوى من الملف التعريفي ودليل الهوية لنيو برايت (2026).',
    'soc.label': 'نيو برايت على وسائل التواصل', 'soc.open': 'إظهار حسابات التواصل الاجتماعي', 'soc.close': 'إخفاء حسابات التواصل الاجتماعي', 'soc.tab': '(يفتح في تبويب جديد)',
    'fact.5.l': 'وزن صافٍ'
  }
};
let lang = root.lang === 'ar' ? 'ar' : 'en';
const t = (k) => (T[lang] && T[lang][k]) || T.en[k] || '';

const sections = $$('main > section[data-ch]');
let chIdx = 0, lastHdr = '';

function fillLists() {
  $$('[data-list]').forEach((ul) => {
    ul.textContent = '';
    t(ul.dataset.list).split('|').forEach((s) => { const li = document.createElement('li'); li.textContent = s; ul.appendChild(li); });
  });
}
function applyLang(next) {
  lang = next; root.lang = lang; root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  fillLists();
  $('#langTxt').textContent = lang === 'ar' ? 'EN' : 'العربية';
  $('#langBtn').setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  document.title = lang === 'ar' ? 'نيو برايت | تشكيلة النكهات' : 'New Bright | Flavor range';
  $('#hdrLabel').textContent = t(sections[chIdx] ? sections[chIdx].dataset.label : 'fl.nav.top');
  $('#sdLabel').textContent = t($('#sdock').hasAttribute('data-open') ? 'soc.close' : 'soc.open');
  if (typeof spectrumPaint === 'function') spectrumPaint();
  try { localStorage.setItem('nb-lang', lang); } catch (e) {}
  measure();
}

/* ───────────── Layout cache and scroll frame ───────────── */
const L = new Map();
let vh = innerHeight, docH = 0, ticking = false;
function cacheLayout() {
  vh = innerHeight; docH = root.scrollHeight - vh;
  const sy = scrollY;
  [...sections, $('.foot')].forEach((el) => { const r = el.getBoundingClientRect(); L.set(el, { top: r.top + sy, height: r.height }); });
}
const R = (el) => { const c = L.get(el) || { top: 0, height: 0 }, tp = c.top - scrollY; return { top: tp, bottom: tp + c.height, height: c.height }; };
function measure() { cacheLayout(); schedule(); }
function schedule() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
const FOOT = $('.foot'), chapters = $$('.fc'), fwTrack = $('#fwTrack');

function frame() {
  ticking = false;
  const y = scrollY;
  // header theme and chapter label
  let theme = 'light', idx = 0;
  for (let i = 0; i < sections.length; i++) { const r = R(sections[i]); if (r.top <= 44 && r.bottom > 44) { idx = i; theme = sections[i].dataset.hdr || 'light'; break; } }
  if (R(FOOT).top <= 44) { theme = 'dark'; idx = sections.length - 1; }
  if (theme !== lastHdr) { document.body.dataset.hdr = theme; lastHdr = theme; }
  let rt = 'light';
  for (let i = 0; i < sections.length; i++) { const r = R(sections[i]); if (r.top <= vh * 0.5 && r.bottom > vh * 0.5) { rt = sections[i].dataset.hdr || 'light'; break; } }
  if (R(FOOT).top <= vh * 0.5) rt = 'dark';
  if (document.body.dataset.rail !== rt) document.body.dataset.rail = rt;
  if (idx !== chIdx) {
    chIdx = idx;
    const lab = $('#hdrLabel'); lab.classList.add('sw');
    setTimeout(() => { lab.textContent = t(sections[idx].dataset.label); $('#hdrNum').textContent = String(idx + 1).padStart(2, '0'); lab.classList.remove('sw'); }, 160);
  }
  // chapters: the picture drifts as the chapter passes
  if (!reduce.matches) chapters.forEach((c) => {
    const r = R(c); if (r.bottom < -vh * 0.3 || r.top > vh * 1.3) return;
    c.querySelector('.fc-vis').style.setProperty('--fp', clamp((vh - r.top) / (vh + r.height)).toFixed(3));
  });
}

/* ───────────── Smooth scrolling (Lenis, as on the main concept) ───────────── */
let lenis = null;
if (window.Lenis && !reduce.matches) {
  lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
  lenis.on('scroll', schedule);
  const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
}
function goTo(target) {
  if (lenis) lenis.scrollTo(target, { duration: 1.4, easing: (x) => 1 - Math.pow(1 - x, 4) });
  else target.scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth' });
}
$$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
  const id = a.getAttribute('href'); if (id.length < 2 || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
  const el = document.querySelector(id); if (!el) return;
  e.preventDefault();
  if (a.closest('#menu')) { menu.close(); menuBtn.setAttribute('aria-expanded', 'false'); if (lenis) lenis.start(); }
  goTo(el); history.replaceState(null, '', id);
}));

/* ───────────── Menu, language, social dock ───────────── */
const menu = $('#menu'), menuBtn = $('#menuBtn');
function openMenu() { if (!menu.open) { menu.showModal(); menuBtn.setAttribute('aria-expanded', 'true'); if (lenis) lenis.stop(); } }
function closeMenu() {
  if (!menu.open) return; menu.classList.add('closing');
  setTimeout(() => { menu.close(); menu.classList.remove('closing'); menuBtn.setAttribute('aria-expanded', 'false'); if (lenis) lenis.start(); menuBtn.focus(); }, reduce.matches ? 0 : 380);
}
menuBtn.addEventListener('click', openMenu); $('#menuX').addEventListener('click', closeMenu);
menu.addEventListener('cancel', (e) => { e.preventDefault(); closeMenu(); });
$('#langBtn').addEventListener('click', () => applyLang(lang === 'ar' ? 'en' : 'ar'));

const sdock = $('#sdock'), sdToggle = $('#sdToggle');
function sdSet(open) {
  sdock.toggleAttribute('data-open', open); sdToggle.setAttribute('aria-expanded', String(open));
  $('#sdLabel').textContent = t(open ? 'soc.close' : 'soc.open'); $('#sdLabel').dataset.i18n = open ? 'soc.close' : 'soc.open';
}
sdToggle.addEventListener('click', () => sdSet(!sdock.hasAttribute('data-open')));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && sdock.hasAttribute('data-open')) { sdSet(false); sdToggle.focus(); } });
document.addEventListener('pointerdown', (e) => { if (sdock.hasAttribute('data-open') && !sdock.contains(e.target)) sdSet(false); });

/* ───────────── Reveals ───────────── */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });
  $$('[data-reveal], #rowPacks').forEach((el) => io.observe(el));
} else { $$('[data-reveal], #rowPacks').forEach((el) => el.classList.add('in')); }

/* ───────────── Mild to rich: drag the circle along the strand ───────────── */
const fsCard = $('#fsCard'), fsTrack = $('#fsTrack'), fsThumb = $('#fsThumb'), fsThumbImg = $('#fsThumbImg'), fsPks = $$('.fs-pk'), fsTicks = $$('.fs-tick');
const COL = ['var(--yellow)', 'var(--green)', 'var(--orange)', 'var(--spice)'];
let fsPos = 0, fsNear = -1, fsAnim = 0, fsDrag = false;
function fsPaint(pos) {
  fsPos = pos;
  const sx = root.dir === 'rtl' ? -1 : 1;
  fsTrack.style.setProperty('--p', pos.toFixed(4));
  // the card's colour is a blend of the two flavors the thumb sits between
  const i0 = Math.min(2, Math.floor(pos)), f = clamp(pos - i0);
  fsCard.style.setProperty('--c', `color-mix(in oklab, ${COL[i0]} ${((1 - f) * 100).toFixed(1)}%, ${COL[i0 + 1]})`);
  // the packs ride the dial
  fsPks.forEach((img, i) => {
    const d = i - pos, a = Math.abs(d), op = clamp(1 - a * 1.2);
    img.style.opacity = op.toFixed(3);
    img.style.transform = `translateX(${(d * 46 * sx).toFixed(1)}%) scale(${(1 - Math.min(a, 1) * 0.2).toFixed(3)}) rotate(${(d * -6 * sx).toFixed(1)}deg)`;
    img.style.zIndex = String(10 - Math.round(a * 3));
  });
  const n = clamp(Math.round(pos), 0, 3);
  if (n !== fsNear) { fsNear = n; fsText(n, true); }
}
function fsText(n, swap) {
  const f = FL[n];
  const apply = () => {
    fsCard.dataset.f = f;
    $('#fsN').textContent = `0${n + 1}`; $('#fsName').textContent = t(`f.${f}.name`); $('#fsMood').textContent = t(`fl.${f}.mood`);
    $('#fsProfile').textContent = t(`fl.${f}.profile`); $('#fsBest').textContent = t(`fl.${f}.bestfor`);
    fsThumbImg.src = `assets/packs/${f}.webp`;
    fsThumb.setAttribute('aria-valuenow', String(n + 1)); fsThumb.setAttribute('aria-valuetext', `${t(`f.${f}.name`)}: ${t(`fl.${f}.mood`)}`);
    fsTicks.forEach((b, i) => b.classList.toggle('on', i === n));
  };
  if (swap && !reduce.matches) { fsCard.classList.add('sw'); setTimeout(() => { apply(); fsCard.classList.remove('sw'); }, 170); } else apply();
}
function fsGo(target) {
  cancelAnimationFrame(fsAnim);
  const from = fsPos, to = clamp(target, 0, 3), t0 = performance.now(), dur = reduce.matches ? 0 : 150 + Math.abs(to - from) * 260;
  if (!dur) { fsPaint(to); return; }
  const step = (now) => {
    const k = clamp((now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    fsPaint(from + (to - from) * e);
    if (k < 1) fsAnim = requestAnimationFrame(step);
  };
  fsAnim = requestAnimationFrame(step);
}
// the thumb's centre runs from one radius inside the bar's start to one radius inside its end
const fsFrac = (e) => { const r = fsTrack.getBoundingClientRect(), tr = fsThumb.offsetWidth / 2, x = root.dir === 'rtl' ? r.right - e.clientX : e.clientX - r.left; return clamp((x - tr) / Math.max(1, r.width - tr * 2)); };
function fsTouched() { fsTrack.classList.add('touched'); }
fsTrack.addEventListener('pointerdown', (e) => {
  if (e.target.closest('.fs-tick')) return;
  fsDrag = true; fsTouched(); fsTrack.classList.add('drag'); fsTrack.setPointerCapture(e.pointerId);
  cancelAnimationFrame(fsAnim); fsPaint(fsFrac(e) * 3);
});
fsTrack.addEventListener('pointermove', (e) => { if (fsDrag) fsPaint(fsFrac(e) * 3); });
const fsUp = () => { if (!fsDrag) return; fsDrag = false; fsTrack.classList.remove('drag'); fsGo(Math.round(fsPos)); };
fsTrack.addEventListener('pointerup', fsUp); fsTrack.addEventListener('pointercancel', fsUp);
fsTicks.forEach((b, i) => b.addEventListener('click', () => { fsTouched(); fsGo(i); }));
fsThumb.addEventListener('keydown', (e) => {
  const rtl = root.dir === 'rtl', cur = Math.round(fsPos);
  let n = cur;
  if (e.key === (rtl ? 'ArrowLeft' : 'ArrowRight') || e.key === 'ArrowUp') n = cur + 1;
  else if (e.key === (rtl ? 'ArrowRight' : 'ArrowLeft') || e.key === 'ArrowDown') n = cur - 1;
  else if (e.key === 'Home') n = 0; else if (e.key === 'End') n = 3; else return;
  e.preventDefault(); fsTouched(); fsGo(clamp(n, 0, 3));
});
function spectrumPaint() { fsNear = -1; fsPaint(fsPos); }

/* ───────────── Everyday versatility: a track you can slide ───────────── */
const fwPrev = $('#fwPrev'), fwNext = $('#fwNext'), fwBar = $('#fwBar');
function fwUpdate() {
  const max = fwTrack.scrollWidth - fwTrack.clientWidth, x = Math.abs(fwTrack.scrollLeft);
  fwBar.style.setProperty('--fp', (max > 0 ? clamp(0.16 + 0.84 * x / max) : 1).toFixed(3));
  fwPrev.disabled = x < 4; fwNext.disabled = x > max - 4;
}
const fwStep = () => { const c = $('.fw-card'); return c.getBoundingClientRect().width + 20; };
fwPrev.addEventListener('click', () => fwTrack.scrollBy({ left: -fwStep() * (root.dir === 'rtl' ? -1 : 1), behavior: 'smooth' }));
fwNext.addEventListener('click', () => fwTrack.scrollBy({ left: fwStep() * (root.dir === 'rtl' ? -1 : 1), behavior: 'smooth' }));
fwTrack.addEventListener('scroll', fwUpdate, { passive: true });

addEventListener('scroll', schedule, { passive: true });
addEventListener('resize', () => { measure(); fwUpdate(); });
addEventListener('load', measure);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measure(); fwUpdate(); });
if ('ResizeObserver' in window) new ResizeObserver(() => { if (Math.abs(root.scrollHeight - vh - docH) > 2) measure(); }).observe(document.body);

applyLang(lang);
cacheLayout(); frame(); fwUpdate();
})();
