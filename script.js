const PUBLIC_API_URL = "https://organic-smile-public-api.vercel.app/api/products";
let allProducts = [];

document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
});

async function fetchProducts() {
    // محاولة إيجاد عنصر العرض بجميع الاحتمالات الممكنة في HTML
    const container = document.getElementById("productsContainer") || 
                      document.getElementById("productsList") || 
                      document.querySelector(".products-grid") ||
                      document.querySelector("#featured-products .container") ||
                      document.querySelector(".featured-products .container");

    if (!container) {
        console.error("لم يتم العثور على عنصر عرض المنتجات في صفحة HTML!");
        return;
    }

    try {
        const response = await fetch(PUBLIC_API_URL);
        allProducts = await response.json();

        if (!Array.isArray(allProducts) || allProducts.length === 0) {
            container.innerHTML = "<p style='text-align:center; color:#9b9686; width:100%; padding:40px; font-size:18px;'>لا توجد منتجات متاحة حالياً.</p>";
            return;
        }

        renderProducts(allProducts, container);
        setupFilters(container);

    } catch (error) {
        console.error("Error loading products:", error);
        container.innerHTML = "<p style='text-align:center; color:#ff6b6f; width:100%; padding:30px;'>تعذر تحميل المنتجات أونلاين. تأكد من اتصال الإنترنت.</p>";
    }
}

function renderProducts(productsToRender, container) {
    // التأكد من تفريغ الحاوية أو إنشاء شبكة إذا لم تكن موجودة
    let grid = container.querySelector(".products-grid");
    if (!grid) {
        grid = document.createElement("div");
        grid.className = "products-grid";
        grid.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; margin-top: 30px; width: 100%;";
        container.appendChild(grid);
    }
    
    grid.innerHTML = "";

    if (productsToRender.length === 0) {
        grid.innerHTML = "<p style='text-align:center; color:#9b9686; grid-column: 1/-1; padding:30px;'>لا توجد منتجات في هذا القسم.</p>";
        return;
    }

    productsToRender.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.style.cssText = "background: #151513; border: 1px solid rgba(201,169,97,0.22); border-radius: 16px; padding: 16px; text-align: center; color: #fff;";

        // معالجة الصور (Base64 أو روابط)
        let imgSrc = "https://via.placeholder.com/300x200?text=ORGANIC+Smile";
        if (product.images && product.images.length > 0 && product.images[0]) {
            imgSrc = product.images[0];
        }

        // معالجة السعر والأحجام
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
            <div style="width:100%; height:200px; overflow:hidden; border-radius:12px; margin-bottom:12px;">
                <img src="${imgSrc}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='https://via.placeholder.com/300x200?text=ORGANIC+Smile'">
            </div>
            <span style="color:#C9A961; font-size:12px; font-weight:bold;">${catTitle}</span>
            <h3 style="margin:8px 0; font-size:18px; color:#f4f1ea;">${product.name}</h3>
            <div style="color:#E5C78B; font-weight:bold; font-size:16px; margin-bottom:14px;">${priceDisplay}</div>
            <a href="product.html?name=${encodeURIComponent(product.name)}" style="display:inline-block; width:100%; padding:10px; background:linear-gradient(135deg, #d9bb72, #b8924a); color:#000; border-radius:999px; text-decoration:none; font-weight:800;">عرض التفاصيل</a>
        `;

        grid.appendChild(card);
    });
}

function setupFilters(container) {
    const btns = document.querySelectorAll(".filter-btn, .filter-buttons button, button");
    btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const txt = e.currentTarget.textContent.trim();
            if (txt.includes("جميع") || txt.includes("مجففة") || txt.includes("بودر")) {
                btns.forEach(b => b.classList.remove("active"));
                e.currentTarget.classList.add("active");
                
                if (txt.includes("جميع")) {
                    renderProducts(allProducts, container);
                } else if (txt.includes("مجففة")) {
                    renderProducts(allProducts.filter(p => p.category === "dried" || p.category === "فواكه مجففة"), container);
                } else if (txt.includes("بودر")) {
                    renderProducts(allProducts.filter(p => p.category === "powder" || p.category === "بودر طبيعي"), container);
                }
            }
        });
    });
}
