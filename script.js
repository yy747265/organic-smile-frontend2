const PUBLIC_API_URL = "https://organic-smile-public-api.vercel.app/api/products";
let allProducts = [];

document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
});

async function fetchProducts() {
    const container = document.getElementById("productsContainer") || 
                      document.getElementById("productsList") || 
                      document.querySelector(".products-grid");

    if (!container) return;

    try {
        const response = await fetch(PUBLIC_API_URL);
        allProducts = await response.json();

        if (!Array.isArray(allProducts) || allProducts.length === 0) {
            container.innerHTML = "<p style='text-align:center; color:#9b9686; width:100%; padding:40px; grid-column: 1/-1;'>لا توجد منتجات متاحة حالياً.</p>";
            return;
        }

        renderProducts(allProducts, container);
        setupFilters(container);

    } catch (error) {
        console.error("Error loading products:", error);
        container.innerHTML = "<p style='text-align:center; color:#ff6b6f; width:100%; padding:30px; grid-column: 1/-1;'>تعذر تحميل المنتجات أونلاين.</p>";
    }
}

function renderProducts(productsToRender, container) {
    // جعل المنتجات تظهر جنب بعض في شبكة (Grid)
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(auto-fill, minmax(240px, 1fr))";
    container.style.gap = "20px";
    container.style.marginTop = "30px";
    container.style.width = "100%";

    container.innerHTML = "";

    if (productsToRender.length === 0) {
        container.innerHTML = "<p style='text-align:center; color:#9b9686; grid-column: 1/-1; padding:30px;'>لا توجد منتجات في هذا القسم.</p>";
        return;
    }

    productsToRender.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.style.cssText = "background: #151513; border: 1px solid rgba(201,169,97,0.22); border-radius: 16px; padding: 16px; text-align: center; color: #fff; display: flex; flex-direction: column; justify-content: space-between;";

        let imgSrc = "https://via.placeholder.com/300x200?text=ORGANIC+Smile";
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
                <div style="width:100%; height:180px; overflow:hidden; border-radius:12px; margin-bottom:12px;">
                    <img src="${imgSrc}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='https://via.placeholder.com/300x200?text=ORGANIC+Smile'">
                </div>
                <span style="color:#C9A961; font-size:12px; font-weight:bold;">${catTitle}</span>
                <h3 style="margin:8px 0; font-size:18px; color:#f4f1ea;">${product.name}</h3>
                <div style="color:#E5C78B; font-weight:bold; font-size:16px; margin-bottom:14px;">${priceDisplay}</div>
            </div>
            <a href="product.html?name=${encodeURIComponent(product.name)}" style="display:inline-block; width:100%; padding:10px; background:linear-gradient(135deg, #d9bb72, #b8924a); color:#000; border-radius:999px; text-decoration:none; font-weight:800; margin-top:auto;">عرض التفاصيل</a>
        `;

        container.appendChild(card);
    });
}

function setupFilters(container) {
    const btns = document.querySelectorAll(".filter-btn, .filter-buttons button");
    btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const txt = e.currentTarget.textContent.trim();
            btns.forEach(b => b.classList.remove("active"));
            e.currentTarget.classList.add("active");
            
            if (txt.includes("جميع")) {
                renderProducts(allProducts, container);
            } else if (txt.includes("مجففة")) {
                renderProducts(allProducts.filter(p => p.category === "dried" || p.category === "فواكه مجففة"), container);
            } else if (txt.includes("بودر")) {
                renderProducts(allProducts.filter(p => p.category === "powder" || p.category === "بودر طبيعي"), container);
            }
        });
    });
}
