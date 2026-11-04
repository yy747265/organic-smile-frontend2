const PUBLIC_API_URL = "https://organic-smile-public-api.vercel.app/api/products";

document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
});

async function fetchProducts() {
    const container = document.getElementById("productsContainer") || document.getElementById("productsList");
    if (!container) return;

    try {
        const response = await fetch(PUBLIC_API_URL);
        const products = await response.json();

        if (!Array.isArray(products) || products.length === 0) {
            container.innerHTML = "<p style='text-align:center; color:#9b9686; width:100%;'>لا توجد منتجات متاحة حالياً.</p>";
            return;
        }

        container.innerHTML = "";
        products.forEach(product => {
            container.appendChild(createProductCard(product));
        });
    } catch (error) {
        console.error("Error loading public products:", error);
        container.innerHTML = "<p style='text-align:center; color:#ff6b6f; width:100%;'>تعذر تحميل المنتجات.</p>";
    }
}

function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";

    // معالجة الصور
    let imgSrc = "images/default.jpg";
    if (product.images && product.images.length > 0 && product.images[0]) {
        imgSrc = product.images[0];
    }

    // معالجة الأسعار والأحجام
    let priceDisplay = "";
    if (Array.isArray(product.sizes) && product.sizes.length > 0) {
        const firstSize = product.sizes[0];
        if (typeof firstSize === 'object' && firstSize !== null) {
            priceDisplay = `${firstSize.price} ج.م`;
        } else {
            priceDisplay = firstSize;
        }
    } else if (product.price) {
        priceDisplay = `${product.price} ج.م`;
    }

    card.innerHTML = `
        <div class="product-img-wrap">
            <img src="${imgSrc}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200?text=ORGANIC+Smile'">
        </div>
        <div class="product-info">
            <span class="product-cat">${product.category === 'dried' ? 'فواكه مجففة' : 'بودر طبيعي'}</span>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">${priceDisplay}</div>
            <a href="product.html?name=${encodeURIComponent(product.name)}" class="btn-details">عرض التفاصيل</a>
        </div>
    `;

    return card;
}
