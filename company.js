/* New Bright: the Company page. Vanilla JS. Shares only styles.css with the home concept. */
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/* ───────────── Copy: from the New Bright Company Profile (2026) ───────────── */
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
  "close.eyebrow": "Contact Us",
  "close.title": "Ready to partner with us?",
  "close.sub": "Tell us about your business: retail, distribution, foodservice or your own brand.",
  "close.cta2": "Flavor range",
  "c.phone": "Phone",
  "c.email": "Email",
  "c.address": "Address",
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
  "co.nav.top": "The company",
  "co.nav.figures": "In figures",
  "co.nav.group": "The group",
  "co.nav.concept": "Product concept",
  "co.nav.range": "The range",
  "co.nav.make": "Manufacturing & quality",
  "co.nav.market": "Market & growth",
  "co.nav.partners": "Partnerships",
  "co.nav.close": "Contact Us",
  "co.nav.purpose": "Brand foundation",
  "co.nav.vision": "Vision & mission",
  "co.nav.values": "Core values",
  "co.nav.logo": "Logo story",
  "co.hero.eyebrow": "Al Rammah Factory · Al Khobar",
  "co.hero.title": "The Company",
  "co.hero.lead": "New Bright is a Saudi noodle brand specializing in Chinese Noodles – Pancit Canton, developed around a distinctive product concept: flavor is built directly into the noodles themselves.",
  "co.hero.chip": "Made in Saudi Arabia",
  "co.hero.cta": "Meet the group",
  "co.hero.alt": "The New Bright logo, shown in three dimensions",
  "co.fig.1": "Al Rammah International Holding, a Saudi-owned group, is established",
  "co.fig.2": "Al Rammah Factory is established as a local Saudi noodle manufacturer",
  "co.fig.3": "Flavor varieties: Plain, Vegetables, Chicken and Beef",
  "co.fig.4": "Net pack: one consistent format across the full range",
  "co.fig.g": "g",
  "co.grp.eyebrow": "The group behind the brand",
  "co.grp.title": "From a group to a factory to a brand",
  "co.grp.p1": "Al Rammah International Holding is a Saudi-owned group established in 1979 and headquartered in Al Khobar, Eastern Province. Its business approach is built around diversification, innovation, operational excellence and long-term value creation.",
  "co.grp.p2": "Within the food manufacturing sector, Al Rammah Factory was established in 2021 as a local Saudi noodle manufacturer focused on quality, product development and building trusted relationships with consumers and business partners.",
  "co.grp.hint": "Choose a ring",
  "co.r1.t": "Al Rammah International Holding",
  "co.r1.p": "A Saudi-owned group headquartered in Al Khobar, Eastern Province.",
  "co.r1.b": "Diversification|Innovation|Operational excellence|Long-term value creation",
  "co.r2.t": "Al Rammah Factory",
  "co.r2.p": "Established in the food manufacturing sector as a local Saudi noodle manufacturer.",
  "co.r2.b": "Quality|Product development|Trusted relationships with consumers|Trusted relationships with business partners",
  "co.r3.t": "New Bright",
  "co.r3.p": "A Saudi noodle brand specializing in Chinese Noodles – Pancit Canton.",
  "co.r3.b": "Chicken|Vegetables|Plain|Beef",
  "co.r1.k": "Established 1979",
  "co.r2.k": "Established 2021",
  "co.r3.k": "Today",
  "co.con.eyebrow": "The Noodles",
  "co.con.title": "Flavor built in",
  "co.con.p": "Instead of depending on a separate seasoning sachet to create the product’s core taste, New Bright integrates flavor directly into the noodles, making preparation simpler while leaving consumers free to customize the final dish.",
  "co.con.p2": "Each variety begins with its own flavor character, so the noodles already have a defined taste before consumers add their preferred sauces, proteins, vegetables or toppings. This makes New Bright suitable for both simple everyday meals and more personalized recipes.",
  "co.con.pt.1": "Flavor Built In",
  "co.con.pt.2": "No Separate Seasoning Sachet",
  "co.con.pt.3": "Ready to Cook",
  "co.con.pt.4": "Easy to Customize",
  "co.con.alt": "Chopsticks lifting seasoned noodles from a square bowl",
  "co.ess.t": "Product Essentials",
  "co.ess.p": "New Bright is offered as a consistent Chinese Noodles – Pancit Canton range, combining clear product specifications with four distinct flavor options designed for different taste preferences and meal occasions.",
  "co.ess.1.v": "4",
  "co.ess.1.t": "Four Flavor Varieties",
  "co.ess.1.d": "Chicken, Vegetables, Plain and Beef.",
  "co.ess.2.v": "200g",
  "co.ess.2.t": "Net Pack",
  "co.ess.2.d": "A consistent pack format across the full range.",
  "co.ess.3.v": "KSA",
  "co.ess.3.t": "Made in Saudi Arabia",
  "co.ess.3.d": "Locally manufactured by Al Rammah Factory.",
  "co.ess.4.v": "GMO",
  "co.ess.4.t": "Free from GMO",
  "co.ess.4.d": "Identified on the current New Bright packaging.",
  "co.ess.5.v": "x4",
  "co.ess.5.t": "Distinct Flavor Identity",
  "co.ess.5.d": "Each variety has its own taste profile and color-coded packaging.",
  "co.ess.6.v": "1",
  "co.ess.6.t": "Unified Product Range",
  "co.ess.6.d": "One consistent product format with clear variety differentiation.",
  "co.ways": "One noodle range. Many ways to make it your own.",
  "co.rg.eyebrow": "The range",
  "co.rg.title": "Four flavors. One distinctive noodle experience.",
  "co.rg.intro": "The range moves from mild and versatile to rich and savory, giving consumers clear choices without changing the brand’s signature built-in flavor concept.",
  "co.rg.see": "See the flavor",
  "co.rg.tabs": "Choose a flavor",
  "co.rg.plain.tag": "Mild & Versatile",
  "co.rg.plain.d": "A simple and versatile option designed for those who enjoy a clean and mild taste.",
  "co.rg.vegetables.tag": "Fresh & Vibrant",
  "co.rg.vegetables.d": "A fresh and vibrant flavor inspired by the goodness of vegetables.",
  "co.rg.chicken.tag": "Savory & Comforting",
  "co.rg.chicken.d": "A warm and familiar flavor crafted for everyday enjoyment.",
  "co.rg.beef.tag": "Rich & Satisfying",
  "co.rg.beef.d": "A richer and bolder flavor created for a deeper, more satisfying taste experience.",
  "co.rg.plain.alt": "The Plain pack beside a dish of noodles and a golden noodle cake",
  "co.rg.vegetables.alt": "The Vegetables pack beside a bowl of noodles and a green noodle cake",
  "co.rg.chicken.alt": "The Chicken pack beside a bowl of noodles and a yellow noodle cake",
  "co.rg.beef.alt": "The Beef pack beside a dish of noodles and a brown noodle cake",
  "co.mk.eyebrow": "Manufacturing & quality",
  "co.mk.title": "Manufacturing & quality",
  "co.mk.lead": "New Bright is supported by Al Rammah Factory’s focus on local manufacturing, product quality and continuous improvement. The factory places quality, customer satisfaction and ingredient selection at the center of its approach while developing noodle products that respond to changing tastes and everyday needs.",
  "co.mk.1.t": "Saudi Manufacturing",
  "co.mk.1.p": "New Bright is proudly manufactured in Saudi Arabia as part of Al Rammah Factory’s commitment to developing locally made food products.",
  "co.mk.1.b": "Local Saudi production|Consistent product development|Flavor-focused formulations|Clear product and preparation information|Continuous improvement|Market-driven innovation",
  "co.mk.2.t": "Quality Focus",
  "co.mk.2.p": "Al Rammah Factory communicates a quality-led product philosophy centered on ingredient selection, nutritional value and consumer trust.",
  "co.mk.2.b": "Careful ingredient selection|Product consistency|Reliable manufacturing|Clear consumer information|Continuous product improvement|Customer satisfaction|Long-term consumer trust",
  "co.mk.3.t": "Innovation",
  "co.mk.3.p": "Innovation is part of Al Rammah Factory’s product development culture. New Bright reflects this through its built-in flavor concept and its focus on creating a more distinctive noodle experience.",
  "co.mk.3.b": "Improving existing products|Developing new product concepts|Exploring new flavor opportunities|Expanding the range over time|Responding to changing consumer tastes|Identifying new market opportunities",
  "co.mk.4.t": "Sustainability",
  "co.mk.4.p": "Al Rammah Factory is working toward more responsible operations by improving production practices and reducing unnecessary waste.",
  "co.mk.4.b": "Reducing operational waste|Increasing the use of recyclable materials|Improving operational efficiency|Supporting responsible business growth|Continuously reviewing production practices",
  "co.mt.eyebrow": "Market & growth",
  "co.mt.title": "Market & growth",
  "co.mt.lead": "New Bright continues to build its presence in the Saudi market as demand and distribution expand. The Eastern Province represents an important part of the brand’s current growth, supported by local production, a developing supply network and increasing market awareness.",
  "co.mt.pres.t": "Market Presence",
  "co.mt.pres.p": "New Bright’s market development focuses on making the range increasingly accessible to consumers while building visibility across retail, distribution and foodservice channels.",
  "co.mt.pres.b": "Growing product availability|Strengthening retail presence|Expanding geographic coverage|Building stronger brand visibility",
  "co.mt.dist.t": "Distribution",
  "co.mt.dist.p": "Reliable availability is an important part of New Bright’s growth strategy. The brand aims to support market expansion through an organized supply approach capable of serving both existing and future partners.",
  "co.mt.dist.b": "Consistent product supply|Efficient order fulfillment|Reliable stock availability|Flexible response to market demand|Greater operational capacity as the brand grows",
  "co.mt.gp.t": "Growth Priorities",
  "co.mt.gp.p": "New Bright’s next stage of development is focused on strengthening both production capability and market reach.",
  "co.mt.gp.b": "Expand the customer base|Increase production capacity|Reach additional cities and markets|Strengthen retail visibility|Continue product and flavor development|Grow New Bright as a recognized Saudi noodle brand",
  "co.mt.cap": "The Eastern Province represents an important part of the brand’s current growth.",
  "co.mt.alt": "An illustrated map of Saudi Arabia with routes reaching out to stores and cities",
  "co.pt.eyebrow": "Partnerships",
  "co.pt.title": "Partnerships",
  "co.pt.p": "New Bright’s growth is supported by collaboration with distributors, retailers and foodservice businesses. The brand focuses on practical, long-term relationships that support shared commercial growth.",
  "co.pt.b": "Distribution and retail collaboration|Foodservice business opportunities|Reliable product availability|Long-term business relationships",
  "co.pt.w1": "White label",
  "co.pt.w2": "Contact",
  "co.pt.w3": "Request a quote",
  "co.pt.ways": "Ways in",
  "co.pu.eyebrow": "Brand Foundation",
  "co.pu.title": "A clear purpose",
  "co.pu.p": "New Bright is built around a clear purpose: to make flavorful noodle meals simple, enjoyable and adaptable to different tastes. The brand brings together Saudi manufacturing, product innovation and a consumer-focused approach while maintaining a distinctive identity in the noodle category.",
  "co.pu.1": "Saudi Manufacturing",
  "co.pu.2": "Product Innovation",
  "co.pu.3": "Customer Focus",
  "co.pu.hint": "The three pillars of the brand",
  "co.vm.v.k": "Vision",
  "co.vm.v.t": "To become a leading Saudi noodle brand in the region, recognized for distinctive flavor, dependable quality, practical convenience and continuous innovation.",
  "co.vm.m.k": "Mission",
  "co.vm.m.t": "To create high-quality Saudi-made noodles that make everyday meals simpler and more enjoyable through distinctive flavors, convenient preparation and the freedom to personalize every dish.",
  "co.vl.title": "Core Values",
  "co.vl.1.t": "Quality",
  "co.vl.1.d": "A consistent focus on product quality, ingredient selection and a dependable consumer experience.",
  "co.vl.2.t": "Innovation",
  "co.vl.2.d": "Continuous development of products, flavors and ideas that respond to evolving consumer preferences.",
  "co.vl.3.t": "Customer Focus",
  "co.vl.3.d": "Understanding the needs of consumers, retailers and business partners and building lasting relationships around them.",
  "co.vl.4.t": "Simplicity",
  "co.vl.4.d": "Creating products that are straightforward to prepare, easy to enjoy and flexible enough for different meal occasions.",
  "co.vl.5.t": "Responsibility",
  "co.vl.5.d": "Supporting responsible growth through efficient operations, waste reduction and greater use of recyclable materials.",
  "co.lg.eyebrow": "Company Logo",
  "co.lg.title": "Logo Story",
  "co.lg.lead": "The New Bright logo combines the product and brand in one distinctive mark.",
  "co.lg.out": "Together, these elements form a simple, memorable identity that directly connects the brand to its noodle product.",
  "co.lg.hint": "Choose a part of the logo",
  "co.lg.all": "Whole logo",
  "co.lg.1.t": "Golden lines",
  "co.lg.1.p": "Parallel golden lines inspired by noodle strands.",
  "co.lg.2.t": "Red center",
  "co.lg.2.p": "A bold red center that conveys warmth, appetite, and energy.",
  "co.lg.3.t": "White wordmark",
  "co.lg.3.p": "A clear white wordmark that creates strong contrast and recognition."
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
  "close.eyebrow": "تواصل معنا",
  "close.title": "جاهزون للشراكة معك؟",
  "close.sub": "أخبرنا عن منشأتك: تجزئة أو توزيع أو خدمات طعام أو علامتك الخاصة.",
  "close.cta2": "تشكيلة النكهات",
  "c.phone": "الهاتف",
  "c.email": "البريد الإلكتروني",
  "c.address": "العنوان",
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
  "co.nav.top": "الشركة",
  "co.nav.figures": "بالأرقام",
  "co.nav.group": "المجموعة",
  "co.nav.concept": "فكرة المنتج",
  "co.nav.range": "التشكيلة",
  "co.nav.make": "التصنيع والجودة",
  "co.nav.market": "السوق والنمو",
  "co.nav.partners": "الشراكات",
  "co.nav.close": "تواصل معنا",
  "co.nav.purpose": "أساس العلامة",
  "co.nav.vision": "الرؤية والرسالة",
  "co.nav.values": "القيم الأساسية",
  "co.nav.logo": "قصة الشعار",
  "co.hero.eyebrow": "مصنع الرماح · الخبر",
  "co.hero.title": "الشركة",
  "co.hero.lead": "نيو برايت علامة نودلز سعودية متخصصة في المكرونة الصينية بانسيت كانتون، قامت على فكرة منتج مميزة: النكهة مدمجة مباشرة في النودلز نفسها.",
  "co.hero.chip": "صنع في السعودية",
  "co.hero.cta": "تعرّف على المجموعة",
  "co.hero.alt": "شعار نيو برايت بثلاثة أبعاد",
  "co.fig.1": "تأسيس مجموعة الرماح الدولية القابضة، مجموعة سعودية الملكية",
  "co.fig.2": "تأسيس مصنع الرماح مصنعًا سعوديًا محليًا للنودلز",
  "co.fig.3": "نكهات: سادة، خضار، دجاج، ولحم",
  "co.fig.4": "وزن صافٍ: عبوة واحدة ثابتة لكل التشكيلة",
  "co.fig.g": "جم",
  "co.grp.eyebrow": "المجموعة وراء العلامة",
  "co.grp.title": "من مجموعة إلى مصنع إلى علامة",
  "co.grp.p1": "مجموعة الرماح الدولية القابضة مجموعة سعودية الملكية تأسست عام 1979 ومقرها الخبر في المنطقة الشرقية. يقوم نهجها في الأعمال على التنويع والابتكار والتميّز التشغيلي وصناعة قيمة طويلة الأمد.",
  "co.grp.p2": "وفي قطاع الصناعات الغذائية، تأسس مصنع الرماح عام 2021 مصنعًا سعوديًا محليًا للنودلز، يركّز على الجودة وتطوير المنتجات وبناء علاقات موثوقة مع المستهلكين وشركاء الأعمال.",
  "co.grp.hint": "اختر حلقة",
  "co.r1.t": "مجموعة الرماح الدولية القابضة",
  "co.r1.p": "مجموعة سعودية الملكية مقرها الخبر في المنطقة الشرقية.",
  "co.r1.b": "التنويع|الابتكار|التميّز التشغيلي|صناعة قيمة طويلة الأمد",
  "co.r2.t": "مصنع الرماح",
  "co.r2.p": "تأسس في قطاع الصناعات الغذائية مصنعًا سعوديًا محليًا للنودلز.",
  "co.r2.b": "الجودة|تطوير المنتجات|علاقات موثوقة مع المستهلكين|علاقات موثوقة مع شركاء الأعمال",
  "co.r3.t": "نيو برايت",
  "co.r3.p": "علامة نودلز سعودية متخصصة في المكرونة الصينية بانسيت كانتون.",
  "co.r3.b": "دجاج|خضار|سادة|لحم",
  "co.r1.k": "تأسست 1979",
  "co.r2.k": "تأسس 2021",
  "co.r3.k": "اليوم",
  "co.con.eyebrow": "النودلز",
  "co.con.title": "النكهة مدمجة",
  "co.con.p": "بدل الاعتماد على كيس توابل منفصل لصنع المذاق الأساسي، تدمج نيو برايت النكهة مباشرة في النودلز، فيصبح التحضير أبسط ويبقى المستهلك حرًّا في تخصيص طبقه النهائي.",
  "co.con.p2": "تبدأ كل نكهة بطابعها الخاص، فيكون للنودلز طعم محدد قبل أن يضيف المستهلك صلصاته وبروتيناته وخضاره وإضافاته المفضلة. وهذا يجعل نيو برايت مناسبة للوجبات اليومية البسيطة والوصفات الأكثر تخصيصًا.",
  "co.con.pt.1": "نكهة مدمجة",
  "co.con.pt.2": "بلا كيس توابل منفصل",
  "co.con.pt.3": "جاهز للطبخ",
  "co.con.pt.4": "سهل التخصيص",
  "co.con.alt": "عيدان أكل ترفع نودلز متبّلة من وعاء مربّع",
  "co.ess.t": "أساسيات المنتج",
  "co.ess.p": "تُطرح نيو برايت كتشكيلة مكرونة صينية بانسيت كانتون متسقة، تجمع مواصفات منتج واضحة مع أربع نكهات مميزة تناسب أذواقًا ومناسبات وجبات مختلفة.",
  "co.ess.1.v": "4",
  "co.ess.1.t": "أربع نكهات",
  "co.ess.1.d": "الدجاج والخضار والسادة واللحم.",
  "co.ess.2.v": "200 جم",
  "co.ess.2.t": "وزن صافٍ للعبوة",
  "co.ess.2.d": "صيغة عبوة موحدة عبر التشكيلة كلها.",
  "co.ess.3.v": "السعودية",
  "co.ess.3.t": "صنع في السعودية",
  "co.ess.3.d": "يُصنَّع محليًا في مصنع الرماح.",
  "co.ess.4.v": "GMO",
  "co.ess.4.t": "خالٍ من المعدّلات الوراثية",
  "co.ess.4.d": "مذكور على عبوة نيو برايت الحالية.",
  "co.ess.5.v": "x4",
  "co.ess.5.t": "هوية نكهة مميزة",
  "co.ess.5.d": "لكل نكهة طابع طعم خاص وعبوة بلون مميز.",
  "co.ess.6.v": "1",
  "co.ess.6.t": "تشكيلة منتجات موحدة",
  "co.ess.6.d": "صيغة منتج واحدة متسقة مع تمييز واضح بين النكهات.",
  "co.ways": "تشكيلة نودلز واحدة. طرق كثيرة لتجعلها خاصة بك.",
  "co.rg.eyebrow": "التشكيلة",
  "co.rg.title": "أربع نكهات. تجربة نودلز واحدة مميزة.",
  "co.rg.intro": "تتدرّج التشكيلة من الخفيف متعدد الاستخدامات إلى الغني الشهي، فتمنح المستهلك خيارات واضحة دون أن تتغيّر فكرة العلامة: النكهة داخل النودلز.",
  "co.rg.see": "شاهد النكهة",
  "co.rg.tabs": "اختر نكهة",
  "co.rg.plain.tag": "هادئة ومتعددة الاستخدامات",
  "co.rg.plain.d": "خيار بسيط ومتعدد الاستخدامات لمن يحبون الطعم النظيف والهادئ.",
  "co.rg.vegetables.tag": "منعشة ونابضة بالحياة",
  "co.rg.vegetables.d": "نكهة منعشة ونابضة بالحياة مستوحاة من خير الخضار.",
  "co.rg.chicken.tag": "شهية ومريحة",
  "co.rg.chicken.d": "نكهة دافئة ومألوفة صُنعت للاستمتاع اليومي.",
  "co.rg.beef.tag": "غنية ومُشبِعة",
  "co.rg.beef.d": "نكهة أغنى وأجرأ لتجربة طعم أعمق وأكثر إشباعًا.",
  "co.rg.plain.alt": "عبوة السادة بجانب طبق نودلز وقرص نودلز ذهبي",
  "co.rg.vegetables.alt": "عبوة الخضار بجانب وعاء نودلز وقرص نودلز أخضر",
  "co.rg.chicken.alt": "عبوة الدجاج بجانب وعاء نودلز وقرص نودلز أصفر",
  "co.rg.beef.alt": "عبوة اللحم بجانب طبق نودلز وقرص نودلز بني",
  "co.mk.eyebrow": "التصنيع والجودة",
  "co.mk.title": "التصنيع والجودة",
  "co.mk.lead": "تستند نيو برايت إلى تركيز مصنع الرماح على التصنيع المحلي وجودة المنتج والتحسين المستمر. ويضع المصنع الجودة ورضا العملاء واختيار المكوّنات في صميم نهجه، وهو يطوّر منتجات نودلز تواكب تغيّر الأذواق والاحتياجات اليومية.",
  "co.mk.1.t": "تصنيع سعودي",
  "co.mk.1.p": "تُصنَّع نيو برايت في السعودية بفخر ضمن التزام مصنع الرماح بتطوير منتجات غذائية مصنوعة محليًا.",
  "co.mk.1.b": "إنتاج سعودي محلي|تطوير منتج متّسق|تركيبات محورها النكهة|معلومات واضحة عن المنتج والتحضير|تحسين مستمر|ابتكار تقوده السوق",
  "co.mk.2.t": "التركيز على الجودة",
  "co.mk.2.p": "يقدّم مصنع الرماح فلسفة منتج تقودها الجودة، تتمحور حول اختيار المكوّنات والقيمة الغذائية وثقة المستهلك.",
  "co.mk.2.b": "اختيار دقيق للمكوّنات|ثبات المنتج|تصنيع موثوق|معلومات واضحة للمستهلك|تحسين مستمر للمنتج|رضا العملاء|ثقة المستهلك على المدى الطويل",
  "co.mk.3.t": "الابتكار",
  "co.mk.3.p": "الابتكار جزء من ثقافة تطوير المنتجات في مصنع الرماح. وتعكس نيو برايت ذلك بفكرة النكهة المدمجة وبتركيزها على صنع تجربة نودلز أكثر تميزًا.",
  "co.mk.3.b": "تحسين المنتجات الحالية|تطوير أفكار منتجات جديدة|استكشاف فرص نكهات جديدة|توسيع التشكيلة مع الوقت|الاستجابة لتغيّر أذواق المستهلكين|رصد فرص جديدة في السوق",
  "co.mk.4.t": "الاستدامة",
  "co.mk.4.p": "يعمل مصنع الرماح نحو عمليات أكثر مسؤولية بتحسين ممارسات الإنتاج وتقليل الهدر غير الضروري.",
  "co.mk.4.b": "تقليل الهدر التشغيلي|زيادة استخدام المواد القابلة لإعادة التدوير|رفع الكفاءة التشغيلية|دعم نمو الأعمال بمسؤولية|مراجعة ممارسات الإنتاج باستمرار",
  "co.mt.eyebrow": "السوق والنمو",
  "co.mt.title": "السوق والنمو",
  "co.mt.lead": "تواصل نيو برايت بناء حضورها في السوق السعودي مع توسّع الطلب والتوزيع. وتمثّل المنطقة الشرقية جزءًا مهمًا من نمو العلامة الحالي، بدعم من الإنتاج المحلي وشبكة إمداد تتطور ووعي متزايد بالسوق.",
  "co.mt.pres.t": "الحضور في السوق",
  "co.mt.pres.p": "يركّز تطوير نيو برايت في السوق على جعل التشكيلة أكثر إتاحة للمستهلكين مع بناء حضور عبر قنوات التجزئة والتوزيع وخدمات الطعام.",
  "co.mt.pres.b": "توسيع توفّر المنتج|تعزيز الحضور في التجزئة|توسيع التغطية الجغرافية|بناء ظهور أقوى للعلامة",
  "co.mt.dist.t": "التوزيع",
  "co.mt.dist.p": "التوفّر الموثوق جزء مهم من استراتيجية نمو نيو برايت. وتهدف العلامة إلى دعم التوسع في السوق عبر نهج إمداد منظّم قادر على خدمة الشركاء الحاليين والمستقبليين.",
  "co.mt.dist.b": "توريد منتجات متّسق|تنفيذ طلبات بكفاءة|توفّر موثوق للمخزون|استجابة مرنة لطلب السوق|طاقة تشغيلية أكبر مع نمو العلامة",
  "co.mt.gp.t": "أولويات النمو",
  "co.mt.gp.p": "تتركز المرحلة التالية من تطور نيو برايت على تعزيز القدرة الإنتاجية والوصول إلى السوق معًا.",
  "co.mt.gp.b": "توسيع قاعدة العملاء|زيادة الطاقة الإنتاجية|الوصول إلى مدن وأسواق جديدة|تعزيز الحضور في نقاط البيع|مواصلة تطوير المنتج والنكهات|تنمية نيو برايت كعلامة نودلز سعودية معروفة",
  "co.mt.cap": "تمثّل المنطقة الشرقية جزءًا مهمًا من النمو الحالي للعلامة.",
  "co.mt.alt": "خريطة مرسومة للمملكة العربية السعودية تمتد منها مسارات إلى المتاجر والمدن",
  "co.pt.eyebrow": "الشراكات",
  "co.pt.title": "الشراكات",
  "co.pt.p": "يقوم نمو نيو برايت على التعاون مع الموزّعين وتجار التجزئة وقطاع خدمات الطعام. وتركّز العلامة على علاقات عملية طويلة الأمد تدعم نموًا تجاريًا مشتركًا.",
  "co.pt.b": "تعاون في التوزيع والتجزئة|فرص مع قطاع خدمات الطعام|توفّر موثوق للمنتج|علاقات عمل طويلة الأمد",
  "co.pt.w1": "علامتك الخاصة",
  "co.pt.w2": "تواصل",
  "co.pt.w3": "اطلب عرض سعر",
  "co.pt.ways": "طرق البدء",
  "co.pu.eyebrow": "أساس العلامة",
  "co.pu.title": "هدف واضح",
  "co.pu.p": "تقوم نيو برايت على هدف واضح: أن تجعل وجبات النودلز الغنية بالنكهة بسيطة وممتعة وقابلة للتكيّف مع الأذواق المختلفة. وتجمع العلامة بين التصنيع السعودي وابتكار المنتجات والتوجّه نحو المستهلك، مع الحفاظ على هوية مميزة في فئة النودلز.",
  "co.pu.1": "تصنيع سعودي",
  "co.pu.2": "ابتكار المنتجات",
  "co.pu.3": "التركيز على المستهلك",
  "co.pu.hint": "الركائز الثلاث للعلامة",
  "co.vm.v.k": "الرؤية",
  "co.vm.v.t": "أن نصبح علامة نودلز سعودية رائدة في المنطقة، معروفة بالنكهة المميزة والجودة الموثوقة والراحة العملية والابتكار المستمر.",
  "co.vm.m.k": "الرسالة",
  "co.vm.m.t": "صناعة نودلز سعودية عالية الجودة تجعل وجبات كل يوم أبسط وأمتع، بنكهات مميزة وتحضير مريح وحرية تخصيص كل طبق.",
  "co.vl.title": "القيم الأساسية",
  "co.vl.1.t": "الجودة",
  "co.vl.1.d": "تركيز دائم على جودة المنتج واختيار المكوّنات وتجربة مستهلك يُعتمد عليها.",
  "co.vl.2.t": "الابتكار",
  "co.vl.2.d": "تطوير مستمر للمنتجات والنكهات والأفكار بما يواكب تفضيلات المستهلك المتغيرة.",
  "co.vl.3.t": "التركيز على العميل",
  "co.vl.3.d": "فهم احتياجات المستهلكين وتجار التجزئة وشركاء الأعمال وبناء علاقات دائمة معهم.",
  "co.vl.4.t": "البساطة",
  "co.vl.4.d": "منتجات سهلة التحضير والاستمتاع، ومرنة بما يكفي لمناسبات الوجبات المختلفة.",
  "co.vl.5.t": "المسؤولية",
  "co.vl.5.d": "دعم النمو المسؤول عبر كفاءة التشغيل وتقليل الهدر وزيادة استخدام المواد القابلة لإعادة التدوير.",
  "co.lg.eyebrow": "شعار الشركة",
  "co.lg.title": "قصة الشعار",
  "co.lg.lead": "يجمع شعار نيو برايت بين المنتج والعلامة في رمز واحد مميز.",
  "co.lg.out": "وتشكّل هذه العناصر معًا هوية بسيطة تبقى في الذاكرة، وتربط العلامة مباشرة بمنتجها من النودلز.",
  "co.lg.hint": "اختر جزءًا من الشعار",
  "co.lg.all": "الشعار كاملًا",
  "co.lg.1.t": "الخطوط الذهبية",
  "co.lg.1.p": "خطوط ذهبية متوازية مستوحاة من خصل النودلز.",
  "co.lg.2.t": "المركز الأحمر",
  "co.lg.2.p": "مركز أحمر جريء يعبّر عن الدفء والشهية والطاقة.",
  "co.lg.3.t": "الاسم باللون الأبيض",
  "co.lg.3.p": "اسم العلامة بخط أبيض واضح يصنع تبايناً قوياً ويسهّل التعرّف عليها."
 }
};
let lang = root.lang === 'ar' ? 'ar' : 'en';
const t = (k) => (T[lang] && T[lang][k]) || T.en[k] || '';

const sections = $$('main > section[data-ch]');
const vlSec = $('#values'), vlRow = $('#vlRow'); let vlK = -1, vlOff = 0;
let chIdx = 0, lastHdr = '';

function fillLists() {
  $$('[data-list]').forEach((ul) => {
    ul.textContent = '';
    t(ul.dataset.list).split('|').forEach((s) => { const li = document.createElement('li'); li.textContent = s; ul.appendChild(li); });
  });
}
function fillMarquee() {
  $$('[data-marq]').forEach((tr) => {
    tr.textContent = '';
    const items = t(tr.dataset.marq).split('|');
    for (let r = 0; r < 2; r++) items.forEach((s) => { const sp = document.createElement('span'); sp.textContent = s; tr.appendChild(sp); });
  });
}
function applyLang(next) {
  lang = next; root.lang = lang; root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  $$('[data-i18n-alt]').forEach((el) => { el.alt = t(el.dataset.i18nAlt); });
  fillLists(); fillMarquee();
  $('#langTxt').textContent = lang === 'ar' ? 'EN' : 'العربية';
  $('#langBtn').setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  document.title = lang === 'ar' ? 'نيو برايت | الشركة' : 'New Bright | The company';
  $('#hdrLabel').textContent = t(sections[chIdx].dataset.label);
  $('#sdLabel').textContent = t($('#sdock').hasAttribute('data-open') ? 'soc.close' : 'soc.open');
  try { localStorage.setItem('nb-lang', lang); } catch (e) {}
  measure();
}

/* ───────────── Layout cache and scroll frame ───────────── */
const L = new Map();
let vh = innerHeight, docH = 0, ticking = false;
const FOOT = $('.foot'), range = $('#range'), hero = $('.co-hero');
const RG_HDR = ['light', 'dark', 'light', 'dark'];
function cacheLayout() {
  vh = innerHeight; docH = root.scrollHeight - vh;
  const sy = scrollY;
  [...sections, FOOT].forEach((el) => { const r = el.getBoundingClientRect(); L.set(el, { top: r.top + sy, height: r.height }); });
  const rgHead = $('.co-rg-head'); if (rgHead && range) range.style.setProperty('--head-h', rgHead.offsetHeight + 'px');
  if (vlSec && vlRow) vlOff = vlRow.getBoundingClientRect().top - vlSec.getBoundingClientRect().top;
}
const R = (el) => { const c = L.get(el) || { top: 0, height: 0 }, tp = c.top - scrollY; return { top: tp, bottom: tp + c.height, height: c.height }; };
function measure() { cacheLayout(); schedule(); }
function schedule() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
const pinned = () => !reduce.matches && getComputedStyle($('.co-rg-pin')).position === 'sticky';

function frame() {
  ticking = false;
  // the values: the cards are dealt from one stack as the section comes up the screen
  if (vlSec && !reduce.matches) {
    const rt = R(vlSec).top + vlOff, k = clamp((vh * 0.95 - rt) / (vh * 0.7));
    if (k !== vlK) { vlK = k; vlRow.style.setProperty('--k', k.toFixed(3)); }
  }
  // the range: vertical scroll steps through the four flavors
  if (pinned()) {
    const r = R(range), p = clamp(-r.top / Math.max(1, r.height - vh));
    const step = Math.min(3, Math.floor(p * 4 + 0.0001));
    if (String(step) !== range.dataset.step) { range.dataset.step = step; range.dataset.hdr = RG_HDR[step]; syncTabs(step); }
  }
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
  if (!reduce.matches && R(hero).bottom > 0) hero.style.setProperty('--hp', clamp(scrollY / vh).toFixed(3));
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
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.16, rootMargin: '0px 0px -6% 0px' });
  $$('[data-reveal], #rowPacks').forEach((el) => io.observe(el));
} else { $$('[data-reveal], #rowPacks').forEach((el) => el.classList.add('in')); }

/* ───────────── Figures: count up once ───────────── */
const cnts = $$('.cnt');
if (!reduce.matches && 'IntersectionObserver' in window) {
  cnts.forEach((c) => { c.textContent = '0'; });
  const io2 = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return; io2.unobserve(e.target);
    const el = e.target, to = +el.dataset.to, t0 = performance.now(), dur = 1500 + Math.min(1, to / 2000) * 500;
    const step = (now) => { const k = clamp((now - t0) / dur), v = 1 - Math.pow(1 - k, 4); el.textContent = String(Math.round(to * v)); if (k < 1) requestAnimationFrame(step); else el.textContent = String(to); };
    requestAnimationFrame(step);
  }), { threshold: 0.6 });
  cnts.forEach((c) => io2.observe(c));
}

/* ───────────── The group: three rings ───────────── */
const rings = $('#coRings'), riPanels = $$('#coRingInfo .ri');
function ringSet(n) {
  rings.dataset.active = n;
  $$('.co-ring', rings).forEach((b) => b.setAttribute('aria-pressed', String(+b.dataset.r === n)));
  riPanels.forEach((p, i) => p.classList.toggle('on', i + 1 === n));
}
const ringHover = matchMedia('(hover: hover)');
$$('.co-ring', rings).forEach((b) => {
  const n = +b.dataset.r; let timer = 0;
  b.addEventListener('click', () => { clearTimeout(timer); ringSet(n); });
  // hover: a short pause on the ring before it takes over, so crossing the rings on the way somewhere does not flicker
  b.addEventListener('pointerenter', () => {
    if (!ringHover.matches || +rings.dataset.active === n) return;
    clearTimeout(timer); timer = setTimeout(() => ringSet(n), 110);
  });
  b.addEventListener('pointerleave', () => clearTimeout(timer));
});

/* ───────────── Manufacturing: choose a topic ───────────── */
const mdBtns = $$('[data-md]'), mdPanels = $$('.co-mdp');
function mdSet(n, focus) {
  mdBtns.forEach((b) => { const on = +b.dataset.md === n; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; if (on && focus) b.focus(); });
  mdPanels.forEach((p, i) => p.classList.toggle('on', i + 1 === n));
}
mdBtns.forEach((b, i) => {
  b.addEventListener('click', () => mdSet(+b.dataset.md));
  b.addEventListener('pointerenter', () => { if (matchMedia('(hover: hover)').matches) mdSet(+b.dataset.md); });
  b.addEventListener('keydown', (e) => {
    let n = i; if (e.key === 'ArrowDown') n = (i + 1) % 4; else if (e.key === 'ArrowUp') n = (i + 3) % 4; else return;
    e.preventDefault(); mdSet(n + 1, true);
  });
  if (i > 0) b.tabIndex = -1;
});

/* ───────────── Hero: the logo in 3D, turning to the pointer ───────────── */
const lxEl = $('#coLx'), lxGl = $('#lxGl');
if (lxEl && lxGl) {
  const sgn = () => (root.dir === 'rtl' ? -1 : 1);
  let tx = -16 * sgn(), ty = 10, cx = tx, cy = ty, hover = false, run = false;
  hero.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    const r = hero.getBoundingClientRect();
    tx = -16 * sgn() + ((e.clientX - r.left) / r.width - 0.5) * 36;
    ty = 10 - ((e.clientY - r.top) / r.height - 0.5) * 24;
    hover = true;
  });
  hero.addEventListener('pointerleave', () => { hover = false; });
  const tick = (now) => {
    if (!run) return;
    if (!hover) { const s = now / 1000; tx = -16 * sgn() + Math.sin(s * 0.7) * 12; ty = 10 + Math.cos(s * 0.5) * 5; }
    cx += (tx - cx) * 0.07; cy += (ty - cy) * 0.07;
    lxEl.style.setProperty('--ry', cx.toFixed(2) + 'deg'); lxEl.style.setProperty('--rx', cy.toFixed(2) + 'deg');
    lxGl.setAttribute('transform', `translate(${(((cx * sgn() + 40) / 50) * 760 - 140).toFixed(1)} 0) skewX(-18)`);
    requestAnimationFrame(tick);
  };
  if (!reduce.matches && 'IntersectionObserver' in window) {
    new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting && !run) { run = true; requestAnimationFrame(tick); } else if (!e.isIntersecting) run = false; })).observe(hero);
  }
}

/* ───────────── Values: a fan of cards, one forward ───────────── */
const vlItems = $$('.co-vl-i');
function vlSet(n, focus) {
  vlItems.forEach((li) => {
    const v = +li.dataset.v, on = v === n;
    li.classList.toggle('on', on);
    li.style.setProperty('--a', String(v - n));
    $('.co-vl-b', li).setAttribute('aria-expanded', String(on));
  });
  if (focus) $('.co-vl-b', vlItems[n - 1]).focus();
}
vlItems.forEach((li) => {
  const n = +li.dataset.v, b = $('.co-vl-b', li);
  b.addEventListener('click', () => vlSet(n));
  b.addEventListener('focus', () => { if (!li.classList.contains('on')) vlSet(n); });
  b.addEventListener('keydown', (e) => {
    const k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!k) return;
    const m = n + k * (root.dir === 'rtl' ? -1 : 1);
    if (m >= 1 && m <= vlItems.length) { e.preventDefault(); vlSet(m, true); }
  });
});

/* ───────────── The logo, taken apart ───────────── */
const logoStage = $('#coLogo'); let logoSel = 'all';
$$('.co-lg-n').forEach((b) => {
  const k = b.dataset.hl;
  b.addEventListener('pointerenter', () => { logoStage.dataset.hl = k; });
  b.addEventListener('focus', () => { logoStage.dataset.hl = k; });
  b.addEventListener('pointerleave', () => { logoStage.dataset.hl = logoSel; });
  b.addEventListener('blur', () => { logoStage.dataset.hl = logoSel; });
  b.addEventListener('click', () => {
    logoSel = logoSel === k ? 'all' : k; logoStage.dataset.hl = logoSel;
    $$('.co-lg-n').forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.hl === logoSel)));
  });
});

/* ───────────── The range: tabs ───────────── */
const tabs = $$('.co-rg-tabs [role=tab]');
function syncTabs(step) { tabs.forEach((b, i) => { b.setAttribute('aria-selected', String(i === step)); }); }
tabs.forEach((b) => b.addEventListener('click', () => {
  const n = +b.dataset.go;
  if (pinned()) { const c = L.get(range), span = c.height - vh; goTo(c.top + span * ((n + 0.5) / 4)); }
  else { range.dataset.step = n; syncTabs(n); $$('.co-mo')[n].scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'center' }); }
}));
tabs.forEach((b, i) => b.addEventListener('keydown', (e) => {
  const rtl = root.dir === 'rtl', nx = rtl ? 'ArrowLeft' : 'ArrowRight', pv = rtl ? 'ArrowRight' : 'ArrowLeft';
  if (e.key !== nx && e.key !== pv) return; e.preventDefault();
  const n = clamp(i + (e.key === nx ? 1 : -1), 0, 3); tabs[n].focus(); tabs[n].click();
}));

addEventListener('scroll', schedule, { passive: true });
addEventListener('resize', measure);
addEventListener('load', measure);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
if ('ResizeObserver' in window) new ResizeObserver(() => { if (Math.abs(root.scrollHeight - vh - docH) > 2) measure(); }).observe(document.body);

applyLang(lang);
cacheLayout(); frame();
})();
