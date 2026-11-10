/* New Bright: the White label page. Vanilla JS. Shares only styles.css with the home concept. */
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
const FL = ['plain', 'vegetables', 'chicken', 'beef'];
const STY = ['nova', 'zest', 'harvest', 'atlas'];

/* ───────────── Copy: the main site's white label page and form (2026) ───────────── */
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
  "wl.nav.top": "White label",
  "wl.nav.concepts": "Packaging concepts",
  "wl.nav.enquiry": "Start your white label",
  "wl.title": "White label",
  "wl.intro": "Your brand, our noodles. We make Asian-style noodles in Saudi Arabia, and we can make them for you, under your name.",
  "wl.hint": "Scroll to fold your box",
  "wl.j.eyebrow": "Your idea, step by step",
  "wl.j.title": "From your idea to our factory",
  "wl.j.intro": "Try an idea on a box: a flavor, a name, a look. Then tell us about it. It takes four stations and no commitment.",
  "wl.s1.t": "The noodles",
  "wl.s1.p": "Start from the noodles Al Rammah Factory makes. Pick the flavor you would begin with.",
  "wl.s2.t": "Your brand",
  "wl.s2.p": "Put your brand’s name on the box and see it there.",
  "wl.s3.t": "Your look",
  "wl.s3.p": "Try a design direction. These are pictures of directions, not packs we offer.",
  "wl.s4.t": "Talk to us",
  "wl.s4.p": "Tell us about your idea in the form below. That is where the conversation starts.",
  "wl.j.note": "Illustrative: the boxes are pictures of ideas for invented brands, not products, and not confirmed packaging or printing options. Nothing is sent from the journey; the enquiry is made in the form below.",
  "wl.tab.0": "Sheet",
  "wl.tab.1": "Noodles",
  "wl.tab.2": "Brand",
  "wl.tab.3": "Look",
  "wl.tab.4": "Shelf",
  "wl.tabs": "Steps",
  "wl.fl.label": "Choose the flavor",
  "wl.nm.label": "Your brand name",
  "wl.nm.ph": "Type your brand name",
  "wl.st.label": "Choose a look",
  "wl.sum.brand": "Brand",
  "wl.sum.flavor": "Flavor",
  "wl.sum.look": "Look",
  "wl.drag": "Drag to turn",
  "wl.shelf": "Your range, on the shelf",
  "wl.default": "Zest!",
  "wl.c.eyebrow": "Packaging concepts",
  "wl.c.title": "Picture your brand on the shelf",
  "wl.c.intro": "Four directions for a noodle brand of your own, from quiet and premium to loud and playful. Turn each pack, see the flavors together, and tell us which way your brand leans.",
  "wl.c.note": "Design concepts for invented brands, made to inspire: not products we sell, and not confirmed packaging or printing options. Your own pack is designed with you.",
  "wl.c.turn": "Move over a pack to turn it",
  "wl.c.pick": "Flavor",
  "wl.c.nova.n": "Nova",
  "wl.c.nova.d": "Soft & modern",
  "wl.c.nova.p": "Warm ivory stock, one arch in the flavor’s own colour and the dish stepping out of it. Quiet type, plenty of air: the colour does the talking.",
  "wl.c.nova.t": "An arch in the flavor’s colour|Soft ivory paper, no foil|A calm, lowercase wordmark",
  "wl.c.zest.n": "Zest!",
  "wl.c.zest.d": "Bold & playful",
  "wl.c.zest.p": "The whole pack in the flavor’s colour, a white band across it and a wordmark that shouts. Made to be seen from the end of the aisle.",
  "wl.c.zest.t": "Heavy, tilted type|A colour block per flavor|Outlined noodle squiggle",
  "wl.c.harvest.n": "Harvest Bowl",
  "wl.c.harvest.d": "Flavor-led",
  "wl.c.harvest.p": "Kraft paper, a ribbon for the name and each flavor’s ingredient drawn large at the centre. The pack tells you the taste before you read a word.",
  "wl.c.harvest.t": "Hand-drawn ingredient illustrations|Warm, natural palette|Italic serif flavor names",
  "wl.c.atlas.n": "Atlas",
  "wl.c.atlas.d": "Modern & bilingual",
  "wl.c.atlas.p": "A navy field with a fine grid, Arabic and English given equal weight, and a coloured tab down the edge for each flavor. Clear and orderly on any shelf.",
  "wl.c.atlas.t": "Equal Arabic and English|Colour-coded edge tab|Clean information grid",
  "fm.intro": "Tell us about your business and your brand, and we will get back to you.",
  "fm.title": "Start your white label",
  "fm.brandGroup": "Your brand",
  "fm.brand": "Brand name",
  "fm.brandHint": "If you have one already.",
  "fm.country": "Country and city",
  "fm.flavors": "Flavors you are interested in",
  "fm.packaging": "Your packaging design",
  "fm.pk": "Not decided yet|Ready|In progress|Not started yet",
  "fm.submit": "Send enquiry",
  "fm.cta": "Start your enquiry",
  "fm.err.country": "Please enter the country and city.",
  "fm.business": "Your business",
  "fm.company": "Business name",
  "fm.type": "Type of business",
  "fm.choose": "Choose a type",
  "fm.types": "Supermarket or hypermarket|Grocery or convenience store|Distributor or wholesaler|Restaurant, café or hotel|Online store|Import and export|Something else",
  "fm.quantity": "Approximate monthly quantity",
  "fm.qty": "Not decided yet|Under 50 cartons|50 to 200 cartons|200 to 1,000 cartons|Over 1,000 cartons",
  "fm.contact": "How to reach you",
  "fm.name": "Contact person",
  "fm.phone": "Mobile number",
  "fm.phoneHint": "e.g. 0512345678",
  "fm.email": "Email",
  "fm.notes": "Notes",
  "fm.required": "(required)",
  "fm.optional": "(optional)",
  "fm.requiredNote": "Fields marked (required) must be filled in.",
  "fm.err.company": "Please enter the business name.",
  "fm.err.type": "Please choose a type of business.",
  "fm.err.name": "Please enter a contact person.",
  "fm.err.phone": "Please enter a mobile number.",
  "fm.err.phoneBad": "Check the number: digits only, 8 to 15 of them.",
  "fm.err.email": "Check the email address, e.g. name@example.com.",
  "fm.fix": "Check the fields marked in red.",
  "fm.prev.t": "Your request was not sent",
  "fm.prev.b": "This form is a preview: the site does not receive requests yet. Your details are still in the form.",
  "fm.flavorsHint": "Pick one or more.",
  "wl.pk.desc": "Chinese Noodles · Pancit Canton",
  "wl.pk.ready": "Ready to cook",
  "wl.pk.built": "Flavor built in",
  "wl.pk.made": "Made in Saudi Arabia",
  "wl.pk.ingh": "Ingredients",
  "wl.pk.ing.plain": "Flour, Vegetable Oil, Salt, Water, Sodium Bicarbonate, Saffron Yolk.",
  "wl.pk.ing.vegetables": "Flour, Garlic, Onion, Coriander, Green Colour, Sodium Bicarbonate, Oil, Maggi Vegetables, Flavor Enhancer, Salt, Water.",
  "wl.pk.ing.chicken": "Flour, Garlic, Onion, Coriander, Chicken Spices, Chicken Powder, Salt, Sodium Bicarbonate, Saffron Yolk, Water, Oil.",
  "wl.pk.ing.beef": "Flour, Garlic, Onion, Coriander, Green Colour, Meat Powder Roast, Salt, Sodium Bicarbonate, Water, Oil."
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
  "wl.nav.top": "علامتك الخاصة",
  "wl.nav.concepts": "تصورات التغليف",
  "wl.nav.enquiry": "ابدأ علامتك الخاصة",
  "wl.title": "علامتك الخاصة",
  "wl.intro": "علامتك، ونودلزنا. نصنع النودلز ذات الطابع الآسيوي في المملكة العربية السعودية، ويمكننا صنعها لك باسم علامتك.",
  "wl.hint": "مرّر لتطوي علبتك",
  "wl.j.eyebrow": "فكرتك، خطوة بخطوة",
  "wl.j.title": "من فكرتك إلى مصنعنا",
  "wl.j.intro": "جرّب فكرتك على علبة: نكهة واسم وشكل. ثم أخبرنا عنها. أربع محطات، ولا التزام.",
  "wl.s1.t": "النودلز",
  "wl.s1.p": "ابدأ من النودلز التي يصنعها مصنع الرماح، واختر النكهة التي تبدأ بها.",
  "wl.s2.t": "علامتك",
  "wl.s2.p": "ضع اسم علامتك على العلبة وشاهده عليها.",
  "wl.s3.t": "شكلها",
  "wl.s3.p": "جرّب اتجاهًا للتصميم. هذه صور لاتجاهات، وليست عبوات نقدّمها.",
  "wl.s4.t": "تحدّث إلينا",
  "wl.s4.p": "أخبرنا بفكرتك في النموذج أدناه. من هناك يبدأ الحديث.",
  "wl.j.note": "توضيحي: العلب صور لأفكار بعلامات افتراضية، وليست منتجات، ولا خيارات تغليف أو طباعة مؤكدة. لا يُرسَل شيء من هذه الرحلة؛ الاستفسار يتم عبر النموذج أدناه.",
  "wl.tab.0": "الورقة",
  "wl.tab.1": "النودلز",
  "wl.tab.2": "العلامة",
  "wl.tab.3": "الشكل",
  "wl.tab.4": "الرف",
  "wl.tabs": "الخطوات",
  "wl.fl.label": "اختر النكهة",
  "wl.nm.label": "اسم علامتك",
  "wl.nm.ph": "اكتب اسم علامتك",
  "wl.st.label": "اختر شكلًا",
  "wl.sum.brand": "العلامة",
  "wl.sum.flavor": "النكهة",
  "wl.sum.look": "الشكل",
  "wl.drag": "اسحب لتدوير العلبة",
  "wl.shelf": "تشكيلتك على الرف",
  "wl.default": "زست!",
  "wl.c.eyebrow": "تصورات التغليف",
  "wl.c.title": "تخيّل علامتك على الرف",
  "wl.c.intro": "أربعة اتجاهات لعلامة نودلز تخصّك، من الهادئ الفاخر إلى الجريء المرح. أدِر كل عبوة، وشاهد النكهات معًا، ثم أخبرنا إلى أي اتجاه تميل علامتك.",
  "wl.c.note": "تصورات تصميمية لعلامات افتراضية للإلهام فقط، وليست منتجات نبيعها ولا خيارات تغليف أو طباعة مؤكدة. عبوتك الخاصة نصممها معك.",
  "wl.c.turn": "حرّك المؤشر فوق العبوة لتدويرها",
  "wl.c.pick": "النكهة",
  "wl.c.nova.n": "نوفا",
  "wl.c.nova.d": "ناعم وعصري",
  "wl.c.nova.p": "ورق عاجي دافئ، وقوس واحد بلون النكهة يخرج منه الطبق. خط هادئ ومساحة واسعة، واللون هو الذي يتكلم.",
  "wl.c.nova.t": "قوس بلون النكهة|ورق عاجي ناعم بلا طبقة معدنية|شعار هادئ بحروف صغيرة",
  "wl.c.zest.n": "زِست",
  "wl.c.zest.d": "جريء ومرح",
  "wl.c.zest.p": "العبوة كلها بلون النكهة، يعبرها شريط أبيض، وشعار بصوت عالٍ. مصممة لتُرى من آخر الممر.",
  "wl.c.zest.t": "خط ثقيل مائل|كتلة لون لكل نكهة|خصلة نودلز متموّجة بإطار",
  "wl.c.harvest.n": "حصاد",
  "wl.c.harvest.d": "النكهة في الصدارة",
  "wl.c.harvest.p": "ورق كرافت، وشريط يحمل الاسم، ومكوّن كل نكهة مرسوم كبيرًا في الوسط. العبوة تخبرك بالمذاق قبل أن تقرأ كلمة.",
  "wl.c.harvest.t": "رسوم مكوّنات بأسلوب يدوي|ألوان دافئة وطبيعية|أسماء النكهات بخط مذيّل مائل",
  "wl.c.atlas.n": "أطلس",
  "wl.c.atlas.d": "عصري وثنائي اللغة",
  "wl.c.atlas.p": "مساحة كحلية بشبكة رفيعة، والعربية والإنجليزية بوزن متساوٍ، وشريط ملوّن على الحافة لكل نكهة. واضحة ومنظمة على أي رف.",
  "wl.c.atlas.t": "عربية وإنجليزية بوزن متساوٍ|شريط حافة ملوّن حسب النكهة|شبكة معلومات نظيفة",
  "fm.intro": "أخبرنا عن منشأتك وعلامتك، وسنعود إليك.",
  "fm.title": "ابدأ علامتك الخاصة",
  "fm.brandGroup": "عن علامتك",
  "fm.brand": "اسم العلامة",
  "fm.brandHint": "إن كانت لديك علامة.",
  "fm.country": "الدولة والمدينة",
  "fm.flavors": "النكهات التي تهمّك",
  "fm.packaging": "تصميم العبوة",
  "fm.pk": "لم أحدد بعد|جاهز|قيد الإعداد|لم أبدأ بعد",
  "fm.submit": "إرسال الاستفسار",
  "fm.cta": "ابدأ استفسارك",
  "fm.err.country": "اكتب الدولة والمدينة.",
  "fm.business": "عن المنشأة",
  "fm.company": "اسم المنشأة",
  "fm.type": "نوع النشاط",
  "fm.choose": "اختر نوع النشاط",
  "fm.types": "سوبرماركت أو هايبرماركت|بقالة أو تموينات|موزّع أو تاجر جملة|مطعم أو مقهى أو فندق|متجر إلكتروني|استيراد وتصدير|نشاط آخر",
  "fm.quantity": "الكمية الشهرية التقريبية",
  "fm.qty": "لم أحدد بعد|أقل من 50 كرتونًا|من 50 إلى 200 كرتون|من 200 إلى 1,000 كرتون|أكثر من 1,000 كرتون",
  "fm.contact": "بيانات التواصل",
  "fm.name": "اسم المسؤول",
  "fm.phone": "رقم الجوال",
  "fm.phoneHint": "مثال: 0512345678",
  "fm.email": "البريد الإلكتروني",
  "fm.notes": "ملاحظات",
  "fm.required": "(مطلوب)",
  "fm.optional": "(اختياري)",
  "fm.requiredNote": "الحقول المعلَّمة بـ(مطلوب) يلزم تعبئتها.",
  "fm.err.company": "اكتب اسم المنشأة.",
  "fm.err.type": "اختر نوع النشاط.",
  "fm.err.name": "اكتب اسم المسؤول.",
  "fm.err.phone": "اكتب رقم الجوال.",
  "fm.err.phoneBad": "تأكد من الرقم: أرقام فقط، من 8 إلى 15 رقماً.",
  "fm.err.email": "تأكد من البريد الإلكتروني، مثل name@example.com.",
  "fm.fix": "راجع الحقول المعلَّمة باللون الأحمر.",
  "fm.prev.t": "لم يُرسَل طلبك",
  "fm.prev.b": "هذا النموذج في مرحلة المعاينة: استقبال الطلبات من الموقع لم يُفعَّل بعد. بياناتك ما زالت في الحقول.",
  "fm.flavorsHint": "اختر نكهة أو أكثر.",
  "wl.pk.desc": "مكرونة صينية · بانسيت كانتون",
  "wl.pk.ready": "جاهز للطبخ",
  "wl.pk.built": "نكهة مدمجة",
  "wl.pk.made": "صنع في السعودية",
  "wl.pk.ingh": "المكوّنات",
  "wl.pk.ing.plain": "دقيق، زيت نباتي، ملح، ماء، بيكربونات الصوديوم، صفار الزعفران.",
  "wl.pk.ing.vegetables": "دقيق، ثوم، بصل، كزبرة، ملوّن أخضر، بيكربونات الصوديوم، زيت، خضار ماجي، معزّز نكهة، ملح، ماء.",
  "wl.pk.ing.chicken": "دقيق، ثوم، بصل، كزبرة، توابل الدجاج، مسحوق الدجاج، ملح، بيكربونات الصوديوم، صفار الزعفران، ماء، زيت.",
  "wl.pk.ing.beef": "دقيق، ثوم، بصل، كزبرة، ملوّن أخضر، مسحوق لحم محمّص، ملح، بيكربونات الصوديوم، ماء، زيت."
 }
};
let lang = root.lang === 'ar' ? 'ar' : 'en';
const t = (k) => (T[lang] && T[lang][k]) || T.en[k] || '';
const tl = (k, l) => (T[l] && T[l][k]) || T.en[k] || '';

const sections = $$('main > section[data-ch]');
const wl = $('#top');
let chIdx = 0, lastHdr = '';
const state = { f: 'plain', style: 'zest', name: '', touched: false, nameTouched: false };

/* ───────────── The carton ───────────── */
const BI = (k, cls = '') => `<i class="e-en ${cls}" data-k="${k}"></i><i class="e-ar ${cls}" data-k="${k}"></i>`;
const COMPASS = '<svg class="a-compass" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46"/><circle cx="50" cy="50" r="34"/><circle cx="50" cy="50" r="6"/><path d="M50 2v96M2 50h96M16 16l68 68M84 16L16 84"/><path d="M50 8l5 42-5 42-5-42z"/></svg>';
const SPRIG = '<svg class="a-sprig __S__" viewBox="0 0 30 80"><path d="M15 78C15 56 14 30 15 4"/><path d="M15 66c-8-2-12-8-12-14 8 1 12 6 12 14zM15 52c-8-2-12-8-12-14 8 1 12 6 12 14zM15 38c-8-2-12-8-12-14 8 1 12 6 12 14zM15 24c-7-2-10-7-10-12 7 1 10 5 10 12z"/><path d="M15 62c8-2 12-8 12-14-8 1-12 6-12 14zM15 48c8-2 12-8 12-14-8 1-12 6-12 14zM15 34c8-2 12-8 12-14-8 1-12 6-12 14zM15 20c7-2 10-7 10-12-7 1-10 5-10 12z"/></svg>';
function cartonHTML(f, style) {
  return `<div class="bx" data-f="${f}" data-style="${style}" style="--p:1">
  <div class="fc fr"><div class="art">
    <span class="a-bg"></span><span class="a-grid"></span><span class="a-tab"></span>${COMPASS}
    <span class="a-frame"></span><span class="a-band"></span><span class="a-rib"></span><span class="a-ring"></span>
    <svg class="a-strand" viewBox="0 0 100 14" preserveAspectRatio="none"><path d="M0 7C12 -2 24 16 36 7S60 -2 72 7S92 16 100 7"/></svg>
    ${SPRIG.replace('__S__', 'l')}${SPRIG.replace('__S__', 'r')}
    <span class="a-line"></span><span class="a-fline"></span>
    <span class="a-dish"><img class="pk-dish" src="assets/food/dish-${f}.webp" alt="" draggable="false"></span>
    <span class="a-win"><img class="pk-cake" src="assets/food/cake-${f}.webp" alt="" draggable="false"><img class="pk-dish" src="assets/food/dish-${f}.webp" alt="" draggable="false"></span>
    <span class="a-name"><b class="bn"></b></span>
    <span class="a-flav"><i class="e-en fn-en"></i><i class="e-ar fn-ar"></i></span>
    <span class="a-desc">${BI('desc')}</span>
    <span class="a-badge"><span>${BI('ready')}</span></span>
    <span class="a-stamp"><span>${BI('built')}</span></span>
    <span class="a-made">${BI('made')}</span>
    <span class="a-bot"><span>${BI('ready')}</span><small>${BI('made')}</small></span>
  </div>
  <div class="fc lf"><span class="sp"><b class="bn"></b></span></div>
  <div class="fc rt"><span class="sp"><b class="bn"></b></span>
    <div class="fc bk"><div class="bkart"><div class="bki"><b class="k-name bn"></b><span class="k-strip"></span><h4>${BI('ingh')}</h4><p>${BI('ing')}</p><span class="k-made">${BI('made')}</span><span class="barcode"><i></i><b></b></span></div></div></div>
  </div>
  <div class="fc tp"><span class="tpt"><b class="bn"></b></span></div><div class="fc bt"></div></div></div>`;
}
function paintBox(bx, name) {
  const f = bx.dataset.f;
  $$('.bn', bx).forEach((e) => { e.textContent = name; });
  bx.style.setProperty('--n', String(Math.max(4, [...name].length)));
  bx.style.setProperty('--fl', String(Math.max(4, [...t(`f.${f}.name`)].length)));
  $$('.fn-en', bx).forEach((e) => { e.textContent = tl(`f.${f}.name`, 'en'); });
  $$('.fn-ar', bx).forEach((e) => { e.textContent = tl(`f.${f}.name`, 'ar'); });
  $$('[data-k]', bx).forEach((e) => { const k = e.dataset.k === 'ing' ? `wl.pk.ing.${f}` : `wl.pk.${e.dataset.k}`; e.textContent = tl(k, e.classList.contains('e-ar') ? 'ar' : 'en'); });
  $$('img.pk-cake', bx).forEach((img) => { const src = `assets/food/cake-${f}.webp`; if (!img.src.endsWith(src)) img.src = src; });
  $$('img.pk-dish', bx).forEach((img) => { const src = `assets/food/dish-${f}.webp`; if (!img.src.endsWith(src)) img.src = src; });
}
document.body.insertAdjacentHTML('afterbegin', '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><linearGradient id="nbFoil" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#8c6a1a"/><stop offset=".3" stop-color="#f3dc8b"/><stop offset=".55" stop-color="#c9a226"/><stop offset=".8" stop-color="#f6e6a6"/><stop offset="1" stop-color="#9b7620"/></linearGradient></defs></svg>');
const mainHost = $('#wlMain'), rowHost = $('#wlRow');
mainHost.innerHTML = cartonHTML(state.f, state.style);
const mainBx = $('.bx', mainHost);
FL.forEach((f) => rowHost.insertAdjacentHTML('beforeend', cartonHTML(f, state.style)));
const rowBxs = $$('.bx', rowHost);
const hosts = $$('[data-host]').map((h) => { h.insertAdjacentHTML('afterbegin', cartonHTML(h.dataset.fl, h.dataset.host)); return { host: h, bx: $('.bx', h), style: h.dataset.host }; });

function paintAll() {
  const name = state.name;
  paintBox(mainBx, name);
  rowBxs.forEach((b) => paintBox(b, name));
  hosts.forEach((h) => paintBox(h.bx, tl(`wl.c.${h.style}.n`, lang)));
}

/* ───────────── Studio state ───────────── */
const flavBtns = $$('#wlFlav button'), lookBtns = $$('#wlLooks button');
function renderChoices() {
  flavBtns.forEach((b) => b.setAttribute('aria-checked', String(b.dataset.f === state.f)));
  lookBtns.forEach((b) => b.setAttribute('aria-checked', String(b.dataset.style === state.style)));
  $('#wlLookD').textContent = t(`wl.c.${state.style}.p`);
  const ul = $('#wlLookT'); ul.textContent = '';
  t(`wl.c.${state.style}.t`).split('|').forEach((s) => { const li = document.createElement('li'); li.textContent = s; ul.appendChild(li); });
  $('#sumBrand').textContent = state.name; $('#sumFlavor').textContent = t(`f.${state.f}.name`); $('#sumLook').textContent = t(`wl.c.${state.style}.n`);
  wl.dataset.f = state.f;
  const fb = $('#fBrand'); if (fb && !fb.dataset.edited) fb.value = state.touched ? state.name : '';
  if (!$('#fFlavors').dataset.edited && state.touched) $$('#fFlavors input').forEach((i) => { i.checked = i.value === state.f; });
}
let spinDeg = 0, spinRaf = 0, userYaw = 0, prog = 0, fold = 0;
function spin(swap) {
  if (reduce.matches) { swap(); renderYaw(); return; }
  cancelAnimationFrame(spinRaf);
  const t0 = performance.now(); let did = false;
  const step = (now) => {
    const k = clamp((now - t0) / 950); spinDeg = 360 * ease(k);
    if (!did && k >= 0.5) { swap(); did = true; }
    renderYaw();
    if (k < 1) spinRaf = requestAnimationFrame(step); else { spinDeg = 0; renderYaw(); }
  };
  spinRaf = requestAnimationFrame(step);
}
function setFlavor(f) {
  if (f === state.f) return; state.f = f; state.touched = true;
  spin(() => { mainBx.dataset.f = f; paintBox(mainBx, state.name); });
  renderChoices();
}
function setStyle(s) {
  if (s === state.style) return; state.style = s; state.touched = true;
  spin(() => { mainBx.dataset.style = s; rowBxs.forEach((b) => { b.dataset.style = s; }); });
  renderChoices();
}
function setName(v) {
  state.name = v.slice(0, 16) || ''; state.touched = true; state.nameTouched = true;
  paintAll(); renderChoices();
}
flavBtns.forEach((b) => b.addEventListener('click', () => setFlavor(b.dataset.f)));
lookBtns.forEach((b) => b.addEventListener('click', () => setStyle(b.dataset.style)));
const nameIn = $('#wlName');
nameIn.addEventListener('input', () => setName(nameIn.value));
[flavBtns, lookBtns].forEach((list) => list.forEach((b, i) => b.addEventListener('keydown', (e) => {
  const rtl = root.dir === 'rtl', nx = rtl ? 'ArrowLeft' : 'ArrowRight', pv = rtl ? 'ArrowRight' : 'ArrowLeft';
  if (e.key !== nx && e.key !== pv) return; e.preventDefault();
  const n = (i + (e.key === nx ? 1 : list.length - 1)) % list.length; list[n].focus(); list[n].click();
})));

/* ───────────── Rotation: scroll sway, your drag, the print spin ───────────── */
function renderYaw() {
  const base = -28 + Math.sin(prog * 9) * 9 * fold;
  mainBx.style.setProperty('--yaw', `${(base + userYaw + spinDeg).toFixed(2)}deg`);
}
const stage = $('#wlStage'); let dragging = false, dragX = 0, relaxRaf = 0;
stage.addEventListener('pointerdown', (e) => {
  if (wl.dataset.step === '0' || wl.dataset.step === '4' || e.target.closest('button,a,input')) return;
  dragging = true; dragX = e.clientX; stage.classList.add('drag'); stage.setPointerCapture(e.pointerId); cancelAnimationFrame(relaxRaf);
});
stage.addEventListener('pointermove', (e) => { if (!dragging) return; userYaw += (e.clientX - dragX) * 0.55 * (root.dir === 'rtl' ? -1 : 1); dragX = e.clientX; renderYaw(); });
const endDrag = () => {
  if (!dragging) return; dragging = false; stage.classList.remove('drag');
  const ease2 = () => { userYaw *= 0.93; renderYaw(); if (Math.abs(userYaw) > 0.3) relaxRaf = requestAnimationFrame(ease2); else { userYaw = 0; renderYaw(); } };
  relaxRaf = requestAnimationFrame(ease2);
};
stage.addEventListener('pointerup', endDrag); stage.addEventListener('pointercancel', endDrag);

/* ───────────── Layout cache and the scroll frame ───────────── */
const L = new Map();
let vh = innerHeight, docH = 0, ticking = false;
const FOOT = $('.foot'), sc = $('#wlSc'), floor = $('#wlFloor');
function cacheLayout() {
  vh = innerHeight; docH = root.scrollHeight - vh;
  const sy = scrollY;
  [...sections, FOOT].forEach((el) => { const r = el.getBoundingClientRect(); L.set(el, { top: r.top + sy, height: r.height }); });
}
const R = (el) => { const c = L.get(el) || { top: 0, height: 0 }, tp = c.top - scrollY; return { top: tp, bottom: tp + c.height, height: c.height }; };
function measure() { cacheLayout(); schedule(); }
function schedule() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
const pinned = () => getComputedStyle($('.wl-pin')).position === 'sticky';
const STEP_AT = [0.0, 0.16, 0.36, 0.56, 0.76, 1.0001];
const orbIn = $('#wlOrbIn');

function frame() {
  ticking = false;
  if (pinned()) {
    const r = R(wl); prog = clamp(-r.top / Math.max(1, r.height - vh));
    const step = prog < STEP_AT[1] ? 0 : prog < STEP_AT[2] ? 1 : prog < STEP_AT[3] ? 2 : prog < STEP_AT[4] ? 3 : 4;
    fold = ease(clamp(prog / 0.12));
    if (String(step) !== wl.dataset.step) { wl.dataset.step = step; wl.dataset.hdr = step === 4 ? 'dark' : 'light'; $$('.wl-tabs button').forEach((b, i) => b.setAttribute('aria-selected', String(i === step))); }
  } else { fold = 1; prog = 0; wl.dataset.step = '1'; }
  { const st = +wl.dataset.step, a0 = STEP_AT[st] || 0, a1 = STEP_AT[st + 1] || 1; orbIn.style.setProperty('--tp', clamp((prog - a0) / (a1 - a0)).toFixed(3)); }
  mainBx.style.setProperty('--p', fold.toFixed(4));
  mainBx.style.setProperty('--pitch', '-8deg');
  sc.style.transform = `translateY(${(9 * fold).toFixed(2)}%) scale(${(0.62 + 0.38 * fold).toFixed(3)})`;
  stage.style.setProperty('--fl', (0.06 + 0.3 * fold).toFixed(2)); stage.style.setProperty('--pl', fold.toFixed(2));
  floor.style.opacity = wl.dataset.step === '4' ? 0 : (0.08 + 0.32 * fold).toFixed(2);
  renderYaw();
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
  else if (typeof target === 'number') scrollTo({ top: target, behavior: reduce.matches ? 'auto' : 'smooth' });
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
$$('.wl-tabs button').forEach((b) => b.addEventListener('click', () => {
  const n = +b.dataset.go;
  if (pinned()) { const c = L.get(wl), span = c.height - vh; goTo(c.top + span * [0.04, 0.26, 0.46, 0.66, 0.9][n]); }
  else { const s = $$('.wl-step')[n]; if (s) s.scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'center' }); }
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

/* ───────────── Packaging concepts: turn a pack, switch its flavor ───────────── */
hosts.forEach((h) => {
  const dots = $$('.wc-dots button', h.host);
  dots.forEach((d) => d.addEventListener('click', () => {
    h.bx.dataset.f = d.dataset.f; paintBox(h.bx, tl(`wl.c.${h.style}.n`, lang));
    dots.forEach((x) => x.setAttribute('aria-checked', String(x === d)));
  }));
  if (matchMedia('(hover: hover)').matches && !reduce.matches) {
    h.host.addEventListener('pointermove', (e) => {
      const r = h.host.getBoundingClientRect(); let x = clamp((e.clientX - r.left) / r.width); if (root.dir === 'rtl') x = 1 - x;
      h.bx.style.setProperty('--yaw', `${(-58 + 72 * x).toFixed(1)}deg`);
    });
    h.host.addEventListener('pointerleave', () => h.bx.style.setProperty('--yaw', '-26deg'));
  }
});

/* ───────────── The enquiry ───────────── */
const form = $('#weForm');
function fillSelect(sel, key, first) {
  const cur = sel.value; sel.textContent = '';
  if (first) { const o = document.createElement('option'); o.value = ''; o.textContent = first; sel.appendChild(o); }
  t(key).split('|').forEach((s, i) => { const o = document.createElement('option'); o.value = String(i); o.textContent = s; sel.appendChild(o); });
  if (cur !== '') sel.value = cur;
}
$('#fBrand').addEventListener('input', () => { $('#fBrand').dataset.edited = '1'; });
$('#fFlavors').addEventListener('change', () => { $('#fFlavors').dataset.edited = '1'; });
const digits = (s) => s.replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d))).replace(/[\s+\-()]/g, '');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const v = (n) => form.elements[n].value.trim();
  const errs = {};
  if (!v('company')) errs.company = true;
  if (!v('type')) errs.type = true;
  if (!v('country')) errs.country = true;
  if (!v('name')) errs.name = true;
  const ph = digits(v('phone'));
  if (!ph) { errs.phone = 'fm.err.phone'; } else if (!/^\d{8,15}$/.test(ph)) { errs.phone = 'fm.err.phoneBad'; }
  if (v('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email'))) errs.email = true;
  $$('.we-f[data-fld]', form).forEach((f) => { const bad = !!errs[f.dataset.fld]; f.classList.toggle('bad', bad); const inp = $('input,select', f); inp.setAttribute('aria-invalid', String(bad)); });
  if (errs.phone) $('#phoneErr').textContent = t(errs.phone);
  const bad = Object.keys(errs);
  $('#weFix').classList.toggle('on', bad.length > 0);
  $('#wePrev').classList.toggle('on', bad.length === 0);
  if (bad.length) { const f = $(`.we-f[data-fld="${bad[0]}"]`, form); $('input,select', f).focus(); } else $('#wePrev').scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'center' });
});

/* ───────────── Language ───────────── */
function splitTitles() {
  $$('.ot').forEach((el) => {
    const words = t(el.dataset.ot).split(/\s+/).filter(Boolean);
    el.textContent = '';
    words.forEach((w, k) => { const o = document.createElement('span'); o.className = 'w'; const i = document.createElement('span'); i.style.setProperty('--k', k); i.textContent = w; o.appendChild(i); el.appendChild(o); });
  });
}
function fillLists() {
  $$('[data-list]').forEach((ul) => { ul.textContent = ''; t(ul.dataset.list).split('|').forEach((s) => { const li = document.createElement('li'); li.textContent = s; ul.appendChild(li); }); });
}
function applyLang(next) {
  lang = next; root.lang = lang; root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  $$('[data-i18n-ph]').forEach((el) => el.setAttribute('placeholder', t(el.dataset.i18nPh)));
  fillLists(); splitTitles();
  fillSelect($('#fType'), 'fm.types', t('fm.choose'));
  fillSelect($('#fQty'), 'fm.qty'); fillSelect($('#fPack'), 'fm.pk');
  if (!state.nameTouched) { state.name = t('wl.default'); nameIn.value = state.name; }
  paintAll(); renderChoices();
  $('#langTxt').textContent = lang === 'ar' ? 'EN' : 'العربية';
  $('#langBtn').setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  document.title = lang === 'ar' ? 'نيو برايت | علامتك الخاصة' : 'New Bright | White label';
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
