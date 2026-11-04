const PUBLIC_API_URL = "https://organic-smile-public-api.vercel.app/api/products";
let allProducts = [];

document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
});

async function fetchProducts() {
    const container = document.getElementById("productsContainer");
    if (!container) return;

    try {
        const response = await fetch(PUBLIC_API_URL);
        allProducts = await response.json();

        if (!Array.isArray(allProducts) || allProducts.length === 0) {
            container.innerHTML = "<p style='text-align:center; color:var(--text-muted); grid-column: 1/-1; padding:40px;'>لا توجد منتجات متاحة حالياً.</p>";
            return;
        }

        renderProducts(allProducts, container);
        setupFilters(container);

    } catch (error) {
        console.error("Error loading products:", error);
        container.innerHTML = "<p style='text-align:center; color:#ff6b6f; grid-column: 1/-1; padding:30px;'>تعذر تحميل المنتجات أونلاين. يرجى التحديث.</p>";
    }
}

function renderProducts(productsToRender, container) {
    container.innerHTML = "";

    if (productsToRender.length === 0) {
        container.innerHTML = "<p style='text-align:center; color:var(--text-muted); grid-column: 1/-1; padding:30px;'>لا توجد منتجات في هذا القسم.</p>";
        return;
    }

    productsToRender.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        let imgSrc = "https://via.placeholder.com/300x200/141412/C9A961?text=ORGANIC+Smile";
        if (product.images && product.images.length > 0 && product.images[0]) {
            imgSrc = product.images[0];
        }

        let priceDisplay = "0 ج.م";
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

        let catTitle = (product.category === 'dried' || product.category === 'فواكه مجففة') ? 'فواكه مجففة' : 'بودر طبيعي';

        card.innerHTML = `
            <div>
                <div class="product-img-wrap">
                    <img src="${imgSrc}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200/141412/C9A961?text=ORGANIC+Smile'">
                </div>
                <span class="product-cat">${catTitle}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${priceDisplay}</div>
            </div>
            <a href="product.html?name=${encodeURIComponent(product.name)}" class="btn-details">عرض التفاصيل</a>
        `;

        container.appendChild(card);
    });
}

function setupFilters(container) {
    const btns = document.querySelectorAll(".filter-btn");
    btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            btns.forEach(b => b.classList.remove("active"));
            e.currentTarget.classList.add("active");
            
            const filterType = e.currentTarget.getAttribute("data-filter");
            if (filterType === "all") {
                renderProducts(allProducts, container);
            } else if (filterType === "dried") {
                renderProducts(allProducts.filter(p => p.category === "dried" || p.category === "فواكه مجففة"), container);
            } else if (filterType === "powder") {
                renderProducts(allProducts.filter(p => p.category === "powder" || p.category === "بودر طبيعي"), container);
            }
        });
    });
}
