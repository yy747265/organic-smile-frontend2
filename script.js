/* =========================================================
   ORGANIC Smile — script.js (الصفحة العامة - النسخة المتوافقة تماماً مع الأدمن)
   ========================================================= */

const API_URL = "https://organic-smile-public-api.vercel.app/api/products";
let WHATSAPP_NUMBER = "201061429669";
const DEFAULT_WHATSAPP = WHATSAPP_NUMBER;
const SETTINGS_URL = "https://organic-smile-public-api.vercel.app/api/settings";
const SETTINGS_CACHE = "os_site_settings";

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
                out.push({ size: String(item.size || ""), size_en: String(item.size_en || ""), price: isNaN(p) ? null : p });
            } else if (item) {
                out.push({ size: String(item), size_en: "", price: null });
            }
        });
    }
    if (out.length === 0 && product.price) {
        const p = parseFloat(product.price);
        if (!isNaN(p)) out.push({ size: "", size_en: "", price: p });
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
    if (document.getElementById("productsContainer")) initStore();
    if (document.getElementById("detailTitle")) loadProduct();
});

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
        const priceBox = document.createElement("div");
        priceBox.className = "product-price";
        if (sizes.length > 1) priceBox.appendChild(document.createTextNode(t("startsFrom") + " "));
        const strong = document.createElement("strong");
        strong.textContent = formatPrice(Math.min(...prices));
        priceBox.appendChild(strong);
        body.appendChild(priceBox);
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
        const hasPrice = selected && selected.price !== null;
        const priceEl = $("detailPrice");
        if (priceEl) priceEl.textContent = hasPrice ? formatPrice(selected.price) : t("askPrice");

        let msg = t("msgOrder") + name;
        if (selected && sizeLabel(selected)) msg += t("msgSize") + sizeLabel(selected);
        if (hasPrice) msg += t("msgPrice") + formatPrice(selected.price);
        const orderBtn = $("orderBtn");
        if (orderBtn) orderBtn.href = whatsappLink(msg);
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
