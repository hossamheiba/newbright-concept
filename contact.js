/* New Bright: the Contact page. Vanilla JS. Shares only styles.css with the home concept. */
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/* ───────────── Copy: the main site's contact page, messages and the company profile ───────────── */
const T = {
 "en": {
  "skip": "Skip to content",
  "menu": "Menu",
  "cta.quote": "Request a quote",
  "menu.tag": "Chinese Noodles · Pancit Canton",
  "made.by": "Al Rammah Factory, Al Khobar",
  "menu.home": "Home",
  "ch.hero": "Flavor range",
  "ch.intro": "Company overview",
  "ch.idea": "Product concept",
  "ch.made": "Manufacturing",
  "ch.label": "White label",
  "ch.partners": "Partnerships",
  "hero.cta2": "Partnerships",
  "f.plain.name": "Plain",
  "f.vegetables.name": "Vegetables",
  "f.chicken.name": "Chicken",
  "f.beef.name": "Beef",
  "c.addr": "Al Mousa Complex, Building C, King Faisal Road, Al Khobar, Eastern Province, P.O. Box 2269, Saudi Arabia",
  "foot.say": "Flavor in every strand",
  "foot.explore": "Explore",
  "foot.business": "Contact Us",
  "foot.flavors": "The four flavors",
  "foot.top": "Back to top",
  "foot.fine": "Design concept. Content from the New Bright Company Profile and Brand Guideline (2026).",
  "soc.label": "New Bright on social media",
  "soc.open": "Show social media accounts",
  "soc.close": "Hide social media accounts",
  "soc.tab": "(opens in a new tab)",
  "ct.nav.top": "Contact",
  "ct.nav.help": "How can we help?",
  "ct.nav.visit": "Head office",
  "ct.nav.follow": "Follow us",
  "ct.eyebrow": "We are here for you",
  "ct.title": "Contact",
  "ct.intro": "A question about our noodles, a thought on a flavor, or an idea to share? Write to us — we would love to hear from you.",
  "ct.hint": "Tap a line to open it. Use the button to copy it.",
  "ct.ch.wa": "WhatsApp",
  "ct.ch.phone": "Phone",
  "ct.ch.email": "Email",
  "ct.ch.wa.n": "For consumers",
  "ct.ch.phone.n": "Or call us",
  "ct.ch.email.n": "For business",
  "ct.copy": "Copy",
  "ct.copied": "Copied",
  "ct.copy.a": "Copy",
  "ct.r.eyebrow": "Three ways in",
  "ct.r.title": "How can we help?",
  "ct.r.pick": "Choose what brings you here",
  "ct.p.1.t": "Questions & feedback",
  "ct.p.1.d": "A product, a flavor, a suggestion.",
  "ct.p.2.t": "Trade & distribution",
  "ct.p.2.d": "Shops, distributors, food service, online.",
  "ct.p.3.t": "Your own brand",
  "ct.p.3.d": "Our noodles, under your name.",
  "ct.t.title": "Business enquiries",
  "ct.t.p": "For supermarkets, groceries, distributors, restaurants and online stores: tell us about your business and the flavors you need, and we will prepare a quote for you.",
  "ct.t.quote": "Request a quote",
  "ct.t.mail": "Request a quote",
  "ct.w.title": "White label",
  "ct.w.p": "Your brand, our noodles. We make Asian-style noodles in Saudi Arabia, and we can make them for you, under your name.",
  "ct.w.go": "Try it on a box",
  "ct.w.start": "Start your white label",
  "cq.title": "Request a quote",
  "cq.business": "Your business",
  "cq.company": "Business name",
  "cq.type": "Type of business",
  "cq.choose": "Choose a type",
  "cq.types": "Supermarket or hypermarket|Grocery or convenience store|Distributor or wholesaler|Restaurant, café or hotel|Online store|Import and export|Something else",
  "cq.order": "Your order",
  "cq.flavors": "Which flavors?",
  "cq.qty": "Approximate monthly quantity",
  "cq.qtys": "Not decided yet|Under 50 cartons|50 to 200 cartons|200 to 1,000 cartons|Over 1,000 cartons",
  "cq.person": "How to reach you",
  "cq.notes": "Anything else we should know?",
  "cq.submit": "Request a quote",
  "cq.err.company": "Please enter the business name.",
  "cq.err.type": "Please choose a type of business.",
  "cq.prev.t": "Your request was not sent",
  "cq.prev.b": "This form is a preview: the site does not receive requests yet. Your details are still in the form, and you can reach us on the numbers above.",
  "cq.next.t": "What happens next",
  "cq.next.1": "You send the form, with the flavors and the quantity you have in mind.",
  "cq.next.2": "We contact you by phone or email to confirm the details.",
  "cq.next.3": "We prepare the quote for you.",
  "cf.title": "Send us a message",
  "cf.note": "Fields marked (required) must be filled in.",
  "cf.req": "(required)",
  "cf.opt": "(optional)",
  "cf.name": "Name",
  "cf.phone": "Mobile number",
  "cf.phoneHint": "e.g. 0512345678",
  "cf.email": "Email",
  "cf.topic": "Subject",
  "cf.topics": "General enquiry|A question about a product|Feedback or a suggestion|Something else",
  "cf.flavors": "Which flavor?",
  "cf.flavorsHint": "Pick one or more, or leave it.",
  "cf.message": "Your message",
  "cf.counter": "{count} of {max} characters",
  "cf.submit": "Send message",
  "cf.fix": "Check the fields marked in red.",
  "cf.prev.t": "Your message was not sent",
  "cf.prev.b": "This form is a preview: the site does not receive messages yet. Your message is still in the form.",
  "cf.err.name": "Please enter your name.",
  "cf.err.phone": "Please enter your mobile number.",
  "cf.err.phoneBad": "Check the number: digits only, 8 to 15 of them.",
  "cf.err.email": "Check the email address, e.g. name@example.com.",
  "cf.err.msg": "Please write your message.",
  "cf.err.short": "The message is too short: at least {min} characters.",
  "ct.v.eyebrow": "Head office",
  "ct.v.title": "Come and see where it is made",
  "ct.v.co": "Al Rammah Factory",
  "ct.v.city": "Al Khobar",
  "ct.v.map": "View on the map",
  "ct.v.copy": "Copy address",
  "ct.v.label": "Head office",
  "ct.f.eyebrow": "Follow us",
  "ct.f.title": "Find us on",
  "ct.n.instagram": "Instagram",
  "ct.n.tiktok": "TikTok",
  "ct.n.snapchat": "Snapchat",
  "ct.n.x": "X",
  "ct.n.youtube": "YouTube",
  "ct.n.facebook": "Facebook",
  "ct.n.whatsapp": "WhatsApp",
  "ct.n.linkedin": "LinkedIn"
 },
 "ar": {
  "skip": "تخطَّ إلى المحتوى",
  "menu": "القائمة",
  "cta.quote": "اطلب عرض سعر",
  "menu.tag": "مكرونة صينية · بانسيت كانتون",
  "made.by": "مصنع الرماح، الخبر",
  "menu.home": "الرئيسية",
  "ch.hero": "تشكيلة النكهات",
  "ch.intro": "نبذة عن الشركة",
  "ch.idea": "فكرة المنتج",
  "ch.made": "التصنيع",
  "ch.label": "علامتك الخاصة",
  "ch.partners": "الشراكات",
  "hero.cta2": "الشراكات",
  "f.plain.name": "سادة",
  "f.vegetables.name": "خضار",
  "f.chicken.name": "دجاج",
  "f.beef.name": "لحم",
  "c.addr": "مجمع الموسى، مبنى C، طريق الملك فيصل، الخبر، المنطقة الشرقية، ص.ب 2269، المملكة العربية السعودية",
  "foot.say": "نكهة في كل خصلة",
  "foot.explore": "استكشف",
  "foot.business": "تواصل معنا",
  "foot.flavors": "النكهات الأربع",
  "foot.top": "للأعلى",
  "foot.fine": "فكرة تصميم. المحتوى من الملف التعريفي ودليل الهوية لنيو برايت (2026).",
  "soc.label": "نيو برايت على وسائل التواصل",
  "soc.open": "إظهار حسابات التواصل الاجتماعي",
  "soc.close": "إخفاء حسابات التواصل الاجتماعي",
  "soc.tab": "(يفتح في تبويب جديد)",
  "ct.nav.top": "تواصل معنا",
  "ct.nav.help": "كيف نساعدك؟",
  "ct.nav.visit": "المقر الرئيسي",
  "ct.nav.follow": "تابعنا",
  "ct.eyebrow": "نحن هنا لك",
  "ct.title": "تواصل معنا",
  "ct.intro": "سؤال عن منتجاتنا، أو رأي في نكهة، أو فكرة تودّ مشاركتها؟ اكتب لنا، يسعدنا أن نسمع منك.",
  "ct.hint": "اضغط على سطر لفتحه، أو انسخه بزر النسخ.",
  "ct.ch.wa": "واتساب",
  "ct.ch.phone": "الهاتف",
  "ct.ch.email": "البريد الإلكتروني",
  "ct.ch.wa.n": "للمستهلكين",
  "ct.ch.phone.n": "أو اتصل بنا",
  "ct.ch.email.n": "للأعمال",
  "ct.copy": "نسخ",
  "ct.copied": "تم النسخ",
  "ct.copy.a": "نسخ",
  "ct.r.eyebrow": "ثلاث طرق للوصول",
  "ct.r.title": "كيف نساعدك؟",
  "ct.r.pick": "اختر ما الذي جاء بك",
  "ct.p.1.t": "أسئلة وملاحظات",
  "ct.p.1.d": "منتج، نكهة، اقتراح.",
  "ct.p.2.t": "التجارة والتوزيع",
  "ct.p.2.d": "أسواق، موزّعون، مطاعم، متاجر إلكترونية.",
  "ct.p.3.t": "علامتك الخاصة",
  "ct.p.3.d": "نودلزنا باسم علامتك.",
  "ct.t.title": "استفسارات الأعمال",
  "ct.t.p": "للأسواق والتموينات والموزّعين والمطاعم والمتاجر الإلكترونية: أخبرنا عن منشأتك والنكهات التي تحتاجها، ونجهّز لك عرض السعر.",
  "ct.t.quote": "اطلب عرض سعر",
  "ct.t.mail": "طلب عرض سعر",
  "ct.w.title": "علامتك الخاصة",
  "ct.w.p": "علامتك، ونودلزنا. نصنع النودلز ذات الطابع الآسيوي في المملكة العربية السعودية، ويمكننا صنعها لك باسم علامتك.",
  "ct.w.go": "جرّبها على علبة",
  "ct.w.start": "ابدأ علامتك الخاصة",
  "cq.title": "اطلب عرض سعر",
  "cq.business": "عن المنشأة",
  "cq.company": "اسم المنشأة",
  "cq.type": "نوع النشاط",
  "cq.choose": "اختر نوع النشاط",
  "cq.types": "سوبرماركت أو هايبرماركت|بقالة أو تموينات|موزّع أو تاجر جملة|مطعم أو مقهى أو فندق|متجر إلكتروني|استيراد وتصدير|نشاط آخر",
  "cq.order": "طلبك",
  "cq.flavors": "أي نكهات؟",
  "cq.qty": "الكمية الشهرية التقريبية",
  "cq.qtys": "لم أحدد بعد|أقل من 50 كرتونًا|من 50 إلى 200 كرتون|من 200 إلى 1,000 كرتون|أكثر من 1,000 كرتون",
  "cq.person": "طريقة التواصل",
  "cq.notes": "هل هناك شيء آخر نعرفه؟",
  "cq.submit": "اطلب عرض سعر",
  "cq.err.company": "اكتب اسم المنشأة.",
  "cq.err.type": "اختر نوع النشاط.",
  "cq.prev.t": "لم يُرسَل طلبك",
  "cq.prev.b": "هذا النموذج في مرحلة المعاينة: استقبال الطلبات من الموقع لم يُفعَّل بعد. بياناتك ما زالت في الحقول، ويمكنك التواصل معنا على الأرقام أعلاه.",
  "cq.next.t": "ماذا يحدث بعد ذلك",
  "cq.next.1": "ترسل النموذج مع النكهات والكمية التي تفكر فيها.",
  "cq.next.2": "نتواصل معك هاتفيًا أو بالبريد لتأكيد التفاصيل.",
  "cq.next.3": "نجهّز لك عرض السعر.",
  "cf.title": "أرسل لنا رسالة",
  "cf.note": "الحقول المعلَّمة بـ(مطلوب) يلزم تعبئتها.",
  "cf.req": "(مطلوب)",
  "cf.opt": "(اختياري)",
  "cf.name": "الاسم",
  "cf.phone": "رقم الجوال",
  "cf.phoneHint": "مثال: 0512345678",
  "cf.email": "البريد الإلكتروني",
  "cf.topic": "موضوع الرسالة",
  "cf.topics": "استفسار عام|سؤال عن منتج|ملاحظة أو اقتراح|موضوع آخر",
  "cf.flavors": "عن أي نكهة؟",
  "cf.flavorsHint": "اختر نكهة أو أكثر، أو اتركها.",
  "cf.message": "رسالتك",
  "cf.counter": "{count} من {max} حرف",
  "cf.submit": "إرسال الرسالة",
  "cf.fix": "راجع الحقول المعلَّمة باللون الأحمر.",
  "cf.prev.t": "لم تُرسَل رسالتك",
  "cf.prev.b": "هذا النموذج في مرحلة المعاينة: استقبال الرسائل من الموقع لم يُفعَّل بعد. رسالتك ما زالت في الحقول.",
  "cf.err.name": "اكتب اسمك.",
  "cf.err.phone": "اكتب رقم جوالك.",
  "cf.err.phoneBad": "تأكد من الرقم: أرقام فقط، من 8 إلى 15 رقماً.",
  "cf.err.email": "تأكد من البريد الإلكتروني، مثل name@example.com.",
  "cf.err.msg": "اكتب رسالتك.",
  "cf.err.short": "الرسالة قصيرة: {min} أحرف على الأقل.",
  "ct.v.eyebrow": "المقر الرئيسي",
  "ct.v.title": "تعال وشاهد أين تُصنع",
  "ct.v.co": "مصنع الرماح",
  "ct.v.city": "الخبر",
  "ct.v.map": "عرض على الخريطة",
  "ct.v.copy": "نسخ العنوان",
  "ct.v.label": "المقر الرئيسي",
  "ct.f.eyebrow": "تابعنا",
  "ct.f.title": "تجدنا على",
  "ct.n.instagram": "إنستغرام",
  "ct.n.tiktok": "تيك توك",
  "ct.n.snapchat": "سناب شات",
  "ct.n.x": "إكس",
  "ct.n.youtube": "يوتيوب",
  "ct.n.facebook": "فيسبوك",
  "ct.n.whatsapp": "واتساب",
  "ct.n.linkedin": "لينكدإن"
 }
};
let lang = root.lang === 'ar' ? 'ar' : 'en';
const t = (k) => (T[lang] && T[lang][k]) || T.en[k] || '';

const sections = $$('main > section[data-ch]');
const FOOT = $('.foot');
let chIdx = 0, lastHdr = '';

/* ───────────── Layout cache and the scroll frame ───────────── */
const L = new Map();
let vh = innerHeight, docH = 0, ticking = false;
function cacheLayout() {
  vh = innerHeight; docH = root.scrollHeight - vh;
  const sy = scrollY;
  [...sections, FOOT].forEach((el) => { const r = el.getBoundingClientRect(); L.set(el, { top: r.top + sy, height: r.height }); });
}
const R = (el) => { const c = L.get(el) || { top: 0, height: 0 }, tp = c.top - scrollY; return { top: tp, bottom: tp + c.height, height: c.height }; };
function measure() { cacheLayout(); schedule(); }
function schedule() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
function frame() {
  ticking = false;
  let theme = 'dark', idx = 0;
  for (let i = 0; i < sections.length; i++) { const r = R(sections[i]); if (r.top <= 44 && r.bottom > 44) { idx = i; theme = sections[i].dataset.hdr || 'light'; break; } }
  if (R(FOOT).top <= 44) { theme = 'dark'; idx = sections.length - 1; }
  if (theme !== lastHdr) { document.body.dataset.hdr = theme; lastHdr = theme; }
  let rt = 'dark';
  for (let i = 0; i < sections.length; i++) { const r = R(sections[i]); if (r.top <= vh * 0.5 && r.bottom > vh * 0.5) { rt = sections[i].dataset.hdr || 'light'; break; } }
  if (R(FOOT).top <= vh * 0.5) rt = 'dark';
  if (document.body.dataset.rail !== rt) document.body.dataset.rail = rt;
  if (idx !== chIdx) {
    chIdx = idx;
    const lab = $('#hdrLabel'); lab.classList.add('sw');
    setTimeout(() => { lab.textContent = t(sections[idx].dataset.label); $('#hdrNum').textContent = String(idx + 1).padStart(2, '0'); lab.classList.remove('sw'); }, 160);
  }
  // the address label drifts a little against the scroll
  const v = $('#visit'), rv = R(v);
  const k = clamp((vh - rv.top) / (vh + rv.height));
  v.style.setProperty('--vp', k.toFixed(3));
}

/* ───────────── Smooth scrolling (Lenis, as on the other pages) ───────────── */
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
const menu = $('#menu'), menuBtn = $('#menuBtn');
$$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
  const id = a.getAttribute('href'); if (id.length < 2 || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
  const el = document.querySelector(id); if (!el) return;
  e.preventDefault();
  if (a.closest('#menu')) { menu.close(); menuBtn.setAttribute('aria-expanded', 'false'); if (lenis) lenis.start(); }
  goTo(el); history.replaceState(null, '', id);
}));

/* ───────────── Menu, language, social dock ───────────── */
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
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
  $$('[data-reveal]').forEach((el) => io.observe(el));
} else { $$('[data-reveal]').forEach((el) => el.classList.add('in')); }

/* ───────────── The hero: a strand you can pull ───────────── */
const strands = $('#ctStrands'), hero = $('#top'), pull = $('.ct-pull');
const sp = strands.querySelectorAll('path');
let cx = 720, cy = 60, tx = 720, ty = 60, sRaf = 0;
function drawStrand() {
  cx += (tx - cx) * 0.1; cy += (ty - cy) * 0.1;
  sp[0].setAttribute('d', `M-20 60 Q${cx.toFixed(1)} ${(60 + (cy - 60) * 2).toFixed(1)} 1460 60`);
  sp[1].setAttribute('d', `M-20 60 Q${(1440 - cx).toFixed(1)} ${(60 - (cy - 60) * 1.1).toFixed(1)} 1460 60`);
  if (Math.abs(tx - cx) + Math.abs(ty - cy) > 0.3) sRaf = requestAnimationFrame(drawStrand); else sRaf = 0;
}
function pullTo(x, y) { tx = x; ty = y; if (!sRaf) sRaf = requestAnimationFrame(drawStrand); }
if (matchMedia('(hover: hover)').matches && !reduce.matches) {
  hero.addEventListener('pointermove', (e) => {
    const r = pull.getBoundingClientRect(), hr = hero.getBoundingClientRect();
    const dy = e.clientY - (r.top + r.height / 2);
    pullTo(((e.clientX - hr.left) / hr.width) * 1440, 60 + clamp(dy * 0.32, -48, 48));
  });
  hero.addEventListener('pointerleave', () => pullTo(720, 60));
}

/* ───────────── The three lines: copy, with a word back ───────────── */
const toast = $('#ctToast'); let toastT = 0;
function say(msg) { toast.textContent = msg; toast.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => toast.classList.remove('on'), 1800); }
async function copyText(s) {
  try { await navigator.clipboard.writeText(s); return true; } catch (e) {
    const ta = document.createElement('textarea'); ta.value = s; ta.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch (e2) {} ta.remove(); return ok;
  }
}
$$('.ct-copy').forEach((b) => b.addEventListener('click', async () => { if (await copyText(b.dataset.copy)) { say(t('ct.copied')); b.classList.add('done'); setTimeout(() => b.classList.remove('done'), 1400); } }));

/* ───────────── How can we help: three ways in, one panel ───────────── */
const pathBtns = $$('.ct-path'), panels = $$('.ct-pn');
function setPath(n, focus) {
  pathBtns.forEach((b) => { const on = +b.dataset.p === n; b.setAttribute('aria-checked', String(on)); b.tabIndex = on ? 0 : -1; if (on && focus) b.focus(); });
  panels.forEach((p) => { p.hidden = +p.dataset.pn !== n; });
}
pathBtns.forEach((b, i) => {
  b.addEventListener('click', () => setPath(+b.dataset.p, false));
  b.addEventListener('keydown', (e) => {
    const rtl = root.dir === 'rtl';
    const next = e.key === 'ArrowDown' || e.key === (rtl ? 'ArrowLeft' : 'ArrowRight'), prev = e.key === 'ArrowUp' || e.key === (rtl ? 'ArrowRight' : 'ArrowLeft');
    if (!next && !prev) return; e.preventDefault();
    setPath(((i + (next ? 1 : -1) + pathBtns.length) % pathBtns.length) + 1, true);
  });
});
const PATHS = { questions: 1, trade: 2, label: 3 };
setPath(PATHS[new URLSearchParams(location.search).get('path')] || 1, false);
// "Request a quote" from anywhere on the site opens the business path; from this page it only switches the panel
$$('a[data-path]').forEach((a) => a.addEventListener('click', (e) => {
  if (e.metaKey || e.ctrlKey || e.shiftKey) return;
  e.preventDefault();
  setPath(PATHS[a.dataset.path] || 1, false);
  if (a.closest('#menu')) { menu.close(); menuBtn.setAttribute('aria-expanded', 'false'); if (lenis) lenis.start(); }
  // measured now, after the panel has switched, and handed over as a number
  const y = $('#help').getBoundingClientRect().top + scrollY;
  if (lenis) lenis.scrollTo(y, { duration: 1.4, easing: (x) => 1 - Math.pow(1 - x, 4) });
  else window.scrollTo({ top: y, behavior: reduce.matches ? 'auto' : 'smooth' });
  history.replaceState(null, '', a.getAttribute('href'));
}));

/* ───────────── The message form ───────────── */
const form = $('#cfForm');
function fillSelect(sel, key) {
  const cur = sel.value; sel.textContent = '';
  t(key).split('|').forEach((s, i) => { const o = document.createElement('option'); o.value = String(i); o.textContent = s; sel.appendChild(o); });
  if (cur !== '') sel.value = cur;
}
const msg = $('#cMsg'), count = $('#cCount');
const MAX = 1000, MIN = 10;
const digits = (s) => s.replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d))).replace(/[\s+\-()]/g, '');
function counter() { count.textContent = t('cf.counter').replace('{count}', String(msg.value.length)).replace('{max}', String(MAX)); }
msg.addEventListener('input', counter);
function validate(focusFirst) {
  const v = (n) => form.elements[n].value.trim();
  const errs = {};
  if (!v('name')) errs.name = true;
  const ph = digits(v('phone'));
  if (!ph) errs.phone = 'cf.err.phone'; else if (!/^\d{8,15}$/.test(ph)) errs.phone = 'cf.err.phoneBad';
  if (v('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email'))) errs.email = true;
  if (!v('message')) errs.msg = 'cf.err.msg'; else if (v('message').length < MIN) errs.msg = 'cf.err.short';
  $$('.cf-f[data-fld]', form).forEach((f) => { const bad = !!errs[f.dataset.fld]; f.classList.toggle('bad', bad); const inp = $('input,textarea', f); inp.setAttribute('aria-invalid', String(bad)); });
  if (errs.phone) $('#cPhoneErr').textContent = t(errs.phone);
  if (errs.msg) $('#cMsgErr').textContent = t(errs.msg).replace('{min}', String(MIN));
  const bad = Object.keys(errs);
  $('#cFix').classList.toggle('on', bad.length > 0);
  return bad;
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bad = validate();
  $('#cPrev').classList.toggle('on', bad.length === 0);
  if (bad.length) { const f = $(`.cf-f[data-fld="${bad[0]}"]`, form); $('input,textarea', f).focus(); }
  else $('#cPrev').scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'center' });
});
form.addEventListener('input', (e) => { const f = e.target.closest('.cf-f.bad'); if (f) validate(); });

/* ───────────── The quote form (the business path) ───────────── */
const qform = $('#cqForm');
function fillOptions(sel, key, first) {
  const cur = sel.value; sel.textContent = '';
  if (first) { const o = document.createElement('option'); o.value = ''; o.textContent = first; sel.appendChild(o); }
  t(key).split('|').forEach((s, i) => { const o = document.createElement('option'); o.value = String(i); o.textContent = s; sel.appendChild(o); });
  if (cur !== '') sel.value = cur;
}
function qValidate() {
  const v = (n) => qform.elements[n].value.trim();
  const errs = {};
  if (!v('company')) errs.company = true;
  if (!v('type')) errs.type = true;
  if (!v('name')) errs.name = true;
  const ph = digits(v('phone'));
  if (!ph) errs.phone = 'cf.err.phone'; else if (!/^\d{8,15}$/.test(ph)) errs.phone = 'cf.err.phoneBad';
  if (v('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email'))) errs.email = true;
  $$('.cf-f[data-fld]', qform).forEach((f) => { const bad = !!errs[f.dataset.fld]; f.classList.toggle('bad', bad); $('input,select', f).setAttribute('aria-invalid', String(bad)); });
  if (errs.phone) $('#cqPhoneErr').textContent = t(errs.phone);
  const bad = Object.keys(errs);
  $('#cqFix').classList.toggle('on', bad.length > 0);
  return bad;
}
qform.addEventListener('submit', (e) => {
  e.preventDefault();
  const bad = qValidate();
  $('#cqPrev').classList.toggle('on', bad.length === 0);
  if (bad.length) $('input,select', $(`.cf-f[data-fld="${bad[0]}"]`, qform)).focus();
  else $('#cqPrev').scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'center' });
});
qform.addEventListener('input', (e) => { if (e.target.closest('.cf-f.bad')) qValidate(); });
qform.addEventListener('change', (e) => { if (e.target.closest('.cf-f.bad')) qValidate(); });

/* ───────────── Head office ───────────── */
const labelLines = $('#ctLabelLines');
function addrParts() { return t('c.addr').split(/\s*[,،]\s*/).filter(Boolean); }
function paintAddress() {
  const parts = addrParts();
  labelLines.textContent = '';
  parts.forEach((p, i) => {
    const b = document.createElement('span'); b.textContent = p; labelLines.appendChild(b);
  });
  $('#ctMap').href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${T.en['ct.v.co']}, ${T.en['c.addr']}`);
}
$('#ctCopyAddr').addEventListener('click', async () => { if (await copyText(addrParts().join(', '))) say(t('ct.copied')); });
// the address label leans toward the pointer
const label = $('#ctLabel');
if (matchMedia('(hover: hover)').matches && !reduce.matches) {
  const wrap = label.parentElement;
  wrap.addEventListener('pointermove', (e) => {
    const r = wrap.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    label.style.setProperty('--rx', `${(-y * 9).toFixed(2)}deg`); label.style.setProperty('--ry', `${(x * 12).toFixed(2)}deg`);
  });
  wrap.addEventListener('pointerleave', () => { label.style.setProperty('--rx', '0deg'); label.style.setProperty('--ry', '0deg'); });
}

/* ───────────── Follow: the dock's accounts, as big chips ───────────── */
function buildNets() {
  const ul = $('#ctNets'); ul.textContent = '';
  $$('#sdList .sd-link').forEach((a, i) => {
    const li = document.createElement('li'); li.style.setProperty('--i', i);
    const l = document.createElement('a'); l.href = a.href; l.target = '_blank'; l.rel = 'noopener noreferrer'; l.dataset.n = a.dataset.n;
    l.appendChild(a.querySelector('svg').cloneNode(true));
    const s = document.createElement('span'); s.dataset.k = `ct.n.${a.dataset.n}`; s.textContent = t(`ct.n.${a.dataset.n}`); l.appendChild(s);
    li.appendChild(l); ul.appendChild(li);
  });
}

/* ───────────── Language ───────────── */
function splitTitles() {
  $$('[data-split]').forEach((el) => {
    const words = t(el.dataset.i18n).split(/\s+/).filter(Boolean);
    el.textContent = ''; el.setAttribute('aria-label', words.join(' '));
    words.forEach((w, k) => { const o = document.createElement('span'); o.className = 'w'; o.setAttribute('aria-hidden', 'true'); const i = document.createElement('span'); i.style.setProperty('--k', k); i.textContent = w; o.appendChild(i); el.appendChild(o); });
  });
}
function applyLang(next) {
  lang = next; root.lang = lang; root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]:not([data-split])').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  $$('.ct-copy').forEach((b) => b.setAttribute('aria-label', `${t('ct.copy')} ${t(b.closest('.ct-row').querySelector('.ct-lab b').dataset.i18n)}`));
  splitTitles(); paintAddress(); buildNets(); counter();
  fillSelect($('#cTopic'), 'cf.topics');
  fillOptions($('#cqType'), 'cq.types', t('cq.choose')); fillOptions($('#cqQty'), 'cq.qtys');
  if (qform.querySelector('.cf-f.bad')) qValidate();
  if (form.querySelector('.cf-f.bad')) validate();
  $('#langTxt').textContent = lang === 'ar' ? 'EN' : 'العربية';
  $('#langBtn').setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  document.title = lang === 'ar' ? 'نيو برايت | تواصل معنا' : 'New Bright | Contact';
  $('#hdrLabel').textContent = t(sections[chIdx].dataset.label);
  $('#sdLabel').textContent = t(sdock.hasAttribute('data-open') ? 'soc.close' : 'soc.open');
  try { localStorage.setItem('nb-lang', lang); } catch (e) {}
  measure();
}
addEventListener('scroll', schedule, { passive: true });
addEventListener('resize', measure);
addEventListener('load', measure);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
if ('ResizeObserver' in window) new ResizeObserver(() => { if (Math.abs(root.scrollHeight - vh - docH) > 2) measure(); }).observe(document.body);

applyLang(lang);
cacheLayout(); frame();
})();
