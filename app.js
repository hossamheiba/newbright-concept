/* New Bright — "One strand" homepage concept. Vanilla JS, no dependencies. */
(() => {
'use strict';

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
const fine = matchMedia('(hover: hover) and (pointer: fine)');
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const FL = ['plain', 'vegetables', 'chicken', 'beef'];
const LIGHT_FLAVOR = { plain: true, chicken: true, vegetables: false, beef: false };

/* ───────────── Copy (from the New Bright Company Profile and Brand Guideline, 2026) ───────────── */
const T = {
  en: {
    skip: 'Skip to content', menu: 'Menu', 'cta.quote': 'Request a quote',
    'menu.tag': 'Chinese Noodles · Pancit Canton', 'made.by': 'Al Rammah Factory, Al Khobar',
    'ch.hero': 'Flavor range', 'ch.idea': 'Product concept', 'ch.made': 'Manufacturing', 'ch.label': 'White label', 'ch.partners': 'Partnerships',
    'ch.intro': 'Company overview', 'ch.coll': 'Flavor range', 'ch.close': 'Contact us',
    'hero.eyebrow': 'Chinese Noodles · Pancit Canton',
    'h1.a': 'Flavor', 'h1.b': 'in every', 'h1.c': 'strand.',
    'hero.lead': 'Flavor is built directly into the noodles themselves.',
    'hero.cta1': 'Flavor range', 'hero.cta2': 'Partnerships', 'hero.pick': 'Choose a flavor',
    'f.plain.name': 'Plain', 'f.vegetables.name': 'Vegetables', 'f.chicken.name': 'Chicken', 'f.beef.name': 'Beef',
    'f.plain.big': 'PLAIN', 'f.vegetables.big': 'VEGETABLES', 'f.chicken.big': 'CHICKEN', 'f.beef.big': 'BEEF',
    'f.plain.alt': 'New Bright Plain noodles pack', 'f.vegetables.alt': 'New Bright Vegetables noodles pack',
    'f.chicken.alt': 'New Bright Chicken noodles pack', 'f.beef.alt': 'New Bright Beef noodles pack',
    'f.plain.note': 'Mild & Versatile', 'f.vegetables.note': 'Fresh & Vibrant', 'f.chicken.note': 'Savory & Comforting', 'f.beef.note': 'Rich & Satisfying',
    'f.plain.desc': 'A simple and versatile option designed for those who enjoy a clean and mild taste.',
    'f.vegetables.desc': 'A fresh and vibrant flavor inspired by the goodness of vegetables.',
    'f.chicken.desc': 'A warm and familiar flavor crafted for everyday enjoyment.',
    'f.beef.desc': 'A richer and bolder flavor created for a deeper, more satisfying taste experience.',
    'coll.eyebrow': 'Flavor range', 'coll.title': 'Four Flavors. One Distinctive Noodle Experience.',
    'coll.sub': 'The range moves from mild and versatile to rich and savory, giving consumers clear choices without changing the brand’s signature built-in flavor concept.', 'coll.view': 'View on stage',
    'house.eyebrow': 'Company overview', 'house.title': 'About New Bright',
    'house.sub': 'Al Rammah International Holding is a Saudi-owned group established in 1979 and headquartered in Al Khobar, Eastern Province.',
    'house.n1.t': 'Al Rammah International Holding', 'house.n1.p': 'Its business approach is built around diversification, innovation, operational excellence and long-term value creation.', 'house.n1.tag': 'Established',
    'house.n2.t': 'Al Rammah Factory', 'house.n2.p': 'Established as a local Saudi noodle manufacturer focused on quality, product development and building trusted relationships with consumers and business partners.', 'house.n2.tag': 'Established',
    'house.n3.yr': '4', 'house.n3.t': 'New Bright', 'house.n3.p': 'A Saudi noodle brand specializing in Chinese Noodles – Pancit Canton, developed around a distinctive product concept: flavor is built directly into the noodles themselves.', 'house.n3.tag': 'Flavor varieties',
    'fact.1.v': '2021', 'fact.1.l': 'Local manufacturing', 'fact.2.v': 'Saudi Arabia', 'fact.2.l': 'Made in', 'fact.3.v': 'Al Khobar', 'fact.3.l': 'Eastern Province', 'fact.4.v': 'Pancit Canton', 'fact.4.l': 'Chinese Noodles', 'fact.5.l': 'Net pack', 'fact.6.v': 'Free from GMO', 'fact.6.l': 'On current packaging',
    'vm.v.k': 'Vision', 'vm.v.t': 'To become a leading Saudi noodle brand in the region, recognized for distinctive flavor, dependable quality, practical convenience and continuous innovation.',
    'vm.m.k': 'Mission', 'vm.m.t': 'To create high-quality Saudi-made noodles that make everyday meals simpler and more enjoyable through distinctive flavors, convenient preparation and the freedom to personalize every dish.',
    'val.1.t': 'Quality', 'val.1.p': 'A consistent focus on product quality, ingredient selection and a dependable consumer experience.',
    'val.2.t': 'Innovation', 'val.2.p': 'Continuous development of products, flavors and ideas that respond to evolving consumer preferences.',
    'val.3.t': 'Customer Focus', 'val.3.p': 'Understanding the needs of consumers, retailers and business partners and building lasting relationships around them.',
    'val.4.t': 'Simplicity', 'val.4.p': 'Creating products that are straightforward to prepare, easy to enjoy and flexible enough for different meal occasions.',
    'val.5.t': 'Responsibility', 'val.5.p': 'Supporting responsible growth through efficient operations, waste reduction and greater use of recyclable materials.',
    'story.eyebrow': 'The Noodles', 'story.title': 'Product Concept',
    'story.1.t': 'Flavor Built In', 'story.1.p': 'Each variety begins with its own flavor character, so the noodles already have a defined taste before consumers add their preferred sauces, proteins, vegetables or toppings.',
    'story.2.t': 'No Separate Seasoning Sachet', 'story.2.p': 'New Bright integrates flavor directly into the noodles, making preparation simpler while leaving consumers free to customize the final dish.',
    'story.3.t': 'Ready to Cook', 'story.3.p': 'This makes New Bright suitable for both simple everyday meals and more personalized recipes.',
    'story.4.t': 'Easy to Customize', 'story.4.p': 'One noodle range. Many ways to make it your own.',
    'made.band': 'MADE IN SAUDI ARABIA', 'made.eyebrow': 'Manufacturing & Quality', 'made.title': 'Proudly manufactured in Saudi Arabia.',
    'made.1.t': 'Saudi Manufacturing', 'made.1.p': 'Local Saudi production, consistent product development and flavor-focused formulations.',
    'made.2.t': 'Quality Focus', 'made.2.p': 'A quality-led product philosophy centered on ingredient selection, nutritional value and consumer trust.',
    'made.3.t': 'Innovation', 'made.3.p': 'Improving existing products, exploring new flavor opportunities and responding to changing consumer tastes.',
    'made.4.t': 'Sustainability', 'made.4.p': 'More responsible operations by improving production practices and reducing unnecessary waste.',
    'made.cap': 'The Eastern Province represents an important part of the brand’s current growth.',
    'label.eyebrow': 'White label · concept', 'label.title': 'Easy to Customize',
    'label.p': 'One noodle range. Many ways to make it your own.',
    'label.s1': 'Four Flavor Varieties', 'label.s2': 'Flexible commercial support', 'label.s3': 'Contact Us',
    'label.seg': 'Brand', 'label.nb': 'New Bright', 'label.yours': 'Your brand', 'label.cta': 'Contact Us',
    'label.note': 'Concept illustration. The second brand is invented. Drag to turn.',
    'part.eyebrow': 'Partnerships', 'part.title': 'Partnership Focus', 'part.intro': 'Collaboration with distributors, retailers and foodservice businesses that help extend market reach and maintain reliable product availability.', 'part.hint': 'Keep scrolling', 'part.pager': 'Partnership types',
    'part.1.k': 'Partnership focus', 'part.2.k': 'Partnership focus', 'part.3.k': 'Partnership focus',
    'part.1.t': 'Distributors', 'part.1.p': 'Reliable availability is an important part of New Bright’s growth strategy.', 'part.1.c1': 'Consistent product supply', 'part.1.c2': 'Efficient order fulfillment', 'part.1.c3': 'Reliable stock availability',
    'part.2.t': 'Retailers', 'part.2.p': 'Making the range increasingly accessible to consumers while building visibility across retail.', 'part.2.c1': 'Strengthening retail presence', 'part.2.c2': 'Building stronger brand visibility', 'part.2.c3': 'Stronger point-of-sale visibility',
    'part.3.t': 'Foodservice', 'part.3.p': 'New Bright’s built-in flavor creates a ready foundation, while the final meal remains open to individual taste.', 'part.3.c1': 'Foodservice business opportunities', 'part.3.c2': 'Flexible commercial support', 'part.3.c3': 'Long-term business relationships',
    'close.eyebrow': 'Contact Us', 'close.title': 'Flavor in every strand', 'close.sub': 'Four Flavors. One Distinctive Noodle Experience', 'close.cta2': 'Flavor range',
    'c.phone': 'Phone', 'c.email': 'Email', 'c.address': 'Address', 'c.addr': 'Al Mousa Complex, Building C, King Faisal Road, Al Khobar, Eastern Province, P.O. Box 2269, Saudi Arabia',
    'foot.say': 'Flavor in every strand', 'foot.explore': 'Explore', 'foot.business': 'Contact Us', 'foot.flavors': 'The four flavors', 'foot.top': 'Back to top',
    'foot.fine': 'Design concept. Content from the New Bright Company Profile and Brand Guideline (2026).',
    'soc.label': 'New Bright on social media', 'soc.open': 'Show social media accounts', 'soc.close': 'Hide social media accounts', 'soc.tab': '(opens in a new tab)'
  },
  ar: {
    skip: 'تخطَّ إلى المحتوى', menu: 'القائمة', 'cta.quote': 'اطلب عرض سعر',
    'menu.tag': 'مكرونة صينية · بانسيت كانتون', 'made.by': 'مصنع الرماح، الخبر',
    'ch.hero': 'تشكيلة النكهات', 'ch.idea': 'فكرة المنتج', 'ch.made': 'التصنيع', 'ch.label': 'علامتك الخاصة', 'ch.partners': 'الشراكات',
    'ch.intro': 'نبذة عن الشركة', 'ch.coll': 'تشكيلة النكهات', 'ch.close': 'تواصل معنا',
    'hero.eyebrow': 'مكرونة صينية · بانسيت كانتون',
    'h1.a': 'نكهة', 'h1.b': 'في كل', 'h1.c': 'خصلة.',
    'hero.lead': 'النكهة مدمجة مباشرة في النودلز نفسها.',
    'hero.cta1': 'تشكيلة النكهات', 'hero.cta2': 'الشراكات', 'hero.pick': 'اختر نكهة',
    'f.plain.name': 'سادة', 'f.vegetables.name': 'خضار', 'f.chicken.name': 'دجاج', 'f.beef.name': 'لحم',
    'f.plain.big': 'سادة', 'f.vegetables.big': 'خضار', 'f.chicken.big': 'دجاج', 'f.beef.big': 'لحم',
    'f.plain.alt': 'عبوة نيو برايت نودلز سادة', 'f.vegetables.alt': 'عبوة نيو برايت نودلز بالخضار',
    'f.chicken.alt': 'عبوة نيو برايت نودلز بالدجاج', 'f.beef.alt': 'عبوة نيو برايت نودلز باللحم',
    'f.plain.note': 'هادئة ومتعددة الاستخدامات', 'f.vegetables.note': 'منعشة ونابضة بالحياة', 'f.chicken.note': 'شهية ومريحة', 'f.beef.note': 'غنية ومُشبِعة',
    'f.plain.desc': 'خيار بسيط ومتعدد الاستخدامات لمن يحبون الطعم النظيف والهادئ.',
    'f.vegetables.desc': 'نكهة منعشة ونابضة بالحياة مستوحاة من خير الخضار.',
    'f.chicken.desc': 'نكهة دافئة ومألوفة صُنعت للاستمتاع اليومي.',
    'f.beef.desc': 'نكهة أغنى وأجرأ لتجربة طعم أعمق وأكثر إشباعًا.',
    'coll.eyebrow': 'تشكيلة النكهات', 'coll.title': 'أربع نكهات. تجربة نودلز واحدة مميزة.',
    'coll.sub': 'تتدرّج التشكيلة من الخفيف متعدد الاستخدامات إلى الغني الشهي، فتمنح المستهلك خيارات واضحة دون أن تتغيّر فكرة العلامة: النكهة داخل النودلز.', 'coll.view': 'شاهدها على المسرح',
    'house.eyebrow': 'نبذة عن الشركة', 'house.title': 'عن نيو برايت',
    'house.sub': 'مجموعة الرماح الدولية القابضة مجموعة سعودية الملكية تأسست عام 1979 ومقرها الخبر في المنطقة الشرقية.',
    'house.n1.t': 'مجموعة الرماح الدولية القابضة', 'house.n1.p': 'يقوم نهجها في الأعمال على التنويع والابتكار والتميّز التشغيلي وصناعة قيمة طويلة الأمد.', 'house.n1.tag': 'التأسيس',
    'house.n2.t': 'مصنع الرماح', 'house.n2.p': 'تأسس مصنعًا سعوديًا محليًا للنودلز، يركّز على الجودة وتطوير المنتجات وبناء علاقات موثوقة مع المستهلكين وشركاء الأعمال.', 'house.n2.tag': 'التأسيس',
    'house.n3.yr': '4', 'house.n3.t': 'نيو برايت', 'house.n3.p': 'علامة نودلز سعودية متخصصة في المكرونة الصينية بانسيت كانتون، قائمة على فكرة مميزة: النكهة مدمجة مباشرة في النودلز نفسها.', 'house.n3.tag': 'نكهات',
    'fact.1.v': '2021', 'fact.1.l': 'تصنيع محلي', 'fact.2.v': 'السعودية', 'fact.2.l': 'صنع في', 'fact.3.v': 'الخبر', 'fact.3.l': 'المنطقة الشرقية', 'fact.4.v': 'بانسيت كانتون', 'fact.4.l': 'مكرونة صينية', 'fact.5.l': 'وزن صافٍ', 'fact.6.v': 'خالٍ من المعدّلات الوراثية', 'fact.6.l': 'على العبوة الحالية',
    'vm.v.k': 'الرؤية', 'vm.v.t': 'أن نصبح علامة نودلز سعودية رائدة في المنطقة، معروفة بالنكهة المميزة والجودة الموثوقة والراحة العملية والابتكار المستمر.',
    'vm.m.k': 'الرسالة', 'vm.m.t': 'صناعة نودلز سعودية عالية الجودة تجعل وجبات كل يوم أبسط وأمتع، بنكهات مميزة وتحضير مريح وحرية تخصيص كل طبق.',
    'val.1.t': 'الجودة', 'val.1.p': 'تركيز دائم على جودة المنتج واختيار المكوّنات وتجربة مستهلك يُعتمد عليها.',
    'val.2.t': 'الابتكار', 'val.2.p': 'تطوير مستمر للمنتجات والنكهات والأفكار بما يواكب تفضيلات المستهلك المتغيرة.',
    'val.3.t': 'التركيز على العميل', 'val.3.p': 'فهم احتياجات المستهلكين وتجار التجزئة وشركاء الأعمال وبناء علاقات دائمة معهم.',
    'val.4.t': 'البساطة', 'val.4.p': 'منتجات سهلة التحضير والاستمتاع، ومرنة بما يكفي لمناسبات الوجبات المختلفة.',
    'val.5.t': 'المسؤولية', 'val.5.p': 'دعم النمو المسؤول عبر كفاءة التشغيل وتقليل الهدر وزيادة استخدام المواد القابلة لإعادة التدوير.',
    'story.eyebrow': 'النودلز', 'story.title': 'فكرة المنتج',
    'story.1.t': 'نكهة مدمجة', 'story.1.p': 'تبدأ كل نكهة بطابعها الخاص، فيكون للنودلز طعم محدد قبل أن يضيف المستهلك صلصاته وبروتيناته وخضاره وإضافاته المفضلة.',
    'story.2.t': 'بلا كيس توابل منفصل', 'story.2.p': 'تدمج نيو برايت النكهة مباشرة في النودلز، فيصبح التحضير أبسط ويبقى المستهلك حرًّا في تخصيص طبقه النهائي.',
    'story.3.t': 'جاهز للطبخ', 'story.3.p': 'وهذا يجعل نيو برايت مناسبة للوجبات اليومية البسيطة والوصفات الأكثر تخصيصًا.',
    'story.4.t': 'سهل التخصيص', 'story.4.p': 'تشكيلة نودلز واحدة. طرق كثيرة لتجعلها خاصة بك.',
    'made.band': 'صنع في السعودية', 'made.eyebrow': 'التصنيع والجودة', 'made.title': 'تُصنَّع في السعودية بفخر.',
    'made.1.t': 'تصنيع سعودي', 'made.1.p': 'إنتاج سعودي محلي وتطوير متسق للمنتجات وتركيبات تركّز على النكهة.',
    'made.2.t': 'التركيز على الجودة', 'made.2.p': 'فلسفة منتج تقودها الجودة، تتمحور حول اختيار المكوّنات والقيمة الغذائية وثقة المستهلك.',
    'made.3.t': 'الابتكار', 'made.3.p': 'تحسين المنتجات القائمة واستكشاف فرص نكهات جديدة والاستجابة لتغيّر أذواق المستهلكين.',
    'made.4.t': 'الاستدامة', 'made.4.p': 'عمليات أكثر مسؤولية بتحسين ممارسات الإنتاج وتقليل الهدر غير الضروري.',
    'made.cap': 'تمثّل المنطقة الشرقية جزءًا مهمًا من النمو الحالي للعلامة.',
    'label.eyebrow': 'علامتك الخاصة · فكرة', 'label.title': 'سهل التخصيص',
    'label.p': 'تشكيلة نودلز واحدة. طرق كثيرة لتجعلها خاصة بك.',
    'label.s1': 'أربع نكهات', 'label.s2': 'دعم تجاري مرن', 'label.s3': 'تواصل معنا',
    'label.seg': 'العلامة', 'label.nb': 'نيو برايت', 'label.yours': 'علامتك', 'label.cta': 'تواصل معنا',
    'label.note': 'رسم توضيحي. العلامة الأخرى مُختلَقة. اسحب لتدويرها.',
    'part.eyebrow': 'الشراكات', 'part.title': 'محور الشراكات', 'part.intro': 'تعاون مع الموزّعين وتجار التجزئة وقطاع خدمات الطعام يوسّع الوصول إلى السوق ويحافظ على توفّر المنتج بثبات.', 'part.hint': 'واصل التمرير', 'part.pager': 'أنواع الشراكات',
    'part.1.k': 'محور الشراكات', 'part.2.k': 'محور الشراكات', 'part.3.k': 'محور الشراكات',
    'part.1.t': 'الموزّعون', 'part.1.p': 'التوفّر الموثوق جزء مهم من استراتيجية نمو نيو برايت.', 'part.1.c1': 'توريد منتجات متسق', 'part.1.c2': 'تنفيذ طلبات بكفاءة', 'part.1.c3': 'توفّر موثوق للمخزون',
    'part.2.t': 'تجار التجزئة', 'part.2.p': 'جعل التشكيلة أكثر إتاحة للمستهلكين مع بناء حضور في قنوات التجزئة.', 'part.2.c1': 'تعزيز الحضور في التجزئة', 'part.2.c2': 'بناء ظهور أقوى للعلامة', 'part.2.c3': 'ظهور أقوى عند نقطة البيع',
    'part.3.t': 'خدمات الطعام', 'part.3.p': 'النكهة المدمجة في نيو برايت أساس جاهز، ويبقى الطبق النهائي مفتوحًا للذوق الفردي.', 'part.3.c1': 'فرص مع قطاع خدمات الطعام', 'part.3.c2': 'دعم تجاري مرن', 'part.3.c3': 'علاقات عمل طويلة الأمد',
    'close.eyebrow': 'تواصل معنا', 'close.title': 'نكهة في كل خصلة', 'close.sub': 'أربع نكهات. تجربة نودلز واحدة مميزة', 'close.cta2': 'تشكيلة النكهات',
    'c.phone': 'الهاتف', 'c.email': 'البريد الإلكتروني', 'c.address': 'العنوان', 'c.addr': 'مجمع الموسى، مبنى C، طريق الملك فيصل، الخبر، المنطقة الشرقية، ص.ب 2269، المملكة العربية السعودية',
    'foot.say': 'نكهة في كل خصلة', 'foot.explore': 'استكشف', 'foot.business': 'تواصل معنا', 'foot.flavors': 'النكهات الأربع', 'foot.top': 'للأعلى',
    'foot.fine': 'فكرة تصميم. المحتوى من الملف التعريفي ودليل الهوية لنيو برايت (2026).',
    'soc.label': 'نيو برايت على وسائل التواصل', 'soc.open': 'إظهار حسابات التواصل الاجتماعي', 'soc.close': 'إخفاء حسابات التواصل الاجتماعي', 'soc.tab': '(يفتح في تبويب جديد)'
  }
};
let lang = root.lang === 'ar' ? 'ar' : 'en';
const t = (k) => (T[lang] && T[lang][k]) || T.en[k] || '';

function buildManifesto() {
  const h = $('.manifesto'); if (!h) return;
  const src = t(h.dataset.words);
  h.textContent = '';
  let key = false;
  src.split(/\s+/).filter(Boolean).forEach((tok) => {
    if (tok.startsWith('*')) key = true;
    const s = document.createElement('span');
    s.className = 'w' + (key ? ' k' : '');
    s.textContent = tok.replace(/\*/g, '') + ' ';
    h.appendChild(s);
    if (tok.replace(/[.,;:!?؟،]+$/, '').endsWith('*')) key = false;
  });
  words = $$('.w', h);
  measure();
}

function applyLang(next) {
  lang = next;
  root.lang = lang; root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  $$('[data-i18n-alt]').forEach((el) => { el.alt = t(el.dataset.i18nAlt); });
  $('#langTxt').textContent = lang === 'ar' ? 'EN' : 'العربية';
  $('#langBtn').setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  $('#noteTxt').textContent = t(`f.${cur}.note`);
  $('#hdrLabel').textContent = t(chKeys[chIdx] || 'ch.hero');
  document.title = lang === 'ar' ? 'نيو برايت | نكهة في كل خصلة' : 'New Bright | Flavor in every strand';
  buildManifesto();
  try { localStorage.setItem('nb-lang', lang); } catch (e) {}
  requestAnimationFrame(measure);
}

/* ───────────── Hero: a hand of four packs ───────────── */
const hero = $('#top');
const layers = Object.fromEntries($$('.layer').map((l) => [l.dataset.f, l]));
const packs = Object.fromEntries($$('.pack').map((p) => [p.dataset.f, p]));
const giants = $$('.giant span');
const selBtns = $$('#selector button');
const note = $('#flavorNote');
let cur = 'plain';
let topZ = 2;

function selectFlavor(f, origin) {
  if (f === cur || !FL.includes(f)) return;
  const prev = cur; cur = f;
  hero.dataset.flavor = f;
  hero.classList.add('sel');
  hero.classList.toggle('dk', !LIGHT_FLAVOR[f]);

  // colour wipe, a circle grown from where the choice was made
  const r = hero.getBoundingClientRect();
  const ox = origin ? origin.x - r.left : r.width * 0.5;
  const oy = origin ? origin.y - r.top : r.height * 0.8;
  const rad = Math.hypot(Math.max(ox, r.width - ox), Math.max(oy, r.height - oy));
  const el = layers[f];
  layers[prev].style.zIndex = 1;
  FL.forEach((k) => { if (k !== f && k !== prev) layers[k].style.zIndex = 0; });
  el.style.zIndex = ++topZ;
  if (!reduce.matches && el.animate) {
    el.animate(
      [{ clipPath: `circle(0px at ${ox}px ${oy}px)` }, { clipPath: `circle(${rad}px at ${ox}px ${oy}px)` }],
      { duration: 1000, easing: 'cubic-bezier(.7,0,.2,1)' }
    );
  }

  // the hand re-forms: chosen pack to the front, the others close up in range order
  [f, ...FL.filter((k) => k !== f)].forEach((k, i) => { packs[k].dataset.slot = i; });

  giants.forEach((g) => g.classList.toggle('on', g.dataset.f === f));
  selBtns.forEach((b) => b.setAttribute('aria-checked', String(b.dataset.f === f)));

  note.classList.add('sw');
  setTimeout(() => { $('#noteTxt').textContent = t(`f.${f}.note`); note.classList.remove('sw'); }, 220);
  updateHeaderTheme(true);
}

selBtns.forEach((b) => b.addEventListener('click', () => {
  const rc = b.getBoundingClientRect();
  selectFlavor(b.dataset.f, { x: rc.left + rc.width / 2, y: rc.top + rc.height / 2 });
}));
selBtns.forEach((b, i) => b.addEventListener('keydown', (e) => {
  const rtl = root.dir === 'rtl';
  const nextKey = rtl ? 'ArrowLeft' : 'ArrowRight', prevKey = rtl ? 'ArrowRight' : 'ArrowLeft';
  if (e.key !== nextKey && e.key !== prevKey) return;
  e.preventDefault();
  const n = selBtns[(i + (e.key === nextKey ? 1 : 3)) % 4];
  n.focus(); n.click();
}));
Object.values(packs).forEach((p) => p.addEventListener('click', (e) => selectFlavor(p.dataset.f, { x: e.clientX, y: e.clientY })));

// choreography: the lead is already there; the other three slide out one after another
requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add('is-in')));

// depth: pointer parallax between the packs, the giant word and the copy
if (fine.matches && !reduce.matches) {
  let raf = 0, px = 0, py = 0;
  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect();
    px = ((e.clientX - r.left) / r.width - 0.5) * 2; py = ((e.clientY - r.top) / r.height - 0.5) * 2;
    if (!raf) raf = requestAnimationFrame(() => { raf = 0; hero.style.setProperty('--mx', px.toFixed(3)); hero.style.setProperty('--my', py.toFixed(3)); });
  });
  hero.addEventListener('pointerleave', () => { hero.style.setProperty('--mx', 0); hero.style.setProperty('--my', 0); });
}

// "See it on stage" links from the collection
$$('.stage-link, .ft-flavor').forEach((a) => a.addEventListener('click', () => {
  const f = a.dataset.f;
  setTimeout(() => selectFlavor(f), 450);
}));

/* ───────────── Collection: the shelf ───────────── */
const panels = $$('.panel');
function openPanel(p) {
  panels.forEach((x) => { const on = x === p; x.classList.toggle('on', on); $('.panel-hit', x).setAttribute('aria-expanded', String(on)); });
}
panels.forEach((p) => {
  $('.panel-hit', p).addEventListener('click', () => openPanel(p));
  if (fine.matches) p.addEventListener('pointerenter', () => { if (innerWidth >= 900) openPanel(p); });
});

/* ───────────── Partners pager ───────────── */
$$('.pp-pager button').forEach((b) => b.addEventListener('click', () => {
  const n = +b.dataset.go, top = partners.getBoundingClientRect().top + scrollY, span = partners.offsetHeight - innerHeight;
  scrollTo({ top: top + span * Math.min(n / 3, 0.96), behavior: reduce.matches ? 'auto' : 'smooth' });
}));

/* ───────────── White label: a carton you can turn ───────────── */
const cartonEl = $('#carton'), user = $('#cartonUser'), spinEl = $('#cartonSpin'), stage3d = $('#stage3d');
const faces = { front: $('.f-front'), left: $('.f-left'), right: $('.f-right'), back: $('.f-back'), top: $('.f-top'), bottom: $('.f-bottom') };
const SPINE = { plain: '#fcc75e', vegetables: '#1c7a4a', chicken: '#e27052', beef: '#7e1418' };
let brand = 'nb', cf = 'plain', spin = 0, userRy = 0, baseRy = -28, dragging = false;
['plain', 'vegetables', 'chicken', 'beef'].forEach((f) => ['nb', 'sufra'].forEach((b) => ['front', 'spine'].forEach((s) => { new Image().src = `assets/pack3d/${b}-${f}-${s}.webp`; })));

function skin() {
  $('#imgFront').src = `assets/pack3d/${brand}-${cf}-front.webp`;
  $('#imgSpine').src = `assets/pack3d/${brand}-${cf}-spine.webp`;
  cartonEl.dataset.brand = brand;
  cartonEl.style.setProperty('--spine', SPINE[cf]);
  stage3d.dataset.f = cf;
}
let spinCur = 0, spinRaf = 0;
function turn() {
  if (reduce.matches) { skin(); return; }
  const from = spinCur, to = spin + 360, t0 = performance.now(), dur = 1100;
  spin = to;
  cancelAnimationFrame(spinRaf);
  setTimeout(skin, 520);
  const step = (now) => {
    const k = clamp((now - t0) / dur);
    const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    spinCur = from + (to - from) * e;
    paintCarton();
    if (k < 1) spinRaf = requestAnimationFrame(step);
  };
  spinRaf = requestAnimationFrame(step);
}
$$('.seg button').forEach((b) => b.addEventListener('click', () => {
  if (b.dataset.brand === brand) return;
  brand = b.dataset.brand;
  $$('.seg button').forEach((x) => x.setAttribute('aria-checked', String(x === b)));
  turn();
}));
$$('#cartonFlavors button').forEach((b) => b.addEventListener('click', () => {
  if (b.dataset.f === cf) return;
  cf = b.dataset.f;
  $$('#cartonFlavors button').forEach((x) => x.setAttribute('aria-checked', String(x === b)));
  turn();
}));
skin();

let dragX = 0, decay = 0;
stage3d.addEventListener('pointerdown', (e) => { if (e.target.closest('button,a')) return; dragging = true; dragX = e.clientX; stage3d.classList.add('drag'); stage3d.setPointerCapture(e.pointerId); cancelAnimationFrame(decay); });
stage3d.addEventListener('pointermove', (e) => { if (!dragging) return; userRy += (e.clientX - dragX) * 0.5; dragX = e.clientX; paintCarton(); });
const endDrag = () => {
  if (!dragging) return; dragging = false; stage3d.classList.remove('drag');
  const ease = () => { userRy *= 0.94; paintCarton(); if (Math.abs(userRy) > 0.2) decay = requestAnimationFrame(ease); else { userRy = 0; paintCarton(); } };
  decay = requestAnimationFrame(ease);
};
stage3d.addEventListener('pointerup', endDrag); stage3d.addEventListener('pointercancel', endDrag);
stage3d.tabIndex = 0;
stage3d.setAttribute('role', 'img'); stage3d.setAttribute('aria-label', 'Carton. Use the left and right arrow keys to turn');
stage3d.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { userRy += e.key === 'ArrowLeft' ? -18 : 18; paintCarton(); e.preventDefault(); clearTimeout(stage3d._t); stage3d._t = setTimeout(() => { const ease = () => { userRy *= 0.9; paintCarton(); if (Math.abs(userRy) > 0.2) decay = requestAnimationFrame(ease); }; ease(); }, 1200); }
});

function paintCarton() {
  const ry = baseRy + userRy;
  user.style.setProperty('--ry', ry.toFixed(2));
  spinEl.style.setProperty('--spin', spinCur.toFixed(2));
  // light from the upper start side: each face is lit by how directly it faces it
  const a = (ry + spinCur) * Math.PI / 180, L = -0.55;
  const lit = (n) => Math.max(0, 1 - (0.78 + 0.3 * Math.max(-1, Math.min(1, Math.cos(a + n - L)))));
  // a face is drawn only while it turns towards the viewer (does not rely on backface culling)
  const facing = { front: Math.cos(a), left: Math.sin(a), right: -Math.sin(a), back: -Math.cos(a) };
  for (const k in facing) { faces[k].style.visibility = facing[k] > 0.004 ? 'visible' : 'hidden'; }
  faces.front.style.setProperty('--sh', lit(0).toFixed(3));
  faces.left.style.setProperty('--sh', lit(Math.PI / 2).toFixed(3));
  faces.right.style.setProperty('--sh', lit(-Math.PI / 2).toFixed(3));
  faces.back.style.setProperty('--sh', lit(Math.PI).toFixed(3));
  faces.top.style.setProperty('--sh', 0); faces.bottom.style.setProperty('--sh', 0.4);
  // top and bottom: the camera looks slightly down on the carton
  faces.top.style.visibility = 'visible'; faces.bottom.style.visibility = 'hidden';
}

/* ───────────── Scroll engine ───────────── */
const intro = $('.house'), story = $('.story'), sbLayers = $$('.sb-l'), partners = $('.partners'), PART_HDR = ['light', 'dark', 'dark', 'light'], STORY_HDR = ['light', 'dark', 'dark', 'light'], made = $('.made'), band = $('#band'), label = $('.label'), close = $('.close');
const sections = $$('main > section[data-ch]');
let words = [];
let vh = innerHeight, metrics = {};
const chKeys = ['ch.hero', 'ch.intro', 'ch.coll', 'ch.idea', 'ch.made', 'ch.label', 'ch.partners', 'ch.close'];
let chIdx = 0, ticking = false, lastHdr = '';

function measure() {
  vh = innerHeight;
  ticking = false; schedule();
}
let cpTarget = 0, cpNow = 0, easing = false;
function easeLoop() {
  if (easing) return; easing = true;
  const tick = () => {
    cpNow += (cpTarget - cpNow) * (reduce.matches ? 1 : 0.075);
    if (Math.abs(cpTarget - cpNow) < 0.001) cpNow = cpTarget;
    close.style.setProperty('--cp', cpNow.toFixed(4));
    if (cpNow !== cpTarget) requestAnimationFrame(tick); else easing = false;
  };
  requestAnimationFrame(tick);
}
function schedule() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }

function progressOf(el, startAt = 0, endAt = 0) {
  const r = el.getBoundingClientRect();
  const total = r.height - vh + startAt + endAt;
  return total <= 0 ? 0 : clamp((-r.top + startAt) / total);
}

function updateHeaderTheme(force) {
  const y = 44;
  let theme = 'light', idx = 0;
  for (let i = 0; i < sections.length; i++) {
    const r = sections[i].getBoundingClientRect();
    if (r.top <= y && r.bottom > y) { idx = +sections[i].dataset.ch; theme = sections[i].dataset.hdr || 'light'; if (idx === 0) theme = LIGHT_FLAVOR[cur] ? 'light' : 'dark'; break; }
  }
  const f = $('.foot').getBoundingClientRect();
  if (f.top <= y) { theme = 'dark'; idx = 7; }
  if (theme !== lastHdr || force) { document.body.dataset.hdr = theme; lastHdr = theme; }
  // the rail sits mid-screen, so it reads the section there
  let rt = 'light';
  for (let i = 0; i < sections.length; i++) { const r = sections[i].getBoundingClientRect(); if (r.top <= vh * 0.5 && r.bottom > vh * 0.5) { rt = +sections[i].dataset.ch === 0 ? (LIGHT_FLAVOR[cur] ? 'light' : 'dark') : (sections[i].dataset.hdr || 'light'); break; } }
  if (f.top <= vh * 0.5) rt = 'dark';
  if (document.body.dataset.rail !== rt) document.body.dataset.rail = rt;
  if (idx !== chIdx || force) {
    chIdx = idx;
    const lab = $('#hdrLabel'); lab.classList.add('sw');
    setTimeout(() => { lab.textContent = t(chKeys[idx]); $('#hdrNum').textContent = String(idx + 1).padStart(2, '0'); lab.classList.remove('sw'); }, 160);
    $$('.rail a').forEach((a) => a.classList.toggle('on', +a.dataset.ch === idx));
  }
}

function frame() {
  ticking = false;
  const y = scrollY, doc = root.scrollHeight - vh;

  // the promise: the strands come down onto the noodles as the section passes
  if (intro) {
    const r = intro.getBoundingClientRect();
    intro.style.setProperty('--ip', clamp((vh * 0.85 - r.top) / (vh * 0.55)).toFixed(3));
  }
  // the idea: one strand draws itself; each step floods the stage with a flavor
  if (story) {
    const p = progressOf(story);
    const step = Math.min(3, Math.floor(p * 4 + 0.001));
    if (String(step) !== story.dataset.step) {
      story.dataset.step = step; $('#stepNum').textContent = String(step + 1).padStart(2, '0');
      story.dataset.hdr = STORY_HDR[step];
    }
    story.style.setProperty('--sp', ((p * 4) % 1 || (p >= 1 ? 1 : 0)).toFixed(3));
    $('#stepBar').style.setProperty('--sp', ((p * 4) % 1 || (p >= 1 ? 1 : 0)).toFixed(3));
    sbLayers.forEach((l, k) => l.style.setProperty('--w', (k === 0 ? 1 : clamp((p * 4 - (k - 0.5)) / 0.5)).toFixed(3)));
    const d = clamp(p * 1.05);
    $$('.spine').forEach((svg) => {
      const vis = svg.getBoundingClientRect().width > 0 && getComputedStyle(svg).display !== 'none';
      if (!vis) return;
      $$('path', svg).forEach((pa, i) => {
        const lag = pa.classList.contains('sp-thin') ? 0.025 * (1 + (i % 4)) : 0;
        pa.style.strokeDashoffset = (1 - clamp(d - lag)).toFixed(4);
      });
      const main = $('.sp-main', svg), tip = $('.sp-tip', svg);
      if (!main._len) main._len = main.getTotalLength();
      const pt = main.getPointAtLength(main._len * d);
      tip.setAttribute('cx', pt.x.toFixed(1)); tip.setAttribute('cy', pt.y.toFixed(1));
      tip.style.opacity = d > 0.01 && d < 0.995 ? 1 : 0;
    });
  }
  // partners: vertical scroll slides the belt sideways, one station at a time
  if (partners && !reduce.matches) {
    const p = progressOf(partners), u = p * 3, i = Math.min(2, Math.floor(u)), f = u - i;
    let e = clamp((f - 0.2) / 0.6); e = e * e * (3 - 2 * e);
    const pos = i + e;
    partners.style.setProperty('--pos', pos.toFixed(4));
    partners.style.setProperty('--bd', clamp((pos + 1.04) / 4).toFixed(4));
    const step = Math.round(pos);
    if (String(step) !== partners.dataset.step) { partners.dataset.step = step; partners.dataset.hdr = PART_HDR[step]; }
  }
  // made in Saudi: the band slides with the page
  if (made) {
    const r = made.getBoundingClientRect();
    band.style.setProperty('--mp', clamp((vh - r.top) / (vh + r.height * 0.6)).toFixed(3));
  }
  // white label: the carton turns as it passes
  if (label) {
    const r = label.getBoundingClientRect();
    const p = clamp((vh - r.top) / (vh + r.height));
    baseRy = -44 + p * 52;
    paintCarton();
  }
  // closing: the chopsticks come down
  if (close) {
    const r = close.getBoundingClientRect();
    cpTarget = clamp((vh * 0.9 - r.top) / (vh * 0.75));
    easeLoop();
  }
  $('#railFill').style.height = (doc > 0 ? clamp(y / doc) * 100 : 0) + '%';
  updateHeaderTheme(false);
}

addEventListener('scroll', schedule, { passive: true });
addEventListener('resize', measure);

/* ───────────── Reveals ───────────── */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.2, rootMargin: '0px 0px -6% 0px' });
  $$('[data-reveal], #rowPacks, .map').forEach((el) => io.observe(el));
} else { $$('[data-reveal], #rowPacks, .map').forEach((el) => el.classList.add('in')); }

/* ───────────── Menu ───────────── */
const menu = $('#menu'), menuBtn = $('#menuBtn');
function openMenu() { if (!menu.open) { menu.showModal(); menuBtn.setAttribute('aria-expanded', 'true'); } }
function closeMenu() {
  if (!menu.open) return;
  menu.classList.add('closing');
  setTimeout(() => { menu.close(); menu.classList.remove('closing'); menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.focus(); }, reduce.matches ? 0 : 380);
}
menuBtn.addEventListener('click', openMenu);
$('#menuX').addEventListener('click', closeMenu);
menu.addEventListener('cancel', (e) => { e.preventDefault(); closeMenu(); });
$$('.menu-list a').forEach((a) => a.addEventListener('click', () => { menu.close(); menuBtn.setAttribute('aria-expanded', 'false'); }));

/* ───────────── Social dock ───────────── */
const sdock = $('#sdock'), sdToggle = $('#sdToggle');
function sdSet(open) {
  sdock.toggleAttribute('data-open', open); sdToggle.setAttribute('aria-expanded', String(open));
  $('#sdLabel').textContent = t(open ? 'soc.close' : 'soc.open');
  $('#sdLabel').dataset.i18n = open ? 'soc.close' : 'soc.open';
}
sdToggle.addEventListener('click', () => sdSet(!sdock.hasAttribute('data-open')));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && sdock.hasAttribute('data-open')) { sdSet(false); sdToggle.focus(); } });
document.addEventListener('pointerdown', (e) => { if (sdock.hasAttribute('data-open') && !sdock.contains(e.target)) sdSet(false); });

$('#langBtn').addEventListener('click', () => applyLang(lang === 'ar' ? 'en' : 'ar'));

/* ───────────── Go ───────────── */
applyLang(lang);
updateHeaderTheme(true);
frame();
})();
