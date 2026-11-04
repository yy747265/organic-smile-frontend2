const PUBLIC_API_URL = "https://organic-smile-public-api.vercel.app/api/products";

let allProducts = [];

document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
});

async function fetchProducts() {
    // يبحث عن الحاوية سواء كانت باسم productsContainer أو productsList أو أي كلاس شائعة
    const container = document.getElementById("productsContainer") || 
                      document.getElementById("productsList") || 
                      document.querySelector(".products-grid");
                      
    if (!container) return;

    try {
        const response = await fetch(PUBLIC_API_URL);
        allProducts = await response.json();

        if (!Array.isArray(allProducts) || allProducts.length === 0) {
            container.innerHTML = "<p style='text-align:center; color:#9b9686; grid-column: 1/-1; padding: 40px;'>لا توجد منتجات متاحة حالياً.</p>";
            return;
        }

        renderProducts(allProducts, container);
        setupCategoryFilters(container);

    } catch (error) {
        console.error("Error loading products:", error);
        container.innerHTML = "<p style='text-align:center; color:#ff6b6f; grid-column: 1/-1;'>تعذر تحميل المنتجات. يرجى إعادة تحديث الصفحة.</p>";
    }
}

function renderProducts(productsToRender, container) {
    container.innerHTML = "";
    
    if (productsToRender.length === 0) {
        container.innerHTML = "<p style='text-align:center; color:#9b9686; grid-column: 1/-1; padding: 30px;'>لا توجد منتجات في هذا القسم.</p>";
        return;
    }

    productsToRender.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        // 1. معالجة الصورة
        let imgSrc = "images/default.jpg";
        if (product.images && product.images.length > 0 && product.images[0]) {
            imgSrc = product.images[0];
        }

        // 2. معالجة السعر والأحجام
        let priceDisplay = "";
        if (Array.isArray(product.sizes) && product.sizes.length > 0) {
            const firstSize = product.sizes[0];
            if (typeof firstSize === 'object' && firstSize !== null) {
                priceDisplay = `${firstSize.price || ''} ج.م`;
            } else {
                priceDisplay = firstSize;
            }
        } else if (product.price) {
            priceDisplay = `${product.price} ج.م`;
        }

        // 3. معالجة اسم القسم بالعربي
        let categoryName = "فواكه مجففة";
        if (product.category === "powder" || product.category === "بودر طبيعي") {
            categoryName = "بودر طبيعي";
        }

        card.innerHTML = `
            <div class="product-img-wrap" style="overflow:hidden; border-radius:12px;">
                <img src="${imgSrc}" alt="${product.name}" style="width:100%; height:220px; object-fit:cover;" onerror="this.src='https://via.placeholder.com/300x200?text=ORGANIC+Smile'">
            </div>
            <div class="product-info" style="padding:15px 5px;">
                <span class="product-cat" style="color:#C9A961; font-size:13px; font-weight:bold;">${categoryName}</span>
                <h3 class="product-title" style="margin:6px 0; font-size:18px;">${product.name}</h3>
                <div class="product-price" style="font-weight:bold; font-size:16px; margin-bottom:12px;">${priceDisplay}</div>
                <a href="product.html?name=${encodeURIComponent(product.name)}" class="btn-details" style="display:inline-block; padding:8px 16px; background:#C9A961; color:#000; border-radius:999px; text-decoration:none; font-weight:bold;">عرض التفاصيل</a>
            </div>
        `;

        container.appendChild(card);
    });
}

// أزرار الفلترة (جميع المنتجات / فواكه مجففة / بودر طبيعي)
function setupCategoryFilters(container) {
    const filterButtons = document.querySelectorAll(".filter-btn, .category-btn, button[data-filter]");
    if (!filterButtons.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            e.currentTarget.classList.add("active");

            const filterText = e.currentTarget.textContent.trim();

            if (filterText.includes("جميع") || filterText.includes("All")) {
                renderProducts(allProducts, container);
            } else if (filterText.includes("مجففة") || filterText.includes("dried")) {
                const filtered = allProducts.filter(p => p.category === "dried" || p.category === "فواكه مجففة");
                renderProducts(filtered, container);
            } else if (filterText.includes("بودر") || filterText.includes("powder")) {
                const filtered = allProducts.filter(p => p.category === "powder" || p.category === "بودر طبيعي");
                renderProducts(filtered, container);
            }
        });
    });
}
