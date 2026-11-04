/* =========================================================
   ORGANIC Smile — script.js
   ========================================================= */

// ===== الإعدادات (غيّرهم هنا بس) =====
const API_URL = "https://organic-smile-public-api.vercel.app/api/products";
// رقم الواتساب بصيغة دولية بدون + ولا أصفار، مثال: 201001234567
const WHATSAPP_NUMBER = "20XXXXXXXXXX";

// ===== دوال مساعدة (بتستخدمها صفحة المنتج كمان) =====
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

// يسمح بس بصور http/https أو data:image
function safeImage(src) {
    if (typeof src === "string" && /^(https?:\/\/|data:image\/)/i.test(src.trim())) {
        return src.trim();
    }
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
    if (["dried", "فواكه مجففة", "فواكه مجففه"].includes(v)) return "dried";
    if (["powder", "بودر طبيعي", "بودر"].includes(v)) return "powder";
    return "other";
}

function categoryLabel(c) {
    const k = normalizeCategory(c);
    if (k === "dried") return "فواكه مجففة";
    if (k === "powder") return "بودر طبيعي";
    return "منتج طبيعي";
}

// يرجع قائمة موحدة: [{ size: "250 جم", price: 120 }]
function normalizeSizes(product) {
    const out = [];
    if (Array.isArray(product.sizes)) {
        product.sizes.forEach((item) => {
            if (item && typeof item === "object") {
                const p = parseFloat(item.price);
                out.push({ size: String(item.size || ""), price: isNaN(p) ? null : p });
            } else if (item) {
                out.push({ size: String(item), price: null });
            }
        });
    }
    if (out.length === 0 && product.price) {
        const p = parseFloat(product.price);
        if (!isNaN(p)) out.push({ size: "", price: p });
    }
    return out;
}

function formatPrice(n) {
    return Number(n).toLocaleString("en-US") + " ج.م";
}

function productUrl(name) {
    return "product.html?name=" + encodeURIComponent(name);
}

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

// ===== القائمة في الموبايل + رقم الواتساب =====
function setupMenu() {
    const toggle = document.getElementById("menuToggle");
    const links = document.getElementById("navLinks");
    if (!toggle || !links) return;
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => links.classList.remove("open"))
    );
}

function applyWhatsapp() {
    document.querySelectorAll("#whatsappBtn").forEach((a) => {
        a.href = whatsappLink("مرحباً، أريد الاستفسار عن منتجاتكم");
    });
}

// ===== المتجر (الصفحة الرئيسية) =====
let allProducts = [];
let activeFilter = "all";
let searchTerm = "";

document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
    applyWhatsapp();
    if (document.getElementById("productsContainer")) initStore();
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
        let t;
        search.addEventListener("input", () => {
            clearTimeout(t);
            t = setTimeout(() => {
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
    showSkeleton(container);
    try {
        allProducts = await fetchProducts();
        renderProducts();
    } catch (err) {
        console.error("Error loading products:", err);
        container.innerHTML = "";
        const box = document.createElement("div");
        box.className = "error-state";
        const msg = document.createElement("p");
        msg.textContent = "تعذر تحميل المنتجات. تأكد من الاتصال وحاول مرة أخرى.";
        const retry = document.createElement("button");
        retry.textContent = "إعادة المحاولة";
        retry.addEventListener("click", loadProducts);
        box.append(msg, retry);
        container.appendChild(box);
    }
}

function renderProducts() {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";

    const list = allProducts.filter((p) => {
        const okCat = activeFilter === "all" || normalizeCategory(p.category) === activeFilter;
        const okSearch = !searchTerm || String(p.name || "").toLowerCase().includes(searchTerm);
        return okCat && okSearch;
    });

    if (list.length === 0) {
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.textContent =
            allProducts.length === 0
                ? "لا توجد منتجات متاحة حالياً."
                : "لا توجد منتجات مطابقة للبحث.";
        container.appendChild(empty);
        return;
    }

    list.forEach((p, i) => container.appendChild(createCard(p, i)));
}

function createCard(product, index) {
    const name = String(product.name || "منتج");
    const sizes = normalizeSizes(product);
    const prices = sizes.map((s) => s.price).filter((p) => p !== null);

    const card = document.createElement("article");
    card.className = "product-card";
    card.style.setProperty("--i", Math.min(index, 8));

    const imgWrap = document.createElement("a");
    imgWrap.className = "product-img-wrap";
    imgWrap.href = productUrl(name);

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
        if (sizes.length > 1) priceBox.appendChild(document.createTextNode("يبدأ من"));
        const strong = document.createElement("strong");
        strong.textContent = formatPrice(Math.min(...prices));
        priceBox.appendChild(strong);
        body.appendChild(priceBox);
    }

    const more = document.createElement("a");
    more.className = "btn-details";
    more.href = productUrl(name);
    more.textContent = "عرض التفاصيل";

    card.append(imgWrap, body, more);
    return card;
}
