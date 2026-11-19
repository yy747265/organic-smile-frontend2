/* =========================================================
   ORGANIC Smile — script.js (النسخة النهائية الشاملة)
   ========================================================= */

const API_URL = "https://organic-smile-public-api.vercel.app/api/products";
let WHATSAPP_NUMBER = "201061429669";
const DEFAULT_WHATSAPP = WHATSAPP_NUMBER;
const SETTINGS_URL = "https://organic-smile-public-api.vercel.app/api/settings";
const SETTINGS_CACHE = "os_site_settings";

/* =========================================================
   آراء العملاء — ضيف هنا التقييمات الحقيقية اللي وصلتلك
   انسخ السطر ده وكرره لكل تقييم (rating من 1 لـ 5):
   { name: "اسم العميل", city: "المدينة", product: "اسم المنتج", rating: 5, text: "نص التعليق", date: "2026-11-01" },
   الإجباري: name و rating و text. والباقي اختياري.
   لو عاوز نسخة إنجليزي ضيف: text_en و product_en.
   لتثبيت تعليق في أول القسم بشكل مميز ضيف فيه: pinned: true
   ========================================================= */
const REVIEWS = [
];

const I18N = {
 "ar": {
  "title": "ORGANIC Smile | فواكه مجففة وبودر طبيعي فاخر",
  "metaDesc": "تشكيلة فاخرة من الفواكه المجففة والبودر الطبيعي الصافي بدون إضافات صناعية.",
  "pTitle": "تفاصيل المنتج | ORGANIC Smile",
  "topbar": "طبيعي 100% · بدون إضافات صناعية · جودة مختارة بعناية",
  "navHome": "الرئيسية",
  "navShop": "المتجر",
  "navAbout": "قصتنا",
  "navContact": "تواصل معنا",
  "orderNow": "اطلب الآن",
  "heroTag": "طبيعي 100% بدون إضافات",
  "heroP": "تشكيلة فاخرة من الفواكه المجففة والبودر الطبيعي الصافي، جودة تتعدى التوقعات لأسلوب حياة صحي وراقي.",
  "shopCollection": "تسوق المجموعة",
  "knowStory": "اعرف قصتنا",
  "bNatural": "طبيعي",
  "bPure": "صافي",
  "bLuxury": "فاخر",
  "f1t": "مكونات طبيعية",
  "f1p": "بدون مواد حافظة أو إضافات",
  "f2t": "اختيار دقيق",
  "f2p": "نختار كل منتج بعناية",
  "f3t": "أحجام متعددة",
  "f3p": "اختار الحجم المناسب ليك",
  "f4t": "اطلب بسهولة",
  "f4p": "تواصل معانا مباشرة",
  "eyColl": "المجموعة",
  "prodTitle": "منتجاتنا المميزة",
  "prodSub": "اكتشف الطعم الأصلي والفوائد الكاملة المجهزة بعناية",
  "fAll": "جميع المنتجات",
  "fDried": "فواكه مجففة",
  "fPowder": "بودر طبيعي",
  "eyStory": "قصتنا",
  "aboutTitle": "طبيعة صافية بلمسة فاخرة",
  "aboutP": "في ORGANIC Smile بنؤمن إن الأكل الصحي مش لازم يكون عادي. بنختار فواكهنا المجففة والبودر الطبيعي بعناية، علشان توصلك بأحسن طعم وأعلى جودة، من غير أي إضافات صناعية.",
  "ap1": "بدون مواد حافظة",
  "ap2": "طعم أصلي",
  "ap3": "جودة ثابتة",
  "navReviews": "آراء العملاء",
  "rvEyebrow": "آراء عملائنا",
  "rvTitle": "ثقتكم هي أغلى ما نملك",
  "rvSub": "تجارب عملائنا مع منتجاتنا",
  "rvBased": "بناءً على {n} تقييم",
  "rvEmptyTitle": "كن أول من يشاركنا رأيه",
  "rvEmptyP": "لسه مفيش تقييمات منشورة. جرّب منتجاتنا وشاركنا تجربتك.",
  "rvMore": "عرض المزيد من التقييمات",
  "rvPinned": "تعليق مثبّت",
  "rvFormTitle": "شاركنا تجربتك",
  "rvFormSub": "رأيك يهمنا ويساعد غيرك يختار. هيوصلنا تقييمك على واتساب، وبعد مراجعته بيتم نشره.",
  "rvName": "الاسم",
  "rvNamePh": "اسمك",
  "rvProduct": "المنتج (اختياري)",
  "rvProductPh": "مثال: مانجو مجففة",
  "rvRate": "تقييمك",
  "rvRateNeed": "من فضلك اختار عدد النجوم",
  "rvComment": "تعليقك",
  "rvCommentPh": "احكي لنا عن تجربتك مع المنتج...",
  "rvSend": "إرسال التقييم",
  "rvSent": "شكرًا لك! تقييمك جاهز للإرسال",
  "rvMsgHead": "تقييم جديد من الموقع ⭐",
  "rvMsgName": "الاسم",
  "rvMsgProduct": "المنتج",
  "rvMsgRating": "التقييم",
  "rvMsgComment": "التعليق",
  "eyContact": "تواصل معنا",
  "contactTitle": "جاهز تطلب؟",
  "contactSub": "كلمنا على واتساب وهنساعدك تختار وتطلب",
  "waBtn": "تواصل عبر واتساب",
  "footerP": "طبيعي 100% · طعم فاخر وجودة لا تضاهى",
  "footerBottom": "© 2026 ORGANIC Smile. جميع الحقوق محفوظة.",
  "backShop": "العودة للمتجر",
  "sizesLabel": "الأحجام المتاحة",
  "orderWA": "اطلب عبر واتساب",
  "menu": "القائمة",
  "searchPh": "ابحث عن منتج...",
  "loadFail": "تعذر تحميل المنتجات. تأكد من الاتصال وحاول مرة أخرى.",
  "retry": "إعادة المحاولة",
  "noProducts": "لا توجد منتجات متاحة حالياً.",
  "noMatch": "لا توجد منتجات مطابقة للبحث.",
  "startsFrom": "يبدأ من",
  "details": "عرض التفاصيل",
  "cur": "ج.م",
  "catOther": "منتج طبيعي",
  "defDesc": "منتج طبيعي فاخر 100% بدون أي إضافات صناعية.",
  "askPrice": "تواصل معنا لمعرفة السعر",
  "loading": "جاري تحميل المنتج...",
  "noSel": "لم يتم تحديد منتج",
  "noSelT": "ارجع للمتجر واختار المنتج اللي يعجبك.",
  "nf": "المنتج غير موجود",
  "nfT": "ممكن يكون المنتج اتشال أو الرابط غلط.",
  "lf": "تعذر تحميل بيانات المنتج",
  "lfT": "تأكد من الاتصال وحدّث الصفحة.",
  "msgOrder": "مرحباً، أريد طلب: ",
  "msgSize": " - الحجم: ",
  "msgPrice": " - السعر: ",
  "msgInquiry": "مرحباً، أريد الاستفسار عن منتجاتكم",
  "langBtn": "EN",
  "heroH1": "فخامة الطبيعة <em>في كل قضمة</em>",
  "ads": [
   "طبيعي 100% · بدون إضافات صناعية",
   "جودة مختارة بعناية",
   "أضف منتجاتك للسلة واطلبها كلها مرة واحدة عبر واتساب",
   "أحجام متعددة تناسب احتياجك",
   "تواصل معنا على واتساب وهنساعدك تختار"
  ],
  "cart": "السلة",
  "cartTitle": "سلة المشتريات",
  "cartEmpty": "السلة فاضية، ضيف منتجات من المتجر.",
  "addToCart": "أضف للسلة",
  "added": "تمت الإضافة للسلة",
  "total": "الإجمالي",
  "sendOrder": "إرسال الطلب عبر واتساب",
  "clearCart": "تفريغ السلة",
  "remove": "حذف",
  "close": "إغلاق",
  "inc": "زيادة",
  "dec": "نقصان",
  "sizeSel": "الحجم",
  "noPriceNote": "بعض المنتجات سعرها هيتأكد عبر واتساب.",
  "msgCartHead": "مرحباً، أريد طلب المنتجات التالية:",
  "msgTotal": "الإجمالي: "
 },
 "en": {
  "title": "ORGANIC Smile | Premium Dried Fruits & Natural Powders",
  "metaDesc": "A premium selection of dried fruits and pure natural powders with no artificial additives.",
  "pTitle": "Product Details | ORGANIC Smile",
  "topbar": "100% Natural · No Artificial Additives · Carefully Selected Quality",
  "navHome": "Home",
  "navShop": "Shop",
  "navAbout": "Our Story",
  "navContact": "Contact Us",
  "orderNow": "Order Now",
  "heroTag": "100% Natural, No Additives",
  "heroP": "A premium selection of dried fruits and pure natural powders, with quality that exceeds expectations for a healthy, refined lifestyle.",
  "shopCollection": "Shop the Collection",
  "knowStory": "Discover Our Story",
  "bNatural": "Natural",
  "bPure": "Pure",
  "bLuxury": "Premium",
  "f1t": "Natural Ingredients",
  "f1p": "No preservatives or additives",
  "f2t": "Careful Selection",
  "f2p": "Every product is hand-picked",
  "f3t": "Multiple Sizes",
  "f3p": "Choose the size that suits you",
  "f4t": "Easy Ordering",
  "f4p": "Reach us directly",
  "eyColl": "Collection",
  "prodTitle": "Our Featured Products",
  "prodSub": "Discover the authentic taste and full benefits, carefully prepared",
  "fAll": "All Products",
  "fDried": "Dried Fruits",
  "fPowder": "Natural Powders",
  "eyStory": "Our Story",
  "aboutTitle": "Pure Nature with a Premium Touch",
  "aboutP": "At ORGANIC Smile we believe healthy food shouldn't be ordinary. We carefully select our dried fruits and natural powders to bring you the best taste and highest quality, with no artificial additives.",
  "ap1": "No preservatives",
  "ap2": "Authentic taste",
  "ap3": "Consistent quality",
  "navReviews": "Reviews",
  "rvEyebrow": "Customer Reviews",
  "rvTitle": "Your Trust Is Our Greatest Asset",
  "rvSub": "What our customers say about our products",
  "rvBased": "Based on {n} reviews",
  "rvEmptyTitle": "Be the first to share your opinion",
  "rvEmptyP": "No reviews published yet. Try our products and share your experience.",
  "rvMore": "Show more reviews",
  "rvPinned": "Pinned review",
  "rvFormTitle": "Share Your Experience",
  "rvFormSub": "Your opinion matters and helps others choose. Your review is sent to us on WhatsApp and published after we review it.",
  "rvName": "Name",
  "rvNamePh": "Your name",
  "rvProduct": "Product (optional)",
  "rvProductPh": "e.g. Dried mango",
  "rvRate": "Your rating",
  "rvRateNeed": "Please choose a star rating",
  "rvComment": "Your comment",
  "rvCommentPh": "Tell us about your experience with the product...",
  "rvSend": "Send Review",
  "rvSent": "Thank you! Your review is ready to send",
  "rvMsgHead": "New review from the website ⭐",
  "rvMsgName": "Name",
  "rvMsgProduct": "Product",
  "rvMsgRating": "Rating",
  "rvMsgComment": "Comment",
  "eyContact": "Contact Us",
  "contactTitle": "Ready to Order?",
  "contactSub": "Message us on WhatsApp and we'll help you choose and order",
  "waBtn": "Chat on WhatsApp",
  "footerP": "100% Natural · Premium Taste & Unmatched Quality",
  "footerBottom": "© 2026 ORGANIC Smile. All rights reserved.",
  "backShop": "Back to Shop",
  "sizesLabel": "Available Sizes",
  "orderWA": "Order via WhatsApp",
  "menu": "Menu",
  "searchPh": "Search for a product...",
  "loadFail": "Couldn't load products. Check your connection and try again.",
  "retry": "Retry",
  "noProducts": "No products available right now.",
  "noMatch": "No products match your search.",
  "startsFrom": "From",
  "details": "View Details",
  "cur": "EGP",
  "catOther": "Natural Product",
  "defDesc": "100% premium natural product with no artificial additives.",
  "askPrice": "Contact us for the price",
  "loading": "Loading product...",
  "noSel": "No product selected",
  "noSelT": "Go back to the shop and pick a product you like.",
  "nf": "Product not found",
  "nfT": "The product may have been removed or the link is wrong.",
  "lf": "Couldn't load product data",
  "lfT": "Check your connection and refresh the page.",
  "msgOrder": "Hello, I'd like to order: ",
  "msgSize": " - Size: ",
  "msgPrice": " - Price: ",
  "msgInquiry": "Hello, I'd like to ask about your products",
  "langBtn": "عربي",
  "heroH1": "Luxury of Nature <em>in Every Bite</em>",
  "ads": [
   "طبيعي 100% · بدون إضافات صناعية",
   "جودة مختارة بعناية",
   "أضف منتجاتك للسلة واطلبها كلها مرة واحدة عبر واتساب",
   "أحجام متعددة تناسب احتياجك",
   "تواصل معنا على واتساب وهنساعدك تختار"
  ],
  "cart": "Cart",
  "cartTitle": "Shopping Cart",
  "cartEmpty": "Your cart is empty. Add products from the shop.",
  "addToCart": "Add to Cart",
  "added": "Added to cart",
  "total": "Total",
  "sendOrder": "Send Order via WhatsApp",
  "clearCart": "Clear Cart",
  "remove": "Remove",
  "close": "Close",
  "inc": "Increase",
  "dec": "Decrease",
  "sizeSel": "Size",
  "noPriceNote": "Some items will be priced on WhatsApp.",
  "msgCartHead": "Hello, I'd like to order the following:",
  "msgTotal": "Total: "
 }
};

let LANG = "ar";
try { LANG = localStorage.getItem("lang") === "en" ? "en" : "ar"; } catch (e) {}
const t = (k) => (I18N[LANG] && I18N[LANG][k]) || I18N.ar[k] || k;

function pick(obj, base) {
    if (!obj) return "";
    const ar = obj[base], en = obj[base + "_en"];
    return LANG === "en" ? en || ar || "" : ar || en || "";
}

let rerender = null;

function applyLang() {
    const html = document.documentElement;
    html.lang = LANG;
    html.dir = LANG === "ar" ? "rtl" : "ltr";
    
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    document.querySelectorAll("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => (el.placeholder = t(el.dataset.i18nPh)));
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    document.querySelectorAll("[data-i18n-content]").forEach((el) => el.setAttribute("content", t(el.dataset.i18nContent)));
    
    document.querySelectorAll(".lang-toggle, #langToggle").forEach(btn => {
        btn.textContent = t("langBtn");
    });

    applyWhatsapp();
    renderAds();
    renderCart();
    renderReviews();
    if (rerender) rerender();
}

function setLang(l) {
    LANG = l;
    try { localStorage.setItem("lang", l); } catch (e) {}
    applyLang();
}

const PLACEHOLDER_IMG =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">' +
        '<rect width="100%" height="100%" fill="#1b1b18"/>' +
        '<text x="50%" y="50%" fill="#C9A961" font-family="serif" font-size="26" text-anchor="middle">ORGANIC Smile</text>' +
        "</svg>"
    );

function whatsappLink(text) {
    return "https://wa.me/" + WHATSAPP_NUMBER + (text ? "?text=" + encodeURIComponent(text) : "");
}

function safeImage(src) {
    if (typeof src === "string" && /^(https?:\/\/|data:image\/)/i.test(src.trim())) return src.trim();
    return PLACEHOLDER_IMG;
}

function getImages(product) {
    let imgs = [];
    if (Array.isArray(product.images)) imgs = product.images;
    else if (product.image) imgs = [product.image];
    imgs = imgs.filter(Boolean).map(safeImage);
    return imgs.length ? imgs : [PLACEHOLDER_IMG];
}

function normalizeCategory(c) {
    const v = String(c || "").trim().toLowerCase();
    if (["dried", "dried fruits", "dried fruit", "فواكه مجففة", "فواكه مجففه"].includes(v)) return "dried";
    if (["powder", "powders", "natural powder", "natural powders", "بودر طبيعي", "بودر"].includes(v)) return "powder";
    return "other";
}

function categoryLabel(c) {
    const k = normalizeCategory(c);
    return k === "dried" ? t("fDried") : k === "powder" ? t("fPowder") : t("catOther");
}

function normalizeSizes(product) {
    const out = [];
    if (Array.isArray(product.sizes)) {
        product.sizes.forEach((item) => {
            if (item && typeof item === "object") {
                const p = parseFloat(item.price);
                const o = parseFloat(item.old_price);
                out.push({ size: String(item.size || ""), size_en: String(item.size_en || ""), price: isNaN(p) ? null : p, old_price: !isNaN(o) && !isNaN(p) && o > p ? o : null });
            } else if (item) {
                out.push({ size: String(item), size_en: "", price: null, old_price: null });
            }
        });
    }
    if (out.length === 0 && product.price) {
        const p = parseFloat(product.price);
        if (!isNaN(p)) out.push({ size: "", size_en: "", price: p, old_price: null });
    }
    return out;
}

function sizeLabel(s) {
    if (LANG === "ar") return s.size || s.size_en;
    if (s.size_en) return s.size_en;
    return s.size
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
        .replace(/كجم|كيلو/g, "kg")
        .replace(/جرام|جم/g, "g");
}

function formatPrice(n) {
    return Number(n).toLocaleString("en-US") + " " + t("cur");
}

function discountPct(s) {
    if (!s || s.old_price === null || s.old_price === undefined || s.price === null || s.old_price <= s.price) return 0;
    return Math.round((1 - s.price / s.old_price) * 100);
}

function fillPrice(el, s) {
    el.textContent = "";
    if (!s || s.price === null) { el.textContent = t("askPrice"); return; }
    const now = document.createElement("span");
    now.className = "price-now";
    now.textContent = formatPrice(s.price);
    el.appendChild(now);
    if (discountPct(s) > 0) {
        const old = document.createElement("del");
        old.className = "price-old";
        old.textContent = formatPrice(s.old_price);
        el.appendChild(old);
    }
}

function productKey(p) { return String(p.name || p.name_en || "").trim(); }
function productUrl(name) { return "product.html?name=" + encodeURIComponent(name); }

async function fetchProducts() {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);
    try {
        const res = await fetch(API_URL, { signal: controller.signal });
        if (!res.ok) throw new Error("HTTP " + res.status);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("Bad response");
        return data;
    } finally {
        clearTimeout(timer);
    }
}

function setupMenu() {
    const toggle = document.getElementById("menuToggle");
    const links = document.getElementById("navLinks");
    if (toggle && links) {
        const overlay = document.createElement("div");
        overlay.className = "nav-overlay";
        document.body.appendChild(overlay);

        const closeBtn = document.createElement("button");
        closeBtn.type = "button";
        closeBtn.className = "nav-close";
        closeBtn.setAttribute("aria-label", "close");
        closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        links.insertBefore(closeBtn, links.firstChild);

        const setOpen = (open) => {
            links.classList.toggle("open", open);
            overlay.classList.toggle("open", open);
            document.body.classList.toggle("menu-open", open);
        };
        toggle.addEventListener("click", () => setOpen(!links.classList.contains("open")));
        closeBtn.addEventListener("click", () => setOpen(false));
        overlay.addEventListener("click", () => setOpen(false));
        document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
        links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
        window.addEventListener("resize", () => { if (window.innerWidth > 768) setOpen(false); });
    }
}
    
document.querySelectorAll(".lang-toggle, #langToggle").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        setLang(LANG === "ar" ? "en" : "ar");
    });
});

function applyWhatsapp() {
    document.querySelectorAll("#whatsappBtn").forEach((a) => {
        a.href = whatsappLink(t("msgInquiry"));
    });
}

function renderAds() {
    const bar = document.getElementById("adsBar");
    if (!bar) return;
    const ads = t("ads");
    if (!Array.isArray(ads) || !ads.length) return;
    
    bar.innerHTML = "";
    const track = document.createElement("div");
    track.className = "ads-track";
    
    const group = document.createElement("div");
    group.className = "ads-group";
    
    ads.forEach((text) => {
        const item = document.createElement("span");
        item.className = "ads-item";
        
        const icon = document.createElement("i");
        icon.className = "fa-solid fa-leaf";
        
        item.appendChild(icon);
        item.appendChild(document.createTextNode(" " + text));
        group.appendChild(item);
    });
    
    track.appendChild(group);
    const clone = group.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
    bar.appendChild(track);
}

const CART_KEY = "os_cart";
let cart = [];

function loadCart() {
    try {
        const raw = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
        if (Array.isArray(raw)) {
            cart = raw
                .filter((i) => i && typeof i === "object" && i.id)
                .map((i) => ({
                    id: String(i.id),
                    name: String(i.name || ""),
                    name_en: String(i.name_en || ""),
                    size: String(i.size || ""),
                    size_en: String(i.size_en || ""),
                    price: typeof i.price === "number" && isFinite(i.price) ? i.price : null,
                    image: typeof i.image === "string" ? i.image : "",
                    qty: Math.min(99, Math.max(1, parseInt(i.qty, 10) || 1)),
                }));
        }
    } catch (e) { cart = []; }
}

function saveCart() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
}

function addToCart(product, size) {
    const sz = size || { size: "", size_en: "", price: null };
    const id = productKey(product) + "||" + sz.size + "||" + sz.size_en;
    const found = cart.find((i) => i.id === id);
    if (found) {
        found.qty = Math.min(99, found.qty + 1);
    } else {
        cart.push({
            id,
            name: String(product.name || ""),
            name_en: String(product.name_en || ""),
            size: sz.size,
            size_en: sz.size_en,
            price: sz.price,
            image: getImages(product)[0],
            qty: 1,
        });
    }
    saveCart();
    renderCart();
    showToast(t("added"));
}

function cartCount() { return cart.reduce((n, i) => n + i.qty, 0); }
function cartTotal() { return cart.reduce((n, i) => n + (i.price !== null ? i.price * i.qty : 0), 0); }

function openCart() {
    const d = document.getElementById("cartDrawer");
    if (!d) return;
    d.classList.add("open");
    document.getElementById("cartOverlay").classList.add("open");
    document.body.classList.add("cart-open");
    const btn = document.getElementById("cartBtn");
    if (btn) btn.setAttribute("aria-expanded", "true");
}

function closeCart() {
    const d = document.getElementById("cartDrawer");
    if (!d) return;
    d.classList.remove("open");
    document.getElementById("cartOverlay").classList.remove("open");
    document.body.classList.remove("cart-open");
    const btn = document.getElementById("cartBtn");
    if (btn) btn.setAttribute("aria-expanded", "false");
}

function showToast(msg) {
    let el = document.getElementById("toast");
    if (!el) {
        el = document.createElement("div");
        el.id = "toast";
        el.className = "toast";
        el.setAttribute("role", "status");
        document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => el.classList.remove("show"), 1800);
}

function buildCartMessage() {
    const customerName = document.getElementById("customer-name")?.value.trim() || "";
    const customerPhone = document.getElementById("customer-phone")?.value.trim() || "";
    const customerAddress = document.getElementById("customer-address")?.value.trim() || "";

    if (!customerName || !customerPhone || !customerAddress) {
        alert("من فضلك أدخل الاسم، رقم التليفون، والعنوان بالتفصيل لإتمام الطلب.");
        return null;
    }

    const lines = [
        "🌿 *طلب جديد من متجر Organic Smile Store* 🌿",
        "",
        `👤 *الاسم:* ${customerName}`,
        `📱 *رقم التليفون:* ${customerPhone}`,
        `📍 *العنوان:* ${customerAddress}`,
        "",
        t("msgCartHead"),
        ""
    ];

    cart.forEach((i, idx) => {
        const name = pick(i, "name");
        const sz = sizeLabel(i);
        let line = (idx + 1) + ") " + name;
        if (sz) line += t("msgSize") + sz;
        line += " × " + i.qty;
        if (i.price !== null) line += " = " + formatPrice(i.price * i.qty);
        lines.push(line);
    });

    lines.push("");
    lines.push(t("msgTotal") + formatPrice(cartTotal()));
    return lines.join("\n");
}

function setupCart() {
    const nav = document.querySelector(".navbar");
    const cta = document.querySelector(".nav-cta");
    if (nav && !document.getElementById("cartBtn")) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.id = "cartBtn";
        btn.className = "cart-btn";
        btn.setAttribute("aria-controls", "cartDrawer");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("data-i18n-aria", "cart");
        btn.innerHTML = '<i class="fa-solid fa-basket-shopping"></i><span class="cart-badge" id="cartBadge" hidden>0</span>';
        btn.addEventListener("click", openCart);
        nav.insertBefore(btn, cta || null);
    }

    if (!document.getElementById("cartOverlay")) {
        const overlay = document.createElement("div");
        overlay.id = "cartOverlay";
        overlay.className = "cart-overlay";
        overlay.addEventListener("click", closeCart);

        const drawer = document.createElement("aside");
        drawer.id = "cartDrawer";
        drawer.className = "cart-drawer";
        drawer.setAttribute("aria-label", "cart");
        drawer.innerHTML =
            '<div class="cart-head"><h3 data-i18n="cartTitle"></h3>' +
            '<button type="button" class="cart-close" id="cartClose" data-i18n-aria="close"><i class="fa-solid fa-xmark"></i></button></div>' +
            '<div class="cart-items" id="cartItems"></div>' +
            '<div class="checkout-form" style="padding: 12px 18px; display: grid; gap: 8px; border-top: 1px solid var(--line);">' +
            '<input type="text" id="customer-name" placeholder="الاسم الثلاثي" required style="padding: 9px 14px; border-radius: 10px; border: 1px solid var(--line); background: var(--surface-2); color: var(--text); font-size: 13.5px; outline: none;">' +
            '<input type="tel" id="customer-phone" placeholder="رقم الموبايل (واتساب)" required style="padding: 9px 14px; border-radius: 10px; border: 1px solid var(--line); background: var(--surface-2); color: var(--text); font-size: 13.5px; outline: none;">' +
            '<textarea id="customer-address" placeholder="العنوان بالتفصيل (المحافظة، المدينة، الشارع، رقم الحائط)" rows="2" required style="padding: 9px 14px; border-radius: 10px; border: 1px solid var(--line); background: var(--surface-2); color: var(--text); font-size: 13.5px; outline: none; font-family: inherit; resize: none;"></textarea>' +
            '</div>' +
            '<div class="cart-foot" id="cartFoot">' +
            '<div class="cart-total"><span data-i18n="total"></span><strong id="cartTotal"></strong></div>' +
            '<p class="cart-note" id="cartNote" hidden data-i18n="noPriceNote"></p>' +
            '<a id="cartOrder" class="btn btn-gold btn-block" role="button"><i class="fa-brands fa-whatsapp"></i> <span data-i18n="sendOrder"></span></a>' +
            '<button type="button" class="cart-clear" id="cartClear" data-i18n="clearCart"></button>' +
            "</div>";
        document.body.append(overlay, drawer);

        drawer.querySelector("#cartClose").addEventListener("click", closeCart);
        drawer.querySelector("#cartClear").addEventListener("click", () => { cart = []; saveCart(); renderCart(); });
        
        drawer.querySelector("#cartOrder").addEventListener("click", (e) => {
            const msg = buildCartMessage();
            if (!msg) {
                e.preventDefault();
                return;
            }
            drawer.querySelector("#cartOrder").href = whatsappLink(msg);
        });

        document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCart(); });
        window.addEventListener("storage", (e) => { if (e.key === CART_KEY) { loadCart(); renderCart(); } });
    }

    loadCart();
}

function renderCart() {
    const list = document.getElementById("cartItems");
    if (!list) return;
    const count = cartCount();
    const badge = document.getElementById("cartBadge");
    if (badge) {
        badge.textContent = count > 99 ? "99+" : count;
        badge.hidden = count === 0;
    }

    list.innerHTML = "";
    const foot = document.getElementById("cartFoot");
    const formBlock = document.querySelector(".checkout-form");
    if (foot) foot.style.display = cart.length ? "" : "none";
    if (formBlock) formBlock.style.display = cart.length ? "grid" : "none";

    if (!cart.length) {
        const empty = document.createElement("div");
        empty.className = "cart-empty";
        empty.innerHTML = '<i class="fa-solid fa-basket-shopping"></i>';
        const p = document.createElement("p");
        p.textContent = t("cartEmpty");
        empty.appendChild(p);
        list.appendChild(empty);
        return;
    }

    cart.forEach((item) => {
        const row = document.createElement("div");
        row.className = "cart-item";

        const img = document.createElement("img");
        img.src = safeImage(item.image);
        img.alt = pick(item, "name");
        img.addEventListener("error", () => { img.src = PLACEHOLDER_IMG; }, { once: true });

        const info = document.createElement("div");
        info.className = "cart-item-info";
        const nm = document.createElement("div");
        nm.className = "cart-item-name";
        nm.textContent = pick(item, "name");
        info.appendChild(nm);
        const sz = sizeLabel(item);
        if (sz) {
            const s = document.createElement("div");
            s.className = "cart-item-size";
            s.textContent = sz;
            info.appendChild(s);
        }
        const pr = document.createElement("div");
        pr.className = "cart-item-price";
        pr.textContent = item.price !== null ? formatPrice(item.price * item.qty) : t("askPrice");
        info.appendChild(pr);

        const qty = document.createElement("div");
        qty.className = "qty";
        const mk = (cls, icon, label, fn) => {
            const b = document.createElement("button");
            b.type = "button";
            b.className = cls;
            b.setAttribute("aria-label", label);
            b.innerHTML = '<i class="fa-solid ' + icon + '"></i>';
            b.addEventListener("click", fn);
            return b;
        };
        const num = document.createElement("span");
        num.textContent = item.qty;
        qty.append(
            mk("qty-btn", "fa-minus", t("dec"), () => {
                if (item.qty > 1) item.qty--;
                else cart = cart.filter((x) => x !== item);
                saveCart(); renderCart();
            }),
            num,
            mk("qty-btn", "fa-plus", t("inc"), () => { item.qty = Math.min(99, item.qty + 1); saveCart(); renderCart(); })
        );

        const del = mk("cart-del", "fa-trash-can", t("remove"), () => { cart = cart.filter((x) => x !== item); saveCart(); renderCart(); });

        const side = document.createElement("div");
        side.className = "cart-item-side";
        side.append(del, qty);

        row.append(img, info, side);
        list.appendChild(row);
    });

    const totalEl = document.getElementById("cartTotal");
    if (totalEl) totalEl.textContent = formatPrice(cartTotal());
    const noteEl = document.getElementById("cartNote");
    if (noteEl) noteEl.hidden = !cart.some((i) => i.price === null);
}

let allProducts = [];
let activeFilter = "all";
let searchTerm = "";

const I18N_DEFAULT = JSON.parse(JSON.stringify(I18N));

function applySiteSettings(s) {
    ["ar", "en"].forEach((l) => { I18N[l] = JSON.parse(JSON.stringify(I18N_DEFAULT[l])); });
    WHATSAPP_NUMBER = DEFAULT_WHATSAPP;
    if (!s || typeof s !== "object") return;
    ["ar", "en"].forEach((l) => {
        const texts = (s.texts && s.texts[l]) || {};
        Object.keys(texts).forEach((k) => { if (texts[k]) I18N[l][k] = texts[k]; });
        const ads = s.ads && s.ads[l];
        if (Array.isArray(ads) && ads.length) I18N[l].ads = ads;
    });
    if (s.whatsapp) WHATSAPP_NUMBER = String(s.whatsapp).replace(/\D/g, "") || DEFAULT_WHATSAPP;
}

async function loadSiteSettings() {
    try { applySiteSettings(JSON.parse(localStorage.getItem(SETTINGS_CACHE) || "null")); } catch (e) {}
    try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 8000);
        const res = await fetch(SETTINGS_URL, { signal: controller.signal });
        clearTimeout(timer);
        if (!res.ok) return;
        const s = await res.json();
        applySiteSettings(s);
        try { localStorage.setItem(SETTINGS_CACHE, JSON.stringify(s)); } catch (e) {}
        applyLang();
    } catch (e) { console.warn("settings load failed", e); }
}

document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
    setupCart();
    loadSiteSettings();
    applyLang();
    setupCustomCursor();
    initReviews();
    if (document.getElementById("productsContainer")) initStore();
    if (document.getElementById("detailTitle")) {
        loadProduct();
        setupProductCheckoutForm();
    }
});

/* ===== حركة مؤشر الماوس المخصص ===== */
function setupCustomCursor() {
    document.addEventListener('mousemove', (e) => {
        const cursor = document.getElementById('customCursor');
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });

    document.addEventListener('mouseover', (e) => {
        const cursor = document.getElementById('customCursor');
        if (!cursor) return;
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a')) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.4)';
            cursor.style.backgroundColor = 'rgba(168, 136, 74, 0.15)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        const cursor = document.getElementById('customCursor');
        if (!cursor) return;
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a')) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'rgba(168, 136, 74, 0.05)';
        }
    });
}

function initStore() {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilter = btn.dataset.filter;
            renderProducts();
        });
    });

    const search = document.getElementById("searchInput");
    if (search) {
        let timer;
        search.addEventListener("input", () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                searchTerm = search.value.trim().toLowerCase();
                renderProducts();
            }, 200);
        });
    }
    loadProducts();
}

function showSkeleton(container) {
    container.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        const s = document.createElement("div");
        s.className = "skeleton-card";
        container.appendChild(s);
    }
}

async function loadProducts() {
    const container = document.getElementById("productsContainer");
    if (!container) return;
    rerender = null;
    showSkeleton(container);
    try {
        allProducts = await fetchProducts();
        rerender = renderProducts;
        renderProducts();
    } catch (err) {
        console.error("Error loading products:", err);
        container.innerHTML = "";
        const box = document.createElement("div");
        box.className = "error-state";
        const msg = document.createElement("p");
        msg.textContent = t("loadFail");
        const retry = document.createElement("button");
        retry.textContent = t("retry");
        retry.addEventListener("click", loadProducts);
        box.append(msg, retry);
        container.appendChild(box);
        rerender = () => {
            msg.textContent = t("loadFail");
            retry.textContent = t("retry");
        };
    }
}

function renderProducts() {
    const container = document.getElementById("productsContainer");
    if (!container) return;
    container.innerHTML = "";

    const list = allProducts.filter((p) => {
        const okCat = activeFilter === "all" || normalizeCategory(p.category) === activeFilter;
        const names = (String(p.name || "") + " " + String(p.name_en || "")).toLowerCase();
        return okCat && (!searchTerm || names.includes(searchTerm));
    });

    if (list.length === 0) {
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.textContent = allProducts.length === 0 ? t("noProducts") : t("noMatch");
        container.appendChild(empty);
        return;
    }
    list.forEach((p, i) => container.appendChild(createCard(p, i)));
}

function createCard(product, index) {
    const name = pick(product, "name") || "—";
    const url = productUrl(productKey(product));
    const sizes = normalizeSizes(product);
    const prices = sizes.map((s) => s.price).filter((p) => p !== null);

    const card = document.createElement("article");
    card.className = "product-card";
    card.style.setProperty("--i", Math.min(index, 8));

    const imgWrap = document.createElement("a");
    imgWrap.className = "product-img-wrap";
    imgWrap.href = url;

    const img = document.createElement("img");
    img.src = getImages(product)[0];
    img.alt = name;
    img.loading = "lazy";
    img.addEventListener("error", () => { img.src = PLACEHOLDER_IMG; }, { once: true });

    const badge = document.createElement("span");
    badge.className = "product-badge";
    badge.textContent = categoryLabel(product.category);
    imgWrap.append(img, badge);

    const body = document.createElement("div");
    body.className = "product-body";

    const title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = name;
    body.appendChild(title);

    if (prices.length) {
        const cheapest = sizes.filter((x) => x.price !== null).sort((a, b) => a.price - b.price)[0];
        const priceBox = document.createElement("div");
        priceBox.className = "product-price";
        if (sizes.length > 1) {
            const from = document.createElement("span");
            from.className = "price-from";
            from.textContent = t("startsFrom");
            priceBox.appendChild(from);
        }
        const line = document.createElement("div");
        line.className = "price-line";
        fillPrice(line, cheapest);
        priceBox.appendChild(line);
        body.appendChild(priceBox);
        const pct = discountPct(cheapest);
        if (pct > 0) {
            const off = document.createElement("span");
            off.className = "product-discount";
            off.textContent = (LANG === "ar" ? "خصم " : "") + pct + "%" + (LANG === "ar" ? "" : " OFF");
            imgWrap.appendChild(off);
        }
    }

    let sizeSelect = null;
    if (sizes.length > 1) {
        sizeSelect = document.createElement("select");
        sizeSelect.className = "card-size";
        sizeSelect.setAttribute("aria-label", t("sizeSel"));
        sizes.forEach((s, i) => {
            const o = document.createElement("option");
            o.value = i;
            o.textContent = sizeLabel(s) + (s.price !== null ? " - " + formatPrice(s.price) : "");
            sizeSelect.appendChild(o);
        });
        body.appendChild(sizeSelect);
    }

    const add = document.createElement("button");
    add.type = "button";
    add.className = "btn-add";
    add.innerHTML = '<i class="fa-solid fa-basket-shopping"></i> ';
    add.appendChild(document.createTextNode(t("addToCart")));
    add.addEventListener("click", () => {
        const chosen = sizes.length ? sizes[sizeSelect ? Number(sizeSelect.value) : 0] : null;
        addToCart(product, chosen);
    });

    const more = document.createElement("a");
    more.className = "btn-details";
    more.href = url;
    more.textContent = t("details");

    card.append(imgWrap, body, add, more);
    return card;
}

let selectedSizeIndex = 0;
let currentProductForOrder = null;
let currentSelectedSizeForOrder = null;

function setupProductCheckoutForm() {
    const actionsBlock = document.querySelector(".detail-actions");
    if (!actionsBlock) return;

    const formDiv = document.createElement("div");
    formDiv.className = "product-checkout-form";
    formDiv.style.cssText = "display: grid; gap: 8px; width: 100%; margin-bottom: 10px;";
    formDiv.innerHTML = `
        <input type="text" id="prod-customer-name" placeholder="الاسم الثلاثي" required style="padding: 10px 14px; border-radius: 10px; border: 1px solid var(--line); background: var(--surface-2); color: var(--text); font-size: 14px; outline: none; width: 100%;">
        <input type="tel" id="prod-customer-phone" placeholder="رقم الموبايل (واتساب)" required style="padding: 10px 14px; border-radius: 10px; border: 1px solid var(--line); background: var(--surface-2); color: var(--text); font-size: 14px; outline: none; width: 100%;">
        <textarea id="prod-customer-address" placeholder="العنوان بالتفصيل (المحافظة، المدينة، الشارع، رقم الحائط)" rows="2" required style="padding: 10px 14px; border-radius: 10px; border: 1px solid var(--line); background: var(--surface-2); color: var(--text); font-size: 14px; outline: none; width: 100%; font-family: inherit; resize: none;"></textarea>
    `;
    actionsBlock.parentNode.insertBefore(formDiv, actionsBlock);

    const orderBtn = document.getElementById("orderBtn");
    if (orderBtn) {
        orderBtn.addEventListener("click", (e) => {
            const name = document.getElementById("prod-customer-name")?.value.trim() || "";
            const phone = document.getElementById("prod-customer-phone")?.value.trim() || "";
            const address = document.getElementById("prod-customer-address")?.value.trim() || "";

            if (!name || !phone || !address) {
                e.preventDefault();
                alert("من فضلك أدخل الاسم، رقم التليفون، والعنوان بالتفصيل لإتمام الطلب.");
                return;
            }

            if (currentProductForOrder) {
                const productName = pick(currentProductForOrder, "name");
                const selected = currentSelectedSizeForOrder;
                const hasPrice = selected && selected.price !== null;

                let msg = [
                    "🌿 *طلب جديد لمنتج منفرد من المتجر* 🌿",
                    "",
                    `👤 *الاسم:* ${name}`,
                    `📱 *رقم التليفون:* ${phone}`,
                    `📍 *العنوان:* ${address}`,
                    "",
                    t("msgOrder") + productName
                ];

                if (selected && sizeLabel(selected)) {
                    msg.push(t("msgSize") + sizeLabel(selected));
                }
                if (hasPrice) {
                    msg.push(t("msgPrice") + formatPrice(selected.price));
                }

                orderBtn.href = whatsappLink(msg.join("\n"));
            }
        });
    }
}

function showMessage(titleKey, textKey) {
    rerender = () => showMessage(titleKey, textKey);
    const titleEl = document.getElementById("detailTitle");
    if (titleEl) titleEl.textContent = t(titleKey);
    const descEl = document.getElementById("detailDesc");
    if (descEl) descEl.textContent = t(textKey);
    const catEl = document.getElementById("detailCat");
    if (catEl) catEl.textContent = "";
    const priceEl = document.getElementById("detailPrice");
    if (priceEl) priceEl.textContent = "";
    const thumbsEl = document.getElementById("detailThumbs");
    if (thumbsEl) thumbsEl.innerHTML = "";
    const sizesEl = document.getElementById("sizesBlock");
    if (sizesEl) sizesEl.style.display = "none";
    const orderEl = document.getElementById("orderBtn");
    if (orderEl) orderEl.style.display = "none";
    const addEl = document.getElementById("addBtn");
    if (addEl) addEl.style.display = "none";
}

async function loadProduct() {
    const $ = (id) => document.getElementById(id);
    const img = $("detailImg");
    if (img) img.src = PLACEHOLDER_IMG;
    const title = $("detailTitle");
    if (title) title.textContent = t("loading");

    const name = (new URLSearchParams(window.location.search).get("name") || "").trim();
    if (!name) return showMessage("noSel", "noSelT");

    try {
        const products = await fetchProducts();
        const product = products.find((p) => productKey(p) === name);
        if (!product) return showMessage("nf", "nfT");
        rerender = () => renderProduct(product);
        renderProduct(product);
    } catch (err) {
        console.error(err);
        showMessage("lf", "lfT");
    }
}

function renderProduct(product) {
    currentProductForOrder = product;
    const $ = (id) => document.getElementById(id);
    const name = pick(product, "name");

    document.title = name + " | ORGANIC Smile";
    const titleEl = $("detailTitle");
    if (titleEl) titleEl.textContent = name;
    const catEl = $("detailCat");
    if (catEl) catEl.textContent = categoryLabel(product.category);
    const descEl = $("detailDesc");
    if (descEl) descEl.textContent = pick(product, "description") || t("defDesc");

    const images = getImages(product);
    const main = $("detailImg");
    if (main) {
        main.alt = name;
        main.src = images[0];
        main.addEventListener("error", () => { main.src = PLACEHOLDER_IMG; }, { once: true });
    }

    const thumbs = $("detailThumbs");
    if (thumbs) {
        thumbs.innerHTML = "";
        if (images.length > 1) {
            images.forEach((src, i) => {
                const th = document.createElement("img");
                th.src = src;
                th.alt = name + " " + (i + 1);
                if (i === 0) th.classList.add("active");
                th.addEventListener("click", () => {
                    if (main) main.src = src;
                    thumbs.querySelectorAll("img").forEach((x) => x.classList.remove("active"));
                    th.classList.add("active");
                });
                thumbs.appendChild(th);
            });
        }
    }

    const sizes = normalizeSizes(product);
    if (selectedSizeIndex >= sizes.length) selectedSizeIndex = 0;
    const showSizes = sizes.some((s) => s.size || s.size_en);

    function update() {
        const selected = sizes[selectedSizeIndex] || null;
        currentSelectedSizeForOrder = selected;
        const hasPrice = selected && selected.price !== null;
        const priceEl = $("detailPrice");
        if (priceEl) {
            fillPrice(priceEl, hasPrice ? selected : null);
            const pct = discountPct(selected);
            if (pct > 0) {
                const b = document.createElement("span");
                b.className = "detail-discount";
                b.textContent = (LANG === "ar" ? "وفّر " : "Save ") + pct + "%";
                priceEl.appendChild(b);
            }
        }

        const addBtn = $("addBtn");
        if (addBtn) addBtn.onclick = () => addToCart(product, selected);
    }

    const sizesBlock = $("sizesBlock");
    if (sizesBlock) sizesBlock.style.display = showSizes ? "" : "none";
    if (showSizes) {
        const box = $("detailSizes");
        if (box) {
            box.innerHTML = "";
            sizes.forEach((s, i) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "size-btn" + (i === selectedSizeIndex ? " active" : "");
                btn.textContent = sizeLabel(s) + (s.price !== null ? " - " + formatPrice(s.price) : "");
                btn.addEventListener("click", () => {
                    box.querySelectorAll(".size-btn").forEach((b) => b.classList.remove("active"));
                    btn.classList.add("active");
                    selectedSizeIndex = i;
                    update();
                });
                box.appendChild(btn);
            });
        }
    }

    update();
    const orderBtn = $("orderBtn");
    if (orderBtn) orderBtn.style.display = "inline-flex";
    const addBtn = $("addBtn");
    if (addBtn) addBtn.style.display = "inline-flex";
}

/* =========================================================
   آراء العملاء والتقييمات
   ========================================================= */
let reviewsShown = 6;

function reviewStars(n) {
    let out = "";
    for (let i = 1; i <= 5; i++) out += '<span class="st' + (i <= Math.round(n) ? " on" : "") + '">★</span>';
    return out;
}

function validReviews() {
    const list = (Array.isArray(REVIEWS) ? REVIEWS : []).filter(
        (r) => r && r.name && r.text && Number(r.rating) >= 1 && Number(r.rating) <= 5
    );
    // التعليقات المثبّتة أولًا، وباقي الترتيب زي ما هو
    return list.filter((r) => r.pinned).concat(list.filter((r) => !r.pinned));
}

function fmtReviewDate(d) {
    const dt = new Date(d);
    if (!d || isNaN(dt)) return "";
    try {
        return dt.toLocaleDateString(LANG === "ar" ? "ar-EG-u-nu-latn" : "en-GB", { year: "numeric", month: "long" });
    } catch (e) { return ""; }
}

function renderReviews() {
    const grid = document.getElementById("reviewsGrid");
    if (!grid) return;
    const summary = document.getElementById("reviewsSummary");
    const moreBtn = document.getElementById("reviewsMore");
    const list = validReviews();
    grid.innerHTML = "";

    if (!list.length) {
        summary.hidden = true;
        moreBtn.hidden = true;
        const empty = document.createElement("div");
        empty.className = "reviews-empty";
        empty.innerHTML = '<div class="reviews-empty-ico" aria-hidden="true">★</div><h3></h3><p></p>';
        empty.querySelector("h3").textContent = t("rvEmptyTitle");
        empty.querySelector("p").textContent = t("rvEmptyP");
        grid.appendChild(empty);
        return;
    }

    const total = list.length;
    const avg = list.reduce((a, r) => a + Number(r.rating), 0) / total;
    const counts = [0, 0, 0, 0, 0, 0];
    list.forEach((r) => counts[Math.round(Number(r.rating))]++);
    let bars = "";
    for (let s = 5; s >= 1; s--) {
        bars += '<div class="rs-row"><span class="rs-lbl">' + s + ' <span class="st on">★</span></span>' +
            '<div class="rs-bar"><i style="width:' + Math.round((counts[s] / total) * 100) + '%"></i></div>' +
            '<span class="rs-n">' + counts[s] + "</span></div>";
    }
    summary.innerHTML =
        '<div class="rs-score"><div class="rs-num">' + avg.toFixed(1) + "</div>" +
        '<div class="rs-stars">' + reviewStars(avg) + "</div>" +
        '<div class="rs-count">' + t("rvBased").replace("{n}", total) + "</div></div>" +
        '<div class="rs-bars">' + bars + "</div>";
    summary.hidden = false;

    list.slice(0, reviewsShown).forEach((r) => {
        const card = document.createElement("article");
        card.className = "review-card" + (r.pinned ? " pinned" : "");
        card.innerHTML =
            (r.pinned ? '<div class="review-pin"><i class="fa-solid fa-thumbtack"></i> ' + t("rvPinned") + "</div>" : "") +
            '<div class="review-top"><div class="review-avatar"></div>' +
            '<div class="review-who"><strong></strong><span></span></div></div>' +
            '<div class="review-stars" role="img"></div>' +
            '<p class="review-text"></p>' +
            '<div class="review-meta"><span class="review-product"></span><time></time></div>';
        const name = String(r.name).trim();
        card.querySelector(".review-avatar").textContent = Array.from(name)[0] || "";
        card.querySelector(".review-who strong").textContent = name;
        card.querySelector(".review-who span").textContent = r.city || "";
        const stars = card.querySelector(".review-stars");
        stars.innerHTML = reviewStars(r.rating);
        stars.setAttribute("aria-label", r.rating + " / 5");
        card.querySelector(".review-text").textContent = pick(r, "text");
        const prod = pick(r, "product");
        const prodEl = card.querySelector(".review-product");
        if (prod) { prodEl.textContent = prod; } else { prodEl.remove(); }
        card.querySelector("time").textContent = fmtReviewDate(r.date);
        grid.appendChild(card);
    });

    moreBtn.textContent = t("rvMore");
    moreBtn.hidden = reviewsShown >= total;
}

function initReviews() {
    const grid = document.getElementById("reviewsGrid");
    if (!grid) return;
    renderReviews();

    const moreBtn = document.getElementById("reviewsMore");
    moreBtn.addEventListener("click", () => { reviewsShown += 6; renderReviews(); });

    const form = document.getElementById("reviewForm");
    const stars = Array.from(form.querySelectorAll(".rf-star"));
    const hint = document.getElementById("rvHint");
    let value = 0;
    const paint = (n) => stars.forEach((b, i) => b.classList.toggle("on", i < n));
    stars.forEach((b, i) => {
        b.addEventListener("click", () => { value = i + 1; paint(value); hint.hidden = true; });
        b.addEventListener("mouseenter", () => paint(i + 1));
    });
    form.querySelector(".rf-stars").addEventListener("mouseleave", () => paint(value));

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!value) { hint.hidden = false; return; }
        const name = document.getElementById("rvName").value.trim();
        const product = document.getElementById("rvProduct").value.trim();
        const text = document.getElementById("rvText").value.trim();
        if (!name || !text) return;
        const lines = [t("rvMsgHead"), "", t("rvMsgName") + ": " + name];
        if (product) lines.push(t("rvMsgProduct") + ": " + product);
        lines.push(t("rvMsgRating") + ": " + value + "/5", t("rvMsgComment") + ": " + text);
        window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
        showToast(t("rvSent"));
        form.reset();
        value = 0;
        paint(0);
    });
}
